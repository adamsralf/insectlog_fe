<template>
  <div class="py-5 text-center">
    <img src="~/assets/images/illustrations/304.svg" class="mx-auto" alt="">
    <div class="text-primary font-bold text-3xl">
      Alles Leer!
    </div>
    <div class="text-gray-800">
      Leider konnten wir keine Ergebnisse finden.
    </div>
  </div>
</template>

<script>
export default {
  name: "tab_species",
  props: {
    content: {
      type: Array
    }
  }
}
</script>
