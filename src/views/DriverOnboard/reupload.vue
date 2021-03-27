<template>
  <div class="driver-onboard">
    <NavBar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-md-auto">
          <div class="contents-upload">
            <div class="text-center personal-info">
              <h1 class="mb-4">Kindly re-upload your documents</h1>
              <h4>Personal Information and Vehicle details</h4>
              <p>
                Only your first name and vehicle details are visible to clients
                during booking
                <br />
                <span>*Required</span>
              </p>
            </div>
            <form action>
              <div class="uploads-section">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group text-left" v-if="USER_DATA.documents[0]">
                      <label
                        v-if="USER_DATA.documents[0].status == 0 || USER_DATA.documents[0].status == null "
                      >Status : Pending</label>
                      <label v-if="USER_DATA.documents[0].status == 1 ">Status : Approved</label>
                      <label v-if="USER_DATA.documents[0].status == 2 ">Status : Rejected</label>
                    </div>
                    <div class="form-group text-left">
                      <label>Drivers License ID Number:</label>
                      <input type="text" v-model="uploads.idNumberD" required class="number-input" />
                    </div>
                    <div class="form-group text-left">
                      <label>Expiration Date:</label>
                      <div class="expire-date">
                        <b-form-datepicker
                          required
                          v-model="uploads.expDate"
                          id="example-datepicker"
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
                      <p class="upload-format">*JPG, PNG Maximum file size 200kb</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="drivers_licence_img">
                      <img
                        v-if="!uploads.driversLicense"
                        src="../../assets/images/driver-licence.jpg"
                        alt="Drivers Licence"
                      />
                      <img
                        v-else
                        :src="uploads.driversLicense_ || uploads.driversLicense"
                        alt="Drivers Licence"
                      />
                    </div>
                  </div>
                </div>
                <div class="text-center" v-if="USER_DATA.documents[0]">
                  <button
                    v-if="!loading && !isLicenseUploaded && USER_DATA.documents[0].status !== 1"
                    type="submit"
                    @click.prevent="UploadDriverLicense"
                    class="save-btn"
                  >Upload</button>
                  <div v-if="loading" class="save-btn">Uploading....</div>
                  <div v-if="isLicenseUploaded" class="save-btn btn-success">Uploaded</div>
                </div>
              </div>
            </form>
            <div class="border-bottom mt-5 mb-4"></div>

            <div class="text-center personal-info">
              <h4>Proof of Address</h4>
              <p>
                Your address and your Identifications must match to complete
                verification
                <br />
                <span>*Required</span>
              </p>
            </div>
            <form action>
              <div class="uploads-section">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group text-left">
                      <div class="form-group text-left" v-if="USER_DATA.documents[1]">
                        <label
                          v-if="USER_DATA.documents[1].status == 0 || USER_DATA.documents[1].status == null "
                        >Status : Pending</label>
                        <label v-if="USER_DATA.documents[1].status == 1 ">Status : Approved</label>
                        <label v-if="USER_DATA.documents[1].status == 2 ">Status : Rejected</label>
                      </div>
                      <label>Document Type:</label>
                      <select v-model="uploads.docType" required class="number-input">
                        <option value>--Select--</option>
                        <option value="phcn">PHCN Bill</option>
                        <option value="water">Water Bill</option>
                        <option value="lawma">Lawma Bill</option>
                        <option value="tax">Tax Bill</option>
                      </select>
                    </div>

                    <div class="form-group text-left">
                      <label>Date of Issuance:</label>
                      <div class="expire-date">
                        <b-form-datepicker
                          v-model="uploads.dateOfIssue"
                          required
                          id="example-datepicker1"
                          class="mb-2"
                        ></b-form-datepicker>
                      </div>
                    </div>

                    <div class="form-group text-left">
                      <label>Upload Document:</label>
                      <vuebase64
                        @load="uploads.proofOfAddress_ = $event"
                        @size-exceeded="onSizeExceeded"
                        @file="uploads.proofOfAddress = $event"
                        name="proof of address"
                      />
                      <p class="upload-format">*JPG, PNG Maximum file size 200kb</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="drivers_licence_img">
                      <img
                        v-if="!uploads.proofOfAddress"
                        src="../../assets/images/driver-licence.jpg"
                        alt="Drivers Licence"
                      />
                      <img
                        v-else
                        :src="uploads.proofOfAddress_ || uploads.proofOfAddress"
                        alt="Drivers Licence"
                      />
                    </div>
                  </div>
                </div>
                <div class="text-center" v-if="USER_DATA.documents[1]">
                  <button
                    type="submit"
                    v-if="!loading1 && !isProofOfAddressUploaded && USER_DATA.documents[1].status !== 1"
                    @click.prevent="UploadProofOfAddress"
                    class="save-btn"
                  >Upload</button>
                  <div v-if="loading1" class="save-btn">Uploading....</div>
                  <div v-if="isProofOfAddressUploaded" class="save-btn btn-success">Uploaded</div>
                </div>
              </div>
            </form>
            <div class="border-bottom mt-5 mb-3"></div>
            <div class="text-center personal-info">
              <h4>LASDRI Card</h4>
              <p>
                Lagos Drivers Institute ReCertification Card
                <br />
                <span>*Required</span>
              </p>
            </div>
            <form action>
              <div class="uploads-section">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group text-left">
                      <div class="form-group text-left" v-if="USER_DATA.documents[2]">
                        <label
                          v-if="USER_DATA.documents[2].status == 0 || USER_DATA.documents[2].status == null "
                        >Status : Pending</label>
                        <label v-if="USER_DATA.documents[2].status == 1 ">Status : Approved</label>
                        <label v-if="USER_DATA.documents[2].status == 2 ">Status : Rejected</label>
                      </div>
                      <label>LASDRI ID Number:</label>
                      <input type="text" v-model="uploads.idNumberL" required class="number-input" />
                    </div>

                    <div class="form-group text-left">
                      <label>Date of Issuance:</label>
                      <div class>
                        <b-form-datepicker
                          v-model="uploads.dateOfIssueL"
                          required
                          id="example-datepicker2"
                          class="mb-2"
                        ></b-form-datepicker>
                      </div>
                    </div>

                    <div class="form-group text-left">
                      <label>Upload Document:</label>
                      <vuebase64
                        @load="uploads.lasdriCard_ = $event"
                        @size-exceeded="onSizeExceeded"
                        @file="uploads.lasdriCard = $event"
                        name="driversLicense"
                      />
                      <p class="upload-format">*JPG, PNG Maximum file size 200kb</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="drivers_licence_img">
                      <img
                        v-if="!uploads.lasdriCard"
                        src="../../assets/images/driver-licence.jpg"
                        alt="Drivers Licence"
                      />
                      <img
                        v-else
                        :src="uploads.lasdriCard_ || uploads.lasdriCard"
                        alt="Drivers Licence"
                      />
                    </div>
                  </div>
                </div>
                <div class="text-center" v-if="USER_DATA.documents[2]">
                  <button
                    v-if="!loading2 && !isLasdriUploaded && USER_DATA.documents[2].status !== 1"
                    @click.prevent="UploadLasdri"
                    type="submit"
                    class="save-btn"
                  >Upload</button>
                  <div v-if="loading2" class="save-btn">Uploading....</div>
                  <div v-if="isLasdriUploaded" class="save-btn btn-success">Uploaded</div>
                </div>
              </div>
            </form>
            <div class="border-bottom mt-5 mb-3"></div>
            <div class="text-center personal-info">
              <h4>Rider’s Profile Picture</h4>
              <p>
                Upload Profile picture or take one instantly - this is what
                customers will see
                <br />
                <span>
                  *Required - - Full face, open your eyes, no full
                  picture
                </span>
              </p>
            </div>
            <form action>
              <div class="uploads-section">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group text-left">
                      <label>Upload Document:</label>
                      <vuebase64
                        @size-exceeded="onSizeExceeded"
                        @load="uploads.profile_photo_ = $event"
                        @file="uploads.profile_photo = $event"
                        name="driversLicense"
                      />
                      <p class="upload-format">*JPG, PNG Maximum file size 200kb</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Upload Document:</label>
                      <div class="profile-img">
                       <img
                        src="../../assets/images/camera.svg"
                        v-if="!uploads.profile_photo"
                        alt="Camera"
                      />
                      <img :src="uploads.profile_photo_ || uploads.profile_photo" v-else alt="Camera" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button v-if="!loading3 && !isProfileUploaded" type="submit"  @click.prevent="UploadProfile" class="save-btn">Upload</button>
                  <div v-if="loading3" class="save-btn">Uploading....</div>
                  <div v-if="isProfileUploaded" class="save-btn btn-success">Uploaded</div>
                </div>
              </div>
            </form>

            <!-- <div class="form-group form-check text-left mt-3">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label">I accpet terms & conditions</label>
            </div>-->
            <p class="verify-code mt-3">We’ll reach out to you once verification is completed</p>
            <div class="text-center mb-5">
              <a href="https://sureb69.com">
                <button class="save-btn w-100">Complete</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/HeaderNav/NavBar";
