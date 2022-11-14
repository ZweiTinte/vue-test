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

const getItems: () => Array<ItemInterface> = () => {
  return localStorage.getItem("items") !== null
    ? JSON.parse(localStorage.getItem("items") as string)
    : ([] as Array<ItemInterface>);
};

export default defineComponent({
  name: "DetailPage",
  components: {
    DefaultForm,
    DefaultItem,
  },
  data() {
    return {
      items: getItems(),
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
        (el: ItemInterface) => el.id === id
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
