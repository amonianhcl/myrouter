<template>
  <div>
    <p>home  and {{planet}}</p>
    <img :src="pageInfo"/>
  </div>
</template>

<script>
import {request} from '../../network/request'
export default {
  name: 'Home',
  data(){
    return {
      planet: this.$store.state.planet,
      pageInfo:''
    }
  },
  created(){
      request({url:'/image',headers:{'accept': 'image/webp'}})
        .then(res =>{
          this.pageInfo=res.data;
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
  }
}
</script>