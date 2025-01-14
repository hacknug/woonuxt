<script setup lang="ts">
const { rating = 0, count = null, size = 14, hideCount = false } = defineProps<{
  rating?: number
  count?: number
  size?: number
  hideCount?: boolean
}>()
</script>

<template>
  <div class="flex gap-1 items-center">
    <UIcon v-for="i in 5" :key="i" name="ion:star" :size :style="{ color: rating < i ? '#ccc' : '#fbbe24' }" />
    <span v-if="count && !hideCount" class="">({{ count }})</span>
  </div>
</template>
