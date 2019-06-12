<template>
    <div>
        <ul class="flex border-b">
            <li class="-mb-px mr-1">
                {{ text }}
                <div class="microphone" v-if="recognition.support" :class="{'is-listening': isListening }" @click="startListenVoiceCommands">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 16c2.206 0 4-1.795 4-4v-6c0-2.206-1.794-4-4-4s-4 1.794-4 4v6c0 2.205 1.794 4 4 4z"></path>
                        <path d="M19 12v-2c0-0.552-0.447-1-1-1s-1 0.448-1 1v2c0 2.757-2.243 5-5 5s-5-2.243-5-5v-2c0-0.552-0.447-1-1-1s-1 0.448-1 1v2c0 3.52 2.613 6.432 6 6.92v1.080h-3c-0.553 0-1 0.447-1 1s0.447 1 1 1h8c0.553 0 1-0.447 1-1s-0.447-1-1-1h-3v-1.080c3.387-0.488 6-3.4 6-6.92z"></path>
                    </svg>
                </div>
                <!--                <img src="../../assets/arrow.jpg">-->
            </li>
        </ul>

    </div>
</template>

<style scoped>

    .microphone {
        z-index: 30;
        left: 0;
        width: 3em;
        height: 3em;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.5);
        /*-webkit-transition: opacity .3s, color .2s, -webkit-transform .3s;*/
        /*transition: opacity .3s, color .2s, -webkit-transform .3s;*/
        /*transition: opacity .3s, transform .3s, color .2s;*/
        /*transition: opacity .3s, transform .3s, color .2s, -webkit-transform .3s;*/
    }

    .microphone:hover {
        color: rgba(0, 0, 0, 0.8);
    }

    .microphone svg {
        fill: currentColor;
        z-index: 2;
        position: relative;
        font-size: 1.5em;
        width: 1em;
        height: 1em;
    }

    .microphone:before,
    .microphone:after {
        /*content: '';*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*border-radius: 50%;*/
        /*opacity: 0;*/
    }

    .microphone:after {
        z-index: 1;
        background: rgba(255, 255, 255, 0.1);
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
    }

    .microphone:before {
        z-index: 2;
        border: 3px solid rgba(255, 255, 255, 0.1);
        opacity: 0;
    }

    .microphone.is-listening {
        color: #d82e2e;
    }

    .microphone.is-listening:before {
        -webkit-animation: pulseAway 1s infinite;
        animation: pulseAway 1s infinite;
    }

    .microphone.is-listening:after {
        opacity: 1;
        -webkit-animation: pulse 1.5s linear infinite;
        animation: pulse 1.5s linear infinite;
    }

</style>

<script>
  export default {
    name: 'Arrow',
    components: {},
    data: function () {
      return {
        text: 'คลิ๊กรูปไมค์เพื่อพูด',
        recognition: {
          support: false,
          obj: null,
          config: {
            lang: 'th-TH',
            interimResults: false,
            maxAlternatives: true,
          },
        },
        loading: false,
        isListening: false,
        messages: [],
      }
    },
    created: function () {
      let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || undefined
      if (SpeechRecognition) {
        this.recognition.support = true
        this.recognition.SpeechRecognition = SpeechRecognition
      }
    },
    methods: {
      speak: function (msg) {
        if (!this.synthesis.support) return
        let self = this
        let langKey = this.checkThaiLanguage(msg.content) ? 'th' : 'en'
        let config = this.synthesis.config[langKey]

        self.synthesis.message = msg.content

        self.$refs.speakEvent.onclick = function (e) {
          if (!self.isMobile) {
            self.synthesis._init = true
          }
          if (e !== 'force') {
            if (self.synthesis._init) {
              return
            } else {
              self.synthesis._init = true
            }
          }
          // if (self.synthesis.lastMsg.id === msg.id) {
          //   self.synthesis.message = ''
          // }
          self.synthesis.obj = new SpeechSynthesisUtterance()
          for (let k in config) {
            self.synthesis.obj[k] = config[k]
          }
          self.synthesis.obj.voice = langKey === 'th' ? self.getThaiVoice() : self.getEngVoice()
          self.synthesis.obj.text = self.synthesis.message
          setTimeout(function () {
            speechSynthesis.speak(self.synthesis.obj)
            self.synthesis.lastMsg = msg
          }, 200)
        }
        self.$refs.speakEvent.onclick('force')
      },
      getThaiVoice: function () {
        return this.filterVoice(v => v.lang === 'th-TH')
          || this.filterVoice(v => v.lang.indexOf('th') >= 0)
      },
      startListenVoiceCommands: function () {
        if (this.isListening) return
        let self = this
        self.isListening = true
        this.recognition.obj = new this.recognition.SpeechRecognition()
        for (let k in this.recognition.config) {
          this.recognition.obj[k] = this.recognition.config[k]
        }
        self.recognition.obj.start()
        self.recognition.obj.onresult = function (event) {
          let result = event.results[0][0].transcript
          self.meTalk(result)
        }
        self.recognition.obj.onend = function () {
          self.isListening = false
          self.recognition.obj.stop()
        }
      },
      meTalk: function (message) {
        if (!message.trim()) return
        this.text = message
        this.$microgear.microgear.chat('arrow', message)
        //let self = this
        //let msg = this.createMessage('me', message)
        //self.messages.push(msg)
        //self.resetForm()
        //self.onCompleteTalk()
        //setTimeout(function () {
        //  self.themTalk(message)
        //}, Math.random() * 500 + 500)
      },

      checkThaiLanguage (message) {
        return /[\u0E01-\u0E5B]/.test(message)
      },
    },
    mounted () {
    },
    watch: {
      $route (to, from) {
      },
    },
  }
</script>
