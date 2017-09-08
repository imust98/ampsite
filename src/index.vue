<template>
  <div class="g-doc">
    <div class="g-head">
      <header class="m-head">
        <div class="logo">
          <a href="">
            <!--<img src="" alt="">-->
          </a>
        </div>
        <div class="navbar">
          <nav>
            <a href="">产品介绍</a>
            <a href="">咨询公告</a>
            <a href="">接入帮助</a>
            <a href="">SDK下载</a>
          </nav>
          <div class="user">
            <a href="" class="login">登录</a>
            <a href="" class="register">注册</a>
          </div>
        </div>
      </header>
    </div>
    <div class="g-banner" id="BAN">
      <unslider></unslider>
    </div>
    <div class="g-process">
      <process></process>
    </div>
    <div class="g-slider">
      <slider></slider>
    </div>
    <div class="g-advantage">
      <div class="m-advantage">
        <h2>我们的优势</h2>
        <div class="advantage">
          <ul>
            <li>
              <img src="./assets/website_advantage01.png" alt="">
              <h3>19年积累</h3>
              <p>一网19年技术积累全面开放，提供最专业的网络性能监控能力</p>
            </li>
            <li>
              <img src="./assets/website_advantage02.png" alt="">
              <h3>19年积累</h3>
              <p>一网19年技术积累全面开放，提供最专业的网络性能监控能力</p>
            </li>
            <li>
              <img src="./assets/website_advantage03.png" alt="">
              <h3>19年积累</h3>
              <p>一网19年技术积累全面开放，提供最专业的网络性能监控能力</p>
            </li>
            <li>
              <img src="./assets/website_advantage04.png" alt="">
              <h3>19年积累</h3>
              <p>一网19年技术积累全面开放，提供最专业的网络性能监控能力</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="g-start">
      <div class="m-start">
        <h2>开启您的APM之旅</h2>
        <h3>更好的性能，更轻松的工作</h3>
        <a href="" class="btn btn-primary">免费使用</a>
      </div>
    </div>
    <div class="g-foot">
      <div class="m-foot">
        <div class="copyright">
          <img src="" alt="">
          <p>一网公司版权所有 © 1997-2017</p>
          <p>增值电信业务经营许可证 B1.B2-20090185</p>
          <p>浙ICP备17006647号-2</p>
        </div>
        <div class="link">
          <ul>
            <li>
              <h4>服务与支持</h4>
              <ul>
                <li><a href="">新手帮助</a></li>
                <li><a href="">产品文档</a></li>
                <li><a href="">开发者资源</a></li>
              </ul>
            </li>
            <li>
              <h4>关于</h4>
              <ul>
                <li><a href="">关于我们</a></li>
                <li><a href="">联系我们</a></li>
                <li><a href="">友情链接</a></li>
              </ul>
            </li>
            <li>
              <h4>商务合作</h4>
              <ul>
                <li><a href="">渠道合作</a></li>
                <li><a href="">GPS推广合作</a></li>
                <li><a href="">邮箱：xxx@163.com</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Unslider from './components/Unslider'
  import Process from './components/Process'
  import Slider from './components/Slider'
  export default {
    name: 'app',
    components: {
      Unslider,
      Process,
      Slider
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
