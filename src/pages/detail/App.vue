<template>
  <div class="pageLayout">
    <div class="formCard">
      <DefaultForm
        @formSubmitted="addItem"
        :id="formItem?.id || ''"
        :title="formItem?.title || ''"
        :text="formItem?.text || ''"
        :date="formItem?.date || ''"
        :key="formItem?.id"
      ></DefaultForm>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <DefaultItem
          :id="item.id"
          :title="item.title"
          :text="item.text"
          :date="item.date"
          @itemEdit="editItem"
        ></DefaultItem>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultForm from "../../components/DefaultForm.vue";
import DefaultItem from "../../components/DefaultItem.vue";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const uniqueId: (param: string) => string = require("lodash.uniqueid");

interface ItemInterface {
  id: string;
  title: string;
  text: string;
  date: string;
}

export default defineComponent({
  name: "App",
  components: {
    DefaultForm,
    DefaultItem,
  },
  data() {
    return {
      items:
        localStorage.getItem("items") !== null
          ? JSON.parse(localStorage.getItem("items") as string)
          : ([] as Array<ItemInterface>),
      formItem: null as ItemInterface | null,
    };
  },
  methods: {
    addItem(
      id: string,
      titleInput: string,
      textInput: string,
      dateInput: string
    ) {
      const itemIndex = this.items.findIndex(
        (el: { id: string; title: string; text: string; date: string }) =>
          el.id === id
      );
      if (itemIndex === -1) {
        this.items.push({
          id: uniqueId("item-"),
          title: titleInput,
          text: textInput,
          date: dateInput,
        });
      } else {
        this.items[itemIndex] = {
          id: id,
          title: titleInput,
          text: textInput,
          date: dateInput,
        };
      }
      this.formItem = null;
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    editItem(item: ItemInterface) {
      this.formItem = item;
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

ul {
  list-style: none;
  padding-left: 0;
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
</style>
