<template>
  <div class="container-scroller">
    <div class="page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo text-center pb-4">
                <a href="https://goconnect.com.ng" target="_blank">
                  <img src="../../assets/images/goconnect-logo-white.svg" class="sureb69_logo" />
                </a>
              </div>
              <h4 class="text-center">Hello! Login to re-upload</h4>
              <h6 class="font-weight-light text-center">documents that were rejected</h6>
              <form class="pt-3" @submit.prevent="login">
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control form-control-lg"
                    placeholder="Phone Number"
                    v-model="phoneNumber"
                    required
                  />
                </div>
                <div class="form-group" v-if="isVerificationSent">
                  <input
                    type="tel"
                    class="form-control form-control-lg"
                    placeholder="Enter OTP"
                    v-model="verificationCode"
                    required
                  />
                </div>
                <div class="mt-3">
                  <button
                    type="submit"
                    v-if="!isVerificationSent && !loading"
                    class="submit-btn btn-block btn-lg font-weight-medium auth-form-btn btn-rounded"
                    href
                  >Login</button>

                  <button
                    v-if="!isVerificationSent && loading"
                    class="submit-btn btn-block btn-lg font-weight-medium auth-form-btn btn-rounded"
                    href
                  >Login in ....</button>

                  <button
                    v-if="isVerificationSent && !loading1"
                    class="submit-btn btn-block btn-lg font-weight-medium auth-form-btn btn-rounded"
                    href
                  >Verify</button>

                  <button
                    v-if="isVerificationSent && loading1"
                    class="submit-btn btn-block btn-lg font-weight-medium auth-form-btn btn-rounded"
                    href
                  >Verifying...</button>
                </div>
                <h6 class="font-weight-light text-center pt-4">
                  New here? Kindly
                  <router-link to="driver">
                    <b>Register</b>
                  </router-link>
                </h6>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>
<!-- container-scroller -->

<script>
import { driverService } from "../../services/DriverServices/driver.services";
export default {
  name: "login",
  data() {
    return {
      loading: false,
      loading1: false,
      phoneNumber: "",
      isVerificationSent: false,
      verificationCode: ""
    };
  },

  methods: {
    login() {
      if (!this.isVerificationSent) {
        return this.signin();
      }

      this.verify();
    },

    signin() {
      this.loading = true;
      driverService
        .SignIn({ phoneNumber: this.phoneNumber })
        .then(res => {
          this.$toastr.s(
            res.message,
            "A verification code has been sent to your Phone"
          );
          this.isVerificationSent = true;
        })
        .catch(err => {
          this.$toastr.e(err.error || err, "Login Failed");
        })
        .finally(() => {
          this.loading = false;
        });
    },

    verify() {
      this.loading1 = true;
      driverService
        .SignInComplete({
          phoneNumber: this.phoneNumber,
          verificationCode: this.verificationCode
        })
        .then((res) => {
          this.$store.commit("SET_IS_AUTHENTICATED", true);
          this.$store.commit("SET_USER_DATA", res.data)
          this.$router.push("/reupload");
        })
        .catch(err => {
          this.$toastr.e(err.error || err, "Login Failed");
        })
        .finally(() => {
          this.loading1 = false;
        });
    }
  }
};
</script>

<style scoped>
.container-scroller {
  height: 100vh;
}
.content-wrapper {
  background: #0F77B1;
  height: 100vh;
}

.auth .auth-form-light {
  border-radius: 20px;
  background: #101010;
}
a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  text-decoration: none;
  color: #0F77B1;
}
h4,
h6 {
  color: white;
}

.auth form .form-group .form-control {
  border-radius: 30px;
  color: #000;
}
.submit-btn {
  background: #0F77B1;
  border-radius: 30px;
}
</style>