<template>
  <div>
    <images v-bind:userid="userid" v-bind:accesstoken="accesstoken" ></images>
  </div>
</template>

<script>
import Images from './Images.vue'


export default {
props:['userid','accesstoken'],
  components: {
    'images':Images
  }
}

</script>

<style lang="scss">
</style>
