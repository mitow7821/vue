<template>
   <pre style="textAlign:left;">{{ data }}</pre>
</template>

<script>
export default {
   data() {
      return {
         data: null,
      };
   },

   mounted() {
      console.log(window);
      window.axios
         .get('https://api.coindesk.com/v1/bpi/currentprice.json')
         .then(response => (this.data = response.data));

      // fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      //    .then(response => response.json())
      //    .then(data => {
      //       this.data = data;
      //    })
      //    .catch(err => (this.data = err));
   },
};
</script>
