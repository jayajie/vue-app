<template>
    <div class="newsDetail-container">

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/newsDetail?id='+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img">
                    <div class="mui-media-body">
                        <h3>{{ item.title}}</h3>
                        <p class='mui-ellipsis'>
                            <span class="mui-pull-left"> 发表时间：{{ item.add_time | dataFormat}}</span>
                            <span class="mui-pull-right">浏览：{{ item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'

    export default {
        data () {
            return {
                title: 'newsList',
                newsList: null
            }
        },
        created () {
            this.getList()
        },
        methods: {
            getList () {
                this.$http.get('newsList').then( result => {
                    if (result.body.status === 1) return Toast('获取数据失败')
                    this.newsList = result.body.message
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .newsDetail-container {
        .mui-table-view {
            li {
                h3 {
                    font-size: 14px;
                    font-weight: normal;
                }
                p {
                    span {
                        font-size: 12px;
                    }
                }
            }
            
        }
    }
</style>
