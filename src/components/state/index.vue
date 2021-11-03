<template>
  <div>
    <!--    <img src="./img/t2.png" alt="" v-if="defShow" height="20px">-->
    <img src="./img/t1.png" alt="" v-if="t1Show" height="20px">
    <img src="./img/t2.png" alt="" v-if="t2Show" height="20px">
    <img src="./img/t3.png" alt="" v-if="t3Show" height="20px">
    <img src="./img/t4.png" alt="" v-if="t4Show" height="20px">
    <img src="./img/t5.png" alt="" v-if="t5Show" height="20px">
    <img src="./img/zc.png" alt="" v-if="t6Show" height="20px">
    <img src="./img/tz.png" alt="" v-if="t7Show" height="20px">
    <img src="./img/jd.png" alt="" v-if="t8Show" height="20px">
    <img src="./img/yc.png" alt="" v-if="t9Show" height="20px">
    <img src="./img/LOC.png" alt="" v-if="t10Show" height="20px">
    <img src="./img/REM.png" alt="" v-if="t11Show" height="20px">
    <img src="./img/red.png" alt="" v-if="t12Show" height="20px">
    <img src="./img/kdw.png" alt="" v-if="t13Show" height="20px">
    <img src="./img/ok.png" alt="" v-if="t14Show" height="20px">
    <img src="./img/ok-tm.png" alt="" v-if="t15Show" height="20px">
    <img src="./img/NG.png" alt="" v-if="t16Show" height="20px">
    <img src="./img/Error.png" alt="" v-if="t17Show" height="20px">
    <img src="./img/黄色抢-灰.png" alt="" v-if="t18Show" height="20px">
    <img src="./img/黄色枪-绿.png" alt="" v-if="t19Show" height="20px">
    <img src="./img/黑色枪-灰.png" alt="" v-if="t20Show" height="20px">
    <img src="./img/黑色枪-绿.png" alt="" v-if="t21Show" height="20px">
    <img src="./img/gdw.png" alt="" v-if="t22Show" height="20px">


    <img src="./rot/M-灰.png" alt="" v-if="r1Show" height="28px">
    <img src="./rot/M-绿.png" alt="" v-if="r2Show" height="28px">

    <img src="./rot/V-灰.png" alt="" v-if="r3Show" height="28px">
    <img src="./rot/V-绿.png" alt="" v-if="r4Show" height="28px">

    <img src="./rot/向下-灰.png" alt="" v-if="r5Show" height="28px">
    <img src="./rot/向下-绿.png" alt="" v-if="r6Show" height="28px">

    <img src="./rot/四叶-灰.png" alt="" v-if="r7Show" height="28px">
    <img src="./rot/四叶-绿.png" alt="" v-if="r8Show" height="28px">

    <img src="./rot/头盔-灰.png" alt="" v-if="r9Show" height="28px">
    <img src="./rot/头盔-绿.png" alt="" v-if="r10Show" height="28px">

    <img src="./rot/房子-灰.png" alt="" v-if="r11Show" height="28px">
    <img src="./rot/房子-绿.png" alt="" v-if="r12Show" height="28px">

    <img src="./rot/插头-灰.png" alt="" v-if="r13Show" height="28px">
    <img src="./rot/插头-绿.png" alt="" v-if="r14Show" height="28px">

    <img src="./rot/旋转-灰.png" alt="" v-if="r15Show" height="28px">
    <img src="./rot/旋转-绿.png" alt="" v-if="r16Show" height="28px">

    <img src="./rot/横-灰.png" alt="" v-if="r17Show" height="28px">
    <img src="./rot/横-绿.png" alt="" v-if="r18Show" height="28px">

    <img src="./rot/汽车-灰.png" alt="" v-if="r19Show" height="28px">
    <img src="./rot/汽车-绿.png" alt="" v-if="r20Show" height="28px">

    <img src="./rot/电扇-灰.png" alt="" v-if="r21Show" height="28px">
    <img src="./rot/电扇-绿.png" alt="" v-if="r22Show" height="28px">

    <img src="./rot/竖-灰.png" alt="" v-if="r23Show" height="28px">
    <img src="./rot/竖-绿.png" alt="" v-if="r24Show" height="28px">

    <img src="./rot/红.png" alt="" v-if="r25Show" height="28px">
    <img src="./rot/绿.png" alt="" v-if="r26Show" height="28px">

  </div>
</template>
<script>
import {getVal} from '@/api/visual'

