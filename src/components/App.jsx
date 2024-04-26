import React, { useState } from 'react';
import Counter from './Counter/Counter';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <>
            <Counter good={good} neutral={neutral} bad={bad} total={total} />
            <p>
              Positive feedback percentage: {countPositiveFeedbackPercentage()}%
            </p>
          </>
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    </div>
  );
};

export default App;
