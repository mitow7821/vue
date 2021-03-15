<template>
   <button @:click="deletee">Remove</button>
   <pre style="textAlign:left;">{{ data }}</pre>
</template>

<script>
// const axios = require("axios");
export default {
   data() {
      return {
         data: null,
         id: null,
      };
   },
   methods: {
      async deletee() {
         try {
            await fetch(`http://127.0.0.1:8000/customer/delete/${this.id}`, {
               method: 'DELETE',
            }).then(() => location.reload());
         } catch {
            console.error("Customer with this id doesn't exist!");
         }
      },
   },
   mounted() {
      // axios
      //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      //   .then(response => (this.info = response));

      // fetch('http://127.0.0.1:8000/customer/get-all')
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
         .then(response => response.json())
         .then(data => {
            this.data = data;
            // this.id = data.customers[0].id;
         })
         .catch(err => (this.data = err));
   },
};
</script>
