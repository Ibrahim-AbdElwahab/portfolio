<script setup>
import { onMounted, nextTick } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

onMounted(async () => {
  // بنستنى لحد ما كل الـ Components تترسم في الشاشة
  await nextTick();

  // تشغيل الـ Intersection Observer للـ Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  setTimeout(() => {
    document
      .querySelectorAll("#hero .fade-in")
      .forEach((el) => el.classList.add("visible"));
  }, 100);
});
</script>

<template>
  <!-- الخلفية اللي فيها الدواير والألوان -->
  <div class="bg-blobs">
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>
  </div>

  <!-- الـ Components -->
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</template>

<style>
/* 
تأكد إنك استدعيت ملف الستايل الأساسي بتاعك 
لو بتستخدم Vite غالباً بيبقى مستدعى تلقائياً في main.js 
*/
</style>
