<script setup>
// TODO: remove after migration to @nuxt/ui v3
import Slider from '@vueform/slider'

const runtimeConfig = useRuntimeConfig()
const { getFilter, setFilter, isFiltersActive } = useFiltering()

const maxPrice = runtimeConfig?.public?.MAX_PRICE || 1000
const currencySymbol = runtimeConfig?.public?.CURRENCY_SYMBOL || '$'

const activeFilters = ref(getFilter('price'))
const price = activeFilters.value.length ? ref(activeFilters.value) : ref([0, maxPrice])

const resetSlider = () => {
  price.value = [0, maxPrice]
}

const applyPrice = () => {
  setFilter('price', price.value)
}

watch(isFiltersActive, () => {
  if (!isFiltersActive.value) resetSlider()
})
</script>

<template>
  <div>
    <ShopFiltersBase :label="$t('messages.shop.price')">
      <div class="grid grid-cols-2 gap-y-4 gap-x-2">
        <UInput v-model="price[0]" type="number" placeholder="From" min="0">
          <template #leading>
            <span class="text-gray-500 dark:text-gray-400 text-xs">{{ currencySymbol }}</span>
          </template>
        </UInput>
        <UInput v-model="price[1]" type="number" placeholder="Up to" min="1">
          <template #leading>
            <span class="text-gray-500 dark:text-gray-400 text-xs">{{ currencySymbol }}</span>
          </template>
        </UInput>

        <Slider
          v-model="price"
          class="col-span-full px-2"
          :tooltips="false"
          :min="0" :max="maxPrice"
          @update="applyPrice"
        />
      </div>
    </ShopFiltersBase>
  </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