export default {
  name: 'state',
  props: {
    option: Object,
    component: Object
  },
  data() {
    return {
      t1Show: false,
      t2Show: false,
      t3Show: false,
      t4Show: false,
      t5Show: false,

      t6Show: false,
      t7Show: false,
      t8Show: false,
      t9Show: false,

      t10Show: false,
      t11Show: false,
      t12Show: false,
      t13Show: false,

      t14Show: false,
      t15Show: false,
      t16Show: false,
      t17Show: false,

      t18Show: false,
      t19Show: false,
      t20Show: false,
      t21Show: false,
      t22Show: false,


      r1Show: false,
      r2Show: false,
      r3Show: false,
      r4Show: false,
      r5Show: false,
      r6Show: false,
      r7Show: false,
      r8Show: false,
      r9Show: false,
      r10Show: false,
      r11Show: false,
      r12Show: false,
      r13Show: false,
      r14Show: false,
      r15Show: false,
      r16Show: false,
      r17Show: false,
      r18Show: false,
      r19Show: false,
      r20Show: false,
      r21Show: false,
      r22Show: false,
      r23Show: false,
      r24Show: false,
      r25Show: false,
      r26Show: false,

    }
  },
  computed: {},
  created() {
    this.getInfo()
    setInterval(this.getInfo, 10000);
  },
  methods: {
    getInfo() {
      // this.t2Show = true
      if (this.option.q1) {
        getVal(this.option.q1).then(res => {
          if (res.data.data == this.option.t1) {
            this.t1Show = true;
            this.defShow = false;
          } else {
            this.t1Show = false;
            this.defShow = true;
          }
        })
      }
      if (this.option.q2) {
        getVal(this.option.q2).then(res => {
          if (res.data.data == this.option.t2) {
            this.t2Show = true;
            this.defShow = false;
          } else {
            this.t2Show = false;
            this.defShow = true;
          }
        })
      }
      if (this.option.q3) {
        getVal(this.option.q3).then(res => {
          if (res.data.data == this.option.t3) {
            this.t3Show = true;
            this.defShow = false;
          } else {
            this.t3Show = false;
            this.defShow = true;
          }
        })
      }
      if (this.option.q4) {
        getVal(this.option.q4).then(res => {
          if (res.data.data == this.option.t4) {
            this.t4Show = true;
            this.defShow = false;
          } else {
            this.t4Show = false;
            this.defShow = true;
          }
        })
      }
      if (this.option.q5) {
        getVal(this.option.q5).then(res => {
          if (res.data.data == this.option.t5) {
            this.t5Show = true;
            this.defShow = false;
          } else {
            this.t5Show = false;
            this.defShow = true;
          }
        })
      }
      if (this.option.q6) {
        getVal(this.option.q6).then(res => {
          if (res.data.data == this.option.t6) {
            this.t6Show = true;
            this.defShow = false;
          } else {
            this.t6Show = false;
            this.defShow = true;
          }
        })
      }

      if (this.option.q7) {
        getVal(this.option.q7).then(res => {
          if (res.data.data == this.option.t7) {
            this.t7Show = true;
            this.defShow = false;
          } else {
            this.t7Show = false;
            this.defShow = true;
          }
        })
      }

      if (this.option.q8) {
        getVal(this.option.q8).then(res => {
          if (res.data.data == this.option.t8) {
            this.t8Show = true;
            this.defShow = false;
          } else {
            this.t8Show = false;
            this.defShow = true;
          }
        })
      }
      if (this.option.q9) {
        getVal(this.option.q9).then(res => {
          if (res.data.data == this.option.t9) {
            this.t9Show = true;
            this.defShow = false;
          } else {
            this.t9Show = false;
            this.defShow = true;
          }
        })
      }


      if (this.option.q10) {
        getVal(this.option.q10).then(res => {
          this.t10Show = res.data.data == this.option.t10;
        })
      }
      if (this.option.q11) {
        getVal(this.option.q11).then(res => {
          this.t11Show = res.data.data == this.option.t11;
        })
      }

      if (this.option.q12) {
        getVal(this.option.q12).then(res => {
          this.t12Show = res.data.data == this.option.t12;
        })
      }

      if (this.option.q13) {
        getVal(this.option.q13).then(res => {
          this.t13Show = res.data.data == this.option.t13;
        })
      }

      if (this.option.q14) {
        getVal(this.option.q14).then(res => {
          this.t14Show = res.data.data == this.option.t14;
        })
      }
      if (this.option.q15) {
        getVal(this.option.q15).then(res => {
          this.t15Show = res.data.data == this.option.t15;
        })
      }
      if (this.option.q16) {
        getVal(this.option.q16).then(res => {
          this.t16Show = res.data.data == this.option.t16;
        })
      }
      if (this.option.q17) {
        getVal(this.option.q17).then(res => {
          this.t17Show = res.data.data == this.option.t17;
        })
      }

      if (this.option.q18) {
        getVal(this.option.q18).then(res => {
          this.t18Show = res.data.data == this.option.t18;
        })
      }
      if (this.option.q19) {
        getVal(this.option.q19).then(res => {
          this.t19Show = res.data.data == this.option.t19;
        })
      }
      if (this.option.q20) {
        getVal(this.option.q20).then(res => {
          this.t20Show = res.data.data == this.option.t20;
        })
      }
      if (this.option.q21) {
        getVal(this.option.q21).then(res => {
          this.t21Show = res.data.data == this.option.t21;
        })
      }

      if (this.option.q22) {
        getVal(this.option.q22).then(res => {
          this.t22Show = res.data.data == this.option.t22;
        })
      }


      if (this.option.r1) {
        getVal(this.option.r1).then(res => {
          this.r1Show = res.data.data == this.option.e1;
        })
      }


      if (this.option.r2) {
        getVal(this.option.r2).then(res => {
          this.r2Show = res.data.data == this.option.e2;
        })
      }
      if (this.option.r3) {
        getVal(this.option.r3).then(res => {
          this.r3Show = res.data.data == this.option.e3;
        })
      }
      if (this.option.r4) {
        getVal(this.option.r4).then(res => {
          this.r4Show = res.data.data == this.option.e4;
        })
      }
      if (this.option.r5) {
        getVal(this.option.r5).then(res => {
          this.r5Show = res.data.data == this.option.e5;
        })
      }
      if (this.option.r6) {
        getVal(this.option.r6).then(res => {
          this.r6Show = res.data.data == this.option.e6;
        })
      }
      if (this.option.r7) {
        getVal(this.option.r7).then(res => {
          this.r7Show = res.data.data == this.option.e7;
        })
      }
      if (this.option.r8) {
        getVal(this.option.r8).then(res => {
          this.r8Show = res.data.data == this.option.e8;
        })
      }
      if (this.option.r9) {
        getVal(this.option.r9).then(res => {
          this.r9Show = res.data.data == this.option.e9;
        })
      }
      if (this.option.r10) {
        getVal(this.option.r10).then(res => {
          this.r10Show = res.data.data == this.option.e10;
        })
      }
      if (this.option.r11) {
        getVal(this.option.r11).then(res => {
          this.r11Show = res.data.data == this.option.e11;
        })
      }
      if (this.option.r12) {
        getVal(this.option.r12).then(res => {
          this.r12Show = res.data.data == this.option.e12;
        })
      }
      if (this.option.r13) {
        getVal(this.option.r13).then(res => {
          this.r13Show = res.data.data == this.option.e13;
        })
      }
      if (this.option.r14) {
        getVal(this.option.r14).then(res => {
          this.r14Show = res.data.data == this.option.e14;
        })
      }
      if (this.option.r15) {
        getVal(this.option.r15).then(res => {
          this.r15Show = res.data.data == this.option.e15;
        })
      }
      if (this.option.r16) {
        getVal(this.option.r16).then(res => {
          this.r16Show = res.data.data == this.option.e16;
        })
      }
      if (this.option.r17) {
        getVal(this.option.r17).then(res => {
          this.r17Show = res.data.data == this.option.e17;
        })
      }
      if (this.option.r18) {
        getVal(this.option.r18).then(res => {
          this.r18Show = res.data.data == this.option.e18;
        })
      }
      if (this.option.r19) {
        getVal(this.option.r19).then(res => {
          this.r19Show = res.data.data == this.option.e19;
        })
      }
      if (this.option.r20) {
        getVal(this.option.r20).then(res => {
          this.r20Show = res.data.data == this.option.e20;
        })
      }
      if (this.option.r21) {
        getVal(this.option.r21).then(res => {
          this.r21Show = res.data.data == this.option.e21;
        })
      }
      if (this.option.r22) {
        getVal(this.option.r22).then(res => {
          this.r22Show = res.data.data == this.option.e22;
        })
      }
      if (this.option.r23) {
        getVal(this.option.r23).then(res => {
          this.r23Show = res.data.data == this.option.e23;
        })
      }
      if (this.option.r24) {
        getVal(this.option.r24).then(res => {
          this.r24Show = res.data.data == this.option.e24;
        })
      }
      if (this.option.r25) {
        getVal(this.option.r25).then(res => {
          this.r25Show = res.data.data == this.option.e25;
        })
      }
      if (this.option.r26) {
        getVal(this.option.r26).then(res => {
          this.r26Show = res.data.data == this.option.e26;
        })
      }

    }
  }
}
</script>
