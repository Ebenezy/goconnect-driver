import { ApiService } from "../api.services";

const driverService = {
  //Signup
  SignUp: ({
    firstName,
    lastName,
    otherName,
    email,
    country,
    phone,
    state
  }) => {
    return new Promise(function(resolve, reject) {
      ApiService.post("/driver", {
        firstName,
        lastName,
        otherName,
        email,
        country,
        phone,
        state
      })
        .then(({ data }) => {
          return resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },
  //routes
  SaveRoutes: ({ routes, id }) => {
    return new Promise(function(resolve, reject) {
      ApiService.post("/driver/routes", {
        routes,
        id
      })
        .then(({ data }) => {
          return resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //search for routes
  searchRoutes: ({ destination }) => {
    return new Promise(function(resolve, reject) {
      ApiService.post("/driver/find-driver", {
        destinations: destination
      })
        .then(({ data }) => {
          return resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Upload Drivers License
  UploadDriverLicense: ({ idNumber, expirationDate, image, id }) => {
    const formData = new FormData();
    formData.set("id", id);
    formData.set("idNumber", idNumber);
    formData.set("expirationDate", expirationDate);
    formData.append("image", image);

    return new Promise(function(resolve, reject) {
      ApiService.post("/driver/driver-licence", formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Upload Profile Photo
  UploadProfile: ({ image, id }) => {
    const formData = new FormData();
    formData.set("id", id);
    formData.append("image", image);

    return new Promise(function(resolve, reject) {
      ApiService.post("/driver/profile-photo", formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //load states
  LoadStates: () => {
    return new Promise((resolve, reject) => {
      ApiService.get("/state")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data.error);
        });
    });
  }
};

export { driverService };
