<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1 ? true : false;
    },
    activeStyle() {
      return this.$route.path.indexOf(this.path) !== -1
        ? {
            color: this.activeColor,
          }
        : {};
    },
  },
  methods: {
    itemClick() {
      // console.log(this.path);
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-text {
  font-size: 12px;
}
</style>
