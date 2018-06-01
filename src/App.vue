<template lang="pug">
v-app#app(light)
  v-toolbar(fixed)
    v-toolbar-title Invoice Maker
    v-spacer
    UploadButton
    v-btn(color="success" v-if="invoice" disabled title="Feature not ready") Print
  v-container
    InvoiceTable(v-if="invoice" :invoice="invoice" :totalCost="totalCost" :totalHours="totalHours")  
</template>


<script>
import UploadButton from "@/components/UploadButton";
import InvoiceTable from "@/components/InvoiceTable";
export default {
  components: {
    UploadButton,
    InvoiceTable
  },
  name: "app",
  watchers: {
    invoice() {
      return this.invoice;
    }
  },
  computed: {
    invoice() {
      return this.$store.getters.invoice;
    },
    totalHours() {
      return Number(this.$store.getters.totalHours);
    },
    totalCost() {
      return this.$store.getters.totalCost;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
