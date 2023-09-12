import css from '../Feedback.module.css';

function FeedbackOptions({ options: { good, neutral, bad }, onLeaveFeedback }) {
  return (
    <div
      className={`btn-group ${css.feedbackButtons}`}
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button
        name="good"
        type="button"
        className="btn btn-success"
        onClick={onLeaveFeedback}
      >
        Good
      </button>

      <button
        name="neutral"
        type="button"
        className="btn btn-warning"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        name="bad"
        type="button"
        className="btn btn-danger"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
