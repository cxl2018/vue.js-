<template>
    <div>
        <div class="tab-content" style="display: block;">
                                <!--网友评论-->
                                <div class="comment-box">
                                    <!--取得评论总数-->
                                    <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="sendComments">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea id="txtContent" v-model="commenttxt.content" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <!-- 记得阻止默认行为 -->
                                                <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </form>
                                    <ul id="commentList" class="list-box">
                                        <p v-if="comment.length==0" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                                        <li v-for="(item,index) in comment" :key="index">
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info" >
                                                    <span>{{item.user_name}}</span>
                                                    <span>{{item.add_time}}</span>
                                                </div>
                                                <p>{{item.content}}</p>
                                                
                                            </div>
                                        </li>
                                    </ul>
                                    <!--放置页码-->
                                    <div class="page-box" style="margin:5px 0 0 62px">
                                      
                                    </div>
                                    <!--/放置页码-->
                                </div>

                                <!--/网友评论-->
                            </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            
               comment:[],
               commenttxt:{
                "content":''  
                }
            }
        },
        /* 用一个坑来接收传过来的id */
        props:['id'],
        methods:{
            getCommentList(){
               /*   console.log(this.id); */
                let url = `${this.$api.commentList}goods/${this.id}?pageIndex=1&pageSize=10`
                this.$http.get(url).then((res)=>{
                      /*   console.log(res); */
                        if (res.data.status==0) {
                            console.log(res)
                            this.comment = res.data.message;
                        }

                }) 
            },
            /* 提交评论的操作 */
            sendComments(){
                let url=`${this.$api.comment}goods/${this.id}`
                this.$http.post(url,this.commenttxt).then(()=>{
                    
                })
            }
        },
        created(){
            this.getCommentList();

            // console.log(this.commenttxt)
        }
    }
</script>

<style scoped>

</style>