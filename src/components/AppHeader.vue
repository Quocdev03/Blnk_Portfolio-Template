<script setup>
import Branding from "@/assets/icons/branding.svg";
import Hamburger from "@/assets/icons/hamburger.svg";
</script>
<template>
  <header class="mb-16 border-b border-b-gray-950 py-6">
    <div class="page-container">
      <div class="flex justify-between items-center">
        <img class="cursor-pointer" :src="Branding" alt="" />
        <img class="cursor-pointer" :src="Hamburger" alt="" />
      </div>
    </div>
  </header>
</template>
<style scoped></style>
