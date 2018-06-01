<template lang="pug">
v-data-table.elevation-1(:headers="headers" :items="invoice" hide-actions)
  template(slot="items" slot-scope="props")
    td {{ props.item.project}}
    td.text-xs-right {{ props.item.date | date }}
    td.text-xs-right {{ props.item.task}}
    td.text-xs-right ${{ props.item.rate}}
    td.text-xs-right {{ props.item.hours}}
    td.text-xs-right ${{ props.item.cost}}
  template(slot="footer")
    td
    td
    td.text-xs-right
      strong Totals
    td
    td.text-xs-right {{totalHours}}hrs
    td.text-xs-right
      strong ${{totalCost}}

</template>

<script>
import { startCase } from "lodash";
export default {
  props: {
    invoice: {
      type: Array,
      default: null
    },
    totalHours: {
      type: Number,
      default: 0
    },
    totalCost: {
      type: Number,
      default: 0
    }
  },
  computed: {
    headers() {
      return Object.keys(this.invoice[0]).map((header, i) => ({
        text: startCase(header),
        align: i !== 0 ? "right" : "center",
        sortable: false,
        value: header
      }));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
