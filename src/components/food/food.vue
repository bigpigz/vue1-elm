<template>
  <div v-show="showFlag" class="food" transition="move">
      <div class="food-content">
        <div class="imgage-header">
          <img :src="food.image" alt="">
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        showFlag: false
      }
    },
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      show(){
        this.showFlag = true
      }
    }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus" type="text/stylus">
  .food
    position fixed
    left 0
    top 0
    bottom 48px
    z-index 30
    width: 100%
    background-color: #fff;
    &.move-transition
      transform translate3d(0,0,0)
      transition all 0.3s linear
    &.move-enter,&.move-leave
      transform translate3d(100%,0,0)
</style>
