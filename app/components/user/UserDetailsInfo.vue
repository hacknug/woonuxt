<script setup lang="ts">
const { customer, viewer } = useAuth()

const isLoading = ref(false)
const state = reactive({
  firstName: customer.value.firstName,
  lastName: customer.value.lastName,
  username: customer.value.username,
  email: customer.value.email,
})

const onSubmit = async () => {
  isLoading.value = true
  const { firstName, lastName } = state

  try {
    const { updateCustomer } = await GqlUpdateCustomer({ input: { id: viewer.value?.id, firstName, lastName } })

    if (updateCustomer) {
      // TODO: show success message
      console.log('success', updateCustomer)
    }
  }
  catch (error) {
    // TODO: show error message `t('messages.account.failed')`
    console.error('error', error)
  }

  isLoading.value = false
}
</script>

<template>
  <UserDetailsSection :state :isLoading :title="$t('messages.account.personalInfo')" :submit="$t('messages.account.updateDetails')" @submit="onSubmit">
    <UFormGroup :label="$t('messages.billing.firstName')" name="firstName">
      <UInput v-model="state.firstName!" type="text" placeholder="John" autocomplete="given-name" />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.lastName')" name="lastName">
      <UInput v-model="state.lastName!" type="text" placeholder="Doe" autocomplete="family-name" />
    </UFormGroup>

    <UFormGroup :label="`${$t('messages.account.username')} (${$t('messages.general.readOnly')})`" name="username">
      <UInput v-model="state.username!" type="text" placeholder="john_doe" autocomplete="username" readonly />
    </UFormGroup>

    <UFormGroup :label="`${$t('messages.billing.email')} (${$t('messages.general.readOnly')})`" name="email">
      <UInput v-model="state.email!" type="email" placeholder="johndoe@email.com" autocomplete="email" readonly />
    </UFormGroup>
  </UserDetailsSection>
</template>
