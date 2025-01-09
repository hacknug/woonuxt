<script setup lang="ts">
const { setProducts, updateProductList } = useProducts()
const route = useRoute()
const { storeSettings } = useAppConfig()
const { isQueryEmpty } = useHelpers()

const { data } = await useAsyncGql('getProducts')
const allProducts = (data.value?.products?.nodes || []) as Product[]
setProducts(allProducts)

onMounted(() => {
  if (!isQueryEmpty.value) updateProductList()
})

watch(
  () => route.query,
  () => {
    if (route.name !== 'products') return
    updateProductList()
  },
)

useHead({
  title: `Products`,
  meta: [{ hid: 'description', name: 'description', content: 'Products' }],
})
</script>

<template>
  <div>
    <NoProductsFound v-if="!allProducts.length">
      Could not fetch products from your store. Please check your configuration.
    </NoProductsFound>

    <div v-else class="container flex items-start gap-16">
      <ShopFilters v-if="storeSettings.showFilters" />

      <div class="grid gap-4 w-full">
        <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
          <ShopResultCount class="mr-auto" />
          <ShopOrderBy v-if="storeSettings.showOrderByDropdown" class="hidden md:inline-flex ml-auto" />
          <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />
        </div>

        <ProductGrid />
      </div>
    </div>
  </div>
</template>
