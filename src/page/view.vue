<template>
  <div class="build views">
    <container :props="props" :option="option"  ref="container"></container>
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



    // this.createConnection();
    // this.doSubscribe();
  },
  methods: {

    //订阅主题
    doSubscribe() {
      const {topic, qos} = this.subscription
      this.client.subscribe(topic, qos, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
    },
    //取消订阅
    doUnSubscribe() {
      const {topic} = this.subscription
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log('Unsubscribe error', error)
        }
      })
    },
    //消息发布
    doPublish() {
      const {topic, qos, payload} = this.publication
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    //断开连接
    destroyConnection() {
      if (this.client.connected) {
        try {
          this.client.end()
          this.client = {
            connected: false,
          }
          console.log('Successfully disconnected!')
        } catch (error) {
          console.log('Disconnect failed', error.toString())
        }
      }
    }

  },
  mixins: [init],
}
</script>
<style lang="scss">
@import "../styles/style.scss";
</style>
