<template>
  <div class="m-process">
    <div class="app">
      <img src="../assets/website_animation_app.png" alt="">
      <p>APP</p>
    </div>
    <div class="dns">
      <div class="an_0"></div>
      <div class="an_1"></div>
      <div class="an_2"></div>
      <div class="an_3"></div>
      <div class="an_4"></div>
      <img src="../assets/dns/website_animation_DNS.png" alt="">
      <p>DNS监测</p>
    </div>
    <div class="isp">
      <div class="an_1"></div>
      <div class="an_2">
        <div class="an_2_1"></div>
      </div>
      <div class="an_3"></div>
      <div class="an_4"></div>
      <img src="../assets/isp/website_animation_ISP.png" alt="">
      <p>ISP监测</p>
    </div>
    <div class="cdn">
      <div class="an_0"></div>
      <div class="an_1"></div>
      <div class="an_2"></div>
      <div class="an_3"></div>
      <img src="../assets/cdn/website_animation_CDN.png" alt="">
      <p>CDN监测</p>
    </div>
    <div class="server active">
      <div class="an_0"></div>
      <img src="../assets/website_animation_server.png" alt="">
      <p>Server</p>
    </div>
  </div>
</template>

<script>
  //  require('../styles/keyframes.mcss');
  export default {
    name: 'process',
    data () {
      return {
        msg: ''
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  @import '../style/keyframes.scss';

  .m-process {
    display: flex;
    .app, .dns, .isp, .cdn, .server {
      position: relative;
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
        position: absolute;
        width: 30px;
        height: 16px;
        left: 215px;
        top: 100px;
      }
      .an_1 {
        @include ems;
        top: 140px;
        left: -60px;
        background: url(../assets/website_animation_file01.png);
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
          animation: light1 0.8s linear 5;
        }
        .an_1 {
          animation: trans60 1s, fadeIn 1s ease-in forwards;
        }
        .an_2 {
          animation: trans60 1s 1s, fadeIn 1s 1s ease-in forwards;
        }
        .an_3 {
          animation: shake3 0.2s 2s linear 5;
        }
        .an_4 {
          animation: trans30 1s 3s, fadeIn 1s 3s ease-in forwards;
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
          animation: trans60 1s, fadeIn 1s linear forwards;
        }
        .an_2 {
          animation: retate20 2s 1s linear alternate 2;
        }
        .an_2_1 {
          animation: light2 0.8s 1s linear 5;
        }
        .an_3 {
          animation: shake1 0.2s 1s linear 20;
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
      &.active {
        .an_0 {
          animation: trans60 1s, fadeIn 1s linear forwards;
        }
        .an_1 {
          animation: retate30 2s 1s linear forwards 2;
        }
        .an_2 {
          animation: retate30 2s 1.5s linear forwards 2;
        }
        .an_3 {
          animation: moveDown 2s 1s linear forwards 2;
        }
      }
    }
    .server {
      .an_0 {
        @include ems;
        left: -80px;
        top: 150px;
        background: url(../assets/website_animation_file04.png);
      }
      &.active {
        .an_0 {
          animation: trans60 1s, fadeIn 1s linear forwards;
        }
      }
    }
  }
</style>
