<template>
  <div class="build views">
    <container :props="props" :option="option" ref="container"></container>
  </div>
</template>
<script>
import init from '@/mixins/'
import {verToken} from '@/api/visual'

export default {
  data() {
    return {}
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
    this.isLogin()
  },
  methods: {
    //判断是否登录
    isLogin() {
      let token = localStorage.getItem("zt-token");
      let protocol = window.location.protocol;
      let url = window.location.host;
      localStorage.setItem("next-url", window.location.href)
      if (token == null) {
        window.location.href = protocol + "//" + url + "/login"
      } else {
        //判断token是否过期
        let user = JSON.parse(token);
        verToken(user.account, user.token).then(res => {
          console.log(res.data.data)
          if (!res.data.data) {
            window.location.href = protocol + "//" + url + "/login"
          }
        })
      }

    }
  },
  mixins: [init],
}
</script>
<style lang="scss">
@import "../styles/style.scss";
</style>
