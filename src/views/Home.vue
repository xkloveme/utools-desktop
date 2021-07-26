<!--
 * @Author: xkloveme
 * @Date: 2021-07-19 17:09:26
 * @LastEditTime: 2021-07-26 18:12:22
 * @LastEditors: xkloveme
 * @Description: 登录页
 * @FilePath: /utools-desktop/src/views/Home.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="w-screen h-screen main-background select-none overflow-hidden">
    <div
      ref="background_image"
      class="absolute w-full h-full flex flex-col justify-center items-center"
      v-if="show_keyboard"
    >
      <div style="height: 60vh"></div>
      <!-- <KeyBoard class="z-20" @vkey_pressed="vkey_pressed"/> -->
    </div>
    <div ref="content" class="flex flex-col w-full h-full">
      <div
        ref="background_image"
        class="absolute w-full h-full flex flex-row justify-center items-center"
      >
        <div class="w-140"></div>
        <img
          src="@/assets/deepin_3.png"
          alt=""
          class="w-160"
          style="opacity: 0.03; min-width: 600px"
          @load="bgloaded"
        />
      </div>
      <div
        ref="header"
        class="
          w-full
          h-32
          flex-none flex flex-col
          items-center
          justify-center
          z-10
        "
      >
        <div class="text-4xl tracking-wider light font-sans">
          {{ PrefixZero(date_hour, 2) }}:{{ PrefixZero(date_minute, 2) }}
        </div>
        <div class="mt-1.5 text-sm">
          {{ date_year }}/{{ date_month }}/{{ date_date }}
          {{ date_weekday_display }}
        </div>
      </div>
      <div
        ref="middle"
        class="
          w-full
          h-20
          flex-grow flex flex-col
          justify-center
          items-center
          z-10
        "
        style="min-height: 300px"
      >
        <div
          class="w-72 h-40 rounded-xl flex flex-col flex-nowrap"
          style="background-color: rgba(81, 90, 156)"
          v-if="show_middle"
        >
          <div class="h-8 flex justify-center items-end">
            <div class="h-full" style="width: 25%">
              <div class="ratio-container">
                <div
                  class="ratio-content rounded-lg bg-center bg-cover"
                  :style="{
                    backgroundImage: 'url(' + (user.avatar || avatar) + ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="
              h-full
              flex
              justify-center
              items-center
              text-2xl
              tracking-wide
              pt-4
            "
          >
            {{ user.nickname || user_name }}
          </div>
          <div class="absolute w-72 h-40" style="pointer-events: none">
            <!-- <div
              ref="infinite_bar"
              style="bottom:20px"
              class="absolute rounded-lg  flex justify-center items-center py-3 px-3"
              :class="{ 'process-animation': relay, hidden: !show_loading_bar }"
            ></div> -->
          </div>
          <div class="h-full flex justify-center items-center py-3 px-3">
            <input
              ref="password_input_bar"
              v-model="password"
              @keyup.enter="login_clicked"
              type="password"
              placeholder="Enter your password"
              auto-focus
              autocomplete
              class="w-full h-full rounded-lg"
              style="
                background-color: rgba(180, 190, 220, 0.35);
                outline-color: rgba(0, 119, 230);
                text-align: center;
              "
            />
          </div>
        </div>
        <button
          class="
            rounded-full
            w-12
            h-12
            mt-2
            bg-blue-600
            flex
            items-center
            justify-center
            hover:bg-blue-700
            outline-none
            animate__animated
          "
          v-if="show_middle"
          @click="login_clicked"
          :class="{ animate__shakeX: button_shaking }"
        >
          <i class="text-gray-100 material-icons">arrow_forward</i>
        </button>
        <div
          v-if="!show_middle"
          class="
            h-full
            w-full
            flex flex-row flex-nowrap
            justify-evenly
            items-center
          "
          style="max-width: 650px; min-width: 300px"
          @click="blanker"
        >
          <RestartButton :typename="'shutdown'" @click.native="halt_clicked" />
          <RestartButton
            :typename="'restart'"
            @click.native="restart_clicked"
          />
          <RestartButton :typename="'sleep'" @click.native="halt_clicked" />
        </div>
      </div>
      <div ref="footer" class="w-full h-32 flex-none flex z-10 flex-wrap">
        <div
          class="w-76 h-full flex-none flex justify-center items-center"
          style="min-width: 300px"
        >
          <img src="@/assets/deepin_text_1.png" alt="" class="w-32" />
          <div class="flex-none flex flex-col-reverse pl-3">
            <div class="h-3"></div>
            <div class="absolute text-gray-400">20.2 Community Edition</div>
          </div>
        </div>
        <div class="h-full flex-grow"></div>
        <div
          class="h-full flex-none w-76 flex justify-center items-center pr-2"
          style="min-width: 300px"
        >
          <button
            class="
              rounded-full
              w-12
              h-12
              bg-mygray-light
              hover:bg-mygray-dark
              active:bg-mygray-darker
              flex
              justify-center
              items-center
              outline-none
            "
            @click="show_keyboard_clicked()"
          >
            <i class="text-gray-100 material-icons">home</i>
          </button>
          <button
            class="
              rounded-full
              w-12
              h-12
              bg-mygray-light
              hover:bg-mygray-dark
              active:bg-mygray-darker
              ml-8
              flex
              justify-center
              items-center
              outline-none
            "
            @click="show_middle_clicked"
          >
            <i class="text-gray-100 material-icons">power</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import KeyBoard from '@/components/Keyboard/KeyBoard.vue';
