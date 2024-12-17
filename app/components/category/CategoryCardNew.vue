<script lang="ts" setup>
const { node } = defineProps<{
  node: ProductCategory;
}>()
</script>

<template>
  <BaseCard :node />
</template>
