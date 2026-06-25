<script setup>
import IconArrowRight from "@/assets/icons/arrow-right.svg";

import Cs1 from "@/assets/images/cs1.png";
import Cs2 from "@/assets/images/cs2.png";
import Cs3 from "@/assets/images/cs3.png";
import Cs4 from "@/assets/images/cs4.png";
import Cs5 from "@/assets/images/cs5.png";
import Cs6 from "@/assets/images/cs6.png";
const portfolioList = [
  {
    title: "FireFly",
    badge: ["Artwork", "Branding", "3D & Motion"],
    image: Cs1,
  },
  {
    title: "Kozmo",
    badge: ["Artwork", "Branding", "3D & Motion"],
    image: Cs2,
  },
  {
    title: "Muko",
    badge: ["Artwork", "Branding", "3D & Motion"],
    image: Cs3,
  },
  {
    title: "Trinity",
    badge: ["Artwork", "Branding", "3D & Motion"],
    image: Cs4,
  },
  {
    title: "Mura App",
    badge: ["Artwork", "Branding", "3D & Motion"],
    image: Cs5,
  },
  {
    title: "Clonify icons",
    badge: ["Artwork", "Branding", "3D & Motion"],
    image: Cs6,
  },
];
</script>

<template>
    <!-- Portfolio Section -->
    <section class="portfolio mb-20">
      <AppSectionTitle class="mb-6" sectionTitle="case studies" />

      <div class="rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div
          class="flex flex-col bg-[var(--color-Gray-100)] min-h-[588px] rounded-4xl overflow-hidden"
          v-for="(item, index) in portfolioList"
          :key="index"
        >
          <div class="max-w-[424px] mx-auto h-full">
            <img
              :srcset="`${item.image}, ${item.image} 2x`"
              alt=""
              class="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <div class="flex flex-col gap-4 pt-6 pb-10 px-10">
            <h1 class="heading-6 hover:text-(--Blue-500)">{{ item.title }}</h1>
            <div class="flex flex-wrap items-center gap-2">
              <span
                class="badge badge-sm badge-pill badge-outline-dark"
                v-for="(badge, bIndex) in item.badge"
                :key="bIndex"
              >
                {{ badge }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center gap-2 btn btn-sm btn-pill btn-outline-dark w-full"
      >
        <span class="text-16-semi">All Case Studies</span>
        <img :src="IconArrowRight" alt="" class="h-6 w-6" />
      </div>
    </section>
</template>
