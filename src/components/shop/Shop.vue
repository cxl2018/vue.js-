<template> 
    <div>
          <!-- 共用头部 -->
         <app-header></app-header>
         <router-view></router-view> 
         <app-footer></app-footer>
    </div>
</template>
    
<script>
/* 引入头部子组件 */
    import Header from "./subcom/Header.vue";
   import Footer from "./subcom/Footer.vue";
    export default {
         components:{
             appHeader:Header,
             appFooter:Footer
       }
    }
</script>

<style scoped>

</style>