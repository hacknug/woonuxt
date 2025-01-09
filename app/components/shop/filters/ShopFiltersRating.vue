<script setup lang="ts">
const { getFilter, setFilter, isFiltersActive } = await useFiltering()

const selected = ref(getFilter('rating')[0])
const options = [
  { value: '5', label: '5 stars' },
  { value: '4', label: '4 stars' },
  { value: '3', label: '3 stars' },
  { value: '2', label: '2 stars' },
  { value: '1', label: '1 star' },
  { value: '0', label: '0 stars' },
]

watch(isFiltersActive, () => {
  if (!isFiltersActive.value) selected.value = ''
})

function handleChange () {
  setFilter('rating', selected.value ? [selected.value] : [])
}
</script>

<template>
  <div>
    <ShopFiltersBase :label="$t('messages.shop.rating')">
      <div class="grid grid-cols-1 gap-y-1 gap-x-2">
        <URadioGroup v-model="selected" :options="options" @change="handleChange">
          <template #label="{ option }">
            <StarRating :rating="+option.value" />
          </template>
        </URadioGroup>
      </div>
    </ShopFiltersBase>
  </div>
</template>
