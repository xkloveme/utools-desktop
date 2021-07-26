<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen overflow-hidden"
    style="background-color: rgba(16, 16, 16)"
  >
    <span class="text-white">按任意键继续_</span>
    <span class="cursor-blink">_</span>
  </div>
</template>

<script>
export default {
  name: 'Blank',
  components: {},
  data() {
    return {}
  },
  created() {
    let self = this
    document.onkeydown = function (e) {
      // var keyCode = e.keyCode || e.which || e.charCode
      // var ctrlKey = e.ctrlKey || e.metaKey
      // console.log(
      //   '🐛 ~ file: Down.vue ~ line 22 ~ created ~ ctrlKey',
      //   keyCode,
      //   ctrlKey
      // )
      self.$router.push({
        path: '/',
      })
      // if (ctrlKey && keyCode == 49) {
      //   self.copy()
      //   return false
      // }
    }
  },
  mounted() {
    // window.setTimeout(() => {
    //   this.$store.commit('hide_interlude')
    // }, 2000)
    // window.setTimeout(() => {
    //   this.exitfullscreen()
    // }, 4000)
  },
  watch: {},
  computed: {},
  methods: {
    exitfullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
  },
}
</script>

 <style scoped>
.cursor,
.cursor-blink {
  background-color: #00ff0a;
  color: #000;
}

.cursor-blink {
  animation: 1s steps(1, start) 0s normal none infinite running blink;
}
</style>
