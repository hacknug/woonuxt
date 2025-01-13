<script setup lang="ts">
definePageMeta({ layout: false })

const title = 'Calero'
const description: string[] = []

const sections = [
  {
    title: 'NUESTRA HISTORIA',
    description: [
      'Tradición joyera desde 1862, actualmente 5º generación.',
      'Con el paso del tiempo la familia Calero ha estado presente en Zaragoza proporcionando servicios a joyerías y empresas, desde el modelado de cera, la fundición, o el repasado de piezas en taller, año tras año hemos ido actualizando nuestro equipamiento hasta disponer de  las últimas tecnologías, desde soldadura laser, impresión 3D y lo último en microfusión nos ha brindado la posibilidad de realizar todo tipo de piezas, si tú puedes imaginarlo nosotros te lo fabricamos.',
      'Generación tras generación han ido absorbiendo los conocimientos de las anteriores generaciones hasta llegar a donde estamos hoy. En nuestra historia cabe destacar el trabajo de nuestro abuelo y bisabuelo que realizaron piezas tan increíbles para nuestra ciudad como el libro de oro del pilar, diferentes calices de varias iglesias o la Virgen de la Dolorosa.',
    ],
  },
  {
    title: 'CADA ENCARGO PERSONALIZADO',
    description: [
      'Es un proceso creativo, participativo, es una experiencia muy amena y cercana donde realizaremos la pieza de tus sueños. Siempre nos esforzamos para que el resultado supere sus expectativas, y nos alegra poder decir que cada día más personas nos encargan sus pequeños deseos. Gracias a todos ellos por ser la mejor motivación y nuestros principales prescriptores.',
      'Nuestros años de experiencia en el sector son nuestra garantía de profesionalidad, una experiencia que crece con cada día de trabajo y que estimulamos con una formación continuada, ofreciendo las últimas tendencias y novedades en joyería, piezas de orfebrería a medida y diseños personalizados.',
      'Somos especialistas en diamantes y piedras de color. Nuestras piezas con oro y piedras preciosas van acompañadas de un certificado de garantía.',
      'Realizamos cualquier tipo de joya.',
      'Tenemos un compromiso: que nuestros clientes siempre se vayan satisfechos.',
    ],
  },
  {
    title: 'COMPROMISO DE CALIDAD',
    description: [
      'Todos nuestros productos son manufacturados por nosotros, todas las gemas que tenemos son compradas a diferentes proveedores que respetan en su totalidad que el proceso de extracción sea respetuoso con el medio ambiente, de la misma manera los diamantes son proporcionados por proveedores autorizados que nos proporcionan las mejores piezas de la mejor calidad, siempre respetando el proceso Kimberley que nos asegura que los diamantes han tenido una correcta trazabilidad.',
    ],
  },
  {
    title: 'RECICLADO',
    description: [
      'Damos la posibilidad de reciclar las piezas antiguas de nuestros clientes de esta manera a parte de abaratar los costes, ayudamos a evitar a que se siga explotando salvajemente el entorno para su extracción, otro de nuestros servicios es el de actualizar piezas antiguas dándoles un toque diferente así podréis mantener esa pieza que fue tan significativa, pero de un modo algo más moderno.',
    ],
  },
]
</script>

<template>
  <NuxtLayout :title :description name="page">
    <template v-for="(section, key) in sections" :key>
      <BaseSection v-bind="section" />
    </template>
  </NuxtLayout>
</template>
