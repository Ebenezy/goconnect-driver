<template>
  <div class="contact-page">
    <NavBar />
    <Contactus />
    <footer class="mt-5">
      <div class="spce"></div>
        <div class="copyright text-center light">
          &copy; Copyright 2021 | Gtonia Group Limited. All Rights Reserved
        </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "../components/HeaderNav/NavBar";
import Contactus from "../components/Contactus/Contactus";

export default {
  components: {
    NavBar,
    Contactus
  }
}
</script>