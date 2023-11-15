import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./postTypes";

export const  fetchPostRequest=(id) =>{
  return { type: FETCH_POSTS_REQUEST,payload: id,  };
}
export const fetchPostSuccess = (post) =>{
  return { type: FETCH_POSTS_SUCCESS, payload: post };
}
export const fetchPostFailure = (error)=> {
  return { type: FETCH_POSTS_FAILURE, payload: error };
}

// export function fetchUsers() {
//   return (dispatch) => {
//     // dispatch({ type: FETCH_USERS_REQUEST });
//     dispatch(fetchUsersRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         // console.log(res.data);
//         // dispatch({ type: FETCH_USERS_SUCCESS, paylod: res.data });
//         dispatch(fetchUsersSuccess(res.data));
//       })
//       .catch((err) => {
//         // console.log(err.message);
//         // dispatch({ type: FETCH_USERS_FAILURE, paylod: err.message });
//         dispatch(fetchUsersFailure(err.message));
//       });
//   };
// }

// think => past tense => thought => delay  (middleware) 