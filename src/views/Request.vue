<template>
  <pre style="textAlign:left;">{{ info }}</pre>
</template>

<script>
// const axios = require("axios");
export default {
  data() {
    return {
      info: null
    };
  },
  mounted() {
    // axios
    //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    //   .then(response => (this.info = response));
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => response.json())
      .then(data => (this.info = data))
      .catch(err => (this.info = err));
  }
};
</script>
