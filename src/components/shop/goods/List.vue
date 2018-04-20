<template>
    <div>
        <!-- 商品列表 -->
        <!-- 面包屑 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to="">首页</router-link>&gt;
                <router-link to="">购物商场</router-link>
            </div>
        </div>

        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <!--类别菜单-->
                    <div class="left-220" style="margin:0;">
                        <div class="banner-nav">
                            <ul>
                                <!--此处声明下面可重复循环-->

                                <li v-for="item in top.catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}</span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <!-- 第三级循环 -->
                                        <dl>
                                            <dt>
                                                <!-- <a href="/goods/40.html"></a> -->
                                               <!--  <router-link :to="">{{item.title}}</router-link> -->
                                            </dt>
                                            <dd>
                                                <router-link to="" v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}</router-link>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>

                            </ul>
                        </div>
                         </div>
                        <!--/类别菜单-->

                        <!--幻灯片-->
                        <div class="left-705" >
                            <div class="banner-img" >
                                <el-carousel style="height:100%">
                                <el-carousel-item v-for="item in top.sliderlist" :key="item.id" >
                                     <img :src="item.img_url" :alt="item.title" style="height:100%">
                                </el-carousel-item>
                                </el-carousel>
                            </div>
                        </div>
                        <!--/幻灯片-->
                        <!-- 商品推荐，右侧 -->
                        <common-aside :list="top.toplist"></common-aside>
                </div>
            </div>
        </div>
         <list-main></list-main>
    </div>
</template>

<script>
/* 引入商品推荐子组件 */
import CommonAside from "./subcom/CommonAside.vue";
import ListMain from "./subcom/ListMain.vue";

export default {
  /* 创建子组件要写在这个属性中 */
  components: {
    commonAside: CommonAside,
    listMain: ListMain
  },
  /* 写数据，为了展示在视图中 */
  data() {
    return {
        
      /* 定义一个接收数据的值 */
      top: {
        catelist: [],
        sliderlist: [],
        toplist: []
      }
     
    };
  },
  // 写钩子函数的地方
  methods: {
    /* 请求接口，获取分类，轮播图，右侧数据 */
    getGoodsData(){
      this.$http.get(this.$api.goodsTop).then(res => {
        /*  console.log(res); */
        if (res.data.status == 0) {
          this.top = res.data.message;
          console.log(this.top);
        }
      });
    }
  
  },
  /* 生命周期函数 */
  created() {
    this.getGoodsData();
  /*   this.getGoodsList(); */
  }
};
</script>

<style scoped land="less">

</style>