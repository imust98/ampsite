<template>
  <div class="m-slider">
    <h2>他们都在使用APM</h2>
    <div class="wrap-slider">
      <div class="prev" v-on:click="prev()"></div>
      <div class="slider" v-on:mouseover="stop()" v-on:mouseleave="restart()">
        <ul class="sliderlist">
          <li>
            <div class="abstract">
              <img src="" alt="">
              <div class="person">
                <div class="pname">寿丽丹</div>
                <div class="ptitle">浙江大学 计算机教授</div>
              </div>
            </div>
            <p>网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐</p>
          </li>
          <li>
            <div class="abstract">
              <img src="" alt="">
              <div class="person">
                <div class="pname">王文霞</div>
                <div class="ptitle">浙江大学 计算机教授</div>
              </div>
            </div>
            <p>
              网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐</p>
          </li>
          <li>
            <div class="abstract">
              <img src="" alt="">
              <div class="person">
                <div class="pname">刘志军</div>
                <div class="ptitle">浙江大学 计算机教授</div>
              </div>
            </div>
            <p>网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐乐网易云音乐乐网易云音乐</p>
          </li>
          <li>
            <div class="abstract">
              <img src="" alt="">
              <div class="person">
                <div class="pname">吴绮莉</div>
                <div class="ptitle">浙江大学 计算机教授</div>
              </div>
            </div>
            <p>网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐乐网易云音乐</p>
          </li>
        </ul>
      </div>
      <div class="next" v-on:click="next()"></div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default{
    name: 'slider',
    data () {
      return {
        delayTime: 5000,
        stopTag: false,
        speed: 1000,
        interval: undefined
      }
    },
    mounted: function () {
      this.play()
    },
    methods: {
      play: function () {
        this.interval = setInterval(function () {
          this.start()
        }.bind(this), this.delayTime)
      },
      start: function () {
        this.moveLeft()
      },
      prev: function () {
        if (!$('ul.sliderlist li:first').is(':animated')) {
          clearInterval(this.interval)
          this.interval = undefined
          this.moveLeft()
        }
      },
      next: function () {
        if (!$('ul.sliderlist li:first').is(':animated')) {
          clearInterval(this.interval)
          this.interval = undefined
          this.moveRight()
        }
      },
      moveLeft: function () {
        let self = this
        $('ul.sliderlist li:first').animate({'margin-left': '-380px'}, this.speed, function () {
          $(this).css('margin-left', '10px').appendTo($('ul.sliderlist'))
          if (self.stopTag) return
          if (!self.interval) {
            self.play()
          }
        })
      },
      moveRight: function () {
        let self = this
        $('ul.sliderlist li:last').prependTo($('ul.sliderlist'))
        $('ul.sliderlist li:first').css('margin-left', '-380px').animate({'margin-left': '10px'}, this.speed, function () {
          if (self.stopTag) return
          if (!self.interva) {
            self.play()
          }
        })
      },
      stop: function () {
        this.stopTag = true
        clearInterval(this.interval)
        this.interval = undefined
      },
      restart: function () {
        this.stopTag = false
        clearInterval(this.interval)
        this.interval = undefined
        this.play()
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../style/base.scss';
  @import '../style/common.scss';
  @import '../style/keyframes.scss';

  .m-slider {
    background: #f4fafa;
    padding: 80px 0px;
    h2{
      font-size: 34px;
      color: #454545;
      padding-bottom: 88px;
      text-align: center;
    }
    .wrap-slider{
      position: relative;
    }
    .slider {
      width: 1200px;
      margin: 0px auto;
      overflow: hidden;
      position: relative;
      ul {
        position: relative;
        width: 1600px;
      }
      li {
        float: left;
        margin: 0px 10px;
        padding: 20px;
        box-sizing: border-box;
        height: 290px;
        width: 380px;
        background: #fff url("../assets/website_viewpoint_icon.png") right top no-repeat;
        p {
          padding-top: 30px;
          font-size: 14px;
          line-height: 24px;
          color: #999;
        }
      }
      .abstract {
        display: flex;
        padding-top: 10px;
        img {
          width: 90px;
          height: 90px;
        }
        .person {
          padding-left: 10px;
          padding-top: 30px;
        }
        .pname {
          font-size: 16px;
          color: #454545;
        }
        .ptitle {
          margin-top: 10px;
          font-size: 14px;
          color: #7a7f86;
        }
      }
    }
    .prev, .next {
      position: absolute;
      width: 52px;
      height: 52px;
      left: 50%;
      top: 50%;
      cursor: pointer;
    }
    .prev {
      transform: translate(-720px, -26px);
      background: url("../assets/website_viewpoint_prev.png");
      &:hover {
        background: url("../assets/website_viewpoint_prev_sel.png");
      }
    }
    .next {
      transform: translate(670px, -26px);
      background: url("../assets/website_viewpoint_next.png");
      &:hover {
        background: url("../assets/website_viewpoint_next_sel.png");
      }
    }
  }
</style>
