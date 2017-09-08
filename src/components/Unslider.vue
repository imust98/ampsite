<template>
  <div class="m-banner">
    <div class="unslider">
      <ul>
        <li style="background: red" v-bind:style="{zIndex:zIndexList[0]}" v-bind:class="{active:index === 0}">
          <div class="text">
            <h3>APM带你快速搞定网络问题</h3>
            <h4>像网络不完美Say No</h4>
            <div class="link">
              <a href="#" class="btn btn-primary">免费试用</a>
              <a href="#" class="btn btn-default">查看DEMO</a>
            </div>
          </div>
        </li>
        <li style="background:cadetblue" v-bind:style="{zIndex:zIndexList[1]}" v-bind:class="{active:index === 1}">
          <div class="text">占座2</div>
        </li>
        <li style="background: yellow" v-bind:style="{zIndex:zIndexList[2]}" v-bind:class="{active:index === 2}">
          <div class="text">占座3</div>
        </li>
      </ul>
    </div>
    <div class="indicator">
      <ul>
        <li v-bind:class="{active:index === 0}" v-on:click="go(0)">
          <div></div>
        </li>
        <li v-bind:class="{active:index === 1}" v-on:click="go(1)">
          <div></div>
        </li>
        <li v-bind:class="{active:index === 2}" v-on:click="go(2)">
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'unslider',
    data () {
      return {
        time: 5000,
        index: 0,
        zIndexList: [1, 0, 0]
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
          this.zIndexList[this.index] = Math.max(...this.zIndexList) + 1
        }.bind(this), this.time)
      },
      go: function (index) {
        this.stop()
        this.index = index
        this.zIndexList[this.index] = Math.max(...this.zIndexList) + 1
        this.play()
      },
      stop: function () {
        clearInterval(this.interval)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../style/base.scss';
  @import '../style/common.scss';
  @import '../style/keyframes.scss';

  .m-banner {
    position: relative;
    .unslider {
      ul {
        position: relative;
      }
      li {
        position: absolute;
        height: 500px;
        width: 100%;
        &.active {
          animation: imageFadeIn 1s ease-out
        }
      }
      .text {
        width: 1200px;
        margin: 0px auto;
        color: #fff;
        padding-top: 160px;
      }
      .link {
        margin-top: 50px;
        font-size: 0px;
        .btn {
          margin-right: 30px;
        }
      }
      li:first-child {
        h3 {
          font-size: 46px;
        }
        h4 {
          margin-top: 24px;
          font-size: 24px;
        }
      }
    }
    .indicator {
      position: relative;
      top: 460px;
      width: 1200px;
      display: flex;
      margin: 0px auto;
      z-index: 9999;
      ul {
        display: flex;
        align-content: center;
        margin: 0px auto;
      }
      li {
        width: 40px;
        height: 10px;
        margin: 0px 5px;
        background: #fff;
        cursor: pointer;
        box-sizing: border-box;
        & > div {
          width: 0px;
          height: 100%;
        }
        &.active {
          div {
            background: #000;
            animation: longer 5s linear
          }
        }
      }
    }
  }
</style>
