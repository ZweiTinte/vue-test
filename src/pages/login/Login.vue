<template>
  <div class="pageLayout">
    <div class="formCard">
      <form @submit.prevent="onSubmit">
        <div class="formRow">
          <label for="name" class="formLabel"> Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            autocomplete="off"
            v-model.lazy.trim="nameInput"
            class="formTextInput"
          />
        </div>
        <div class="formRow">
          <label for="password" class="formLabel"> Passwort: </label>
          <input
            type="password"
            id="password"
            name="password"
            autocomplete="off"
            v-model.lazy.trim="passwordInput"
            class="formTextInput"
          />
        </div>
        <div className="formRow">
          <button type="submit" class="formSubmit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      nameInput: "",
      passwordInput: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.nameInput === "" || this.passwordInput === "") {
        return;
      }
      if (this.nameInput === "TestUser" && this.passwordInput === "secret") {
        localStorage.setItem(
          "login",
          JSON.stringify({ name: this.nameInput, password: this.passwordInput })
        );
        this.nameInput = "";
        this.passwordInput = "";
        this.$router.push("/detail");
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

body {
  background-color: #000000;
  height: "100vh";
  min-height: "100vh";
  font-weight: 400;
  font-family: "Ubuntu";
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pageLayout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.formCard {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0.5rem 0.5rem;
  align-items: center;
  width: 34rem;
  border-radius: 0.4rem;
  border: 0.25rem solid $cardBorder;
  background-color: $cardBackground;
  flex-direction: column;
}

form {
  padding: 1rem 1rem 0rem;
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

.formLabel {
  padding-top: 0.5rem;
  color: $white;
  font-size: 1.25rem;
}

.formRow {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  width: 30rem;
}
</style>
