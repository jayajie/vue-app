<template>
    <div class="home-container">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerPics" :key="item.id"><img :src="item.img"></mt-swipe-item>
        </mt-swipe>
        <ul class="menu">
            <li><router-link to="/newsList"><img src="images/menu1.png" alt=""><p>新闻资讯</p></router-link></li>
            <li><a href=""><img src="images/menu2.png" alt=""><p>图片分享</p></a></li>
            <li><a href=""><img src="images/menu3.png" alt=""><p>商品购买</p></a></li>
            <li><a href=""><img src="images/menu4.png" alt=""><p>留言反馈</p></a></li>
            <li><a href=""><img src="images/menu5.png" alt=""><p>视频专区</p></a></li>
            <li><a href=""><img src="images/menu6.png" alt=""><p>联系我们</p></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                msg: 'lll',
                bannerPics: []
            }
        },
        created () {
            this.getSwipes()
        },
        methods: {
            getSwipes () {
                this.$http.get('home/banner').then( result => {
                    if ( result.body.status === 0) {
                        this.bannerPics = result.body.message
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .home-container {

        .mint-swipe {
            height: 250px;
            .mint-swipe-items-wrap {
                .mint-swipe-item {
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        .menu {
            overflow: hidden;
            li {
                list-style: none;
                float: left;
                width: 33.3333%;
                a {
                    display: block;
                    img {
                        width: 60px;
                        height: 60px;
                        display: block;
                        margin: 20px auto 10px;

                    }
                    p {
                        text-align: center;
                    }
                }
            }
        }
    }
    
</style>
