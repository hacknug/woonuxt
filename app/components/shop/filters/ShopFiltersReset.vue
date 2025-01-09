<script setup>
const { resetFilter } = useFiltering()
</script>

<template>
  <div>
    <UButton block @click="resetFilter">{{ $t('messages.general.clearFilters') }}</UButton>
  </div>
</template>
