import React from "react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Plant from "../components/Plant";
import Free from "../components/Free";
import BarChart from "../components/Charts/BarChart";
import IncomeChart from "../components/Charts/Income";

const Home = ({ data, onAdd }) => {
  return (
    <>
      <Banner />
      <Slider data={data} onAdd={onAdd} />
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
