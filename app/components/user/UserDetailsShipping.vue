<script setup lang="ts">
const { customer, viewer } = useAuth()
const {
  getAllowedCountries, countriesToShow,
  getStatesForCountry, countryStatesDict,
} = useCountry()

const isLoading = ref(false)

const state = reactive({
  shipping: customer.value.shipping,
})

onMounted(() => {
  getAllowedCountries()
  updateState()
})

watch(
  () => state.shipping!.country!,
  () => { updateState() },
)

async function updateState () {
  if (state.shipping!.country! && state.shipping!.country!.length > 0) {
    await getStatesForCountry(state.shipping!.country!)
  }
}

const onSubmit = async () => {
  isLoading.value = true
  const { shipping } = state

  try {
    const { updateCustomer } = await GqlUpdateCustomer({ input: { id: viewer.value?.id, shipping } })

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
  <UserDetailsSection :state :isLoading :title="$t('messages.general.shipping')" :submit="$t('messages.account.updateDetails')" @submit="onSubmit">
    <UFormGroup :label="$t('messages.billing.firstName')" name="firstName" required>
      <UInput v-model="state.shipping!.firstName!" type="text" placeholder="John" autocomplete="given-name" required />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.lastName')" name="lastName" required>
      <UInput v-model="state.shipping!.lastName!" type="text" placeholder="Doe" autocomplete="family-name" required />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.phone')" name="phone">
      <UInput v-model="state.shipping!.phone!" type="tel" placeholder="+34 654 321 987" autocomplete="tel" />
    </UFormGroup>

    <UFormGroup :label="`Company (${$t('messages.general.optional')})`" name="company">
      <UInput v-model="state.shipping!.company!" type="text" placeholder="Company Inc." autocomplete="organization" />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.address1')" name="address1">
      <UInput v-model="state.shipping!.address1!" type="text" placeholder="123 Main St" autocomplete="address-line1" />
    </UFormGroup>

    <UFormGroup :label="`${$t('messages.billing.address2')} (${$t('messages.general.optional')})`" name="address2">
      <UInput v-model="state.shipping!.address2!" type="text" placeholder="Apartment, studio, or floor" autocomplete="address-line2" />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.city')" name="city">
      <UInput v-model="state.shipping!.city!" type="text" placeholder="Zaragoza" autocomplete="address-level2" />
    </UFormGroup>

    <UFormGroup :label="`${$t('messages.billing.state')} (${$t('messages.general.optional')})`" name="state">
      <UInput
        v-if="!countryStatesDict[state.shipping!.country!]?.length"
        v-model="state.shipping!.state!" type="text" placeholder="State"
      />
      <USelect
        v-else
        v-model="state.shipping!.state!"
        :options="countryStatesDict[state.shipping!.country!]"
        optionAttribute="name"
        valueAttribute="code"
        placeholder="Select a state"
        required
      />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.country')" name="country" required>
      <USelect
        v-model="state.shipping!.country!"
        :options="countriesToShow"
        optionAttribute="name"
        valueAttribute="code"
        placeholder="Select a country"
        required
      />
    </UFormGroup>

    <UFormGroup :label="$t('messages.billing.zip')" name="postcode" required>
      <UInput v-model="state.shipping!.postcode!" type="text" placeholder="50001" autocomplete="postal-code" required />
    </UFormGroup>
  </UserDetailsSection>
</template>
