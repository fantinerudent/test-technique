<template>
  <div class="animal-input">
    <form @submit.prevent="onSubmit">
      <label for="name">
        modifier le nom de votre animal :
        <input
          type="text"
          name="name"
          @keyup="updateNameAnimal"
          :value="animalLocal.name"
        />
      </label>
      <br />
      <br />
      <label for="age">
        modifier l'âge de votre animal :
        <input
          type="number"
          name="age"
          :value="animalLocal.age"
          @change="updateAgeAnimal"
        />
      </label>
      <br />
      <br />
      <label for="species">
        modifier l'espèce de votre animal :
        <input
          type="radio"
          id="rabbit"
          name="species"
          value="lapin"
          v-model="animalLocal.species"
          @change="updateSpecieAnimal"
        />
        <label for="lapin"> Lapin 🐰</label>
        <input
          type="radio"
          id="cat"
          name="species"
          value="chat"
          v-model="animalLocal.species"
          @change="updateSpecieAnimal"
        />
        <label for="chat"> Chat 🐱</label>
        <input
          type="radio"
          id="dog"
          name="species"
          value="chien"
          v-model="animalLocal.species"
          @change="updateSpecieAnimal"
        />
        <label for="chien"> Chien 🐶</label>
      </label>
      <br />
      <br />
      <label for="vetoAppointment">
        {{
          animalLocal.lastAppointment.typeOfAppointment
            ? "vous avez renseigné  => " +
              animalLocal.lastAppointment.date +
              " vous pouvez modifier "
            : "veuillez renseigner le dernier rdv"
        }}
        <input type="date" name="date" @change="updateDateLastAppointment" />
        <br />
        <br />
        <label for="typeOfAppointment">
          Type du dernier rdv:
          <input
            type="radio"
            id="vaccine"
            name="typeOfAppointment"
            value="vaccin"
            @change="updateTypeLastAppointment"
            v-model="animalLocal.lastAppointment.typeOfAppointment"
          />
          <label for="vaccin"> Vaccin</label>
          <input
            type="radio"
            id="injury"
            name="typeOfAppointment"
            value="blessure"
            @change="updateTypeLastAppointment"
            v-model="animalLocal.lastAppointment.typeOfAppointment"
          />
          <label for="blessure"> Blessure</label>
          <input
            type="radio"
            id="control"
            name="typeOfAppointment"
            value="controle"
            @change="updateTypeLastAppointment"
            v-model="animalLocal.lastAppointment.typeOfAppointment"
          />
          <label for="controle"> Contrôle</label>
        </label>
      </label>
      <br />
      <br />
      <button @click="onSave">Sauvegarder</button>
      <p id="error">{{ errorMessage }}</p>
    </form>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      required: true,
    },
  },
  data() {
    return {
      animalLocal: {
        id: this.animal.id,
        name: this.animal.name,
        age: this.animal.age,
        species: this.animal.species,
        lastAppointment: {
          date: this.animal.lastAppointment.date,
          typeOfAppointment: this.animal.lastAppointment.typeOfAppointment,
        },
      },
      errorMessage: "",
    };
  },
  methods: {
    onSave() {
      setTimeout(() => {
        this.$emit("save");
        this.$emit("message", "modifications apportées")
      }, 100);
    },
    onSubmit() {
      this.$store.commit("animals/upgrateAnimalInStore", this.animalLocal);
    },
    updateNameAnimal(e) {
      this.animalLocal.name = e.target.value;
    },
    updateAgeAnimal(e) {
      e.target.value > 0
        ? (this.animalLocal.age = e.target.value)
        : (this.errorMessage = "merci de vérifier l'âge");
    },
    updateSpecieAnimal(e) {
      this.animalLocal.species = e.target.value;
    },
    updateDateLastAppointment(e) {
      this.animalLocal.lastAppointment.date = e.target.value;
    },
    updateTypeLastAppointment(e) {
      this.animalLocal.lastAppointment.typeOfAppointment = e.target.value;
    },
  },
};
</script>

<style>
.animal-input {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: left;
}
#error {
  color: red;
  font-weight: bold;
}
</style>