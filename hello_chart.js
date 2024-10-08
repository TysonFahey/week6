let canvas = document.querySelector("#soda-chart"); // find soda-chart in html using id selector #

let context = canvas.getContext("2d");

// arguments full of arguments make sure to mind the brackets
let chart = new Chart(context, {
  type: "bar",
  data: {
    // array of soda types one for each bar
    labels: ["Coke", "Pepsi", "Sprite","Either", "Neither"],
    datasets: [
      {
        label: "Number of votes", // label the bar
        data: [18, 14, 5, 7, 10], // set data for each bar
        backgroundColor: ["red", "orange","blue", "green", "yellow"], // set colors for each bar
      },
    ],
  },
  // display start with 0 after data attribute
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
