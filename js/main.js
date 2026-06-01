console.log("Portfolio loaded successfully!");

// ─────────────────────────────────────────────────────────────
// PROJECT DATA
// Edit this array to update the portfolio.
// media: array of { type: "image"|"video", src: "relative/path" }
// ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "pandemonium",
    title: "Pandemonium — Dancing Stewart Platform",
    tag: "Mechatronics & Art",
    description:
      "Designed and assembled a dancing Stewart platform for Michelle Lopez's Pandemonium art exhibit. Built custom 3-DOF joints to mount the linear actuators, then developed the electronics and kinematic code to mimic human dancing recorded via IR motion tracking. The main CPU is an Arduino Mega connected to three dual high-current H-bridges powered by a 12V source.",
    meta: ["Stewart Platform", "Arduino Mega", "H-Bridge", "IR Motion Capture", "Kinematics"],
    media: [
      { type: "image", src: "assets/pandemonium/pandemonium.jpeg" },
      { type: "video", src: "assets/pandemonium/pandemonium_performance.mp4" },
      { type: "video", src: "assets/pandemonium/pandemonium_prototype.mp4" },
    ],
  },
  {
    id: "battle_bot",
    title: "Battle Bot",
    tag: "Robotics & Embedded Systems",
    description:
      "Autonomous competition robot built for MEAM 5100 at Penn. Laser-cut acrylic frame in a modular stacking design for easy maintenance and iteration, with tank treads and an axe-inspired battle arm. A double TOF sensor array on the side drives optimized wall-following; the front sensor handles obstacle detection. Custom bitwise communication protocols handle inter-Arduino messaging alongside I2C and UART for peripheral devices.",
    meta: ["ESP32-S3", "TOF Sensors", "Tank Treads", "I2C / UART", "Penn MEAM 5100"],
    media: [
      { type: "image", src: "assets/battle_bot/full_robot.jpg" },
      { type: "image", src: "assets/battle_bot/sensor_array.jpg" },
      { type: "video", src: "assets/battle_bot/wall_follow.mp4" },
    ],
  },
  {
    id: "chop_waiting_room",
    title: "tranSITion — CHOP",
    tag: "Human-Centered Design",
    description:
      "Redesigned the pre- and post-op waiting room experience for neurodivergent patients and families at the Children's Hospital of Philadelphia. Used observation, expert interviews, and co-design sessions with neurodivergent children and peers to identify key pain points: sensory overload, lack of seating variety, long uncertain wait times, and no private spaces. Final concept — \"tranSITion\" — combines varied modular seating (rocking, enclosed, flexible) with a digital orientation tool to reduce anxiety before arrival.",
    meta: ["Co-Design", "Healthcare UX", "Penn IPD 5280", "2024"],
    media: [
      { type: "image", src: "assets/chop_waiting_room/chair_types.jpg" },
      { type: "image", src: "assets/chop_waiting_room/kids_codesign.jpg" },
      { type: "image", src: "assets/chop_waiting_room/pre_op.jpg" },
      { type: "image", src: "assets/chop_waiting_room/post_op.jpg" },
    ],
  },
  {
    id: "helix_vault",
    title: "Helix Vault",
    tag: "Embedded Systems",
    description:
      "A multi-layer secure safe with three sequential authentication steps: fingerprint scan, analog combination lock, and PIN entry via a 4×4 keypad. Built within a $150 budget for ESE 5190 at Penn. Two ATmega328PB microcontrollers handle primary logic and actuator control; an ESP32 module manages biometrics. Custom GPIO-encoded communication was developed between MCUs without standard UART. A DC motor drives a linear slider door; a servo actuates a secondary latch. LCD display guides the user through each step.",
    meta: ["ATmega328PB", "ESP32", "Biometrics", "Penn ESE 5190", "2025"],
    media: [
      { type: "image", src: "assets/helix_vault/fully_locked.jpg" },
      { type: "image", src: "assets/helix_vault/LCD_password.jpg" },
      { type: "image", src: "assets/helix_vault/after_fingerprint.jpg" },
      { type: "image", src: "assets/helix_vault/breadboard.png" },
      { type: "image", src: "assets/helix_vault/team_pic.png" },
    ],
  },
  {
    id: "motor_pestle",
    title: "Motor & Pestle",
    tag: "Industrial Design",
    description:
      "A manual pepper mill styled as a single-cylinder engine — rotating the crank drives a piston that smashes peppercorns against a dimpled stone surface. Body in polished aluminum, cast iron base. Inspired by the 90s Harley-Davidson Evolution Engine and conceived as a deliberate counterpoint to electric kitchen gadgets: a protest against the automation of everything, and a prompt to question what \"innovation\" should actually mean.",
    meta: ["Industrial Design", "Fabrication", "Penn DSGN 5010", "2024"],
    media: [
      { type: "image", src: "assets/motor_pestle/front_view.jpg" },
      { type: "image", src: "assets/motor_pestle/angled_view.jpg" },
      { type: "image", src: "assets/motor_pestle/side_view.jpg" },
      { type: "image", src: "assets/motor_pestle/inner_view.jpg" },
      { type: "image", src: "assets/motor_pestle/opened_drawing.jpg" },
      { type: "image", src: "assets/motor_pestle/side_drawing.jpg" },
    ],
  },
  {
    id: "rockstar",
    title: "Rockstar — Waldo",
    tag: "Mechatronics",
    description:
      "A waldo setup — identical input and output devices where the output mirrors the input in real time — driven by an ATmega32. The input device has potentiometers at the joints; the output has servos driven by PWM signals. Three moving parts: a strumming arm driven at the elbow, a bobbing head driven at the neck, and a multi-piece arm that slides up and down the guitar neck driven at the shoulder.",
    meta: ["ATmega32", "Servo / PWM", "Potentiometers", "Waldo Mechanism"],
    media: [
      { type: "image", src: "assets/rockstar/cardboard_prototype.jpeg" },
      { type: "video", src: "assets/rockstar/robot_guy_dance.mp4" },
    ],
  },
  {
    id: "senior_thesis",
    title: "Planar Microwave Antenna",
    tag: "Undergraduate Research",
    description:
      "Used a mini-CNC machine to mill a planar microwave antenna from blank copper PCB, designed with a resonant frequency of 2.87 GHz. The antenna was used in my undergraduate physics thesis to generate microwave radiation to excite electrons in the nitrogen vacancies of diamonds. Programmed the toolpath and G-code in Fusion 360; built a custom fixture from wood and tape to hold the small workpiece securely during milling.",
    meta: ["CNC Milling", "Fusion 360", "RF / Microwave", "NV Diamonds", "Physics Thesis"],
    media: [
      { type: "image", src: "assets/senior_thesis/antennae.jpg" },
      { type: "image", src: "assets/senior_thesis/cnc_machining.jpg" },
      { type: "image", src: "assets/senior_thesis/in_microscope.jpg" },
    ],
  },
  {
    id: "turntable_isolation",
    title: "Turntable Isolation",
    tag: "Engineering / Audio",
    description:
      "Loud music and dancing create floor vibrations that travel into the turntable needle, causing feedback and skips. Two isolation setups were tested at a live event. Setup 1 (left): concrete slabs and a brick atop squash ball halves, with paper shimming to level the deck — completely eliminated feedback and skips. Setup 2 (right): turntable on tape rolls wrapped in rubber bands on a concrete slab — removed continuous feedback but still skipped on sharp impulses and required an extremely delicate touch.",
    meta: ["Vibration Isolation", "Audio Engineering", "Live Events"],
    media: [
      { type: "image", src: "assets/turntable_isolation/reloop_squash.jpg" },
      { type: "image", src: "assets/turntable_isolation/technics_tape.jpg" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────
let currentIndex = 0;
let mediaIndex   = 0;

// ─────────────────────────────────────────────────────────────
// DOM REFERENCES
// ─────────────────────────────────────────────────────────────
const modal          = document.getElementById("modal");
const modalClose     = document.getElementById("modal-close");
const modalCloseBtn  = document.getElementById("modal-close-btn");
const modalPrev      = document.getElementById("modal-prev");
const modalNext      = document.getElementById("modal-next");
const modalMedia     = document.getElementById("modal-media-pane");
const modalThumbstrip = document.getElementById("modal-thumbstrip");
const modalTag       = document.getElementById("modal-tag");
const modalTitle     = document.getElementById("modal-title");
const modalDesc      = document.getElementById("modal-desc");
const modalMeta      = document.getElementById("modal-meta");
const modalTopTitle  = document.getElementById("modal-topbar-title");
const modalCounter   = document.getElementById("modal-counter");
const projectGrid    = document.getElementById("project-grid");
const fileCount      = document.getElementById("file-count");

// ─────────────────────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────────────────────
function initTabs() {
  const tabs   = document.querySelectorAll(".win-tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => {
        t.classList.remove("win-tab--active");
        t.setAttribute("aria-selected", "false");
      });
      panels.forEach((p) => p.classList.remove("tab-panel--active"));

      tab.classList.add("win-tab--active");
      tab.setAttribute("aria-selected", "true");
      document.getElementById(`tab-${target}`).classList.add("tab-panel--active");
    });
  });
}

