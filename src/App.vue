<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
@import "assets/css/sureb69.css";
@import "assets/css/animate.css";
@import "assets/css/responsive.css";

#app {
  font-family: Montserrat-Regular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
button {
  background: #0F77B1;
}
</style>

<script>
import { mapState } from "vuex";
import { ApiService } from "./services/api.services";
export default {
  name: "App",
  components: {
    //Loader
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState({
      IS_AUTHENTICATED: (state) => state.User.IS_AUTHENTICATED,
      AUTH_TOKEN: (state) => state.User.AUTH_TOKEN,
    }),
  },
  methods: {
    setHeader() {
      if (this.IS_AUTHENTICATED) return ApiService.setHeader(this.AUTH_TOKEN);
    },
  },
  mounted() {
    this.setHeader();
  },
};
</script>
