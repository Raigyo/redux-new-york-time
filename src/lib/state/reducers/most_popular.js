import { actions } from "../actions/index";
const { FETCH_MOST_POPULAR } = actions;

const initialState = {
  most_popular: [],
};

export function mostPopular(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOST_POPULAR:
      return {
        most_popular: action.payload.most_popular,
      };
    default:
      return state;
  }
}
