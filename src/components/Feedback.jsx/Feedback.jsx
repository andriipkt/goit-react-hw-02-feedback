import { Component } from 'react';
// import FeedbackItem from './FeedbackItem/FeedbackItem';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnFeedbackClick = name => {
    this.setState(currState => {
      return { [name]: currState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const values = Object.values(this.state);

    return values.reduce((total, value) => total + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedbacks = this.countTotalFeedback();
    const { good } = this.state;

    return Math.round((good / totalFeedbacks) * 100);
  }

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          handleOnFeedbackClick={this.handleOnFeedbackClick}
        />

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}
