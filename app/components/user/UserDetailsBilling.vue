<script setup lang="ts">
const { customer, viewer } = useAuth()
const {
  getAllowedCountries, countriesToShow,
  getStatesForCountry, countryStatesDict,
} = useCountry()

const isLoading = ref(false)

const state = reactive({
  billing: customer.value.billing,
})

onMounted(() => {
  getAllowedCountries()
  updateState()
})

watch(
  () => state.billing!.country!,
  () => { updateState() },
)

async function updateState () {
  if (state.billing!.country! && state.billing!.country!.length > 0) {
    await getStatesForCountry(state.billing!.country!)
  }
}

const onSubmit = async () => {
  isLoading.value = true
  const { billing } = state

  try {
    const { updateCustomer } = await GqlUpdateCustomer({ input: { id: viewer.value?.id, billing } })

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
  <UserDetailsSection :state :isLoading :title="$t('messages.billing.billing')" :submit="$t('messages.account.updateDetails')" @submit="onSubmit">
    <UFormGroup :label="$t('messages.billing.firstName')" name="firstName" required>
      <UInput v-model="state.billing!.firstName!" type="text" placeholder="John" autocomplete="given-name" required />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.lastName')" name="lastName" required>
      <UInput v-model="state.billing!.lastName!" type="text" placeholder="Doe" autocomplete="family-name" required />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.phone')" name="phone">
      <UInput v-model="state.billing!.phone!" type="tel" placeholder="+34 654 321 987" autocomplete="tel" />
    </UFormGroup>

    <UFormGroup :label="`Company (${$t('messages.general.optional')})`" name="company">
      <UInput v-model="state.billing!.company!" type="text" placeholder="Company Inc." autocomplete="organization" />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.address1')" name="address1">
      <UInput v-model="state.billing!.address1!" type="text" placeholder="123 Main St" autocomplete="address-line1" />
    </UFormGroup>

    <UFormGroup :label="`${$t('messages.billing.address2')} (${$t('messages.general.optional')})`" name="address2">
      <UInput v-model="state.billing!.address2!" type="text" placeholder="Apartment, studio, or floor" autocomplete="address-line2" />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.city')" name="city">
      <UInput v-model="state.billing!.city!" type="text" placeholder="Zaragoza" autocomplete="address-level2" />
    </UFormGroup>

    <UFormGroup :label="`${$t('messages.billing.state')} (${$t('messages.general.optional')})`" name="state">
      <UInput
        v-if="!countryStatesDict[state.billing!.country!]?.length"
        v-model="state.billing!.state!" type="text" placeholder="State"
      />
      <USelect
        v-else
        v-model="state.billing!.state!"
        :options="countryStatesDict[state.billing!.country!]"
        optionAttribute="name"
        valueAttribute="code"
        placeholder="Select a state"
        required
      />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.country')" name="country" required>
      <USelect
        v-model="state.billing!.country!"
        :options="countriesToShow"
        optionAttribute="name"
        valueAttribute="code"
        placeholder="Select a country"
        required
      />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.zip')" name="postcode" required>
      <UInput v-model="state.billing!.postcode!" type="text" placeholder="50001" autocomplete="postal-code" required />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.email')" name="email" required>
      <UInput v-model="state.billing!.email!" type="email" placeholder="johndoe@email.com" autocomplete="email" required />
    </UFormGroup>

    <!-- <UFormGroup :label="$t('messages.general.shipping')" name="shipping">
      <UCheckbox v-model="isShippingSame" :label="$t('messages.billing.')" />
    </UFormGroup> -->
  </UserDetailsSection>
</template>
