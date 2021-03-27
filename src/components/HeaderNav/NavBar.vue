<template>
  <div class="nav_header">
    <div class="sticky-top">
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand href="https://goconnect.com.ng" >
          <img src="../../assets/images/goconnect-logo.svg" alt="goconnect Logo" class="sureb69_logo" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto white_bg">
            <b-navbar-nav class="nav_header_inner">
              <b-nav-item href="https://goconnect.com.ng" >HOME</b-nav-item>
              <b-nav-item>
                <router-link to="home">BOOK DRIVER</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="contact">CONTACT</router-link>
              </b-nav-item>
              <!-- <b-nav-item>
                <router-link active to="login">LOGIN</router-link>
              </b-nav-item> -->
            </b-navbar-nav>
            <b-navbar-nav class="download-bg">
              <b-nav-item class="download-btn">
                <router-link to="driver">
                  <!-- <font-awesome-icon icon="lock" class="plus_icon" /> -->
                  Become a Rider
                </router-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
        <!-- <b-collapse is-nav></b-collapse> -->
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar.vue"
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover,
a:focus,
a:active {
  text-decoration: none;
  /*color: #FECB32;*/
}
.navbar-light .navbar-nav .nav-link {
  color: #666666;
  display: flex;
  align-items: center;
  /* padding: 0.8rem 0.3rem 0.73rem; */
  margin: 0 0.6rem;
  font-family: Avenir;
  font-size: 12px;
}
.navbar-light .navbar-nav .nav-link a {
  color: #666666;
  display: flex;
  align-items: center;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #0F77B1;
  /*border-bottom: 3px solid #FECB32;*/
}
.navbar-light .navbar-nav .nav-link a:hover {
  color: #0F77B1;
  /*border-bottom: 3px solid #FECB32;*/
}
.navbar-light .navbar-nav .nav-link.active {
  color: #0F77B1;
  /* border-bottom: 3px solid #FECB32; */
}
.navbar-light .navbar-nav .nav-link.active:hover {
  color: #0F77B1;
  /*border-bottom: 3px solid #FECB32;*/
}
.nav_header {
  background: #ffffff;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.13);
  padding: 0.2rem 2rem;
  margin-bottom: 3rem;
}
.download-btn {
  border: 1px solid #0F77B1;
  border-radius: 5px;
}
.download-btn a {
  color: #000 !important;
}
.download-btn:hover {
  color: #000 !important;
  background: #0F77B1;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .nav_header {
    padding: 0.2rem !important;
  }
}
</style>