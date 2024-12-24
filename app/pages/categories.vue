<script lang="ts" setup>
const { data } = await useAsyncGql('getProductCategories')
const productCategories = data.value.productCategories?.nodes as ProductCategory[]

useHead({
  title: `Categories`,
  meta: [{ name: 'description', content: 'All product categories' }],
  // link: [{ rel: 'canonical', href: 'https://v3.woonuxt.com/categories' }],
})
</script>

<template>
  <main class="container">
    <div v-if="productCategories?.length" class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      <template v-for="(category, key) in productCategories" :key>
        <CategoryCardNew :node="category" :imageLoading="key <= 2 ? 'eager' : 'lazy'" />
      </template>
    </div>
  </main>
</template>
