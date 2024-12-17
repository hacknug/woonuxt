<script setup lang="ts">
definePageMeta({ layout: false })

const title = 'Servicios'
const description: string[] = []

const sections = [
  {
    title: 'DISEÑO E IMPRESIÓN 3D',
    description: [
      'Te ofrecemos las mejores soluciones de modelado 3D en joyería, que reflejarán a la perfección tu idea o boceto desde todos sus ángulos.Con esta técnica, es posible perfilar con detalle y con la máxima precisión, esculpiendo el modelo en versión digital, y disponer de un prototipo terminado en solo unas horas gracias a la impresión 3D, que permite crear la pieza final en resina castable.Para ello, utilizamos software especializado de última generación.No dudes en consultarnos: daremos vida a tus diseños para que pasen del ordenador a tus manos en el menor tiempo posible.',
      'Disponemos de la tecnología más avanzada y las aplicaciones más punteras para el diseño de joyas en 3D.Así, somos expertos en el manejo de diversos programas de diseño 3D, cuyas prestaciones nos permiten dar vida a los diseños más vanguardistas con la máxima precisión y el nivel de detalle más exhaustivo.Además, esta técnica hace que sea posible conocer con exactitud el aspecto, el acabado, la textura final del modelo.',
      'Entregamos al cliente:',
      'Archivo del modelo en formato.stl.',
      'La pieza fundida en el metal solicitado.',
      'Molde de silicona para reproducciones posteriores.',
      'La posibilidad de crear piezas seriadas de una misma colección',
    ],
  },
  {
    title: 'FABRICACIÓN DE MOLDES',
    description: [
      'Disponemos de equipo para fabricar moldes de caucho y silicona, de esta manera podemos realizarle un molde a todo tipo de piezas.',
      'En nuestro taller tenemos más de 7000 referencias de diferentes piezas que hemos ido fabricando por lo que muy probablemente ya tengamos un molde realizado de la pieza que tanto te gusta, si no disponemos de el,… Se fabricará.',
      'Guardamos los cauchos de todos nuestros clientes para agilizar la fabricación de todos sus encargos, de esta manera los pedidos salen mas rápidamente.Los moldes de nuestros clientes son de dominio exclusivo de sus dueños, nosotros los guardamos mientras dure el trabajo, una vez finalizada la colección o a petición de su dueño se le enviará o destruirá en su defecto.',
    ],
  },
  {
    title: 'MICROFUSIÓN DE CERAS Y RESINAS',
    description: [
      'En nuestro taller disponemos de un equipo de gran capacidad para poder fabricar todo tipo de piezas y en prácticamente todos los tamaños, trabajamos con sistemas de succión vacuum a alta presión, disponemos de cilindros con un tamaño comprendido desde 80x100mm hasta 130x250mm de capacidad, realizamos fundiciones todas las semanas, desde el momento de recibir la pieza o el encargo suele demorarse de 5 a 10 dias hasta que reciba la pieza fundida en cualquier material.',
    ],
  },
  {
    title: 'FUNDICION BAJA FRECUENCIA',
    description: [
      'Disponemos de un equipo de fundición de baja frecuencia para realizar todo tipo de objetos de regalo o detalles de empresa en Zamak',
      'El proceso de fabricación comienza con el diseño inicial de la pieza a reproducir ya sea un logo para hacer un pin o llavero, lo imprimimos o modelamos y fundimos los originales en plata, sobre esto realizamos un molde de centrifugadora de zamak el cual tendrá una vida útil aproximada de unas 400 - 600 fundidas.El coste del molde inicial se realiza como un único pago, el resto de piezas que en un futuro quiera fundir no tendrá que volver a abonar el coste del molde.',
      'Las piezas se repasan a mano y lijan y pulen en equipos de vibración y bombos turbo.',
      'Por último paso las piezas se bañan en diferentes materiales, plata, latón o bronce dorado.',
    ],
  },
  {
    title: 'ENGASTADO CON MICROSCOPIO',
    description: [
      'Dentro de mis habilidades entra la del engastado, desde nuestra empresa ofrecemos todo el proceso completo de producción desde el diseño del prototipo hasta la fabricación de las piezas de joyería o bisutería, pasando por el engastado de todas las gemas y diamantes.El arte del engastado de joyas reside en el conocimiento de las propiedades de las gemas y la destreza para que queden perfectamente insertadas en el metal, sin defectos de movimiento.Te ofrecemos la montura más adecuada para el material o la gema que elijas, basándonos en la forma y dureza del elemento escogido.',
    ],
  },
  {
    title: 'REPASADO, PULIDO Y BAÑOS ELECTROLITICOS',
    description: [
      'Disponemos de numerosos acabados o terminaciones a fin de que la pieza de joyería sea lo más fiel posible al diseño; de este modo, realizamos el tratamiento de la superficie de las piezas para otorgarles una textura única, que reproduzcan con fidelidad y precisión el aspecto del diseño original.Podrás decantarte entre acabado enarenado, mate, pulido o brillante para que tu pieza luzca tal como la ideaste.',
      'Contamos con la maquinaria más avanzada, que nos permite lograr acabados de vanguardia capaces de conservarse durante mucho tiempo, con objeto de que tus diseños permanezcan sin alteraciones y con el mismo aspecto que tenían el primer día.Te ofrecemos diferentes acabados y varios metales para tus piezas de joyería: plata, oro rosa, oro amarillo y oro blanco.En el caso del oro, dispones de opciones de 9 y 18 kilates.',
    ],
  },
  {
    title: 'GEMAS Y DIAMANTES',
    description: [
      'En nuestro stock disponemos de una amplia variedad de gemas y diamantes, disponemos de multitud de tallas y diferentes variantes de color de muchas gemas.',
      'En nuestra tienda online encontrareis algunas de las piezas que tenemos en stock, también trabajamos con una empresa Belga que nos proporciona todo tipo de diamantes desde los más pequeños “melee”, hasta las piezas más exclusivas que deseéis, disponemos de los mejores precios del mercado, si encuentras un precio mejor, TE LO MEJORAMOS!!!.',
      'Todos nuestros diamantes a partir de 0.30ct irán certificados por GIA, IGI o HRD.',
    ],
  },
]
</script>

<template>
  <NuxtLayout :title :description name="page">
    <template v-for="section in sections">
      <BaseSection v-bind="section" />
    </template>
  </NuxtLayout>
</template>
