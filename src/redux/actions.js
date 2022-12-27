import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDelete = () => ({
    type: types.DELETE_USER,
    
  });

  const userAdded = () => ({
    type: types.ADD_USER,
    
  });
  const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
  });

  const userUpdated = () => ({
    type: types.UPDATE_USER,
    
  });


export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get('http://localhost:5000/user')
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
    return function (dispatch) {
      axios
        .delete(`http://localhost:5000/user/${id}`)
        .then((res) => {
          console.log("res", res);
          dispatch(userDelete());
          dispatch(loadUsers());
        })
        .catch((err) => console.log(err));
    };
  };

  export const addUser = (user) => {
    return function (dispatch) {
      axios
        .post(`http://localhost:5000/user`,user)
        .then((res) => {
          console.log("res", res);
          dispatch(userAdded());
          dispatch(loadUsers());
        })
        .catch((err) => console.log(err));
    };
  };

  export const getSingleUser = (id) => {
    return function (dispatch) {
      axios
        .get(`http://localhost:5000/user/${id}`)
        .then((res) => {
          console.log("res", res);
          dispatch(getUser(res.data));
          
        })
        .catch((err) => console.log(err));
    };
  };

  export const updateUser = (user, id) => {
    return function (dispatch) {
      axios
        .put(`http://localhost:5000/user/${id}`,user)
        .then((res) => {
          console.log("res", res);
          dispatch(userUpdated());
          
        })
        .catch((err) => console.log(err));
    };
  };