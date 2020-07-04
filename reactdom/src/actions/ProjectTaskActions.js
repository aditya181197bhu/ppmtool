import axios from 'axios'
import {GET_ERROR, GET_PROJECT_TASKS} from './type'

export const addProjectTask = (project_task, history) => async dispatch => {
  

   try {
    await axios.post("http://localhost:8080/api/board", project_task);
    history.push("/");
    dispatch({
        type:GET_ERROR,
        payload:{}
    })   ;
       
   } catch (error) {
    dispatch({
        type:GET_ERROR,
        payload: error.response.data
    });
   }
   
};

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch({
      type: GET_PROJECT_TASKS,
      payload: res.data
    });
  };