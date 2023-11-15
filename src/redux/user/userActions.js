import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

function fetchUsersRequest() {
  return { type: FETCH_USERS_REQUEST };
}
function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCESS, payload: users };
}
function fetchUsersFailure(error) {
  return { type: FETCH_USERS_FAILURE, payload: error };
}

export function fetchUsers() {
  return (dispatch) => {
    // dispatch({ type: FETCH_USERS_REQUEST });
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res.data);
        // dispatch({ type: FETCH_USERS_SUCCESS, paylod: res.data });
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) => {
        // console.log(err.message);
        // dispatch({ type: FETCH_USERS_FAILURE, paylod: err.message });
        dispatch(fetchUsersFailure(err.message));
      });
  };
}

// think => past tense => thought => delay  (middleware) 