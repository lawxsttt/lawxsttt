export const SurveyData = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [, "rose", "tulip", "lily", "peonies", "iris", "lilac", "daffodil", "chamomile"],
    },
  },
  series: [
    {
      name: "vid-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "vid-2",
      data: [90, 40, 55, 20, 69, 34, 88, 31],
    },
    {
      name: "vid-3",
      data: [40, 60, 25, 70, 89, 44, 77, 99],
    },
  ],
  colors: ["#F3B415", "#F27036", "#663F59"],
};

export const IncomeData = {
  series: [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
    },
    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), "dd MMM");
        },
      },
    },
    title: {
      text: "This Week",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["red"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: {
      min: -10,
      max: 40,
    },
  },
};
