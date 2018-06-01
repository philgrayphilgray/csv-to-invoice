<template lang="pug">
  div
    v-layout
      v-flex(xs12).text-xs-right
        p {{name}}
          br
          | {{address}}
          br
          | {{address2}}

    v-layout
        v-flex.text-xs-left(xs6)
            h1 Invoice
            p Contract:
              strong  {{contract}}
              br
              | Billing Period: {{billingPeriod}}
              br
              | Invoice Date: {{new Date() | date}}
    v-divider.mb-3
        v-layout(row wrap)
        h2.mb-3 Total
        v-flex.right
            h3.text-xs-right ${{totalCost}}            

</template>
<script>
export default {
  props: {
    totalCost: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      name: "Name",
      contract: "#000",
      address: "Address Line 1",
      address2: "City, Zip",
      billingPeriod: "05/15/2018 – 05/31/2018"
    };
  }
};
</script>