import RestartButton from './RestartButton.vue'
import avatar from '@/assets/avatar.jpg'

const weekdays = new Array(
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
)

export default {
  name: 'LoginPage',
  components: {
    // KeyBoard,
    RestartButton,
  },
  data() {
    return {
      avatar,
      login_locked: false,
      show_keyboard: false,
      show_middle: true,
      date_hour: 0,
      date_minute: 0,
      date_year: 1970,
      date_month: 1,
      date_date: 1,
      date_weekday: 0,
      // user_name:"Observer",
      user_name: 'Guest',
      password: '123456',
      password_answer: '123456',
      relay: false,
      show_loading_bar: false,
      button_shaking: false,
      timer: null,
      timer2: null,
    }
  },
  created() {
    this.refresh_time()
    window.setInterval(() => {
      this.refresh_time()
    }, 1000)
  },
  mounted() {
    let bar = this.$refs.password_input_bar
    bar

    this.timer = window.setInterval(() => {
      this.relay = false
      this.$refs.infinite_bar && (this.$refs.infinite_bar.style.width = '0px')
      this.timer2 = window.setTimeout(() => {
        this.relay = true
        this.$refs.infinite_bar &&
          (this.$refs.infinite_bar.style.width = '264px')
      }, 200)
    }, 800)
  },
  watch: {},
  computed: {
    date_weekday_display() {
      return weekdays[this.date_weekday]
    },
    user() {
       let user =window.utools && window.utools.getUser()
      return {
        avatar:this.avatar,
        nickname: this.user_name,
        type: 'user',
        ...user
      }
    },
  },
  methods: {
    PrefixZero(num, n) {
      return (Array(n).join(0) + num).slice(-n)
    },
    login_clicked() {
      // pw check
      if (this.password === this.password_answer) {
        // correct password
        this.login_locked = false
        this.show_loading_bar = true
        window.setTimeout(() => {
          this.show_loading_bar = false
          clearInterval(this.timer)
          clearTimeout(this.timer2)

          // this.$router.push({
          //   name: 'Desktop',
          // })
          // https://www.jixiaokang.com/utools-desktop"
          window.utools&&window.utools.ubrowser.goto('https://www.jixiaokang.com').run({
            fullscreen:true
          })
          // full screeen
          let elem = document.getElementById('app')
          elem.requestFullscreen()
        }, 1800)
        return
      } else if (this.password === '') {
        this.login_locked = true
        for (let i = 0; i < this.password_answer.length; i++) {
          window.setTimeout(() => {
            this.password += this.password_answer[i]
            if (i === this.password_answer.length - 1) {
              this.login_clicked()
            }
          }, 100 * i)
        }
      } else {
        // wrong password
        this.show_loading_bar = true
        window.setTimeout(() => {
          this.show_loading_bar = false
          this.button_shaking = true
        }, 3000)
        window.setTimeout(() => {
          this.button_shaking = false
        }, 3800)
      }
    },
    vkey_pressed(key, upperscale) {
      if (this.login_locked) {
        return
      }
      // functional keys only enter-left-right-delete has function
      this.$refs.password_input_bar.focus()
      if (key === 'QT') {
        key = "'"
      } else if (key === 'DH') {
        key = ','
      } else if (key === 'JH') {
        key = '.'
      } else if (key === 'SPACE') {
        key = ' '
      } else if (key === 'BAK') {
        let cur = this.$refs.password_input_bar.selectionStart
        this.password =
          this.password.substr(0, Math.max(0, cur - 1)) +
          this.password.substr(cur, this.password.length - cur)
        return
      } else if (key === 'LEFT') {
        let cur = this.$refs.password_input_bar.selectionStart
        this.$refs.password_input_bar.selectionStart =
          this.$refs.password_input_bar.selectionEnd = Math.max(cur - 1, 0)
        return
      } else if (key === 'RIGHT') {
        let cur = this.$refs.password_input_bar.selectionStart
        this.$refs.password_input_bar.selectionStart =
          this.$refs.password_input_bar.selectionEnd = Math.min(
            cur + 1,
            this.password.length
          )
        return
      } else if (key === 'ENTER') {
        this.login_clicked()
        return
      }
      let keykey =
        key.length == 1
          ? key
          : upperscale
          ? key.toUpperCase()
          : key.toLowerCase()
      if (!this.login_locked && keykey.length === 1) {
        let cur = this.$refs.password_input_bar.selectionStart
        this.password =
          this.password.substr(0, cur) +
          keykey +
          this.password.substr(cur, this.password.length - cur)
      }
    },
    show_keyboard_clicked() {
      window.utools&&window.utools.ubrowser.goto('https://www.jixiaokang.com').run()
      // this.show_keyboard = !this.show_keyboard
    },
    show_middle_clicked() {
      this.show_middle = !this.show_middle
      if (this.show_middle) {
        this.login_locked = false
      } else {
        this.login_locked = true
      }
    },
    blanker() {
      if (this.show_middle) {
        return
      } else {
        this.show_middle_clicked()
      }
    },
    refresh_time() {
      let date = new Date()
      this.date_year = date.getFullYear()
      this.date_month = date.getMonth() + 1
      this.date_date = date.getDate()
      this.date_weekday = date.getDay() - 1
      this.date_hour = date.getHours()
      this.date_minute = date.getMinutes()
    },
    bgloaded() {
      let ctime = new Date().getTime()
      let time_diff = Math.max(ctime - this.$store.state.start_load_time, 0)
      if (isNaN(time_diff) || time_diff === undefined || time_diff === null) {
        time_diff = 0
      }
      let wait_time = Math.max(1800 - time_diff, 0)
      window.setTimeout(() => {
        this.$store.commit('hide_interlude')
      }, wait_time)
    },
    restart_clicked() {
      location.reload()
    },
    halt_clicked() {
      let self = this
      document.body.style.cursor = 'progress'
      window.setTimeout(() => {
        document.body.style.cursor = 'default'
        self.timer = null
        clearInterval(self.timer)
        self.$router.push({
          path: '/down'
        })
      }, 800)
    },
  },
}
</script>

<style scoped>
.main-background {
  background-image: linear-gradient(
    to bottom right,
    rgba(37, 18, 108),
    rgba(17, 16, 118)
  );
  color: white;
}

::-webkit-input-placeholder {
  text-align: center;
  color: rgba(235, 235, 235, 0.8);
}

:-moz-placeholder {
  /* Firefox 18- */
  text-align: center;
  color: rgba(235, 235, 235, 0.8);
}

::-moz-placeholder {
  /* Firefox 19+ */
  text-align: center;
  color: rgba(235, 235, 235, 0.8);
}

:-ms-input-placeholder {
  text-align: center;
  color: rgba(235, 235, 235, 0.8);
}

.ratio-container {
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
  bottom: 125%;
}

/* If you want text inside of the container */
.ratio-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.process-animation {
  background: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#f5f7f8),
    color-stop(0.5, #b9b9bb),
    to(#ebeef0)
  );
  -webkit-border-radius: 10px;
  -webkit-transition: width 0.6s ease-in-out;
  opacity: 0.14;
}
</style>
