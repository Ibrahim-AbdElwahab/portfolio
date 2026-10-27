<template>
  <!-- خليناه طايف وواخد عرض 90% بس عشان ميبقاش لازق في الشاشة -->
  <nav
    class="navbar navbar-expand-md fixed-top mx-auto glass-nav"
    style="width: 90%; max-width: 1100px"
  >
    <div class="container-fluid px-3">
      <a
        class="navbar-brand fw-bolder fs-5 text-white"
        href="#hero"
        style="font-family: &quot;Syne&quot;, sans-serif"
      >
        I
        <span class="text-gradient">.</span>
        Abdelwahab
      </a>

      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon" style="filter: invert(1)"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center gap-4">
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
