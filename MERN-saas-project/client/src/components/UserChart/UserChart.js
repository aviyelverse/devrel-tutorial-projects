import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
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


const UserChart = () => {
  const [chartData, setChartData] = useState({});

  async function getData() {
    let username = [];
    let calories = [];
    await axios
      .get("http://localhost:5000/calorie/")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          username.push(dataObj.username);
          calories.push(parseInt(dataObj.calories));
          console.log(username, calories);
        }
        setChartData({
          labels: username,
          datasets: [
            {
              label: "Calories",
              data: calories,
              backgroundColor: [
              "#f42f42",
              "#5ab950",
              "#fe812a",
              "#ffc748",
              "#6b71c7",
              "#8661d1",
              "#8a2cba"
              ],
              borderColor: [
                "#f42f42",
                "#5ab950",
                "#fe812a",
                "#ffc748",
                "#6b71c7",
                "#8661d1",
                "#8a2cba"
              ],
              borderWidth: 2,
            },
            
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(username, calories);
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div>
        <h5
          style={{
            fontSize: "20",
            textAlign: "center",
            marginTop: "1em",
            marginBottom: "1em",
          }}
        >
          Calorie per user
        </h5>
        <Delayed>
          <Pie
          data={chartData}
          options={{
            title: {
              text: "Calorie per User",
              fontSize: 10,
              fontColor: "#212529",
            },
          maintainAspectRatio: true,
          }}
        />
        </Delayed>
       
        
      </div>
    </div>
  );
};

export default UserChart;
