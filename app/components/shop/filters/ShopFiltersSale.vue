<script setup>
const { getFilter, setFilter, isFiltersActive } = useFiltering()

const selected = ref(getFilter('sale')[0])
const options = [
  { value: '', label: 'Show All' },
  { value: 'true', label: 'Show On Sale' },
  // { value: 'false', label: 'No Sale' },
]

watch(isFiltersActive, () => {
  // uncheck all radio boxes when filters are cleared
  if (!isFiltersActive.value) selected.value = ''
})

function handleChange () {
  setFilter('sale', [selected.value].filter(Boolean))
}
</script>

<template>
  <div>
    <ShopFiltersBase label="Sale Products">
      <div class="grid grid-cols-1 gap-y-1 gap-x-2">
        <URadioGroup v-model="selected" :options="options" @change="handleChange" />
      </div>
    </ShopFiltersBase>
  </div>
</template>
