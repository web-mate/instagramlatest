<template>
<ul class="listofimages">
  <li v-for="url in urls">
    <img v-bind:src="url.images.standard_resolution.url">
  </li>
  </ul>
</template>

<script>
export default {
  props:['userid','accesstoken'],
  data () {
    return {
      urls:[]}
  },
  mounted() {
    this.$http.jsonp('https://api.instagram.com/v1/users/'+this.userid+'/media/recent/?access_token='+this.accesstoken+'&count=4').then(
      function(data){
        console.log(data);
        this.urls = data.body.data
      }
    )
  }
}
</script>

<style lang="scss" scoped>
.listofimages{
  width: 100%;
height: 100%;
list-style-type: none;
display: block;
overflow: hidden;
margin-left: 0;
padding-left: 0;
  li{width: 25%;
    float:left;
    height: 250px;
    overflow: hidden;
    img{
      width: 100%;

    }
  }
}
</style>
