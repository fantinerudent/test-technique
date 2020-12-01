<template>
  <div class="animal-list">
    <animal-card v-for="animal in animals" :key="animal.id" :animal="animal" />
  </div>
</template>

<script>
import AnimalCard from "./AnimalCard";
export default {
  components: { AnimalCard },
  computed: {
    animals: function () {
      return this.$store.getters["animals/getAllAnimals"];
    },
  },
};
</script>

<style scoped>
.animal-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>