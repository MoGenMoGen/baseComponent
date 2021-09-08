<template>
  <div class="build views">
    <container  :props="props" :option="option"  ref="container"></container>
  </div>
</template>
<script>
import init from '@/mixins/'

export default {
  data() {
    return {

    }
  },
  props: {
    option: Object,
    props: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted() {

  },
  methods: {

  },
  mixins: [init],
}
</script>
<style lang="scss">
@import "../styles/style.scss";
</style>
