<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          </span>
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
            </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        goods: []
      }
    },
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      this.$http.get('/api/goods').then((res) => {
        res = res.body
        if (res.errno === ERR_OK) {
          this.goods = res.data
//          console.log(this.goods);
        }
      })
    }

  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    display: flex
    overflow: hidden
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    .menu-wrapper
      flex: 0 0 80px //等分  内容不足缩放情况   占位空间
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table //垂直居中
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        .icon
          vertical-align: top
          display: inline-block
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
          border-1px(rgba(7,17,27,0.2))
    .foods-wrapper
      flex: 1
</style>
