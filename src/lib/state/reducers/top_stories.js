import { actions } from "../actions/index";
const { FETCH_TOP_STORIES } = actions;

const initialState = {
  top_stories: [],
};

export function topStories(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_STORIES:
      return {
        top_stories: action.payload.top_stories,
      };
    default:
      return state;
  }
}
