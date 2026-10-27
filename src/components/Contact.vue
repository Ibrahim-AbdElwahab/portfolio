<script setup>
import { reactive, ref } from "vue";
import emailjs from "@emailjs/browser";

const formData = reactive({
  from_name: "",
  reply_to: "",
  subject: "",
  message: "",
});
const isSubmitting = ref(false);
const formStatus = reactive({ show: false, success: false, message: "" });

const sendEmail = async () => {
  isSubmitting.value = true;
  formStatus.show = false;
  try {
    await emailjs.send(
      "service_xwug06f",
      "template_thkep0m",
      { ...formData },
      "rXNU9KpcQPL4ZjLWj",
    );
    formStatus.message = "✅ Message sent! I'll get back to you soon.";
    formStatus.success = true;
    formStatus.show = true;
    Object.keys(formData).forEach((key) => (formData[key] = ""));
  } catch (err) {
    console.error("EmailJS Error:", err);
    formStatus.message = "❌ Something went wrong. Please email me directly.";
    formStatus.success = false;
    formStatus.show = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-5 mt-5 mb-5">
    <div class="container fade-in">
      <div class="text-center mb-5">
        <div
          class="text-uppercase fw-bold mb-2"
          style="color: var(--accent2); letter-spacing: 0.12em"
        >
          Contact
        </div>
        <h2 class="display-5 fw-bolder text-white">
          Let's build something
          <span class="text-gradient">amazing</span>
        </h2>
      </div>

      <div class="glass-card p-4 p-md-5 mx-auto" style="max-width: 1000px">
        <div class="row gy-5 align-items-center">
          <!-- Left Info -->
          <div class="col-lg-5 pe-lg-5">
            <h3 class="fw-bold mb-3 text-white">
              Get in
              <span class="text-gradient">touch</span>
            </h3>
            <p class="text-muted mb-5 lh-lg">
              Whether you have a project, want to collaborate, or just want to
              say hi — I'm always available.
            </p>

            <div class="d-flex flex-column gap-3">
              <a
                href="mailto:ibrahimabdelwahab2410@gmail.com"
                class="text-decoration-none text-white glass-card p-3 px-4 d-flex align-items-center gap-3"
              >
                <span class="fs-4">✉️</span>
                <span style="font-size: 0.95rem">
                  ibrahimabdelwahab2410@gmail.com
                </span>
              </a>
              <a
                href="tel:+201500014929"
                class="text-decoration-none text-white glass-card p-3 px-4 d-flex align-items-center gap-3"
              >
                <span class="fs-4">📞</span>
                <span style="font-size: 0.95rem">+20 150 001 4929</span>
              </a>
            </div>
          </div>

          <!-- Right Form -->
          <div class="col-lg-7">
            <form @submit.prevent="sendEmail">
              <div class="row g-4 mb-4">
                <div class="col-md-6">
                  <label
                    class="form-label text-muted small text-uppercase fw-bold ms-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    v-model="formData.from_name"
                    class="form-control rounded-pill px-4 py-3"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label
                    class="form-label text-muted small text-uppercase fw-bold ms-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    v-model="formData.reply_to"
                    class="form-control rounded-pill px-4 py-3"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="form-label text-muted small text-uppercase fw-bold ms-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  v-model="formData.subject"
                  class="form-control rounded-pill px-4 py-3"
                  placeholder="What's this about?"
                />
              </div>
              <div class="mb-5">
                <label
                  class="form-label text-muted small text-uppercase fw-bold ms-2"
                >
                  Message
                </label>
                <textarea
                  v-model="formData.message"
                  class="form-control rounded-4 px-4 py-3"
                  placeholder="Tell me about your project..."
                  style="min-height: 140px"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn text-white w-100 py-3 fw-bold rounded-pill shadow-lg"
                style="
                  background: linear-gradient(
                    135deg,
                    var(--accent),
                    var(--accent2)
                  );
                  border: none;
                  letter-spacing: 1px;
                "
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Sending..." : "Send Message 🚀" }}
              </button>

              <div
                v-if="formStatus.show"
                class="alert mt-4 rounded-4 text-center fw-medium"
                :style="
                  formStatus.success
                    ? 'background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80;'
                    : 'background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171;'
                "
              >
                {{ formStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
