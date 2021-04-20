<template>
  <div>
    catefogggjjj
    <input type="text" v-model.lazy="planet"/>
    <p>{{planet}}</p>
    <button @click="changePlanet(planet)">bbbb</button>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data(){
    return{
      planet: this.$store.state.planet
    }
  },
  methods:{
    changePlanet(newName){
      console.log('leaveInput')
      // this.$store.state.planet=this.planet
      this.$store.commit('changePlanet',newName)
    }
  }
}
</script>