<script setup lang="ts">
const { siteName } = useAppConfig()
</script>

<template>
  <NuxtLink to="/">
    <div class="flex items-center gap-2 text-lg font-bold">
      <NuxtImg src="/logo.svg" alt="Logo de Calero" width="32" height="32" />
      <span>{{ siteName }}</span>
    </div>
  </NuxtLink>
</template>
