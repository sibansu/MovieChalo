import { useState } from "react";
import Header from "./navbar";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://movie-ticket-booking-app-0vii.onrender.com/user/register",
        { username, password }
      );
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="text-center mt-5 p-5 m-5 border rounded">
        <form onSubmit={Register} className="text-center">
          <h1>Join us</h1>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input onChange={changeUsername} className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                onChange={changePassword}
                type="password"
                className="form-control"
              />
            </div>
          </div>
          <p className="">
            Already have an accound? <a href="/login">Login</a>
          </p>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "5rem" }}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
