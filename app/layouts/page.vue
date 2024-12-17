<script lang="ts" setup>
const { title, description } = useAttrs()
</script>

<template>
  <article class="container grid gap-16 my-8">
    <header class="grid gap-8">
      <h1 class="text-3xl font-semibold text-primary">{{ title }}</h1>
      <div class="prose">
        <template v-for="p in description">
          <p>{{ p }}</p>
        </template>
      </div>
    </header>

    <slot />
  </article>
</template>
