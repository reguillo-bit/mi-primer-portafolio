<template>
  <div class="ventanas">
    <div class="contenedor">
      <div class="barraopciones2">Backend</div>
      <section class="conten-grid">
        <card-component />
        <card-component />
        <card-component />
        <card-component />
        <card-component />
        <card-component />
        <card-component />
        <card-component />
      </section>
    </div>
    <div class="contenedor2">
      <div class="barraopciones2">Frontend</div>
      <section class="conten-grid"></section>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "LenguajesComponents",
  components: {
    CardComponent,
  },
  data() {
    return {
      ventana: false,
    };
  },
  methods: {
    abrirventana() {
      if (this.ventana == false) {
        this.ventana = true;
      } else {
        this.ventana = false;
      }
    },
  },
};
</script>

<style>
.ventanas {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contenedor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 500px;
  background-color: #c0c0c0;
  border: solid black;
  border-right-color: #828281;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.contenedor2 {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 400px;
  background-color: #c0c0c0;
  border: solid black;
  border-right-color: #828281;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.barraopciones2 {
  display: flex;
  color: aliceblue;
  justify-self: start;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100%;
  background-image: linear-gradient(#010081);
}
.closable3 {
  margin-left: 87%;
}
.conten-grid {
  display: grid;
  gap: 10px;
  height: 95%;
  width: 95%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: auto auto auto auto;
}
</style>
