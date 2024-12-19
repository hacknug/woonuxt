<script setup>
const { getSearchQuery, setSearchQuery, clearSearchQuery, toggleSearch } = useSearching()
const searchQuery = ref(getSearchQuery())

const reset = () => {
  clearSearchQuery()
  searchQuery.value = ''
}

watch(getSearchQuery, (value) => {
  if (!value) reset()
})
</script>

<template>
  <div class="">
    <UButton class="sm:hidden" icon="ion:search-outline" @click="toggleSearch" />

    <form class="hidden sm:flex" @submit.prevent="setSearchQuery(searchQuery)">
      <UInput
        v-model="searchQuery"
        icon="ion:search-outline"
        :placeholder="$t('messages.shop.searchProducts')"
        autocomplete="off"
        :ui="{ icon: { trailing: { pointer: '' } } }"
      >
        <template #trailing>
          <UButton
            v-show="searchQuery"
            icon="ion:close-outline"
            :padded="false"
            @click="reset"
          />
        </template>
      </UInput>
    </form>
  </div>
</template>
