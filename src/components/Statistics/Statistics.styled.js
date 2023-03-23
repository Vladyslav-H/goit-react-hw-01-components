import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  background-color: #fff;
  box-shadow: 1px 6px 32px 1px rgba(0, 0, 0, 0.75);
`;

export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  flex-basis: calc(100% / 5);
  padding: 15px;
  text-align: center;
`;

export const StatisticsLabel = styled.span`
  display: block;
  margin-bottom: 10px;
`;
export const StatisticsPercentage = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 50px;
  font-size: 40px;
}
`;
