<script setup>
import AppPortfolio from "@/components/portfolio/AppPortfolio.vue";

const projectInfo = [
  {
    key: "uiux",
    label: "UI.UX",
    value: "Nayzak",
  },
  {
    key: "role",
    label: "Role",
    value: "Branding, Web design",
  },
  {
    key: "date",
    label: "Date",
    value: "October 2026",
  },
  {
    key: "preview",
    label: "Preview",
    value: "https://webflow.com",
    type: "link",
  },
];
</script>
<template>
  <div class="page-container">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[527px_1fr] lg:gap-24 mb-20">
      <div class="w-full max-w-[527px]">
        <h1 class="heading-1 mb-4">Case Studies</h1>
        <p class="text-18-reg text-[var(--color-Gray-500)]">
          Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo
          elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.
        </p>
      </div>
      <div class="">
        <div
          v-for="item in projectInfo"
          :key="item.key"
          class="flex items-center justify-between py-5 border-b border-[var(--color-Black-200)]"
        >
          <span class="text-16-reg"> {{ item.label }}: </span>

          <span class="text-16-reg">
            {{ item.value }}
          </span>
        </div>
      </div>
    </div>
    <AppPortfolio />
  </div>
</template>
