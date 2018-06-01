<template lang="pug">
div
  input.csv__input.--sr-only(type="file" accept=".csv" ref="fileInput" @change="onFileSelected")
  v-btn(raised @click="$refs.fileInput.click()" :loading="loading") Upload CSV
</template>
<script>
import csvtojson from "../lib/csvtojson";
import jsonToInvoiceData from "../lib/jsonToInvoiceData";
export default {
  data() {
    return {
      selectedFile: null,
      loading: false,
      converted: null
    };
  },
  methods: {
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      // eslint-disable-next-line
      console.log(this.selectedFile);
      // convert to json
      this.convertFileToJson();
    },
    convertFileToJson() {
      this.loading = true;
      // process with lib function
      const reader = new FileReader();
      reader.onload = (reader => {
        return async () => {
          const fileString = reader.result;
          try {
            const result = await csvtojson(fileString);
            this.converted = jsonToInvoiceData(result);
            this.$store.dispatch("setInvoice", this.converted);
            this.loading = false;
          } catch (error) {
            this.loading = false;
            // eslint-disable-next-line
            console.log('error from uploadform')
          }
        };
      })(reader);
      reader.readAsText(this.selectedFile);
    }
  }
};
</script>
