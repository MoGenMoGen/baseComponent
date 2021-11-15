<template>
  <div>
    <span>1111111111111</span>

  </div>
</template>
<script>
export default {
  name: 'light',
  props: {
    option: Object,
    component: Object
  },
  computed: {
    fontSize () {
      return (this.option.fontSize || 30) + 'px'
    }
  },
  methods: {

  }
}
</script>
