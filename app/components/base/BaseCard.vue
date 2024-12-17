<script setup lang="ts">
const route = useRoute();
const { FALLBACK_IMG } = useHelpers();

const { node } = defineProps<{
  node: Product | ProductCategory;
}>()

// const imgWidth = 280;
// const imgHeight = Math.round(imgWidth * 1.125);

// example: ?filter=pa_color[green,blue],pa_size[large]
// const filterQuery = ref(route.query?.filter as string);
// const paColor = ref(filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || []);

// watch filterQuery
// watch(
//   () => route.query,
//   () => {
//     filterQuery.value = route.query.filter as string;
//     paColor.value = filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || [];
//   },
// );

// const mainImage = computed<string>(() => props.node?.image?.producCardSourceUrl || props.node?.image?.sourceUrl || '/images/placeholder.jpg');
// const imagetoDisplay = computed<string>(() => {
//   if (paColor.value.length) {
//     const activeColorImage = props.node?.variations?.nodes.filter((variation) => {
//       const hasMatchingAttributes = variation.attributes?.nodes.some((attribute) => paColor.value.some((color) => attribute?.value?.includes(color)));
//       const hasMatchingSlug = paColor.value.some((color) => variation.slug?.includes(color));
//       return hasMatchingAttributes || hasMatchingSlug;
//     });
//     if (activeColorImage?.length) return activeColorImage[0]?.image?.producCardSourceUrl || activeColorImage[0]?.image?.sourceUrl || mainImage.value;
//   }
//   return mainImage.value;
// });

const className = {
  title: '',
}
</script>

<template>
  <div class="relative">
    <!-- <pre class="text-[10px]">{{ node }}</pre> -->
    <!-- <pre class="text-[10px]">{{ Object.keys(node) }}</pre> -->

    <NuxtLink class="grid gap-2 leading-none" :to="`/product/${decodeURIComponent(node?.slug ?? '')}`">
      <div class="grid gap-1 relative">
        <slot name="figure" />
        <figure class="">
          <NuxtImg
            class="w-full h-full object-cover"
            :src="node.image?.sourceUrl || FALLBACK_IMG"
            :sizes="`sm:${450 / 2}px md:${450}px`"
            :width="450" :height="450"
            :alt="node.image?.altText || node.name || 'image'"
            :title="node.image?.title || node.name || 'image'"
            loading="lazy" placeholderClass="blur-xl" placeholder
          />
        </figure>
      </div>
      <div class="grid gap-1">
        <slot name="default" :className>
          <h2 :class="className.title">{{ node.name }}</h2>
        </slot>
      </div>
    </NuxtLink>
  </div>
</template>
