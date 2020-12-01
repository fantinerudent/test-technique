<template>
  <div class="animal-input">
    <p class="instructions">
      // TODO modifer ce composant pour permettre de modifier l'animal et de le
      sauvegarder via le store
    </p>
    <p>test : {{ name }}</p>
    <form @submit="onSave">
      <label for="name">
        modifier le nom de votre animal :
        <input
          type="text"
          name="name"
          @keyup="updateNameAnimal"
          :value="name"
        />
      </label>
      <br />
      <br />
      <label for="age">
        modifier l'âge de votre animal :
        <input type="number" name="age" :value="age" @change="updateAgeAnimal"/>
      </label>
      <br />
      <br />
      <label for="specie">
        modifier l'espèce de votre animal :
        <input type="radio" id="rabbit" name="rabbit" value="rabbit" />
        <label for="rabbit"> Lapin 🐰</label>
        <input type="radio" id="cat" name="cat" value="cat" />
        <label for="cat"> Chat 🐱</label>
        <input type="radio" id="dog" name="dog" value="dog" />
        <label for="dog"> Chien 🐶</label>
      </label>
      <br />
      <br />
      <label for="vetoAppointment">
        dernier rdv véto ?
        <input
          type="date"
        />
        <br />
        <br />
        <label for="typeOfAppointment">
          Type du dernier rdv:
          <input type="radio" id="vaccine" name="vaccine" value="vaccine" />
          <label for="vaccine"> Vaccin</label>
          <input type="radio" id="injury" name="injury" value="injury" />
          <label for="injury"> Blessure</label>
          <input type="radio" id="control" name="control" value="control" />
          <label for="control"> Contrôle</label>
        </label>
      </label>
      <br />
      <br />
      <button @click="onSave">Sauvegarder</button>
    </form>
    <ul class="instructions">
      <li>Nom de l'animal:</li>
      <li>Age de l'animal: integer > 0</li>
      <li>Espèce de l'animal: string parmi {Chat, Chien, Lapin}</li>
      <li>
        Dernier rdv chez le vétérinaire (// TODO Créer un modèle
        AppointementModel dans le store)
        <ul>
          <li>Date du rdv: Date</li>
          <li>Type de rdv: string parmi {contrôle, blessure, vaccin}</li>
        </ul>
      </li>
    </ul>
    <br />
    <!-- <button @click="onSave">Sauvegarder</button> -->
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
      name: this.animal.name,
      age: this.animal.age,
      species: this.animal.species,
      lastAppointment: {
        date: this.animal.lastAppointment.date,
        typeOfAppointment: this.animal.lastAppointment.typeOfAppointment,
      },
    };
  },
  methods: {
    onSave() {
      this.$emit("save");
    },
    //method which will send the value, and the name of the event to cange
    updateNameAnimal(e) {
      this.name = e.target.value
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
</style>