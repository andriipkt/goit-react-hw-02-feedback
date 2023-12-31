import css from '../Feedback.module.css';

function FeedbackOptions({ options, handleOnFeedbackClick }) {
  console.log(options);
  return (
    <div
      className={`btn-group ${css.feedbackButtons}`}
      role="group"
      aria-label="Basic mixed styles example"
    >
      {options.map(option => {
        const classes = ['btn-success', 'btn-warning', 'btn-danger'];

        return (
          <button
            key={option}
            name={option}
            type="button"
            className={`btn ${classes[options.indexOf(option)]}`}
            onClick={() => handleOnFeedbackClick(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;
