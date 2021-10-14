<template>
  <div class="login-container"   >


    <div style="margin-left: 35%">
      <h2 style="color: #FFFFFF;margin-left: 50%">登 录</h2>
      <avue-login :option="option" @submit="submit"></avue-login>
    </div>



  </div>
<!--  <div>-->
<!--    <avue-login :option="option" @submit="submit"></avue-login>-->
<!--  </div>-->
</template>
<script>

import {login} from '@/api/visual'
export default {
  data() {
    return {
      option: {
        width: 400,
        time: 60,
        codeType: 'phone',
        column: {
          username: {
            // hide: true,
            label: '用户名',
            // prop: 'user',
            // placeholder:'',
            autocomplete: 'off',
            rules: { required: true, message: '请输入用户名', trigger: 'blur' }
          },
          password: {
            label: '密码',
            // prop: 'pass',
            // placeholder:'',
            autocomplete: 'off',
            rules: { required: true, message: '请输入密码', trigger: 'blur' }
          },
          code: {
            hide: true
          }
        }
      },
    }
  },
  mounted() {

  },
  methods: {
    submit(form) {
      form.account = form.username
      login(form).then(res=>{
       if (res.data.code === 200){
         this.$message.success("登录成功")
         //跳转
         localStorage.setItem('zt-token', JSON.stringify(res.data.data));
         window.location.href = localStorage.getItem('next-url')
        // console.log(localStorage.getItem('token'))
       }else {
         this.$message.error(res.data.msg)
       }

      })

      // this.$message.success(JSON.stringify(form))
      // console.log(form);
    }
  },
}
</script>
<style lang="scss">
@import "../styles/style.scss";
</style>
