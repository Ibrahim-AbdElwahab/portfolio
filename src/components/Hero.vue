<template>
  <section id="hero" class="min-vh-100 d-flex align-items-center pt-5">
    <div class="container">
      <div class="row align-items-center gy-5 flex-column-reverse flex-md-row">
        <!-- Left Text -->
        <div class="col-md-7 fade-in">
          <div
            class="glass-card d-inline-flex align-items-center mb-4 px-3 py-2 rounded-pill"
            style="border-radius: 100px"
          >
            <span
              class="d-inline-block rounded-circle me-2"
              style="
                width: 8px;
                height: 8px;
                background: #34d399;
                box-shadow: 0 0 10px #34d399;
              "
            ></span>
            <span style="font-size: 0.85rem; color: #e2e8f0; font-weight: 600">
              Available for work
            </span>
          </div>

          <h1
            class="display-2 fw-bolder mb-3 text-glow"
            style="font-family: &quot;Syne&quot;, sans-serif; line-height: 1.1"
          >
            Ibrahim
            <br />
            <span class="text-gradient">Abdelwahab</span>
          </h1>

          <p class="fs-5 text-muted mb-5 lh-base" style="max-width: 90%">
            <strong class="text-white">Frontend Developer</strong>
            specializing in Vue.js & React — building interactive UIs and
            growing towards Full Stack with .NET & C#.
          </p>

          <div class="d-flex flex-wrap gap-3">
            <a
              href="#projects"
              class="btn text-white px-4 py-3 rounded-pill fw-bold shadow-lg"
              style="
                background: linear-gradient(
                  135deg,
                  var(--accent),
                  var(--accent2)
                );
                border: none;
                letter-spacing: 0.5px;
              "
            >
              View My Work ➔
            </a>
            <a
              href="#contact"
              class="btn px-4 py-3 rounded-pill fw-bold glass-card text-white"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <!-- Right Image -->
        <div
          class="col-md-5 d-flex justify-content-center justify-content-md-end fade-in"
        >
          <div
            class="glass-card p-2 rounded-5 position-relative"
            style="backdrop-filter: blur(25px)"
          >
            <img
              src="/Photos/Gemini_Generated_Image_kdirw3kdirw3kdir.png"
              alt="Ibrahim Abdelwahab"
              class="img-fluid rounded-4"
              style="max-width: 320px"
            />
            <!-- شريط طايف تحت الصورة -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