import vuebase64 from "../../components/vue-base64.vue";
import { driverService } from "../../services/DriverServices/driver.services";
import { mapState } from "vuex";

export default {
  name: "Driver",
  components: {
    NavBar,
    vuebase64
  },
  data() {
    return {
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
      Banks: [],
      formData: {
        firstName: "",
        lastName: "",
        otherName: "",
        email: null,
        country: "Nigeria",
        phone: null,
        accountNumber: "",
        accountName: "",
        bankCode: ""
      },
      uploads: {
        driversLicense:
          this.$store.state.User.USER_DATA?.documents[0]?.uploads?.path || "",
        driversLicense_: "",
        proofOfAddress:
          this.$store.state.User.USER_DATA?.documents[1]?.uploads?.path || "",
        proofOfAddress_: "",
        lasdriCard:
          this.$store.state.User.USER_DATA?.documents[2]?.uploads?.path || "",
        lasdriCard_: "",
        profile_photo: this.$store.state.User.USER_DATA?.profilePhoto?.path || "",
        profile_photo_:"",
        idNumberD:
          this.$store.state.User.USER_DATA?.documents[0]?.idNumber || "",
        expDate:
          this.$store.state.User.USER_DATA?.documents[0]?.expirationDate || "",
        docType:
          this.$store.state.User.USER_DATA?.documents[1]?.identificationType ||
          "",
        dateOfIssue:
          this.$store.state.User.USER_DATA?.documents[1]?.issuedDate || "",
        idNumberL:
          this.$store.state.User.USER_DATA?.documents[2]?.idNumber || "",
        dateOfIssueL:
          this.$store.state.User.USER_DATA?.documents[2]?.issuedDate || ""
      }
    };
  },
  computed: {
    ...mapState({
      USER_DATA: state => state.User.USER_DATA
    })
  },
  methods: {
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
        id: this.USER_DATA._id
      };
      driverService
        .UploadDriverLicense(data)
        .then(res => {
          this.isLicenseUploaded = true;
          this.$toastr.s(res.message, "Successful");
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },

    //Upload Proof of Address
    UploadProofOfAddress() {
      this.loading1 = true;
      let data = {
        documentType: this.uploads.docType,
        issuedDate: this.uploads.dateOfIssue,
        image: this.uploads.proofOfAddress,
        id: this.USER_DATA._id
      };
      driverService
        .UploadProofOfAddress(data)
        .then(res => {
          this.isProofOfAddressUploaded = true;
          this.$toastr.s(res.message, "Successful");
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.loading1 = false;
        });
    },

    //Uplad Lasdri
    UploadLasdri() {
      this.loading2 = true;
      let data = {
        idNumber: this.uploads.idNumberL,
        issuedDate: this.uploads.dateOfIssueL,
        image: this.uploads.lasdriCard,
        id: this.USER_DATA._id
      };
      driverService
        .UploadLasdri(data)
        .then(res => {
          this.isLasdriUploaded = true;
          this.$toastr.s(res.message, "Successful");
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.loading2 = false;
        });
    },

    //Uplad Profile Photo
    UploadProfile() {
      this.loading3 = true;
      let data = {
        image: this.uploads.profile_photo,
        id: this.USER_DATA._id
      };
      driverService
        .UploadProfile(data)
        .then(res => {
          this.isProfileUploaded = true;
          this.$toastr.s(res.message, "Successful");
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.loading3 = false;
          // this.$router.push("/")
        });
    }
  }
};
</script>

<style scoped>
.personal-info h1 {
  font-family: Montserrat-Bold;
  font-size: 30px;
  color: #4a4a4a;
  letter-spacing: 0;
  text-align: center;
}
</style>
