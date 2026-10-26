<template>
  <div class="carta">
    <img
      width="60%"
      :src="require(`@/assets/${cardimagen}`)"
      alt="imagen.png"
    />
    <p>{{ nombre }}</p>
    <p>Nivel:{{ nivel }}</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    cardimagen: String,
    nombre: String,
    nivel: Number,
  },
};
</script>

<style>
.carta {
  flex-direction: column;
  margin-top: 10px;
  background-color: #7e7e7d;
  object-fit: cover;
  grid-row: span 1fr;
  grid-column: span 1fr;
}
.carta:hover {
  background-color: #010081;
  cursor: pointer;
  transform: scale(1.1);
  color: azure;
}
</style>
