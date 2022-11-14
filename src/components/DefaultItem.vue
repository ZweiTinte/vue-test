<template>
  <div class="itemInfo">
    <div class="itemTitle">
      <div>
        {{ title }}
      </div>
      <div>
        {{ formattedDate }}
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
  computed: {
    formattedDate() {
      return moment(new Date(this.date)).format("DD.MM.yyyy");
    },
  },
});
</script>

<style lang="scss"></style>
