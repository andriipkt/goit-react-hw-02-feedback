import { Component } from 'react';
import css from './Feedback.module.css';
// import FeedbackItem from './FeedbackItem/FeedbackItem';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnFeedbackClick = event => {
    this.setState(currState => {
      const name = event.target.name;

      return { [name]: currState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbacks = this.state.good;

    if (totalFeedbacks === 0) {
      return 0;
    }

    const percentage = (positiveFeedbacks / totalFeedbacks) * 100;
    return Math.round(percentage);
  }

  render() {
    return (
      <div className="container">
        <h2 className={css.feedbackTitle}>Please leave feedback</h2>

        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleOnFeedbackClick}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
