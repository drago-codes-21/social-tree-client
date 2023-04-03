import { UPLOAD_REEL, GET_ALL_REELS, GET_USER_REELS } from "../actions";

const reelsReducer = (state, action) => {
  if (action.type === UPLOAD_REEL) {
    return {
      ...state,
      reels: action.payload,
    };
  }
  if (action.type === GET_ALL_REELS) {
    return {
      ...state,
      reels: action.payload,
    };
  }
  if (action.type === GET_USER_REELS) {
    return {
      ...state,
      user_reels: action.payload,
    };
  }
};

export default reelsReducer;
