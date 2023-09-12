import css from '../Feedback.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h2>Statistics</h2>

      <ul>
        <li className={css.statisticsDisplay}>
          Good: <span>{good}</span>
        </li>

        <li className={css.statisticsDisplay}>
          Neutral: <span>{neutral}</span>
        </li>

        <li className={css.statisticsDisplay}>
          Bad: <span>{bad}</span>
        </li>

        <li className={css.statisticsDisplay}>
          Total: <span>{total}</span>
        </li>

        <li className={css.statisticsDisplay}>
          Positive feedback: <span>{`${positivePercentage}%`}</span>
        </li>
      </ul>
    </>
  );
}

export default Statistics;
