<template>
  <div class="animal-info">
    <b>{{ animal.name }}</b>
    <span><u>Espèce</u>: {{ animal.species }}</span>
    <span><u>Age</u>: {{ animal.age }}</span>

    <br />
    <ul class="instructions">
      <li>Date du rdv: {{animal.lastAppointment.date ? animal.lastAppointment.date : "veuillez préciser la date du dernier rdv" }}</li>
      <li>Type de rdv: {{animal.lastAppointment.typeOfAppointment ? animal.lastAppointment.typeOfAppointment : " veuillez donner des informations sur le dernier rdv vétérinaire" }} </li>
    </ul>
    <br />
    <button @click="onEdit">Modifier</button>
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      required: true
    }
  },
  methods: {
    onEdit() {
      this.$emit('edit');
    }
  }
}
</script>

<style scoped>
.animal-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
</style>