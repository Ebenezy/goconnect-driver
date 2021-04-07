<template>
  <div class="card">
    <div class="card-header2">
      <ul class="nav nav-pills nav-wizard nav-fill">
        <li
          @click.prevent.stop="selectTab(index)"
          class="nav-item"
          :class="tab.isActive ? 'active' : 'in-active'"
          v-for="(tab, index) in tabs"
          v-bind:key="`tab-${index}`"
        >
          <a class="nav-link" href="#">
            <span class="tabStatus">{{ index + 1 }}</span>
            <span class="tabLabel">{{ tab.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="col-lg-7 mx-auto">
        <!-- Personal Information-->
        <tab-content title="Rider Info">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(RiderInfo)" action>
              <div class="text-center personal-info">
                <h4>Personal Information</h4>
                <p>
                  Only your first name and vehicle details are visible to
                  clients during booking
                </p>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group2">
                    <label for="firstName">First Name *</label>
                  </div>
                </div>
                <div class="col-8">
                  <ValidationProvider
                    name="First Name"
                    rules="required|alpha"
                    v-slot="{ errors }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        id="firstName"
                        required
                        class="name-input"
                        placeholder="First Name"
                        v-model="formData.firstName"
                      />
                      <span class="error-message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group2">
                    <label for="lastName">Last Name *</label>
                  </div>
                </div>
                <div class="col-8">
                  <ValidationProvider
                    name="Last Name"
                    rules="required|alpha"
                    v-slot="{ errors }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        v-model="formData.lastName"
                        class="name-input"
                        placeholder="Last Name"
                        id="lastName"
                        required
                      />
                      <span class="error-message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group2">
                    <label for="otherName">Other Name</label>
                  </div>
                </div>
                <div class="col-8">
                  <div class="form-group">
                    <input
                      type="text"
                      id="otherName"
                      class="name-input"
                      placeholder="Other Name"
                      v-model="formData.otherName"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group2">
                    <label for="email">Email Address *</label>
                  </div>
                </div>
                <div class="col-8">
                  <ValidationProvider
                    name="E-mail"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="form-group">
                      <input
                        type="email"
                        id="email"
                        class="name-input"
                        placeholder="email@email.com"
                        required
                        v-model="formData.email"
                      />
                      <span class="error-message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group2">
                    <label for="country">Country *</label>
                  </div>
                </div>
                <div class="col-8">
                  <div class="form-group">
                    <input
                      v-model="formData.country"
                      type="text"
                      id="country"
                      class="name-input"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group2">
                    <label for="country">State of operation *</label>
                  </div>
                </div>
                <div class="col-8">
                  <div class="form-group">
                    <!-- <input
                      v-model="formData.stateofoperation"
                      type="text"
                      id="stateofoperation"
                      class="name-input"
                    /> -->
                    <select v-model="formData.stateofoperation" id="stateofoperation" name="" class="name-input">
                      <option value="Location">Location</option>
                      <option value="lagos">Lagos</option>
                      <option value="abia">Abia</option>
                      <option value="adamawa">Adamawa</option>
                      <option value="akwaIbom">Akwa Ibom</option>
                      <option value="anambra">Anambra</option>
                      <option value="bauchi">Bauchi</option>
                      <option value="bayelsa">Bayelsa</option>
                      <option value="benue">Benue</option>
                      <option value="borno">Borno</option>
                      <option value="croseRiver">Cross River</option>
                      <option value="dedlta">Delta</option>
                      <option value="ebonyi">Ebonyi</option>
                      <option value="edo">Edo</option>
                      <option value="ekiti">Ekiti</option>
                      <option value="enugu">Enugu</option>
                      <option value="gombe">Gombe</option>
                      <option value="imo">Imo</option>
                      <option value="jigawa">Jigawa</option>
                      <option value="kaduna">Kaduna</option>
                      <option value="kano">Kano</option>
                      <option value="katsina">Kastina</option>
                      <option value="kebbi">Kebbi</option>
                      <option value="kogi">Kogi</option>
                      <option value="kwara">Kwara</option>
                      <option value="nasarawa">Nasarawa</option>
                      <option value="niger">Niger</option>
                      <option value="ogun">Ogun</option>
                      <option value="ondo">Ondo</option>
                      <option value="osun">Osun</option>
                      <option value="oyo">Oyo</option>
                      <option value="plateau">Plateau</option>
                      <option value="rivers">Rivers</option>
                      <option value="sokoto">Sokoto</option>
                      <option value="taraba">Taraba</option>
                      <option value="yobe">Yobe</option>
                      <option value="zamfara">Zamfara</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group2">
                    <label for="phone">Phone Number *</label>
                  </div>
                </div>
                <div class="col-8">
                  <ValidationProvider
                    name="Phone"
                    rules="required|max:10|min:10"
                    v-slot="{ errors }"
                  >
                    <div class="phone-number-grid">
                      <div class="phone-text">+234</div>
                      <input
                        type="tel"
                        id="phone"
                        class="phone-input"
                        v-model="formData.phone"
                        placeholder="8000000000"
                      />
                    </div>
                    <span class="error-message">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <p class="verify-code">
                A verification code would be sent to you
              </p>
              <div class="row">
                <button type="submit" v-if="!loading" class="continue-btn">
                  Submit
                </button>
                <div role="submit" v-else class="continue-btn">
                  Submitting....
                </div>
              </div>
            </form>
          </ValidationObserver>
        </tab-content>
        <tab-content title="Routes">
          <div class="text-center personal-info">
            <h4>Routes and Location</h4>
            <p>Define your routes and locations that you cover</p>
          </div>
          <form action @submit.prevent="SaveRoutes">
            <div class="row">
              <div class="col-4">
                <div class="form-group2">
                  <label for="fullName">Route 1</label>
                </div>
              </div>
              <div class="col-8">
                <div class="form-group">
                  <vue-google-autocomplete
                    id="route1"
                    classname="form-control name-input"
                    placeholder="Please type your address"
                    v-on:placechanged="getAddressData"
                    types="establishment"
                    country="ng"
                  >
                  </vue-google-autocomplete>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group2">
                  <label for="fullName">Route 2</label>
                </div>
              </div>
              <div class="col-8">
                <div class="form-group">
                  <vue-google-autocomplete
                    id="route2"
                    classname="form-control name-input"
                    placeholder="Please type your address"
                    v-on:placechanged="getAddressData"
                    types="establishment"
                    country="ng"
                  >
                  </vue-google-autocomplete>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group2">
                  <label for="fullName">Route 3</label>
                </div>
              </div>
              <div class="col-8">
                <div class="form-group">
                  <vue-google-autocomplete
                    id="route3"
                    classname="form-control name-input"
                    placeholder="Please type your address"
                    v-on:placechanged="getAddressData"
                    types="establishment"
                    country="ng"
                  >
                  </vue-google-autocomplete>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group2">
                  <label for="fullName">Route 4</label>
                </div>
              </div>
              <div class="col-8">
                <div class="form-group">
                  <vue-google-autocomplete
                    id="route4"
                    classname="form-control name-input"
                    placeholder="Please type your address"
                    v-on:placechanged="getAddressData"
                    types="establishment"
                    country="ng"
                  >
                  </vue-google-autocomplete>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group2">
                  <label for="fullName">Route 5</label>
                </div>
              </div>
              <div class="col-8">
                <div class="form-group">
                  <vue-google-autocomplete
                    id="route5"
                    classname="form-control name-input"
                    placeholder="Please type your address"
                    v-on:placechanged="getAddressData"
                    types="establishment"
                    country="ng"
                  >
                  </vue-google-autocomplete>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group2">
                  <label for="fullName">Route 6</label>
                </div>
              </div>
              <div class="col-8">
                <div class="form-group">
                  <vue-google-autocomplete
                    id="route6"
                    classname="form-control name-input"
                    placeholder="Please type your address"
                    v-on:placechanged="getAddressData"
                    types="establishment"
                    country="ng"
                  >
                  </vue-google-autocomplete>
                </div>
              </div>
            </div>
            <div class="row" v-if="!loading1">
              <button
                type="submit"
                :disabled="routes.length === 0"
                class="continue-btn"
              >
                Submit
              </button>
            </div>
            <div class="row" v-else>
              <div role="button" class="continue-btn">Submitting</div>
            </div>
          </form>
        </tab-content>
        <tab-content title="KYC">
          <div class="text-center personal-info">
            <h4>Rider’s Profile Picture</h4>
            <p>
              Upload Profile picture or take one instantly - this is what
              customers will see
              <br />
              <span
                >*Required - - Full face, open your eyes, no full picture</span
              >
            </p>
          </div>
          <form action @submit.prevent="UploadProfile">
            <div class="uploads-section">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group text-left">
                    <label>Upload Document:</label>
                    <!-- <input type="file" class="number-input" /> -->
                    <vuebase64
                      @size-exceeded="onSizeExceeded"
                      @load="uploads.profile_photo_ = $event"
                      @file="uploads.profile_photo = $event"
                      name="driversLicense"
                    />
                    <p class="upload-format">
                      *JPG, PNG Maximum file size 200kb
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Upload Document:</label>
                    <div class="profile-img">
                      <img
                        src="../assets/images/camera.svg"
                        v-if="!uploads.profile_photo"
                        alt="Camera"
                      />
                      <img :src="uploads.profile_photo_" v-else alt="Camera" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  v-if="!loading3 && !isProfileUploaded"
                  :disabled="uploads.profile_photo_ === null"
                  type="submit"
                  class="save-btn"
                >
                  Upload
                </button>
                <div v-if="loading3" class="save-btn">Uploading....</div>
                <div v-if="isProfileUploaded" class="save-btn btn-success">
                  Uploaded
                </div>
              </div>
            </div>
          </form>
          <div class="border-bottom mt-5 mb-4"></div>

          <div class="text-center personal-info">
            <h4>Personal Information and Vehicle details</h4>
            <p>
              Only your first name and vehicle details are visible to clients
              during booking
              <br />
              <span>*Required</span>
            </p>
          </div>
          <form @submit.prevent="UploadDriverLicense">
            <div class="uploads-section">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group text-left">
                    <label>Drivers License ID Number:</label>
                    <input
                      type="text"
                      v-model="uploads.idNumberD"
                      required
                      class="number-input"
                    />
                  </div>
                  <div class="form-group text-left">
                    <label>Expiration Date:</label>
                    <div class="expire-date">
                      <b-form-datepicker
                        required
                        id="example-datepicker"
                        v-model="uploads.expDate"
                        class="mb-2"
                      ></b-form-datepicker>
                    </div>
                  </div>
                  <div class="form-group text-left">
                    <label>Upload Document:</label>
                    <!-- <input type="file" class="number-input" /> -->
                    <vuebase64
                      @size-exceeded="onSizeExceeded"
                      @load="uploads.driversLicense_ = $event"
                      @file="uploads.driversLicense = $event"
                      name="driversLicense"
                    />
                    <p class="upload-format">
                      *JPG, PNG Maximum file size 200kb
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="drivers_licence_img">
                    <img
                      v-if="!uploads.driversLicense"
                      src="../assets/images/driver-licence.jpg"
                      alt="Drivers Licence"
                    />
                    <img
                      v-else
                      :src="uploads.driversLicense_"
                      alt="Drivers Licence"
                    />
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  v-if="!loading && !isLicenseUploaded"
                  type="submit"
                  :disabled="uploads.driversLicense_ === null"
                  class="save-btn"
                >
                  Upload
                </button>
                <div v-if="loading" class="save-btn">Uploading....</div>
                <div v-if="isLicenseUploaded" class="save-btn btn-success">
                  Uploaded
                </div>
              </div>
            </div>
          </form>
          <div class="border-bottom mt-5 mb-3"></div>

          <div class="form-group form-check text-left mt-3">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="formData.terms"
            />
            <label class="form-check-label">I accept terms & conditions</label>
          </div>
          <p class="verify-code mt-3">
            We’ll reach out to you once verification is completed
          </p>
          <div class="text-center mb-3">
            <b-button v-b-modal.modal-center class="save-btn w-100"
              >Complete</b-button
            >
          </div>
          <b-modal id="modal-center" centered size="md" hide-footer hide-header>
            <div class="modal_content_texts">
              <h1>Registration successfully completed!</h1>
              <!-- <p>
                After a successful verification of your application Sure B69
                Logistics will email you!
              </p> -->
              <button @click="distory" class="save-btn w-100">OK</button>
            </div>
          </b-modal>
        </tab-content>
        <!-- </form> -->
      </div>
    </div>
    <div class="card-footer2 text-center mb-5"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import vuebase64 from "./vue-base64.vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  name: "form-wizard",
  components: {
    vuebase64,
    VueGoogleAutocomplete
  },
  data() {
    return {
      tabs: [],
      value: "",
      currentTab: 0,
      totalTabs: 0,
      isPhoneVerified: false,
      isEmailVerified: false,
      isLicenseUploaded: false,
      isProofOfAddressUploaded: false,
      isLasdriUploaded: "",
      isProfileUploaded: "",
      verificationCode: "",
      phoneVerificationCode: "",
      loading: false,
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: "",
      Banks: [],
      formData: {
        firstName: "",
        lastName: "",
        otherName: "",
        email: null,
        country: "Nigeria",
        stateofoperation: "Abia State",
        phone: null,
        accountNumber: "",
        accountName: "",
        bankCode: ""
      },
      uploads: {
        driversLicense: "",
        driversLicense_: null,
        proofOfAddress: "",
        // lasdriCard: "",
        profile_photo: "",
        profile_photo_: null,
        idNumberD: "",
        expDate: "",
        docType: "",
        dateOfIssue: "",
        idNumberL: "",
        dateOfIssueL: ""
      },
      routes: []
    };
  },
  computed: {
    ...mapState({
      user: state => state.Driver.USER_DATA
    }),
    bankCode() {
      return this.formData.bankCode;
    }
  },
  watch: {
    bankCode() {
      return this.VerifyBank();
    }
  },
  methods: {
    getAddressData: function(addressData, placeResultData) {
      window.console.log("address", addressData);
      window.console.log("placeResultData", placeResultData);
      let name = `${placeResultData.name} ${placeResultData.formatted_address}`;
      this.routes.push({
        latitude: addressData.latitude,
        longitude: addressData.longitude,
        address: name
      });
      this.address = addressData;
    },
    selectTab(index) {
      this._switchTab(index);
    },

    _switchTab(index) {
      //Disable all tabs
      this.tabs.forEach(tab => {
        tab.isActive = false;
      });

      this.currentTab = index;
      this.tabs[index].isActive = true;
    },
    ...mapActions({
      userInfo: "BASIC_DATA",
      uploadProfile: "PROFILE_UPLOAD",
      uploadDriverLicence: "DRIVER_LICENCE",
      saveRoutes: "SAVE_ROUTES"
    }),
    //Sign up Rider
    async RiderInfo() {
      this.loading = true;
      window.console.log(this.formData);
      let data = {
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        otherName: this.formData.otherName,
        email: this.formData.email,
        phone: this.formData.phone,
        country: this.formData.country
      };

      await this.userInfo(data)
        .then(res => {
          window.console.log(res);
          this.$toastr.s("Saved", "Successful");
          this._switchTab(1);
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async SaveRoutes() {
      this.loading1 = true;
      window.console.log(this.formData);
      let data = {
        routes: this.routes,
        id: this.user._id
      };

      await this.saveRoutes(data)
        .then(res => {
          window.console.log(res);
          this.$toastr.s("Routes saves", "Successful");
          this._switchTab(2);
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.loading1 = false;
        });
    },
    onSizeExceeded() {
      return this.$toastr.e("maximum size allowed is 200kb", "Error");
    },

    //Upload Drivers License
    UploadDriverLicense() {
      this.loading = true;
      let data = {
        idNumber: this.uploads.idNumberD,
        expirationDate: this.uploads.expDate,
        image: this.uploads.driversLicense,
        id: this.user._id
      };
      this.uploadDriverLicence(data)
        .then(res => {
          window.console.log(res);
          this.isLicenseUploaded = true;
          this.$toastr.s("Driver lincence uploaded", "Successful");
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },

    //Uplad Profile Photo
    async UploadProfile() {
      this.loading3 = true;
      let data = {
        image: this.uploads.profile_photo,
        id: this.user._id
      };
      this.uploadProfile(data)
        .then(() => {
          this.isProfileUploaded = true;
          this.$toastr.s("Profile Uploaded", "Successful");
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.loading3 = false;
          // this.$router.push("/")
        });
    },

    //Continue to Bank Details
    Verify() {
      this._switchTab(2);
    },
    BankInfo() {
      this._switchTab(3);
    },
    distory() {
      this.$store.commit("SET_USER_DATA", "");
      this.$store.commit("SET_SEARCH_RESULT", "");
      this.$store.commit("SET_ROUTES", "");
      this.$store.commit("SET_UPLOAD", "");
      this.$router.push("/home");
    }
  },
  mounted() {
    this.tabs = this.$children;
    this.totalTabs = this.tabs.length;
    this.currentTab = this.tabs.findIndex(tab => tab.isActive === true);
    if (this.currentTab === -1 && this.totalTabs > 0) {
      //Select first tab if none is marked selected
      this.tabs[0].isActive = true;
      this.currentTab = 0;
    }

    // this.$store.commit("SET_USER_DATA", "");
    // this.$store.commit("SET_SEARCH_RESULT", "");
  }
};
</script>
<style>
/** Wizard */
.nav-pills.nav-wizard > li {
  position: relative;
  overflow: visible;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  margin-bottom: 0.5rem;
}
.nav-pills.nav-wizard > li + li {
  margin-left: 0;
}
.nav-pills.nav-wizard > li:first-child {
  border-left: 0;
}
.nav-pills.nav-wizard > li:first-child a {
  border-radius: 5px 0 0 5px;
}
.nav-pills.nav-wizard > li:last-child {
  border-right: 0;
}
.nav-pills.nav-wizard > li:last-child a {
  border-radius: 0 5px 5px 0;
}
.nav-pills.nav-wizard > li a {
  border-radius: 0;
  background-color: #eee;
}
.nav-pills.nav-wizard > li:not(:last-child) a:after {
  position: absolute;
  content: "";
  top: 0px;
  right: -20px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 20px 0 20px 20px;
  border-color: transparent transparent transparent #eee;
  z-index: 150;
}
.nav-pills.nav-wizard > li:not(:first-child) a:before {
  position: absolute;
  content: "";
  top: 0px;
  left: -20px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 20px 0 20px 20px;
  border-color: #eee #eee #eee transparent;
  z-index: 150;
}
.nav-pills.nav-wizard > li:hover:not(:last-child) a:after {
  border-color: transparent transparent transparent #aaa;
}
.nav-pills.nav-wizard > li:hover:not(:first-child) a:before {
  border-color: #aaa #aaa #aaa transparent;
}
.nav-pills.nav-wizard > li:hover a {
  background-color: #aaa;
  color: #fff;
}
.nav-pills.nav-wizard > li.active:not(:last-child) a:after {
  border-color: transparent transparent transparent #428bca;
}
.nav-pills.nav-wizard > li.active:not(:first-child) a:before {
  border-color: #428bca #428bca #428bca transparent;
}
.nav-pills.nav-wizard > li.active a {
  background-color: #428bca;
  color: #fff;
}
/** Wizard Ends */
.tabStatus {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  line-height: 1.5rem;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.38);
  border-radius: 50%;
}

.nav-pills .nav-item {
  margin: 0px 10px;
}
.btn-group {
  width: 45%;
}
.continue-btn {
  background: #0f77b1;
  border-radius: 8px;
  font-family: Montserrat-SemiBold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  width: 100%;
  padding: 0.5rem 1rem;
}
.jj {
  cursor: progress !important;
}

body {
  padding: 0;
}
a {
  text-decoration: none;
  color: #000000;
}
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: #000000;
}

.personal-info {
  padding: 1rem;
}
.personal-info h4 {
  font-family: Montserrat-Bold;
  font-size: 19px;
  color: #4a4a4a;
  letter-spacing: 0;
  text-align: center;
}
.personal-info p {
  font-family: Montserrat-Regular;
  font-size: 17px;
  color: #4a4a4a;
  letter-spacing: 0;
  text-align: center;
}
.personal-info p span {
  color: #ec0c0c;
}
.form-group {
  margin-bottom: 0.5rem !important;
}
.form-group2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  margin-bottom: 0.5rem;
}
.form-group2 label {
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  color: #4a4a4a;
  letter-spacing: 0;
  text-align: right;
  margin-bottom: 0;
}
.name-input {
  background: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  display: block;
  width: 100%;
  height: 45px;
  padding: 0.375rem 0.75rem;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.name-input:focus,
.name-input:active {
  border: 1px solid #0f77b1;
}
.name-input::placeholder,
.name-input2::placeholder,
.number-input::placeholder,
.form-control::placeholder,
.text-input2::placeholder {
  color: #939393;
}
.text-input2 {
  background: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  display: block;
  width: 100%;
  height: 120px;
  padding: 0.375rem 0.75rem;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  resize: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.text-input2:focus,
.text-input2:active {
  border: 1px solid #0f77b1;
}
.phone-number-grid {
  display: flex;
  background: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  width: 100%;
  height: 45px;
}
.phone-number-grid:focus,
.phone-number-grid:active {
  border: 1px solid #0f77b1;
}
.phone-text {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  width: 15%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.phone-input {
  border: none;
  width: 85%;
  /* height: 45px; */
  padding: 0.375rem 0.75rem 0.375rem 0;
  border-radius: 0 8px 8px 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
/* .phone-input:focus,
.phone-input:active {
  border: 1px solid #0F77B1;
} */
.uploads-section {
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  padding: 1rem;
}
.form-group label {
  font-family: Montserrat-SemiBold;
  font-size: 14px;
  color: #4a4a4a;
  letter-spacing: 0;
  text-align: left !important;
}
.number-input {
  background: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  display: block;
  width: 100%;
  height: 40px;
  padding: 0.375rem 0.75rem;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.number-input:focus,
.number-input:active {
  border: 1px solid #0f77b1;
}
.form-control {
  height: 45px;
}
.drivers_licence_img {
  height: 100%;
  display: flex;
  align-items: center;
}
.drivers_licence_img img {
  width: 100%;
  height: 175px;
  object-fit: cover;
  background-position: top;
  border-radius: 20px;
}
.expire-date {
  display: flex;
  justify-content: space-between;
}
.upload-format {
  font-family: Montserrat-Medium;
  font-size: 12px;
  color: rgb(177, 17, 49);
  letter-spacing: 0;
  padding-top: 0.5rem;
}
.card {
  border: none !important;
}
.card-footer {
  border: none !important;
  background-color: transparent !important;
}
.continue {
  display: flex;
  justify-content: flex-end;
}
.continue-btn {
  background: #0f77b1;
  border-radius: 8px;
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.verify-code {
  font-family: Montserrat-Regular;
  font-size: 13px;
  color: #939393;
  letter-spacing: 0;
  text-align: right;
}
.profile-img img {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  object-fit: cover;
  background-position: top;
}
.save-btn {
  background: #0f77b1 !important;
  border: 1px solid #0f77b1 !important;
  border-radius: 8px;
  font-family: Montserrat-SemiBold;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  width: 150px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 0.5rem auto;
}
.modal-content {
  border-radius: 20px !important;
}
.modal_content_texts {
  text-align: center;
  padding: 1.5rem;
}
.modal_content_texts h1 {
  font-family: Montserrat-Bold;
  font-size: 25px;
  color: #000;
}
.modal_content_texts p {
  font-family: Montserrat-Regular;
  font-size: 17px;
  color: #000;
  margin-top: 1rem;
}
.error-message {
  font-size: 12px;
  color: red;
  padding: 0px;
  /* margin: 0; */
  /* float: left; */
  display: flex;
}
</style>
