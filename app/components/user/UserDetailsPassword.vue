<script setup lang="ts">
const { viewer, loginUser } = useAuth()

const isLoading = ref(false)
const state = reactive({
  passwordOne: '',
  passwordTwo: '',
})

const onSubmit = async () => {
  isLoading.value = true
  const { passwordOne, passwordTwo } = state

  if (passwordOne !== passwordTwo) {
    // TODO: handle password mismatch
    // errorMessage.value = t('messages.error.passwordMismatch')
    return
  }

  try {
    const { updateCustomer } = await GqlUpdateCustomer({ input: { id: viewer.value?.id, password: passwordOne } })

    if (updateCustomer) {
      // TODO: show success message
      console.log('success', updateCustomer)

      const { success, error } = await loginUser({ username: viewer.value!.username!, password: passwordOne })

      if (error) {
        throw new Error(error)
      }
      if (success) {
        state.passwordOne = ''
        state.passwordTwo = ''
      }
    }
  }
  catch (error) {
    // TODO: show error message `t('messages.account.failed')`
    console.error('error', error)

    // const gqlError = error?.gqlErrors?.[0]?.message
    // errorMessage.value = gqlError || 'An error occurred. Please try again.'
  }

  isLoading.value = false
}
</script>

<template>
  <UserBaseForm :state :isLoading :title="$t('messages.account.changePassword')" :submit="$t('messages.account.updatePassword')" @submit="onSubmit">
    <UFormGroup :label="$t('messages.account.newPassword')" name="passwordOne" required>
      <UInput v-model="state.passwordOne" type="text" placeholder="••••••••••" autocomplete="new-password" required />
    </UFormGroup>

    <UFormGroup :label="$t('messages.account.confirmNewPassword')" name="passwordTwo" required>
      <UInput v-model="state.passwordTwo" type="text" placeholder="••••••••••" autocomplete="new-password" required />
    </UFormGroup>
  </UserDetailsSection>
</template>
