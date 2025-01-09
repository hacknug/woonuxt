<script setup lang="ts">
const route = useRoute()
const { products } = useProducts()
const { productsPerPage } = useHelpers()

// TODO: Refactor all this logic. It's a mess.
const page = ref(route.params.pageNumber ? parseInt(route.params.pageNumber as string) : 1)
const currentQuery = computed(() => {
  const query = route.query
  const queryKeys = Object.keys(query)

  let currentQuery = ''
  if (queryKeys.length > 0) {
    queryKeys.forEach((key, index) => {
      currentQuery += index === 0 ? `${key}=${query[key]}` : `&${key}=${query[key]}`
    })
  }

  return decodeURIComponent(currentQuery)
})
</script>

<template>
  <div class="flex justify-center tabular-nums">
    <UPagination
      v-model="page"
      :pageCount="productsPerPage"
      :total="products.length"
      :to="(page) => `/products/page/${page}/?${currentQuery}`"
    />
  </div>
</template>
