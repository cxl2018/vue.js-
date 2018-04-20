<template>
    <div>
        <!-- 商品推荐 -->
           <div class="left-220">
                <ul class="side-img-list">                
                    <li v-for="(item, index) in list" :key="item.id">
                       
                            <div class="img-box">
                            <label>{{index+1}}</label>
                            <img :src="item.img_url">
                        </div>
                        <div class="txt-box">
                            <router-link :to="{name: 'detail',params:{id:item.id}}">{{item.title}}</router-link>
                           <!--  <a href="/goods/show-98.html"></a> -->
                            <span>{{item.add_time|timeFit("-")}}</span>
                        </div>
                    </li>                
              </ul>
            </div>
    </div>
</template>

<script>
    export default {
         /* 接收来自父组件传的值，设置一个坑接收 */
     props:['list'],
    filters:{
        timeFit(val,a){
            var data = new Date(val);
            return `${data.getFullYear()}${a}${data.getUTCMonth()}${a}${data.getUTCDate()}`
        }
    }
    }
</script>


<style scoped>

</style>