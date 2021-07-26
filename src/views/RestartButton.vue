<!--
 * @Author: xkloveme
 * @Date: 2021-07-26 15:36:12
 * @LastEditTime: 2021-07-26 16:05:47
 * @LastEditors: xkloveme
 * @Description: 
 * @FilePath: /utools-desktop/src/views/RestartButton.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="flex flex-col items-center">
    <div class="w-20 h-20  rounded-full flex justify-center items-center bg-mygray-deeldark border-2 border-gray-600" v-if="typename == 'shutdown'">
      <!-- <v-icon class="" x-large>mdi-power</v-icon> -->
       <i class="w-full h-full flex justify-center items-center  text-6xl  text-gray-100 material-icons" >power</i>
    </div>
    <div class="mt-4 bg-mygray-deeldark border-2 border-gray-600 rounded-lg px-2 py-0.5" style="text-align:center" v-if="typename == 'shutdown'">
      Shut down
    </div>
    <div @mouseover="hover = true" @mouseleave="hover = false" v-if="typename != 'shutdown'">
      <div ref="ticon" class="w-20 h-20  rounded-full flex justify-center items-center">
        <i v-if="typename == 'sleep'" :class="icolor_class">nightlight_round</i>
        <i v-if="typename == 'restart'" :class="icolor_class" >autorenew</i>
      </div>
      <div class="h-4 w-20"></div>
      <div ref="text" class="rounded-lg px-2 py-0.5 text-gray-100" style="text-align:center">{{ typename == 'sleep' ? 'Sleep' : 'Restart' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blank',
  components: {},
  data() {
    return {
      hover: false,
      icolor_class: 'w-full h-full flex justify-center items-center  text-gray-100 text-6xl material-icons'
    };
  },
  props: {
    typename: {
      type: String,
      default: 'shutdown'
    }
  },
  created() {},
  mounted() {},
  watch: {
    hover(val) {
      if (val) {
        this.$refs.ticon.classList.add('bg-mygray-purple');
        this.icolor_class = 'w-full h-full flex justify-center items-center  text-gray-900 text-6xl material-icons';
        this.$refs.text.classList.remove('text-gray-100');
        this.$refs.text.classList.add('text-gray-900');
        this.$refs.text.classList.add('bg-mygray-purple');
      } else {
        this.$refs.ticon.classList.remove('bg-mygray-purple');
        this.icolor_class = 'w-full h-full flex justify-center items-center  text-gray-100 text-6xl material-icons';
        this.$refs.text.classList.add('text-gray-100');
        this.$refs.text.classList.remove('text-gray-900');
        this.$refs.text.classList.remove('bg-mygray-purple');
      }
    }
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
