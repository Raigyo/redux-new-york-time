import { Request, Constant } from "../../../services/index";
const { TOP_STORIES, MOST_POPULAR } = Constant;
// definde actions
export const actions = {
  FETCH_PENDING: "FETCH_PENDING",
  FETCH_TOP_STORIES: "FETCH_TOP_STORIES",
  FETCH_MOST_POPULAR: "FETCH_MOST_POPULAR",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

// create actions
export function fetchPending() {
  return {
    type: actions.FETCH_PENDING,
  };
}

export function fetchSuccess() {
  return {
    type: actions.FETCH_SUCCESS,
  };
}

export function fetchError(err) {
  return {
    type: actions.FETCH_ERROR,
    payload: { error: err },
  };
}

export function fetchTopStories(results) {
  return {
    type: actions.FETCH_TOP_STORIES,
    payload: { top_stories: results },
  };
}

export function fetchMostPopular(results) {
  return {
    type: actions.FETCH_MOST_POPULAR,
    payload: { most_popular: results },
  };
}

export function getTopStories() {
  return (dispatch) => {
    dispatch(fetchPending());
    const request = new Request(TOP_STORIES);
    request
      .get()
      .then((results) => {
        dispatch(fetchSuccess());
        dispatch(fetchTopStories(results));
      })
      .catch((error) => dispatch(fetchError(error)));
  };
}
