import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Delayed = ({ children, waitBeforeShow = 4500 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

const CalorieChart = () => {
  const [chartData, setChartData] = useState({});

  async function getData() {
    let foodCal = [];
    let caloriesCal = [];
    await axios
      .get("http://localhost:5000/calorie/")
      .then((res) => {
        console.log(res);
        for (let dataObj of res.data) {
          foodCal.push(dataObj.description);
          caloriesCal.push(parseInt(dataObj.caloriesCal));
          console.log("foodCal, caloriesCal",foodCal, caloriesCal);
        }
        setChartData({
          labels: foodCal,
          datasets: [
            {
              label: "Cal",
              data: caloriesCal,
              backgroundColor: [
                "#f42f42",
                "#5ab950",
                "#fe812a",
                "#ffc748",
                "#6b71c7",
                "#8661d1",
                "#8a2cba"
              ],
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
    
      <h4>Food</h4>

      <h5
        style={{
          fontSize: "20",
          textAlign: "center",

          marginBottom: "1em",
        }}
      >
        Calorie Intake per each Food
      </h5>
      <div>
      <Delayed>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: {
              text: "Calorie Per Food ",
              fontSize: 20,
              fontColor: "#212529",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    // display: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: true,
                  },
                },
              ],
            },
          }}
        />
        </Delayed>
      </div>
    </div>
  );
};

export default CalorieChart;
