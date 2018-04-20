<template>
    <div>
        <!-- 面包屑 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link :to="{name: 'list'}">首页</router-link>&gt;
                <router-link to="">购物商场</router-link>
            </div>
        </div>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">
                                <div class="magnifier" id="magnifier1">
                                    <div class="magnifier-container">
                                        <div class="images-cover"></div>
                                        <!--当前图片显示容器-->
                                        <div class="move-view"></div>
                                        <!--跟随鼠标移动的盒子-->
                                    </div>
                                    <div class="magnifier-assembly">
                                        <div class="magnifier-btn">
                                            <span class="magnifier-btn-left">&lt;</span>
                                            <span class="magnifier-btn-right">&gt;</span>
                                        </div>
                                        <!--按钮组-->
                                        <div class="magnifier-line">
                                            <ul class="clearfix animation03">
                                                <li v-for ="item in top.imglist" :key="item.id">
                                                    <div class="small-img">
                                                        <img :src="item.original_path"/>
                                                    </div>
                                                </li>  
                                            </ul>
                                        </div>
                                        <!--缩略图-->
                                    </div>
                                    <div class="magnifier-view"></div>
                                    <!--经过放大的图片显示容器-->
                                </div>
                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <div class="goods-spec">
                                <h1>{{top.goodsinfo.title}}</h1>
                                <p class="subtitle">{{top.goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{top.goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">{{top.goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em class="price" id="commoditySellPrice">{{top.goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <el-input-number size="mini" :min="0" v-model="num"></el-input-number>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{top.goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div class="btn-buy" id="buyButton">
                                                <button class="buy">立即购买</button>
                                                <button class="add" @click="addCars">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>

                            </div>
                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <!--选项卡-->
                            <el-tabs type="card" >
                                <el-tab-pane label="图文信息" name="first">
                                     <div class="tab-content entry" style="display:block;">
                                        <p v-html="top.goodsinfo.content"></p>
                                    </div>
                                </el-tab-pane>

                                <el-tab-pane label="商品评论" name="second">
                                     <!-- 网友评论 -->
                                    <common-comment :id="id"></common-comment>
                                </el-tab-pane>
                            </el-tabs>
                            <!--/选项卡-->

                            <!--选项内容-->
                           

                           
                        </div>

                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <common-aside :list="top.hotgoodslist"></common-aside>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonAside from "./subcom/CommonAside.vue";
import CommonComment from "./subcom/CommonComment.vue";

/* 引入放大镜插件 @代表src*/
import "@/lib/imgzoom/css/magnifier.css";
// import "@/lib/imgzoom/js/jquery-1.11.3.min.js";
import $ from "jquery";
import "@/lib/imgzoom/js/magnifier.js";
export default {
  components: {
    CommonAside,
    CommonComment
  },
  data() {
    return {
      id: this.$route.params.id,
      top: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      },
      num: "0"
    };
  },
  methods: {
    getGoodsDetail() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
       /*  console.log(res); */
        if (res.data.status == 0) {
          this.top = res.data.message;
        }
      });
    },
    /* 购物车 */
    addCars(){
       
        /* 加入购物车后，然右上角的购物车数量从原来的值加上新增的值 */
        let newNum = this.num +(this.$store.state.car[this.id] || 0);
         /*方法名称，参数 */
        this.$store.commit('modify',{id:this.id,num:newNum})
     
        /* 重置数字框 */
        this.num = 0;
    }
   
  },
 
  watch:{
      $route(){
          this.id =this.$route.params.id;
          this.getGoodsDetail();
      },
      top(){
                    /* 获取dom元素在mounted里面写 */
                var magnifierConfig = {
                magnifier: "#magnifier1", //最外层的大容器
                width: 350, //承载容器宽
                height: 350, //承载容器高
                moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
                zoom: 5 //缩放比例
                };
                setTimeout(()=>{
                    var _magnifier = $().imgzoon(magnifierConfig);
                },500);
                }
        },
  created() {
    this.getGoodsDetail();
  }
};
</script>

<style scoped>

</style>