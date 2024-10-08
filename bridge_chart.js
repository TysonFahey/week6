// bridge list array
let bridgeList = [
  {
    name: "Verrazano-Narrows Bridge",
    City: "New York, NY",
    span: "1298.4",
    location: [40.6066, -74.0447],
  },
  {
    name: "Golden Gate Bridge",
    City: "San Francisco and Marin, CA",
    span: "1280.2",
    location: [37.8199, -122.4793],
  },
  {
    name: "Mackinac Bridge",
    City: "Mackinaw and St Ignace, MI",
    span: "1158",
    location: [45.8174, -84.7278],
  },
  {
    name: "George Washington",
    City: "New York, NY and New Jersey",
    span: "1067.0",
    location: [40.8517, -73.9527],
  },
  {
    name: "Tacoma Narrows Bridge",
    City: "Tacoma and Kitsap, WA",
    span: "853.44",
    location: [47.269, -122.5517],
  },
];

let canvas = document.querySelector("#bridge_chart");
// find bridge_chart canvas from html

let context = canvas.getContext("2d"); // 2 dimensional

// create new chart
let chart = new Chart(context, {
  type: "bar", // type of graph
  data: {
    labels: [
      bridgeList[0].name,
      bridgeList[1].name,
      bridgeList[2].name,
      bridgeList[3].name,
      bridgeList[4].name,
    ],
    datasets: [
      {
        label: "Length in Meters", // label the bars
        data: [
          bridgeList[0].span,
          bridgeList[1].span,
          bridgeList[2].span,
          bridgeList[3].span,
          bridgeList[4].span,
        ], // enter the data
        backgroundColor: ["red", "orange", "blue", "green", "yellow"],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
