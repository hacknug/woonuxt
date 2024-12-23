<script lang="ts" setup>
const { t } = useI18n()
const { logoutUser, viewer, avatar, isPending } = useAuth()
const route = useRoute()

const activeTab = computed(() => route.query.tab || 'my-details')

const navigation = [
  { label: t('messages.general.myDetails'), to: '/user/?tab=my-details', icon: 'ion:information-circle-outline' },
  { label: t('messages.shop.order', 2), to: '/user/?tab=orders', icon: 'ion:bag-check-outline' },
  { label: t('messages.general.downloads'), to: '/user/?tab=downloads', icon: 'ion:cloud-download-outline' },
  { label: 'Wishlist', to: '/user/?tab=wishlist', icon: 'ion:heart-outline' },
]
</script>

<template>
  <aside class="grid gap-16 w-full">
    <header class="flex gap-4 flex-wrap w-full">
      <img v-if="avatar" :src="avatar" class="rounded-full aspect-square border border-white" alt="user-image" width="48" height="48">

      <div class="flex-1 text-balance leading-tight w-full text-ellipsis overflow-hidden">
        <div class="text-lg font-semibold">Welcome, {{ viewer?.firstName }}</div>
        <span v-if="viewer?.email" class="text-gray-400 font-light" :title="viewer?.email">{{ viewer?.email }}</span>
      </div>

      <button class="flex text-gray-700 items-center flex-col p-2 px-4 rounded-lg hover:bg-white hover:text-red-700 lg:hidden" @click="logoutUser">
        <LoadingIcon v-if="isPending" size="22" />
        <Icon v-else name="ion:log-out-outline" size="22" />
        <small>{{ $t('messages.account.logout') }}</small>
      </button>
    </header>

    <nav class="grid gap-4 flex-wrap w-full">
      <template v-for="(item, key) in navigation" :key>
        <UButton v-bind="item" :class="{ active: activeTab == item.to.replace('/user/?tab=', '') }" />
      </template>
    </nav>

    <footer class="grid gap-4 flex-wrap w-full">
      <UButton
        :label="$t('messages.account.logout')"
        icon="ion:log-out-outline"
        :loading="isPending"
        loadingIcon="ion:load-c"
        @click="logoutUser"
      />
    </footer>
  </aside>
</template>
