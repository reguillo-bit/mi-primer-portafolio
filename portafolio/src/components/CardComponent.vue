<template>
  <div class="carta">
    <img
      width="60%"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzV0IjWnaMUotvhZEVsyc6-Ttut46mWC6yhSrQia7NSQ&s=10"
      alt=""
    />
    <p>Lenguaje:python</p>
    <p>Nivel:20%</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return {
      cardimagen: String,
      lenguage: String,
      nivel: Number,
      lenguages: [
        {
          Img: "https://w7.pngwing.com/pngs/266/560/png-transparent-python-computer-icons-programmer-javascript-programming-language-python-logo-angle-text-logo.png",
          Nombre: "Python",
          Nivel: 50,
        },
        {
          Img: "",
          Nombre: "C#",
          Nivel: 30,
        },
        {
          Img: "",
          Nombre: "Java",
          Nivel: 40,
        },
        {
          Img: "",
          Nombre: "C++",
          Nivel: 10,
        },
        {
          Img: "",
          Nombre: "Html",
          Nivel: 50,
        },
      ],
      frameworks: [
        {
          Img: "",
          Nombre: ".Netframework",
          Nivel: 40,
        },
        {
          Img: "",
          Nombre: "Vue.js",
          Nivel: 40,
        },
      ],
    };
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
}
</style>
