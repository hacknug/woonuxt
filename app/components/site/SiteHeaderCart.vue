<script setup>
const { toggleCart, cart } = useCart()
</script>

<template>
  <UChip :text="cart?.contents?.itemCount" size="2xl">
    <UButton icon="ion:cart-outline" @click="toggleCart" />
  </UChip>
</template>
