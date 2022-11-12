<template>
  <div class="itemInfo">
    <div class="itemTitle">
      <div>
        {{ title }}
      </div>
      <div>
        {{ date }}
      </div>
    </div>
    <div class="itemTitle">
      <div class="itemText">
        {{ text }}
      </div>
      <button @click="onEdit">Editieren</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  props: {
    id: { required: true, type: String },
    title: { required: true, type: String },
    text: { required: true, type: String },
    date: { required: true, type: String },
  },
  data() {
    return {
      dateValue: moment(new Date(this.date)).format("DD.MM.yyyy"),
    };
  },
  methods: {
    onEdit() {
      this.$emit("itemEdit", {
        id: this.id,
        title: this.title,
        text: this.text,
        date: this.date,
      });
    },
  },
});
</script>

<style lang="scss">
$black: #000000;
$white: #ffffff;
$buttonBackground: #303030;
$cardBorder: #5a6969;
$cardBackground: #2d3a3b;
$green1: #097e05;
$green2: #03550a;
$red1: #b40505;
$red2: #570202;
$blue1: #0e2c8f;
$blue2: #025f69;
$blue3: #2acbe0;
$blue4: #24afc2;

button {
  border-radius: 0.25rem;
  border: 0.15rem solid $blue3;
  outline: none;
  font-size: 1rem;
  color: $white;
  background-color: $buttonBackground;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    background-color: $blue4;
    color: $black;
  }
}

.itemTitle {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.itemInfo {
  display: flex;
  flex-direction: column;
  width: 30rem;
  padding: 0.5rem;
  color: $white;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.4rem;
  border: 0.25rem solid $cardBorder;
  background-color: $cardBackground;
}

.itemText {
  font-size: 1rem;
  padding-top: 0.5rem;
  font-style: italic;
}
</style>
