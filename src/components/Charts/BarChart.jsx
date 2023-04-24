import styled from "styled-components";
import Chart from "react-apexcharts";
import { SurveyData } from "./constants";

const Container = styled("div")`
  margin: 2rem;
`;
const ChartContainer = styled(Chart)`
  margin-top: 1rem;
`;
const Headline = styled("h1")`
  color: #35352e;
`;
const BarChart = () => {
  return (
    <Container>
      <Headline>Our Rate</Headline>
      <ChartContainer
        options={SurveyData.options}
        series={SurveyData.series}
        type="area"
        height={450}
      />
    </Container>
  );
};

export default BarChart;
