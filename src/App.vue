<template>
  <div id="app">
    <div class="page">
      <router-view/>
    </div>
    <tab-bar>
      <tab-bar-item path="/home">
        <a-icon slot="item-icon" type="home" theme="twoTone" two-tone-color="grey"/> 
        <a-icon slot="item-icon-active" type="home" theme="twoTone" two-tone-color="red"/> 
        <div slot="item-text" activeColor="red">Home</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <a-icon slot="item-icon" type="appstore" theme="twoTone" two-tone-color="grey"/> 
        <a-icon slot="item-icon-active" type="appstore" theme="twoTone" two-tone-color="red"/> 
        <div slot="item-text">Category</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <a-icon slot="item-icon" type="shopping" theme="twoTone" two-tone-color="grey"/> 
        <a-icon slot="item-icon-active" type="shopping" theme="twoTone" two-tone-color="red"/> 
        <div slot="item-text">Cart</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <a-icon slot="item-icon" type="profile" theme="twoTone" two-tone-color="grey"/> 
        <a-icon slot="item-icon-active" type="profile" theme="twoTone" two-tone-color="red"/> 
        <div slot="item-text">Profile</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar.vue'
import TabBarItem from './components/TabBar/TabBarItem'

export default {
  name: 'App',
  components:{
    TabBarItem,
    TabBar
  },
  data(){
    return{
     
    }
  },
}
</script>

<style>
@import './assets/css/base.css';
#app {
  display:flex;
  flex-direction: column;
  height: 100vh;
}
#app .page{
  flex-grow: 1;
}
</style>
