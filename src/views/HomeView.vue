<script setup>
import { ref } from "vue";
import AppSectionTitle from "@/components/AppSectionTitle.vue";
import AppPortfolio from "@/components/portfolio/AppPortfolio.vue";

import Hr1 from "@/assets/images/hr1.png";
import Hr2 from "@/assets/images/hr2.png";
import Hr3 from "@/assets/images/hr3.png";
import Hr4 from "@/assets/images/hr4.png";
import Hr5 from "@/assets/images/hr5.png";

import J1 from "@/assets/images/j1.png";
import J2 from "@/assets/images/j2.png";
import J3 from "@/assets/images/j3.png";

import IconUiDesign from "@/assets/icons/menu-icon-01.svg";
import IconDevelopment from "@/assets/icons/menu-icon-02.svg";
import IconBranding from "@/assets/icons/menu-icon-03.svg";
import IconAnimation from "@/assets/icons/menu-icon-04.svg";
import IconMotion from "@/assets/icons/menu-icon-05.svg";
import IconAdd from "@/assets/icons/add.svg";

const activeIndex = ref(null);
const toggleService = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const services = [
  {
    name: "UI Design",
    icon: IconUiDesign,
    description:
      "Creating beautiful, user-centered, and intuitive digital interfaces that elevate your brand and connect with your audience.",
    details: "Wireframing • Prototyping • User Research • Figma Design Systems",
  },
  {
    name: "Development",
    icon: IconDevelopment,
    description:
      "Building fast, responsive, and clean web applications using modern technologies like Vue, Vite, and Tailwind CSS.",
    details: "Frontend Development • API Integration • Single Page Apps • Performance Optimization",
  },
  {
    name: "Branding",
    icon: IconBranding,
    description:
      "Crafting unique visual identities, logo designs, and style guides that define your brand and stand out.",
    details: "Logo Design • Visual Identity • Brand Guidelines • Typography & Color Systems",
  },
  {
    name: "Animation",
    icon: IconAnimation,
    description:
      "Bringing interfaces and designs to life with smooth, meaningful animations that enhance the user experience.",
    details: "Micro-animations • Page Transitions • SVG Animations • Lottie & Rive Integration",
  },
  {
    name: "Motion",
    icon: IconMotion,
    description:
      "Creating engaging motion graphics and video assets that tell your brand's story dynamically.",
    details: "Motion Graphics • Promo Videos • Kinetic Typography • Video Editing",
  },
];

const heroImages = [
  { src: Hr1, class: "col-span-5" },
  { src: Hr2, class: "row-start-2" },
  { src: Hr3, class: "col-span-4 row-start-2" },
  { src: Hr4, class: "col-span-3 row-start-3" },
  { src: Hr5, class: "col-start-4 col-span-2 row-start-3" },
];

const socialLinks = [
  {
    name: "Dribbble",
    url: "https://dribbble.com/",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
  },
];

const journalList = [
  {
    image: J1,
    time: "October 12, 2024",
    title: "How to find inspiration and solve big design problems",
  },
  {
    image: J2,
    time: "September 12, 2024",
    title: "What makes your design awesome?",
  },
  {
    image: J3,
    time: "August 12, 2024",
    title: "How to create SVG-ready icon symbols in Sketch  ",
  },
];
</script>
<template>
  <div class="page-container">
    <!-- Header Bottom  -->
    <section class="header-bottom mb-20">
      <div class="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-16">
        <h1 class="display-text-3">Carl Sagan. Visual designer</h1>
        <div class="flex flex-col gap-4 max-w-[515px]">
          <p class="heading-6">
            Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo
            elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis.
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="item in socialLinks"
              :href="item.url"
              :key="item.name"
              class="badge badge-sm badge-pill badge-outline-dark"
            >
              <span class="text-12-semi">{{ item.name }}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="(img, index) in heroImages" :key="index" :class="img.class">
          <img
            :srcset="`${img.src} 2x`"
            alt=""
            class="h-[140px] w-full object-cover rounded-2xl cursor-pointer"
          />
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="content mb-20">
      <AppSectionTitle class="mb-6" sectionTitle="services" />
      <div class="flex flex-col border-t border-solid border-Black-700">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="border-b border-solid border-Black-700"
        >
          <!-- Accordion Header -->
          <div
            class="flex justify-between items-center py-6 cursor-pointer group select-none"
            @click="toggleService(index)"
          >
            <div class="flex items-center gap-6">
              <img :src="service.icon" alt="" class="h-10 w-10 object-contain" />
              <span
                class="heading-6 transition-colors duration-300"
                :class="activeIndex === index ? 'text-Gray-600' : 'group-hover:text-Gray-600'"
              >
                {{ service.name }}
              </span>
            </div>
            <div>
              <img
                :src="IconAdd"
                alt=""
                class="h-6 w-6 transition-transform duration-300"
                :class="activeIndex === index ? 'rotate-45' : 'group-hover:rotate-90'"
              />
            </div>
          </div>

          <!-- Accordion Body -->
          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="
              activeIndex === index
                ? 'grid-rows-[1fr] opacity-100 pb-6'
                : 'grid-rows-[0fr] opacity-0'
            "
          >
            <div class="overflow-hidden">
              <div class="flex flex-col gap-3 pl-10 lg:pl-16 pr-6">
                <p class="text-16-reg text-(--Gray-600) leading-relaxed">
                  {{ service.description }}
                </p>
                <div class="text-14-semi text-(--Black-700) tracking-wide">
                  {{ service.details }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppPortfolio />

    <!-- Blog Section -->
    <section class="blog mb-20">
      <AppSectionTitle class="mb-6" sectionTitle="JOURNAL" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in journalList" :key="index" class="flex flex-col">
          <div class="aspect-4/3 rounded-3xl overflow-hidden mb-4">
            <img
              :srcset="`${item.image}, ${item.image} 2x`"
              alt=""
              class="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <span class="text-14-reg text-[color:var(--Blue-Black-500,#5F6980)] mb-1">{{
            item.time
          }}</span>
          <h1 class="heading-7 flex-grow mb-2">{{ item.title }}</h1>
          <a class="btn btn-underline w-fit" href="">Read more</a>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
