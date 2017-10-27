<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item"><a v-link="{path:'/goods'}">商品</a></div>
      <div class="tab-item"><a v-link="{path:'/ratings'}">评价</a></div>
      <div class="tab-item"><a v-link="{path:'/seller'}">商家</a></div>
    </div>
    <div class="content">

    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header.vue'
  const ERR_OK = 0
  export default {
    data(){
      return {
        seller: {}
      }
    },
    created(){
      this.$http.get('/api/seller').then((res)=>{
        res = res.body
          if(res.errno === ERR_OK){
              this.seller = res.data
            console.log(this.seller);
          }
      })
    },
    components: {
      'v-header': header
    },
    methods:{

    }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus" type="text/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        &.active
          color: rgb(240, 20, 20)
</style>
