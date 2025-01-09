<script setup lang="ts">
const route = useRoute()
const { getFilter, setFilter, isFiltersActive } = useFiltering()

const { terms, label = '', showCount = false } = defineProps<{
  terms: { name: string, slug: string, count?: number }[]
  label?: string
  showCount?: boolean
}>()

const categorySlug = route.params.categorySlug
const activeTerms = reactive(new Map((categorySlug ? [categorySlug] : getFilter('category')).map((i) => [i, true])))

watch(isFiltersActive, () => {
  if (!isFiltersActive.value) activeTerms.clear()
})

function handleChange () {
  setFilter('category', [...activeTerms.entries()].filter(([, v]) => v).map(([k]) => k) as string[])
}
</script>

<template>
  <div v-if="terms.length">
    <ShopFiltersBase :label="label || $t('messages.shop.category', 2)">
      <div class="grid grid-cols-1 gap-y-0.25 gap-x-2">
        <template v-for="term in terms" :key="term.slug">
          <UCheckbox
            name="notifications"
            :label="showCount ? `${term.name} (${term.count || 0})` : term.name"
            :modelValue="activeTerms.get(term.slug)"
            @update:modelValue="activeTerms.set(term.slug, $event)"
            @change="handleChange"
          />
        </template>
      </div>
    </ShopFiltersBase>
  </div>
</template>
