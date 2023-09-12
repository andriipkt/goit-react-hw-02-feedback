import css from '../../Feedback.module.css';

function StatisticItem({ text, value }) {
  return (
    <li className={css.statisticsItem}>
      {text}: <span>{value}</span>
    </li>
  );
}

export default StatisticItem;
