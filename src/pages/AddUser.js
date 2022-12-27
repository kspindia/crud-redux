import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/actions";

function AddUser() {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const { name, email, contact, address } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("please fill all input fields!");
    } else {
      dispatch(addUser(state));
      console.log(state);
      navigate("/");
      setError("");
    }
  };
  const navigate = useNavigate();

  return (
    <div style={{ width: 600, margin: "auto" }}>
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        type="submit"
        color="secondary"
        style={{ textAlign: "center", marginTop: 40, width: 600 }}
      >
        Go Back
      </Button>
      <h2 style={{ textAlign: "center", marginTop: 50 }}> ADD USER</h2>
      {error && <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="text"
          label="name"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={name}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          type="email"
          label="email"
          id="email"
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          type="text"
          label="address"
          id="address"
          name="address"
          onChange={handleInputChange}
          value={address}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          type="number"
          label="contact"
          id="contact"
          name="contact"
          onChange={handleInputChange}
          value={contact}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={{ textAlign: "center", marginTop: 40, width: 600 }}
        >
          Add User
        </Button>
      </form>
    </div>
  );
}

export default AddUser;
