<script setup>
import IconArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerLink = [
  {
    label: "Home",
    link: "",
  },
  {
    label: "Case studies",
    link: "",
  },
  {
    label: "About",
    link: "",
  },
  {
    label: "Contact",
    link: "",
  },
  {
    label: "Terms",
    link: "",
  },
];
</script>
<template>
  <div class="page-container mb-8">
    <div class="flex flex-col justify-center items-center bg-Black-700 rounded-[40px] pb-8">
      <div class="flex flex-col items-center py-20 lg:py-[100px] xl:py-[120px] px-6 lg:px-[120px] xl:px-[298px]">
        <span class="text-18-semi text-White text-center mb-5">Connect</span>
        <h1 class="heading-1 text-White text-center mb-10">
          Let’s create your next big idea.
        </h1>
        <button class="btn btn-pill btn-md btn-outline-light flex items-center justify-center gap-2">
          <span>Get in touch</span>
          <img :src="IconArrowUpRight" alt="" class="h-6 w-6" />
        </button>
      </div>
      <div class="flex flex-col justify-center items-center gap-6 w-full px-6">
        <ul class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <li v-for="item in footerLink" :key="item.label">
            <a href="javascript:void(0)" class="text-14-reg text-Black-200 hover:text-White transition-colors">{{
              item.label
            }}</a>
          </li>
        </ul>
        <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-14-reg text-Black-200 text-center mt-2">
          <span>© 2026 Blnk. All rights reserved.</span>
          <span class="hidden sm:inline opacity-40">•</span>
          <a href="javascript:void(0)" class="hover:text-White transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
