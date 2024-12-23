<script setup lang="ts">
const emit = defineEmits<{
  submit: [event: Event]
}>()
const { title, submit } = defineProps<{
  state: object
  isLoading: boolean
  title: string
  submit: string
}>()
</script>

<template>
  <UForm :state class="grid grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow" @submit="(e) => emit('submit', e)">
    <header class="text-xl font-bold col-span-full">
      <slot name="title">
        <h3 class="">{{ title }}</h3>
      </slot>
    </header>

    <slot name="default" />

    <footer class="sticky bottom-0 col-span-full -mx-6 -mb-6 px-6 py-4 bg-white/75 border-t backdrop-blur-sm rounded-b-lg">
      <div class="flex gap-2 w-full justify-end items-center" data-teleport>
        <slot name="footer" v-bind="{ label: submit, type: 'submit' }">
          <UButton type="submit" :loading="isLoading">{{ submit }}</UButton>
        </slot>
      </div>
    </footer>
  </UForm>
</template>
