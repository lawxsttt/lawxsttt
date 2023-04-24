import React from "react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Plant from "../components/Plant";
import Free from "../components/Free";
import BarChart from "../components/Charts/BarChart";
import IncomeChart from "../components/Charts/Income";

const Home = (props) => {
  return (
    <>
      <Banner />
      <Slider data={props.data} />
      <Search />
      <Cards />
      <IncomeChart />
      <Plant />
      <Free />
      <BarChart />
    </>
  );
};

export default Home;
