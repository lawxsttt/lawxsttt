import styled from "styled-components";
import Chart from "react-apexcharts";
import { IncomeData } from "./constants";

const Container = styled("div")`
  margin: 2rem;
`;
const ChartContainer = styled(Chart)`
  margin-top: 1rem;
`;
const Headline = styled("h1")`
  color: #35352e;
`;
const IncomeChart = () => {
  return (
    <Container>
      <Headline>Our Rate</Headline>
      <ChartContainer
        options={IncomeData.options}
        series={IncomeData.series}
        type="line"
        height={450}
      />
    </Container>
  );
};

export default IncomeChart;
