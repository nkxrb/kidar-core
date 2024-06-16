<template>
  <div class="kidar-demo-card">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
const slots = defineSlots()
console.log(slots.default)

</script>
<style scoped>
.kidar-demo-card {
  margin-top: 20px;
  border: 1px solid #F2F6FC;
  border-radius: 8px;
}
</style>