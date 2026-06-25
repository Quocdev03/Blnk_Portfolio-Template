<script setup>
import SectionIcon from "@/assets/icons/section-icon.svg";
import { computed } from "vue";

const props = defineProps({
  sectionTitle: {
    type: String,
    default: "Section",
  },
});

const formattedTitle = computed(() => {
  const title = (props.sectionTitle || "").replace(/\s+/g, " ").trim().toUpperCase();

  return title
    .split(" ")
    .map((word) => word.split("").join("\u00A0")) // chữ cái cách nhau 1 NBSP
    .join("\u00A0\u00A0\u00A0"); // word cách nhau 3 NBSP
});
</script>

<template>
  <div class="flex items-center gap-2">
    <img :src="SectionIcon" alt="" />
    <span class="text-16-reg">
      {{ formattedTitle }}
    </span>
  </div>
</template>
