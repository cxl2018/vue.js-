<template> 
    <div>
         <!-- 共用头部 -->
         <app-header></app-header>
         <router-view></router-view>
        
    </div>
</template>
    
<script>
/* 引入头部子组件 */
    import Header from "./subcom/Heard.vue";
   
    export default {
         components:{
             appHeader:Header
       }
    }
</script>

<style scoped>

</style>