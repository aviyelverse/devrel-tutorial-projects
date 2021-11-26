
import React,{useState} from "react";
import axios from "axios";


const AddUser = () => {
    const [username,setUsername] = useState("");

    
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
    setUsername("")
  }

    return (
        <>
        <div class="container">
        <div class="card border-0 shadow my-4">
          <div class="card-body p-3"></div>
          <div>
            <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
              <img src="https://user-images.githubusercontent.com/37651620/142767072-ff777861-7ee9-4355-b48e-a624e8de085b.png" alt="Logo" style={{height:"150px"}} />
            </h3>
            <form onSubmit={handleSubmit}>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px",
                }}
              >
                <label>👤 User name:</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={username}
                  onChange={handleUsername}
                />
              </div>
              <div
                className="form-group"
                style={{
                  textAlign: "center",
                }}
              >
                <input
                  type="submit"
                  value="Create User"
                  className="btn "
                  style={{
                    color:"white",
                    marginBottom: "25px",
                    backgroundColor: "#8661d1",
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

export default AddUser


