import PropTypes from 'prop-types';

import GetRandomHexColor from '../utilits/GetRandomHexColor';

import {
  StatisticsSection,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
  StatisticsTitle,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle> {title} </StatisticsTitle>}
      <StatisticsList>

        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}
          style={{backgroundColor:`${GetRandomHexColor()}`}}>

            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>

          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default Statistics;
