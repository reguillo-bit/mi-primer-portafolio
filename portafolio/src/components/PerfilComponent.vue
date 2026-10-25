<template>
  <div class="perfil-componente">
    <span v-show="abrir == false">
      <button @click="abrirperfil" class="closable2">[ ]</button>
    </span>
    <span v-show="abrir">
      <div class="barraperfil">
        <div class="barraopciones">
          <p>Mi perfil</p>
          <button @click="abrirperfil" class="closable">x</button>
        </div>
        <div class="">
          <img :src="imagen" class="fotoperfil" />
          <p class="datos">Nombre: {{ nombre }}</p>
          <p class="datos">Edad:{{ edad }}</p>
          <p class="datos">Descripcion:{{ descripcion }}</p>
        </div>
        <section>
          <h2>Redes sociales</h2>
          <li>
            <a href="https://github.com/reguillo-bit">Github</a>
          </li>
          <li>
            <p>Correo: reguillotorresillacesar@gmail.com</p>
          </li>
          <li></li>
        </section>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "PerfilComponent",
  props: {
    imagen: String,
    nombre: String,
    edad: Number,
    descripcion: String,
  },

  data() {
    return {
      abrir: true,
    };
  },
  methods: {
    abrirperfil() {
      if (this.abrir == false) {
        this.abrir = true;
      } else {
        this.abrir = false;
      }
    },
  },
};
</script>

<style>
.datos {
  display: flex;
  width: 100%;
  height: 20px;
  background-color: #c0c0c0;
  border: solid #595959 3px;
}
.barraperfil {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 98vh;
  width: 400px;
  box-sizing: border-box;
  background-color: #c0c0c0;
  border: solid black;
  border-right-color: #828281;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.fotoperfil {
  margin-top: 20px;
  display: flex;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #010081;
}
.barraopciones {
  display: flex;
  color: aliceblue;
  justify-self: start;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100%;
  background-image: linear-gradient(#010081);
}
.closable {
  margin-left: 78%;
}
.closable2 {
  width: 30px;
}
.closable2:hover {
  background-color: red;
  cursor: pointer;
}
.closable:hover {
  background-color: red;
  cursor: pointer;
}
</style>
