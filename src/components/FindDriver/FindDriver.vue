<template>
  <div class="get-dropoff">
    <div class="dropoff-head">
      <h6>GET A DROP OFF</h6>
    </div>

    <div class="p-4 bg-white">
      <div class="row">
        <div class="col-md-3 mb-3">
          <div class="pick_up">
            <h5>VEHICLE TYPE</h5>
            <div class="input_form">
              <!-- <img src="../../assets/images/location.svg" alt="location" /> -->
              <!-- <b-form-select
                  :options="options"
                  class="select_services_input"
                ></b-form-select> -->
              <select
                v-model="vehicle"
                id="stateofoperation"
                name=""
                classname="form-control name-input "
              >
                <option
                  v-for="vehicle in vehicleType"
                  :key="vehicle._id"
                  :value="vehicle._id"
                  >{{ vehicle.name }}</option
                >
              </select>
              <i class=""> <font-awesome-icon icon="chevron-down"/></i>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="pick_up">
            <h5>PICK UP</h5>
            <div class="input_form">
              <img src="../../assets/images/location.svg" alt="location" />
              <!-- <input type="text" placeholder="Okigwe, Okigwe Bus stop" /> -->
              <vue-google-autocomplete
                id="pickup"
                classname="form-control name-input "
                placeholder="Please type your address"
                v-on:placechanged="getAddressData2"
                types="establishment"
                country="ng"
              >
              </vue-google-autocomplete>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="pick_up">
            <h5>DROP OFF</h5>
            <div class="input_form">
              <img src="../../assets/images/location.svg" alt="location" />
              <vue-google-autocomplete
                id="dropOf"
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
        <div class="col-md-3 mb-3">
          <div class="pick_up2" v-if="searchLoading === false">
            <div
              @click.prevent="search"
              class="d-flex align-items-end h-100 w-100"
            >
              <div class="get_ride_btn cursor">
                <span>GET RIDE</span>
                <font-awesome-icon icon="chevron-right" class="fontawesom" />
              </div>
            </div>
          </div>
          <div class="pick_up2" v-else>
            <div class="d-flex align-items-end h-100 w-100">
              <div class="loading">
                <div
                  class="spinner-border text-light text-center"
                  role="status"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { driverService } from "../../services/DriverServices/driver.services";
import { mapActions } from "vuex";
export default {
  components: {
    VueGoogleAutocomplete
  },
  data() {
    return {
      vehicle: "6070eac16dbf5ac4418056a0",
      searchLoading: false,
      destination: null,
      searchResult: [],
      vehicleType: []
    };
  },
  methods: {
    ...mapActions({}),
    getAddressData: function(addressData, placeResultData) {
      window.console.log("address", addressData);
      window.console.log("placeResultData", placeResultData);
      let name = `${placeResultData.name} ${placeResultData.formatted_address}`;
      this.destination = {
        latitude: addressData.latitude,
        longitude: addressData.longitude,
        address: name
      };
      this.address = addressData;
    },
    getAddressData2: function() {},

    async search() {
      if (this.destination === null) {
        this.$toastr.e("All Fields are required", "Failed!");
        return;
      }
      let data = {
        destination: this.destination,
        vehicle: this.vehicle
      };
      this.searchLoading = true;
      await driverService
        .searchRoutes(data)
        .then(res => {
          window.console.log(res);
          this.$toastr.s("Search Completed", "Successful");
          this.searchResult = res.data;
          this.emitToParent();
          this.$store.commit("SET_SEARCH_RESULT", this.searchResult);
          this.$router.push("/drivers");
        })
        .catch(err => {
          this.$toastr.e(err.Error || err.error || err, "Failed!");
        })
        .finally(() => {
          this.searchLoading = false;
        });
    },
    emitToParent() {
      this.$emit("search", this.searchResult);
    }
  },
  mounted() {
    driverService
      .LoadVehicleType()
      .then(res => {
        this.vehicleType = res.data;
      })
      .catch(error => {
        window.console.log(error);
      });
  }
};
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47px;
  background: #0f77b1;
  font-family: AvenirNext-DemiBold;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  padding: 1rem 1rem;
}
</style>
