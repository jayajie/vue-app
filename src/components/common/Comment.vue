<template>
    <div class="comment-container">
        <div class="add">
            <h5>发表评论</h5>
            <textarea class="commentBox"></textarea>
        </div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in commentsList" :key="item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img">
                    <div class="mui-media-body">
                        <div class="mui-clearfix com-head">
                            <h3 class="mui-pull-left">{{ item.comment }}</h3>
                            <span class="mui-pull-right"><i class="fa fa-thumbs-o-up"></i> {{ item.click }}</span>
                        </div>
                        <p class='mui-ellipsis'>
                            <span> {{ item.username }}</span>
                            <span>{{ item.add_time | dataFormat('YYYY-MM-DD')}}</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
        <button class="loadmore" @click="loadmore">{{ moreTip }}</button>
    </div> 
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data () {
            return {
                title: 'comment',
                pageIndex: 1,
                commentsList: [],
                moreTip: '点击加载更多'
            }
        },
        props: ['articleId'],
        created () {
            this.getComments()
        },
        methods: {
            getComments () {
                this.$http.get('newDetail/comments?id='+this.articleId+'&pageIndex='+this.pageIndex).then( result => {
                    if(result.body.status === 1) return Toast('获取数据失败')
                    this.commentsList = result.body.message
                })
            },
            loadmore () {
                this.pageIndex++
                this.$http.get('newDetail/comments?id='+this.articleId+'&pageIndex='+this.pageIndex).then( result => {
                    if(result.body.status === 1) return Toast('获取数据失败')
                    if (result.body.message.length === 0) return  this.moreTip = '无更多评论'
                    this.commentsList = this.commentsList.concat(result.body.message)
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    .comment-container {
        padding: 0 10px;
        .commentBox {
            border: 1px solid pink;
            height: 80px;
            border-radius: 6px;
        }
        .mui-table-view {
                li {
                .mui-media-object {
                    border-radius: 50%;
                }
                h3 {
                    font-size: 14px;
                    font-weight: normal;
                }
                .com-head {
                    span {
                        font-size: 12px;
                        color: #8f8f94;
                    }
                }
                p {
                    span {
                        font-size: 12px;
                        &:first-child {
                            margin-right: 10px;
                        }
                    }
                }
            }
            
        }
        .add {
            h5 {
                padding: 10px 4px 7px;
                font-weight: bold;
            }
        }
        .loadmore {
            width: 200px;
            text-align: center;
            border: 1px solid pink;
            display: block;
            margin: 15px auto;
        }
    }
</style>
