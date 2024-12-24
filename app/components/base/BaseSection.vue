<script lang="ts" setup>
const { title, description } = defineProps<{
  title: string
  description: string[]
}>()
</script>

<template>
  <section class="grid gap-16">
    <header class="grid gap-8">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
      <div class="prose">
        <template v-for="(p, key) in description" :key>
          <p>{{ p }}</p>
        </template>
      </div>
    </header>

    <slot />
  </section>
</template>
