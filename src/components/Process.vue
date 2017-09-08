<template>
  <div class="m-process">
    <h2>在故障大面积影响用户前快速定位修复</h2>
    <h3>从用户终端，到网络，直到服务端，定位性能瓶颈</h3>
    <div class="process">
      <div class="process_image process_dns" v-bind:class="{active:index===0}">
        <img src="../assets/dns/website_DNS_tips.png" alt="">
        <div class="description">
          <h4>DNS劫持监控</h4>
          <p>全面监控DNS和内容劫持分析，帮助您及时发现劫持最严重的URL，并定位到劫持主机，让您的app远离劫持风险 </p>
        </div>
      </div>
      <div class="process_image process_isp" v-bind:class="{active:index===1}">
        <img src="../assets/isp/website_ISP_tips.png" alt="">
        <div class="description">
          <h4>ISP网络质量问题分析 </h4>
          <p>精确分析网络出错和慢响应请求，并可通过具体的诊断信息，判断出现问题时的网络状态，方便问题归因。</p>
        </div>
      </div>
      <div class="process_image process_cdn" v-bind:class="{active:index===2}">
        <img src="../assets/cdn/website_CDN_tips.png" alt="">
        <div class="description">
          <h4>CDN性能分析</h4>
          <p>深入了解CDN在每个地域和运营商下的表现、每个CDN节点的访问质量和调度情况，快速定位CDN常见问题，获得最优的加速效果</p>
        </div>
      </div>
    </div>
    <div class="accordion">
      <div class="app">
        <img src="../assets/website_animation_app.png" alt="">
        <p>APP</p>
      </div>
      <div class="dns" v-on:mouseenter="go(0)" v-bind:class="{active:index===0}">
        <div class="an_0"></div>
        <div class="an_1"></div>
        <div class="an_2"></div>
        <div class="an_3"></div>
        <div class="an_4"></div>
        <img src="../assets/dns/website_animation_DNS.png" alt="">
        <p>DNS监测</p>
      </div>
      <div class="isp" v-on:mouseenter="go(1)" v-bind:class="{active:index===1}">
        <div class="an_1"></div>
        <div class="an_2">
          <div class="an_2_1"></div>
        </div>
        <div class="an_3"></div>
        <div class="an_4"></div>
        <img src="../assets/isp/website_animation_ISP.png" alt="">
        <p>ISP监测</p>
      </div>
      <div class="cdn" v-on:mouseenter="go(2)" v-bind:class="{active:index===2}">
        <div class="an_0"></div>
        <div class="an_1"></div>
        <div class="an_2"></div>
        <div class="an_3"></div>
        <div class="an_4"></div>
        <img src="../assets/cdn/website_animation_CDN.png" alt="">
        <p>CDN监测</p>
      </div>
      <div class="server" v-bind:class="{active:index===3}">
        <img src="../assets/website_animation_server.png" alt="">
        <p>Server</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'process',
    data () {
      return {
        index: 0,
        time: 5000
      }
    },
    mounted: function () {
      this.play()
    },
    methods: {
      play: function () {
        this.interval = setInterval(function () {
          this.index++
          if (this.index === 3) {
            this.index = 0
          }
        }.bind(this), this.time)
      },
      stop: function () {
        clearInterval(this.interval)
      },
      go: function (index) {
        this.stop()
        this.index = index
        this.play()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  @import '../style/base.scss';
  @import '../style/common.scss';
  @import '../style/keyframes.scss';
  .m-process {
    width: 1200px;
    padding-top: 80px;
    margin: 0px auto;
    h2{
      font-size: 34px;
      color:#454545;
      font-weight: normal;
      text-align: center;
      padding-bottom: 20px;

    }
    h3{
      font-size: 16px;
      color: #666;
      padding-bottom: 74px;
      font-weight: normal;
      text-align: center;
    }
  }

  .process {
    position: relative;
    width: 100%;
    height: 255px;
    margin: 0px auto;
    .description {
      position: absolute;
      width: 250px;
      top: 0px;
      h4 {
        padding-top: 20px;
        font-size: 18px;
        color: #333;
        font-weight: normal;
      }
      p {
        font-size: 12px;
        line-height: 24px;
        color: #838383;
      }
    }
    .process_image {
      position: absolute;
      img, .description {
        display: none;
      }
      &.active {
        z-index: 2;
        img, .description {
          display: block;
        }
        img {
          animation: imageFadeIn 1s 0.5s both, moveUp 0.5s 0.5s ease-out both;
        }
        .description {
          animation: imageFadeIn 1s 0.7s both, moveUp 0.5s 0.7s ease-out both;
        }
      }
    }
    .process_dns {
      left: 225px;
      top: 0px;
      .description {
        left: 515px;
      }
    }
    .process_isp {
      left: 260px;
      top: 0px;
      .description {
        left: 480px;
      }
    }
    .process_cdn {
      left: 455px;
      top: 0px;
      .description {
        left: -255px;
        h4 {
          text-align: right;
        }
      }
    }
  }

  .accordion {
    display: flex;
    justify-content: center;
    .app, .dns, .isp, .cdn, .server {
      position: relative;
      cursor: pointer;
    }
    @mixin ems {
      position: absolute;
      display: inline-block;
      height: 56px;
      width: 56px;
      opacity: 0;
    }

    .dns {
      .an_0 {
        @include ems;
        top: 140px;
        left: -60px;
        background: url(../assets/website_animation_file01.png);
      }
      .an_1 {
        position: absolute;
        width: 30px;
        height: 16px;
        left: 215px;
        top: 100px;
      }
      .an_2 {
        position: absolute;
        width: 24px;
        height: 28px;
        top: 163px;
        left: 40px;
        opacity: 0;
        background: url(../assets/dns/animation_DNS_symbol02.png);
      }
      .an_3 {
        position: absolute;
        width: 97px;
        height: 88px;
        top: 143px;
        left: 101px;
        background: url(../assets/dns/animation_DNS_symbol01.png);
      }
      .an_4 {
        position: absolute;
        width: 29px;
        height: 32px;
        top: 159px;
        left: 260px;
        opacity: 0;
        background: url(../assets/dns/animation_DNS_symbol03.png);
      }
      &.active {
        .an_0 {
          animation: trans60 1s ease-out, fadeInOut 1s ease-out forwards;
        }
        .an_1 {
          animation: light1 0.8s 1s linear 5;
        }
        .an_2 {
          animation: trans60 1s 1s, fadeInOut 1s 1s ease-in forwards;
        }
        .an_3 {
          animation: shake 0.2s 2s linear 10;
        }
        .an_4 {
          animation: trans30 1s 4s, fadeInOut 1s 4s ease-in forwards;
        }
      }
    }
    .isp {
      .an_1 {
        @include ems;
        top: 110px;
        left: -70px;
        background: url(../assets/website_animation_file01.png);
      }
      .an_2 {
        position: absolute;
        width: 40px;
        height: 40px;
        top: 30px;
        left: 109px;
        background: url(../assets/isp/animation_ISP_symbol02.png);
      }
      .an_2_1 {
        position: absolute;
        width: 20px;
        height: 20px;
        left: -4px;
        top: -7px;
        transform: rotate(-30deg);
      }
      .an_3 {
        position: absolute;
        width: 32px;
        height: 58px;
        top: 46px;
        left: 176px;
        background: url(../assets/isp/animation_ISP_symbol01.png);
      }
      .an_4 {
        position: absolute;
        width: 14px;
        height: 22px;
        top: 121px;
        left: 262px;
      }
      &.active {
        .an_1 {
          animation: trans60 1s, fadeInOut 1s linear forwards;
        }
        .an_2 {
          animation: retate20 2s 1s linear alternate 2;
        }
        .an_2_1 {
          animation: light2 0.8s 1s linear 5;
        }
        .an_3 {
          animation: shake 0.2s 1s linear 20;
        }
        .an_4 {
          animation: light3 0.8s 1s linear 5;
        }
      }
    }
    .cdn {
      .an_0 {
        @include ems;
        left: -60px;
        top: 70px;
        background: url(../assets/website_animation_file03.png);
      }
      .an_1 {
        position: absolute;
        width: 39px;
        height: 47px;
        left: 47px;
        top: 105px;
        transform-origin: 50% 100%;
        background: url(../assets/cdn/animation_CDN_symbol02.png);
      }
      .an_2 {
        position: absolute;
        width: 31px;
        height: 38px;
        left: 154px;
        top: 163px;
        transform-origin: 50% 100%;
        background: url(../assets/cdn/animation_CDN_symbol01.png);
      }
      .an_3 {
        position: absolute;
        width: 66px;
        height: 85px;
        left: 200px;
        top: 50px;
        background: url(../assets/cdn/animation_CDN_symbol03.png);
      }
      .an_4 {
        @include ems;
        left: 230px;
        top: 150px;
        background: url(../assets/website_animation_file04.png);
      }
      &.active {
        .an_0 {
          animation: trans60 1s, fadeInOut 1s linear forwards;
        }
        .an_1 {
          animation: retate30 2s 1s linear forwards 2;
        }
        .an_2 {
          animation: retate30 1.5s 2s linear forwards 2;
        }
        .an_3 {
          animation: moveDown 2s 1s linear forwards 2;
        }
        .an_4 {
          animation: trans60 1s 4s, fadeInOut 1s 4s linear forwards;
        }
      }
    }
  }
</style>
