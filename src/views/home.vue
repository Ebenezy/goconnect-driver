<template>
  <div class="homepage-body">
  <div class="homepage">
    <NavBar2 />
    <div class="container">
      <div class="hero-contents">
        <div class="row">
          <div class="col-md-9 ml-auto mr-auto">
            <div class="jk">
              <h1>Book ride, and driver will come to your location in 10minutes</h1>
              <p>Set location, select driver and get a pick-up instantly</p>
            </div>
            <div class="icon_group">
              <div class="icon1">
                <img src="../assets/images/cab.svg" alt="goconnect">
              </div>
              <div class="icon1">
                <img src="../assets/images/helmet.svg" alt="goconnect">
              </div>
              <div class="icon1">
                <img src="../assets/images/truck.svg" alt="goconnect">
              </div>
              <!-- <div class="icon1">
                <img src="../assets/images/tanker.svg" alt="goconnect">
              </div> -->
              <div class="icon1">
                <img src="../assets/images/keke.svg" alt="goconnect">
              </div>
            </div>
          </div>
        </div>
        <FindDriver />
        
        <p>Instant Pickup</p>
        <router-link to="driver">
          <button class="driver-signup">Become a Driver</button>
        </router-link>
      </div>
    </div>
    <div></div>
    <!-- <font-awesome-icon icon="search" class="fontawesom" />
    <a @click="$router.go(-1)">
      <img alt="Vue logo" src="../assets/logo.png" />
    </a> -->
    <!-- <div class="social_icon">
      <div class="fb">
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'facebook-f' }"
          class="social"
        />
      </div>
      <div class="fb">
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'twitter' }"
          class="social"
        />
      </div>
    </div> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    
  </div>
  <Contactus />
    <footer>
      <div class="spce"></div>
        <div class="copyright text-center light">
          &copy; Copyright 2021 | Gtonia Group Limited. All Rights Reserved
        </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import NavBar2 from "../components/HeaderNav/NavBar2";
import FindDriver from "../components/FindDriver/FindDriver";
import Contactus from "../components/Contactus/Contactus";

export default {
  name: "Home",
  components: {
    NavBar2,
    FindDriver,
    Contactus,
  },
};
</script>
