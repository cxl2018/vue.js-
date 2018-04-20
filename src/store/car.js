
import Vue from "vue";
export default{
    /* 导出 */
    state:{
       /*  car:{} *//* 里面放着我们的数据结构，{id:数量}可以为key为id，value为数量 */
       /* 如果左边不是布尔类型的话，那就是进行短路运算，找真，一开始传值的话就是true，返回第一个，如果没有传值就是false，找第二个 */
        car: JSON.parse(localStorage.getItem("car"))||{}
    },
    /* 相当于computed */
    getters: {
        total(state) {
            return Object.values(state.car).reduce((sum, v) => sum += v, 0);
        }
    },
    /* 定义修改状态的方法,相当于我们的method，里面可以下需要调用的函数或者方法 */
    mutations:{
        /* 调用这个方法就可以，这个方法里面写着修改的值 */
        modify(state,data){
            let {id,num} =data;
            // state.car[id] =num;/* 通过id拿到num这个值 */
  
            Vue.set(state.car,id,num)

            /*  console.log(state.car); */
          localStorage.setItem("car",JSON.stringify(state.car)); 

        },
        /* 添加一个删除的方法 */
        del(state,id){
            Vue.delete(state.car,id);
            localStorage.setItem("car", JSON.stringify(state.car));
        },
        
    }
   
}