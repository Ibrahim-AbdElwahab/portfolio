<template>
  <section id="projects" class="py-5 mt-5">
    <div class="container fade-in">
      <div class="text-center mb-5">
        <div
          class="text-uppercase fw-bold mb-2"
          style="color: var(--accent2); letter-spacing: 0.12em"
        >
          My Work
        </div>
        <h2 class="display-5 fw-bolder text-white">
          Featured
          <span class="text-gradient">Projects</span>
        </h2>
      </div>

      <div class="row g-5">
        <!-- Project 1 -->
        <div class="col-lg-6">
          <div class="glass-card h-100 overflow-hidden d-flex flex-column">
            <div
              class="project-preview d-flex align-items-center justify-content-center py-5"
              style="background: rgba(0, 0, 0, 0.2)"
            >
              <div class="mock-browser p1 shadow-lg">
                <div class="mock-bar">
                  <span class="mock-dot r"></span>
                  <span class="mock-dot y"></span>
                  <span class="mock-dot g"></span>
                </div>
                <div class="mock-content">
                  <div class="mock-row accent w-50" style="height: 12px"></div>
                  <div class="mock-row w-75"></div>
                  <div class="mock-grid">
                    <div class="mock-card"></div>
                    <div class="mock-card"></div>
                    <div class="mock-card"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 p-md-5 d-flex flex-column flex-grow-1">
              <div class="d-flex flex-wrap gap-2 mb-4">
                <span
                  class="badge rounded-pill"
                  style="
                    background: rgba(139, 92, 246, 0.2);
                    color: #c4b5fd;
                    border: 1px solid rgba(139, 92, 246, 0.3);
                  "
                >
                  Vue.js
                </span>
                <span
                  class="badge rounded-pill"
                  style="
                    background: rgba(59, 130, 246, 0.2);
                    color: #93c5fd;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                  "
                >
                  REST API
                </span>
              </div>
              <h3 class="fw-bold text-white mb-3">E-Commerce Platform</h3>
              <p class="text-muted flex-grow-1 lh-lg">
                A fully functional online store built with Vue.js, powered by a
                live REST API. Features product listings, category filtering,
                shopping cart, and a seamless checkout flow.
              </p>
              <div
                class="mt-4 pt-4 d-flex justify-content-between align-items-center"
                style="border-top: 1px solid rgba(255, 255, 255, 0.1)"
              >
                <a
                  href="https://my-ecommerce-coral.vercel.app/"
                  target="_blank"
                  class="text-decoration-none fw-bold"
                  style="color: #60a5fa"
                >
                  Live Demo ➔
                </a>
                <small class="text-muted">Deployed on Vercel</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="col-lg-6">
          <div class="glass-card h-100 overflow-hidden d-flex flex-column">
            <div
              class="project-preview d-flex align-items-center justify-content-center py-5"
              style="background: rgba(0, 0, 0, 0.2)"
            >
              <div class="mock-browser shadow-lg">
                <div class="mock-bar">
                  <span class="mock-dot r"></span>
                  <span class="mock-dot y"></span>
                  <span class="mock-dot g"></span>
                </div>
                <div class="mock-content">
                  <div class="row g-1 mb-2">
                    <div class="col-6">
                      <div
                        style="
                          height: 24px;
                          background: rgba(139, 92, 246, 0.3);
                          border-radius: 4px;
                        "
                      ></div>
                    </div>
                    <div class="col-6">
                      <div
                        style="
                          height: 24px;
                          background: rgba(59, 130, 246, 0.3);
                          border-radius: 4px;
                        "
                      ></div>
                    </div>
                  </div>
                  <div class="mock-row w-100"></div>
                  <div class="mock-row w-75"></div>
                </div>
              </div>
            </div>
            <div class="p-4 p-md-5 d-flex flex-column flex-grow-1">
              <div class="d-flex flex-wrap gap-2 mb-4">
                <span
                  class="badge rounded-pill"
                  style="
                    background: rgba(139, 92, 246, 0.2);
                    color: #c4b5fd;
                    border: 1px solid rgba(139, 92, 246, 0.3);
                  "
                >
                  Vue.js
                </span>
                <span
                  class="badge rounded-pill"
                  style="
                    background: rgba(59, 130, 246, 0.2);
                    color: #93c5fd;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                  "
                >
                  Dashboard
                </span>
              </div>
              <h3 class="fw-bold text-white mb-3">DXGate Admin Dashboard</h3>
              <p class="text-muted flex-grow-1 lh-lg">
                A professional project management dashboard built for a real
                UK-based client (DXGate). Handles project tracking, team
                management, and operations.
              </p>
              <div
                class="mt-4 pt-4 d-flex justify-content-between align-items-center"
                style="border-top: 1px solid rgba(255, 255, 255, 0.1)"
              >
                <a
                  href="https://admin-app.dxgate.co.uk/"
                  target="_blank"
                  class="text-decoration-none fw-bold"
                  style="color: #60a5fa"
                >
                  Live App ➔
                </a>
                <small class="text-muted">Real client project</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
