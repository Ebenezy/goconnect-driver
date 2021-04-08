<template>
  <div class="drivers-page">
    <NavBar />
    <div class="container">
      <FindDriver />
      <div class="driver-results">
        <h2>
          {{ search.length
          }}{{ search.length === 1 ? " Driver" : " Drivers" }} found.
        </h2>
        <div class="row">
          <div v-for="result in search" :key="result._id" class="col-md-3 mb-4">
            <div class="driver1">
              <div class="img_">
                <img :src="result.rider.profilePhoto.path" alt="driver" />
              </div>
              <div class="driver-name">
                <p>{{ result.rider.firstName }} {{ result.rider.lastName }}</p>
                <div @click="readMore = !readMore" class="connect-driver-btn">
                  <span v-if="readMore">
                      <a href="tel:+2348080000000">0{{ result.rider.phone }}</a>
                    </span>
                    <span v-else>
                      Connect Driver
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-5 fixed-bottom">
      <div class="spce"></div>
      <div class="copyright text-center light">
        &copy; Copyright 2021 | Gtonia Group Limited. All Rights Reserved
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "../components/HeaderNav/NavBar";
import FindDriver from "../components/FindDriver/FindDriver";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
    FindDriver
  },
  data() {
    return {
      readMore: false,
    };
  },
  computed: {
    ...mapState({
      search: state => state.Driver.SEARCH_RESULTS
    })
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  /* background: #E3E3E3; */
}
</style>
