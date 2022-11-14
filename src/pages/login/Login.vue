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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
