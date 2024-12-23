<script setup lang="ts">
const { t, locales, locale, setLocaleCookie } = useI18n()
const { wishlistLink } = useAuth()

watch(locale, (newLocale) => {
  if (newLocale) setLocaleCookie(newLocale)
})

type NavigationItem = {
  terms: { label: string }[]
  definitions: { label: string, to: string }[]
}

const navigation: NavigationItem[] = [
  {
    terms: [
      { label: 'Information' },
    ],
    definitions: [
      { label: 'About', to: '/' },
      { label: 'Careers', to: '/' },
      { label: 'Press', to: '/' },
      { label: 'FAQ\'s', to: '/' },
    ],
  },
  {
    terms: [
      { label: 'Products' },
    ],
    definitions: [
      { label: t('messages.shop.newArrivals'), to: '/products' },
      { label: 'On Sale', to: '/products?filter=sale[true]' },
      { label: 'Top Rated', to: '/products?orderby=rating&order=ASC&filter=rating[1]' },
      { label: t('messages.shop.giftCards'), to: '/' },
    ],
  },
  {
    terms: [
      { label: t('messages.general.customerService') },
    ],
    definitions: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Shipping & Returns', to: '/' },
      { label: 'Privacy Policy', to: '/' },
      { label: 'Terms & Conditions', to: '/' },
    ],
  },
  {
    terms: [
      { label: t('messages.account.myAccount') },
    ],
    definitions: [
      { label: t('messages.account.myAccount'), to: '/user' },
      { label: t('messages.shop.orderHistory'), to: '/user/?tab=orders' },
      { label: t('messages.shop.wishlist'), to: wishlistLink.value },
      { label: t('messages.general.newsletter'), to: '/' },
    ],
  },
]
</script>

<template>
  <footer class="bg-white order-last">
    <div class="container grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12 my-24">
      <div class="mr-auto col-span-full xl:col-span-2">
        <SiteLogo />
        <WebsiteShortDescription />
        <USelect
          v-model="locale"
          class="mt-8"
          :options="locales"
          valueAttribute="code"
          optionAttribute="name"
          aria-label="Language switcher"
        />
      </div>

      <template v-for="(list, key) in navigation" :key>
        <div class="">
          <template v-for="(term, i) in list.terms" :key="i">
            <div class="mb-1 font-semibold">{{ term.label }}</div>
          </template>
          <div class="text-sm">
            <template v-for="(definition, i) in list.definitions" :key="i">
              <NuxtLink :to="definition.to" class="py-1.5 block">{{ definition.label }}</NuxtLink>
            </template>
          </div>
        </div>
      </template>
    </div>

    <div class="container border-t flex items-center justify-center mb-4">
      <div class="copywrite">
        <p class="py-4 text-xs text-center">
          <NuxtLink to="https://www.nestor.rip">nestor.rip</NuxtLink>
        </p>
      </div>
      <SocialIcons class="ml-auto" />
    </div>
  </footer>
</template>
