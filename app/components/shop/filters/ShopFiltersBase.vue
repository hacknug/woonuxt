<script setup lang="ts">
const { label } = defineProps<{
  label: string
}>()

const items = [
  { label, content: '' },
]
</script>

<template>
  <UAccordion
    :items
    :defaultOpen="true"
    color="black" variant="outline" size="xl"
    :ui="{ container: 'gap-2', default: { class: 'p-0 ring-0 font-semibold' }, item: { padding: 'p-0' } }"
  >
    <!-- <template #default="props">
      <div class="font-semibold leading-none">
        <p>{{ props.item.label }}</p>
      </div>
    </template> -->

    <template #item="props">
      <div>
        <slot name="default" :props />
      </div>
    </template>
  </UAccordion>
</template>
