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
      textAreaLength: this.text.length.toString(),
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

<style lang="scss"></style>
