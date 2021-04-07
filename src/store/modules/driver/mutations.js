const mutations = {
  SET_USER_DATA(state, payload) {
    state.USER_DATA = payload;
  },
  SET_SEARCH_RESULT(state, payload) {
    state.SEARCH_RESULTS = payload;
  },
  SET_ROUTES(state, payload) {
    state.ROUTES = payload;
  },
  SET_UPLOAD(state, payload) {
    state.UPLOAD = payload;
  }
};

export { mutations };
