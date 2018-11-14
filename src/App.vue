<template>
    <div class="app-container">
        <mt-header fixed title="吟游"></mt-header>
        
        <router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="person">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
		</nav>
    </div>

</template>

<script>
export default {
    data: function () {
        return {
            name: 'kokokokoko'
        }
    }
}
</script>

<style lang="scss">
    .app-container {
        padding-top: 40px;

        .mint-header {
            background-color: #E5007F;
        }

        .mui-bar-tab {
            .mui-tab-item.mui-active {
                color: #e5007f;
            }
        }
    }
        
    
</style>


