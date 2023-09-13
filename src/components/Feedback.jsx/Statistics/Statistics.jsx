import StatisticItem from './StatisticsItem/StatisticsItem';

function Statistics(data) {
  const dataEntries = Object.entries(data);
  return (
    <>
      <h2>Statistics</h2>

      <ul>
        {dataEntries.map(([key, value]) => (
          <StatisticItem
            key={key}
            text={key}
            value={key === 'positivePercentage' ? `${value}%` : ` ${value}`}
          />
        ))}
      </ul>
    </>
  );
}

export default Statistics;
