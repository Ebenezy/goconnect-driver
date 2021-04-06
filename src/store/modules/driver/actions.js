import { driverService } from "../../../services/DriverServices/driver.services";

const actions = {
  BASIC_DATA: async ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      driverService
        .SignUp(data)
        .then(result => {
          commit("SET_USER_DATA", result.data);
          resolve();
        })
        .catch(error => reject(error));
    });
  },
  PROFILE_UPLOAD: async ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      driverService
        .UploadProfile(data)
        .then(result => {
          commit("SET_USER_DATA", result.data);
          resolve();
        })
        .catch(error => reject(error));
    });
  },
  DRIVER_LICENCE: async ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      driverService
        .UploadDriverLicense(data)
        .then(res => {
          commit("SET_UPLOAD", res.data);
          resolve();
        })
        .catch(error => reject(error));
    });
  },
  SAVE_ROUTES: async ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      driverService
        .SaveRoutes(data)
        .then(res => {
          commit("SET_ROUTES", res.data);
          resolve();
        })
        .catch(error => reject(error));
    });
  },
  LOGOUT({ commit }) {
    commit("SET_AUTH_TOKEN", "");
    commit("SET_IS_AUTHENTICATED", "");
    commit("SET_ROLE", "");
    commit("SET_USER_DATA", {});
    commit("SET_USER_DETAILS", {});
  }
};

export { actions };
