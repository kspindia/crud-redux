import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";

function EditUser() {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const dispatch = useDispatch();
  let {id} = useParams()
  const [error, setError] = useState("");
  const { name, email, contact, address } = state;

  useEffect(()=>{
    dispatch(getSingleUser(id))
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("please fill all input fields!");
    } else {
      dispatch(updateUser(state,id));
      console.log(state);
      navigate("/");
      setError("");
    }
  };
  const navigate = useNavigate();
  const {user} = useSelector(state=> state.data);
  
  useEffect(()=>{
    if(user){
      setState({...user})
    }
  },[user])
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
      <h2 style={{ textAlign: "center", marginTop: 50 }}> EDIT USER</h2>
      {error && <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="text"
          label="name"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={name || ""}
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
          value={email || ""}
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
          value={address || ""}
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
          value={contact || ""}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={{ textAlign: "center", marginTop: 40, width: 600 }}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditUser;
