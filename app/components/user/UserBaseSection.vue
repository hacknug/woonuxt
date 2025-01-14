<script setup lang="ts">
const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <section class="grid grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow">
    <header class="text-xl font-bold col-span-full">
      <slot name="title" :title>
        <h3 class="">{{ title }}</h3>
      </slot>
    </header>

    <slot name="default" />
  </section>
</template>
