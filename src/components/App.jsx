import React, { Component } from 'react';
import Counter from './Counter/Counter';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <>
              <Counter
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
              />
              <p>
                Positive feedback percentage:{' '}
                {this.countPositiveFeedbackPercentage()}%
              </p>
            </>
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
