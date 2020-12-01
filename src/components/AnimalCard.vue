<template>
  <div class="animal-card">
    <animal-input
      v-if="isEditMode"
      :animal="animal"
      @save="isEditMode = false"
      @message="displayMessage"
    />
    <animal-info v-else :animal="animal" @edit="isEditMode = true" />
    <div id="message">
      {{ messageToDisplay }}
    </div>
  </div>
</template>

<script>
import AnimalInput from "./AnimalInput";
import AnimalInfo from "./AnimalInfo";

export default {
  components: { AnimalInfo, AnimalInput },
  props: {
    animal: {
      required: true,
    },
  },
  data() {
    return {
      isEditMode: false,
      messageToDisplay: "",
    };
  },
  methods: {
    displayMessage(msg) {
      this.messageToDisplay = msg;
      setTimeout(() => {
        this.messageToDisplay = "";
      }, 4000);
    },
  },
};
</script>

<style scoped>
.animal-card {
  border: 1px solid lightgray;
  border-radius: 4px;
  margin: 12px;
  padding: 24px;
  width: 65ch;
}

#message {
  color: green;
  font-weight: bold;
}
</style>