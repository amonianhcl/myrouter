<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',

}
</script>

<style scoped>
.tab-bar{
  height: 49px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>