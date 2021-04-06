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
              <img src="../../assets/images/location.svg" alt="location" />
              <select name="vehicles">
                <option value="cab">Cab</option>
                <option value="keke">Keke Napep</option>
                <option value="bike">Bike</option>
                <option value="truck">Truck</option>
              </select>
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
          <div>
            <div
              @click.prevent="search"
              class="d-flex align-items-end h-100 w-100"
            >
              <div class="pick_up w-100">
                <div class="get_ride_btn">
                  <span>GET RIDE</span>
                  <font-awesome-icon icon="chevron-right" class="fontawesom" />
                </div>
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
      destination: null,
      searchResult: []
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
        destination: this.destination
      };
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
        });
    },
    emitToParent() {
      this.$emit("search", this.searchResult);
    }
  }
};
</script>
