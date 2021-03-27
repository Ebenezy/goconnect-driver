import { ApiService } from "../api.services";

const driverService = {
  //Signup
  SignUp: ({ firstName, lastName, otherName, email, country, phoneNumber }) => {
    return new Promise(function(resolve, reject) {
      ApiService.post("/rider/sign-up", {
        firstName,
        lastName,
        otherName,
        email,
        country,
        phoneNumber
      })
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Signup
  SignIn: ({ phoneNumber }) => {
    return new Promise(function (resolve, reject) {
      ApiService.post("/rider/kyc-sigin", {

        phoneNumber
      })
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Signup Complete
  SignInComplete: ({ phoneNumber, verificationCode }) => {
    return new Promise(function (resolve, reject) {
      ApiService.post("/rider/kyc-sigin-verification", {
        verificationCode,
        phoneNumber
      })
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Verify Email
  VerifyEmail: ({ email, verificationCode }) => {
    return new Promise(function(resolve, reject) {
      ApiService.post("/rider/email-verification", {
        email,
        verificationCode
      })
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Verify Phone
  VerifyPhone: ({ phoneNumber, verificationCode }) => {
    return new Promise(function(resolve, reject) {
      ApiService.post("/rider/phone-verification", {
        phoneNumber,
        verificationCode
      })
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Get Bank List
  GetBankList: () => {
    return new Promise(function(resolve, reject) {
      ApiService.get("/bank")
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Verify Bank
  VerifyBank: ({ accountNumber, bankCode }) => {
    return new Promise(function(resolve, reject) {
      ApiService.post("/rider/bank-verification", {
        accountNumber,
        bankCode
      })
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Upload Bank Details
  UploadBankDetails: ({ accountNumber, bankCode, id, accountName }) => {
    return new Promise(function(resolve, reject) {
      ApiService.post("/rider/bank-details", {
        id,
        accountNumber,
        accountName,
        bankCode
      })
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
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
      ApiService.post("/rider/driver-license", formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Upload Proof of Address
  UploadProofOfAddress: ({ documentType, issuedDate, image, id }) => {
    const formData = new FormData();
    formData.set("id", id);
    formData.set("documentType", documentType);
    formData.set("issuedDate", issuedDate);
    formData.append("image", image);

    return new Promise(function(resolve, reject) {
      ApiService.post("/rider/proof-of-address", formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Upload Lasdri Card
  UploadLasdri: ({ idNumber, issuedDate, image, id }) => {
    const formData = new FormData();
    formData.set("id", id);
    formData.set("idNumber", idNumber);
    formData.set("issuedDate", issuedDate);
    formData.append("image", image);

    return new Promise(function(resolve, reject) {
      ApiService.post("/rider/lasdri-card", formData)
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
      ApiService.post("/rider/profile-photo", formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Resend Verification
  ResendVerification: ({ accountId, verificationType }) => {
    return new Promise(function (resolve, reject) {
      ApiService.post("/rider/resend-verification-code", {
        accountId,
        verificationType
      })
        .then(({ data }) => {
          if (data.status == 201 || data.status == 200) return resolve(data);
          reject(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },
};

export { driverService };
