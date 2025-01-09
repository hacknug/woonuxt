<script setup lang="ts">
const route = useRoute()
const { productsPerPage } = useHelpers()
const { products } = useProducts()

const page = ref(parseInt(route.params.pageNumber as string) || 1)
const productsToShow = computed(() => products.value.slice((page.value - 1) * productsPerPage, page.value * productsPerPage))
</script>

<template>
  <section class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <template v-if="!products.length">
      <NoProductsFound class="col-span-full mt-8 mb-16" />
    </template>

    <template v-else>
      <ProductCardNew v-for="(node, i) in productsToShow" :key="node.id || i" :node />
      <ShopPagination class="col-span-full mt-8 mb-16" />
    </template>
  </section>
</template>
