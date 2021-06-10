import { actions, fetchTopStories } from "../actions/index";
const {
  FETCH_PENDING,
  FETCH_TOP_STORIES,
  FETCH_MOST_POPULAR,
  FETCH_SUCCESS,
  FETCH_ERROR,
} = actions;

const initialState = {
  isFetching: false,
  hasEroor: null,
  top_stories: [],
  most_popular: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: action.payload.error,
      };
    case FETCH_TOP_STORIES:
      return {
        ...state,
        top_stories: action.payload.top_stories,
      };
    case FETCH_MOST_POPULAR:
      return {
        ...state,
        most_popular: action.payload.most_popular,
      };
    default:
      return state;
  }
}
