<template>
  <div class="driver-onboard">
    <NavBar />
    <div class="container">
      <form-wizard ref="formwizard"> </form-wizard>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/HeaderNav/NavBar";
import FormWizard from "../../components/FormWizard.vue";
//import TabContent from "../../components/TabContent.vue";

export default {
  name: "Driver",
  components: {
    FormWizard,
    //TabContent,
    NavBar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
