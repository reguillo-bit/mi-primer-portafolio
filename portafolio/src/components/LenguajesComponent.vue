<template>
  <div class="ventanas">
    <div class="contenedor">
      <div class="barraopciones2">Backend</div>
      <section class="conten-grid">
        <card-component
          v-for="lenguage in lenguages"
          :key="lenguage.id"
          :cardimagen="lenguage.Img"
          :nombre="lenguage.Nombre"
          :nivel="lenguage.Nivel"
        />
      </section>
    </div>
    <div class="contenedor2">
      <div class="barraopciones2">Frontend</div>
      <section class="conten-grid">
        <card-component
          v-for="forntend in forntends"
          :key="forntend.id"
          :cardimagen="forntend.Img"
          :nombre="forntend.Nombre"
          :nivel="forntend.Nivel"
        />
      </section>
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
      lenguages: [
        {
          id: 1,
          Img: "python.png",
          Nombre: "Python",
          Nivel: "Tecnico",
        },
        {
          id: 2,
          Img: "c#.png",
          Nombre: "C#",
          Nivel: "Tecnico",
        },
        {
          id: 3,
          Img: "java.png",
          Nombre: "Java",
          Nivel: "Tecnico",
        },
        {
          id: 4,
          Img: "c++.png",
          Nombre: "C++",
          Nivel: "Auto didacta",
        },
        {
          id: 5,
          Img: "mysql.png",
          Nombre: "mysql",
          Nivel: "Tecnico",
        },
      ],
      forntends: [
        {
          id: 1,
          Img: "javascript.png",
          Nombre: "JavaScript",
          Nivel: "Tecnico",
        },
        {
          id: 2,
          Img: "vue.png",
          Nombre: "Vue.js",
          Nivel: "Tecnico",
        },
        {
          id: 3,
          Img: "html.png",
          Nombre: "Html",
          Nivel: "Tecnico",
        },
      ],
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
  justify-content: center;
  align-items: center;
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
