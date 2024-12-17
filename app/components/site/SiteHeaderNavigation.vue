<script setup lang="ts">
const { t } = useI18n();
const { wishlistLink } = useAuth();

const items = [
  { label: t('messages.general.home'), to: '/' },
  { label: t('messages.general.allProducts'), to: '/products' },
  { label: t('messages.shop.category', 2), to: '/categories' },
  { label: t('messages.general.contact'), to: '/contact' },
  { label: 'Wishlist', to: wishlistLink.value, className: 'lg:hidden' },
  { label: 'My Account', to: '/my-account', className: 'lg:hidden' },
]
</script>

<template>
  <nav class="uppercase">
    <template v-for="item in items">
      <NuxtLink :class="item.className" :to="item.to">{{ item.label }}</NuxtLink>
    </template>
  </nav>
</template>
