import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
  USER_DATA: {},
  SEARCH_RESULTS: [],
  UPLOAD: {},
  ROUTES: {}
};

export default { state, getters, mutations, actions };
