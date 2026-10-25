<template>
  <div class="escritorio">
    <PerfilComponent />
    <LenguajesComponent />
  </div>
</template>

<script>
import LenguajesComponent from "@/components/LenguajesComponent.vue";
import PerfilComponent from "@/components/PerfilComponent.vue";
export default {
  name: "PortafolioViews",
  components: {
    PerfilComponent,
    LenguajesComponent,
  },
};
</script>

<style>
.escritorio {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

body {
  height: 95vh;
  width: 95vw;
  background-color: rgb(0, 128, 129);
}
</style>
