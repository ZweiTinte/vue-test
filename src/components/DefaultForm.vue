<template>
  <form @submit.prevent="onSubmit">
    <div class="formRow">
      <label for="title" class="formLabel"> Titel: </label>
      <input
        type="text"
        id="title"
        name="title"
        autocomplete="off"
        v-model.lazy.trim="titleInput"
        class="formTextInput"
        maxlength="100"
      />
    </div>
    <div class="formRow">
      <label for="formText" class="formLabel"> Text: </label>
      <div class="textArea">
        <textarea
          type="textArea"
          id="formText"
          name="formText"
          autocomplete="off"
          v-model.lazy.trim="textInput"
          v-on:input="onTextAreaChange"
          class="formTextAreaInput"
          maxlength="300"
        ></textarea>
        <div class="textAreaInfo">
          {{ `${textAreaLength} / 300` }}
        </div>
      </div>
    </div>
    <div class="formRow">
      <label for="formDate" class="formLabel"> Datum: </label>
      <input
        type="date"
        id="formDate"
        name="formDate"
        autocomplete="off"
        v-model.lazy.trim="dateInput"
        v-on:change="onChange"
        class="formTextInput"
        :max="maxDate"
      />
    </div>
    <div className="formRow">
      <button type="submit" class="formSubmit">Speichern</button>
    </div>
  </form>
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
      idNew: this.id,
      titleInput: this.title,
      textInput: this.text,
      dateInput: this.date,
      textAreaLength: "0",
    };
  },
  methods: {
    onSubmit() {
      if (
        this.titleInput === "" ||
        this.textInput === "" ||
        this.dateInput === ""
      ) {
        return;
      }
      this.$emit(
        "formSubmitted",
        this.id,
        this.titleInput,
        this.textInput,
        this.dateInput
      );
      this.titleInput = "";
      this.textInput = "";
      this.dateInput = "";
    },
    onChange(e: Event) {
      const element = e.target as HTMLInputElement;
      if (element) {
        this.dateInput = element.value;
      }
    },
    maxDate() {
      return moment(new Date()).format("yyyy-mm-dd");
    },
    onTextAreaChange(e: Event) {
      const element = e.target as HTMLInputElement;
      if (element) {
        if (element.value.length > 0) {
          this.textAreaLength = element.value.length.toString();
        } else {
          this.textAreaLength = "0";
        }
      }
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

form {
  padding: 1rem 1rem 0rem;
}

.textArea {
  flex-direction: column;
  display: flex;
}

.formSubmit {
  outline: none;
  font-size: 1rem;
  color: $white;
  background-color: $buttonBackground;
  width: 10rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  border: 0.15rem solid $blue3;
  &:hover {
    background-color: $green1;
    border-color: $green2;
  }
}

.formTextInput {
  outline: none;
  font-size: 1rem;
  color: $white;
  background-color: $buttonBackground;
  border-radius: 0.25rem;
  border: 0.15rem solid $blue3;
  height: 1.9rem;
  line-height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 15rem;
}

.formTextAreaInput {
  outline: none;
  font-size: 1rem;
  color: $white;
  background-color: $buttonBackground;
  border-radius: 0.25rem;
  border: 0.15rem solid $blue3;
  height: 10rem;
  line-height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 15rem;
}

.formLabel {
  padding-top: 0.5rem;
  color: $white;
  font-size: 1.25rem;
}

.textAreaInfo {
  padding-top: 0.5rem;
  padding-right: 0.25rem;
  color: $white;
  font-size: 1rem;
  text-align: end;
}

.formRow {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  width: 30rem;
}
</style>