// ─────────────────────────────────────────────────────────────
// FILE GRID
// ─────────────────────────────────────────────────────────────
function initGrid() {
  const cards = projectGrid.querySelectorAll(".file-card");
  fileCount.textContent = `${cards.length} object(s)`;

  cards.forEach((card) => {
    const idx = parseInt(card.dataset.index, 10);
    card.addEventListener("click", () => openModal(idx));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(idx);
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────
// OPEN / CLOSE MODAL
// ─────────────────────────────────────────────────────────────
function openModal(projectIdx) {
  currentIndex = clamp(projectIdx, 0, PROJECTS.length - 1);
  mediaIndex   = 0;
  populateModal();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  const card = projectGrid.querySelector(`[data-index="${currentIndex}"]`);
  if (card) card.focus();
}

// ─────────────────────────────────────────────────────────────
// POPULATE MODAL
// ─────────────────────────────────────────────────────────────
function populateModal() {
  const project = PROJECTS[currentIndex];

  // Text fields
  modalTag.textContent      = project.tag;
  modalTitle.textContent    = project.title;
  modalDesc.textContent     = project.description;
  modalTopTitle.textContent = project.title;
  modalCounter.textContent  = `${currentIndex + 1} / ${PROJECTS.length}`;

  // Tag chips
  modalMeta.innerHTML = project.meta
    .map((m) => `<span class="win-chip">${m}</span>`)
    .join("");

  // Nav button states
  modalPrev.disabled = currentIndex === 0;
  modalNext.disabled = currentIndex === PROJECTS.length - 1;

  renderMedia();
  renderThumbstrip();
}

// ─────────────────────────────────────────────────────────────
// RENDER MAIN MEDIA
// ─────────────────────────────────────────────────────────────
function renderMedia() {
  const items = PROJECTS[currentIndex].media;

  // Pause any playing video before removing
  const oldVideo = modalMedia.querySelector("video");
  if (oldVideo) oldVideo.pause();
  modalMedia.innerHTML = "";

  if (!items || items.length === 0) {
    modalMedia.innerHTML =
      `<span style="font-size:11px;color:#808080;">[No media]</span>`;
    return;
  }

  mediaIndex = clamp(mediaIndex, 0, items.length - 1);
  const item = items[mediaIndex];

  if (item.type === "video") {
    const vid = document.createElement("video");
    vid.src      = item.src;
    vid.controls = true;
    vid.loop     = true;
    vid.setAttribute("playsinline", "");
    vid.style.maxWidth  = "100%";
    vid.style.maxHeight = "100%";
    modalMedia.appendChild(vid);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = PROJECTS[currentIndex].title;
    modalMedia.appendChild(img);
  }
}

// ─────────────────────────────────────────────────────────────
// RENDER THUMBNAIL STRIP
// Small clickable thumbnails below the main media pane.
// ─────────────────────────────────────────────────────────────
function renderThumbstrip() {
  const items = PROJECTS[currentIndex].media;
  modalThumbstrip.innerHTML = "";

  if (!items || items.length <= 1) return; // No strip needed for 0 or 1 item

  items.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.className = "win-thumb" + (i === mediaIndex ? " win-thumb--active" : "");
    btn.setAttribute("aria-label", `${item.type === "video" ? "Video" : "Image"} ${i + 1}`);
    btn.title = `${item.type === "video" ? "Video" : "Image"} ${i + 1}`;

    if (item.type === "image") {
      const img = document.createElement("img");
      img.src     = item.src;
      img.alt     = "";
      img.loading = "lazy";
      btn.appendChild(img);
    } else {
      // Video: show a simple label since we can't extract frames
      btn.textContent = "▶";
      btn.style.fontSize = "14px";
    }

    btn.addEventListener("click", () => {
      mediaIndex = i;
      renderMedia();
      // Update active state on thumbs
      modalThumbstrip.querySelectorAll(".win-thumb").forEach((t, ti) => {
        t.classList.toggle("win-thumb--active", ti === i);
      });
    });

    modalThumbstrip.appendChild(btn);
  });
}

// ─────────────────────────────────────────────────────────────
// NAVIGATE BETWEEN PROJECTS
// ─────────────────────────────────────────────────────────────
function goToProject(delta) {
  const next = clamp(currentIndex + delta, 0, PROJECTS.length - 1);
  if (next === currentIndex) return;
  currentIndex = next;
  mediaIndex   = 0;
  populateModal();
}

// ─────────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────────
modalClose.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);
modalPrev.addEventListener("click", () => goToProject(-1));
modalNext.addEventListener("click", () => goToProject(+1));

// Click outside the dialog to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape")      closeModal();
  if (e.key === "ArrowLeft")   goToProject(-1);
  if (e.key === "ArrowRight")  goToProject(+1);
});

// ─────────────────────────────────────────────────────────────
// UTILITY
// ─────────────────────────────────────────────────────────────
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
initTabs();
initGrid();
