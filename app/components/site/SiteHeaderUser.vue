<script setup lang="ts">
const { t } = useI18n()
const { avatar, viewer, logoutUser, isPending, wishlistLink } = useAuth()

const linkTitle = computed<string>(() => viewer.value?.username || 'Sign In')

const items = computed(() => (viewer.value?.email
  ? [
      [
        { label: viewer.value?.email ?? '', slot: 'account', disabled: true },
      ],
      [
        { label: 'My Account', icon: 'ion:person-outline', to: '/user' },
        { label: 'Orders', icon: 'ion:bag-check-outline', to: '/user/?tab=orders', exact: true },
        { label: 'Downloads', icon: 'ion:cloud-download-outline', to: '/user/?tab=downloads', exact: true },
        { label: 'Wishlist', icon: 'ion:heart-outline', to: wishlistLink.value, exact: true },
      ],
      [
        { label: 'Sign out', icon: isPending.value ? 'ion:load-c' : 'ion:log-out-outline', iconClass: isPending.value ? 'animate-spin' : '', click: logoutUser },
      ],
    ]
  : [
      [
        { label: 'Sign In', icon: 'ion:log-in-outline', to: '/user' },
        { label: 'Sign Up', icon: 'ion:person-add-outline', to: '/user/?action=register' },
      ],
    ]))
</script>

<template>
  <div class="hidden sm:flex">
    <UDropdown
      :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
      :popper="{ placement: 'bottom-end' }"
    >
      <UButton icon="ion:person-outline">
        <template v-if="avatar" #leading>
          <UAvatar :src="avatar" size="2xs" />
        </template>
      </UButton>

      <template #account="{ item }">
        <div class="text-left">
          <p>Signed in as</p>
          <p class="truncate font-medium text-gray-900 dark:text-white">{{ item.label }}</p>
        </div>
      </template>

      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>
        <UIcon
          :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
          :class="item.iconClass"
        />
      </template>
    </UDropdown>
  </div>
</template>
