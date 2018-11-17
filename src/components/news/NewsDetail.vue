<template>
    <div class="newsDetail-container">
        <h4 class="title">{{ newsDetail.title }}</h4>
        <p class="date">
            <span>{{ newsDetail.add_time | dataFormat}}</span>
            <span>浏览：{{ newsDetail.click}}</span>
        </p>
        <hr>
        <div v-html="newsDetail.content" class="article">
            
        </div>
        <comment :articleId="newsDetail.id"></comment>
    </div>
    
</template>

<script>
    import {Toast} from 'mint-ui'
    import comment from '../common/Comment.vue'
    export default {
        data: function() {
            return {
                title: 'newsDetail',
                newsDetail: {}
            }
        },
        created () {
            this.getDetail()
        },
        methods: {
            getDetail () {
                console.log('id'+this.$route.query.id)
                this.$http.get('newsDetail?id='+this.$route.query.id).then( result => {
                    if (result.body.status === 1) return Toast('获取数据失败')
                    this.newsDetail = result.body.message
                })
            }
        },
        components: {
            comment
        }
    }
</script>

<style lang="scss" scoped>
    .newsDetail-container {
        .title {
            text-align: center;
            padding: 10px 20px;
            line-height: 1.5;
        }
        .date {
            text-align: center;
            span {
                &:first-child {
                    margin-right: 20px;
                }
            }
        }
        hr {
            width: 92%;
            border: none;
            height: 1px;
            background-color: pink;
            margin: 15px auto;       
        }
        .article {
            text-indent: 2em;
            padding: 0 10px;
        }
    }
</style>
