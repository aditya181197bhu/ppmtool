import {GET_ERROR} from '../actions/type'


const initialState = {
    // error:"we got some error"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return action.payload;

    default:
      return state;
  }
}