import React,{useState,useEffect,useRef} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const EditFood = (props) => {

  const [username,setUsername] = useState("");
  const [description,setDescription] = useState("");
  const [calories,setCalories] = useState("");
  const [date,setDate] = useState(new Date());
  const [users,setUsers] = useState([]);
  const userInputRef = useRef("userInput");

  useEffect(() => {

    axios
    .get("http://localhost:5000/calorie/" + props.match.params.id)
    .then((response) => {
      setUsername(response.data.username);
      setDescription(response.data.description);
      setCalories(response.data.calories);
      setDate(new Date(response.data.date));
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get("http://localhost:5000/users/")
    .then((response) => {
      if (response.data.length > 0) {
        setUsers(response.data.map(user => user.username));
        setUsername(response.data[0].username);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  },[props.match.params.id]);

function handleUsername(e) {
  setUsername(e.target.value);
}

function handleDescription(e) {
  setDescription(e.target.value);
}

function handleCalories(e) {
  setCalories(e.target.value);
}

function handleDate(date) {
 setDate(date);
}

function handleSubmit(e) {
  e.preventDefault();

  const food = {
    username,
    description,
    calories,
    date
  };

  console.log(food);

  axios
    .post("http://localhost:5000/calorie/update", food)
    .then((res) => console.log(res.data));

  window.location = "/";
}
  return (
   <>
    <div className="container">
        <div className="card border-0 shadow my-4">
          <div className="card-body p-3"></div>
          <div>
            <h3 style={{ textAlign: "center"}}><img src="https://user-images.githubusercontent.com/37651620/142764215-78f5b75f-4871-451e-9a4d-dd77cc667fc5.png" alt="Food" style={{height: "150px" }} /> </h3>
            <form onSubmit={handleSubmit}>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px"
                }}
              >
                <label>👤 User name: </label>
                <select
                  ref={userInputRef}
                  required
                  className="form-control"
                  value={username}
                  onChange={handleUsername}
                >
                  {users.map(function (user) {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "25px",
                  marginRight: "20px"
                }}
              >
                <label>🥡 Food Info: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={description}
                  onChange={handleDescription}
                />
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px"
                }}
              >
                <label>🔥 Calories: </label>
                <input
                  type="text"
                  className="form-control"
                  value={calories}
                  onChange={handleCalories}
                />
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px"
                }}
              >
              <div style={{ textAlign: "center", cursor:"pointer" }}>
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={date}
                    onChange={handleDate}
                  />
                </div>
                </div>
              </div>

              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  type="submit"
                  value="Add Meal"
                  className="btn"
                  style={{
                    color: "white",
                    backgroundColor: "#8661d1",
                    marginBottom: "25px",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
   </>
  )
}

export default EditFood

