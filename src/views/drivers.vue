<template>
  <div class="drivers-page">
    <NavBar />
    <div class="container">
        <FindDriver />
        <div class="driver-results">
            <h2>50 Drivers found.</h2>
            <div class="row">
                <div class="col-md-3 mb-4">
                    <div class="driver1">
                        <div class="img_">
                            <img src="../assets/images/driver.jpg" alt="driver">
                        </div>
                        <div class="driver-name">
                            <p>Emeka Okoro</p>
                            <div class="connect-driver-btn">Connect Driver</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="driver1">
                        <div class="img_">
                            <img src="../assets/images/driver.jpg" alt="driver">
                        </div>
                        <div class="driver-name">
                            <p>Emeka Okoro</p>
                            <div class="connect-driver-btn">Connect Driver</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="driver1">
                        <div class="img_">
                            <img src="../assets/images/driver.jpg" alt="driver">
                        </div>
                        <div class="driver-name">
                            <p>Emeka Okoro</p>
                            <div class="connect-driver-btn">Connect Driver</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="driver1">
                        <div class="img_">
                            <img src="../assets/images/driver.jpg" alt="driver">
                        </div>
                        <div class="driver-name">
                            <p>Emeka Okoro</p>
                            <div class="connect-driver-btn">Connect Driver</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="driver1">
                        <div class="img_">
                            <img src="../assets/images/driver.jpg" alt="driver">
                        </div>
                        <div class="driver-name">
                            <p>Emeka Okoro</p>
                            <div class="connect-driver-btn">Connect Driver</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="driver1">
                        <div class="img_">
                            <img src="../assets/images/driver.jpg" alt="driver">
                        </div>
                        <div class="driver-name">
                            <p>Emeka Okoro</p>
                            <div class="connect-driver-btn">Connect Driver</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="driver1">
                        <div class="img_">
                            <img src="../assets/images/driver.jpg" alt="driver">
                        </div>
                        <div class="driver-name">
                            <p>Emeka Okoro</p>
                            <div class="connect-driver-btn">Connect Driver</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="driver1">
                        <div class="img_">
                            <img src="../assets/images/driver.jpg" alt="driver">
                        </div>
                        <div class="driver-name">
                            <p>Emeka Okoro</p>
                            <div class="connect-driver-btn">Connect Driver</div>
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

export default {
  components: {
    NavBar,
    FindDriver
  }
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    /* background: #E3E3E3; */
}
</style>