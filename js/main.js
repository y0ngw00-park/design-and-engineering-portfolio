console.log("Portfolio loaded successfully!");

// ─────────────────────────────────────────────────────────────
// PROJECT DATA
// captions: one string per media item (same order as media[]).
// Leave a caption as "" to show nothing.
// ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "pandemonium",
    title: "Pandemonium — Dancing Stewart Platform",
    subtitle: "Michelle Lopez - Pandemonium Exhibit",
    description: [
      "Designed and assembled a dancing Stewart platform for Michelle Lopez's Pandemonium art exhibit at the Franklin Institute.",
      "Built custom 3-DOF joints to mount the linear actuators to the aluminum T-slot frame, and developed the electronics & kinematic code to mimic human dancing recorded via IR motion tracking.",
      "The main motor driver setup is an Arduino Mega connected to three dual high-current H-bridges powered by a 12V source."
    ],
    meta: ["Stewart Platform", "Arduino Mega", "H-Bridge", "IR Motion Capture", "Kinematics"],
    media: [
      { type: "image", src: "assets/pandemonium/pandemonium.jpeg" },
      { type: "video", src: "assets/pandemonium/pandemonium_performance.mp4" },
      { type: "video", src: "assets/pandemonium/pandemonium_prototype.mp4" },
      { type: "image", src: "assets/pandemonium/stewart_sim.png" }
    ],
    link: { url: "https://www.michellelopez.com/exhibitions/2025-pandemonium", label: "Pandemonium ↗" },
    captions: [
      "Stewart platform installed at the Franklin Institute",
      "Performance at the Pandemonium exhibit",
      "Motion testing",
      "Stewart platform kinematics simulation"
    ],
  },
  {
    id: "motor_pestle",
    title: "Motor & Pestle",
    subtitle: "University of Pennsylvania - Industrial Design",
    description:[
      "A manual pepper mill styled as a single-cylinder engine — rotating the crank drives a piston that smashes peppercorns against a dimpled stone surface.",
      "Body in polished aluminum, cast iron base. Inspired by the 90s Harley-Davidson Evolution Engine and conceived as a deliberate counterpoint to electric kitchen gadgets: a protest against the automation and electrification of everything, and a prompt to question what \"innovation\" should actually achieve in our daily lives.",
      "Developed as a design concept for Penn's Industrial Design course."
    ],
    meta: ["Industrial Design", "Fabrication", "IPD 5270", "2024"],
    media: [
      { type: "image", src: "assets/motor_pestle/angled_view.jpg" },
      { type: "image", src: "assets/motor_pestle/front_view.jpg" },
      { type: "image", src: "assets/motor_pestle/side_view.jpg" },
      { type: "image", src: "assets/motor_pestle/side_drawing.jpg" },
      { type: "image", src: "assets/motor_pestle/opened_drawing.jpg" },
      { type: "image", src: "assets/motor_pestle/inner_view.jpg" },
    ],
    captions: [
      "Angled view",
      "Front view",
      "Side view",
      "Side drawing before 3D modeling",
      "Opened lid illustration",
      "Inner pepper crushing mechanism",
    ],
  },
  {
    id: "chop_waiting_room",
    title: "CHOP Waiting Room Redesign",
    subtitle: "University of Pennsylvania - ARCH 7280 Final Project",
    description:[
      "Redesigned the pre- and post-op waiting room experience for neurodivergent patients and families at the Children's Hospital of Philadelphia.",
      "Used observation, expert interviews, and co-design sessions with neurodivergent children and peers to identify key pain points: sensory overload, lack of seating variety, long uncertain wait times, and no private spaces.",
      "Final concept combines varied modular seating to accomodate a range of needs and a digital orientation tool to reduce anxiety before arrival.",
    ],
    meta: ["Co-Design", "Healthcare UX", "Penn IPD 5280", "2024"],
    media: [
      { type: "image", src: "assets/chop_waiting_room/chair_types.jpg" },
      { type: "image", src: "assets/chop_waiting_room/pre_op_render.jpg" },
      { type: "image", src: "assets/chop_waiting_room/post_op_render.jpg" },
      { type: "image", src: "assets/chop_waiting_room/pre_op_original.jpg" },
      { type: "image", src: "assets/chop_waiting_room/post_op_original.jpg" },
      { type: "image", src: "assets/chop_waiting_room/kids_codesign.jpg" },
      { type: "video", src: "assets/chop_waiting_room/app_prototype_demo.mp4" },
    ],
    captions: [
      "Seating typology explorations",
      "Redesigned pre-op waiting room render",
      "Redesigned post-op waiting room render",
      "Pre-op waiting room before redesign",
      "Post-op waiting room before redesign",
      "Co-design session with children",
      "Digital orientation app/website prototype"
    ],
  },
  {
    id: "rockstar",
    title: "Rockstar — Waldo",
    subtitle: "University of Pennsylvania - MEAM 5100 Waldo Project",
    description:[
      "A waldo setup — identical input and output devices where the output mirrors the input in real time — driven by an ATmega32.",
      "The input device has potentiometers at the joints; the output has servos driven by PWM signals. Three moving parts: a strumming arm driven at the elbow, a bobbing head driven at the neck, and a multi-piece arm that slides up and down the guitar neck driven at the shoulder.",
    ],
    meta: ["ATmega32", "Servo / PWM", "Potentiometers", "Waldo Mechanism"],
    media: [
      { type: "video", src: "assets/rockstar/robot_guy_dance.mp4" },
      { type: "image", src: "assets/rockstar/cardboard_prototype.jpeg" },
    ],
    captions: [
      "Robot performing",
      "Cardboard design prototype",
    ],
  },
  {
    id: "battle_bot",
    title: "Battle Bot",
    subtitle: "University of Pennsylvania - MEAM 5100 Final Project",
    description: [
      "Semi-autonomous battle robot built for MEAM 5100 final at Penn while managing a $150 budget.",
      "Features a laser-cut acrylic frame in a modular stacking design for easy maintenance and iteration, with tank treads and an axe-inspired battle arm.",
      "A double TOF sensor array on the side drives optimized wall-following and the front sensor handles obstacle detection. Custom bitwise communication protocols handle inter-Arduino messaging alongside I2C and UART for peripheral devices — the robot reached the semi-finals of the class tournament."
    ],
    meta: ["ESP32", "TOF Sensors", "Tank Treads", "I2C / UART", "Penn MEAM 5100"],
    media: [
      { type: "image", src: "assets/battle_bot/full_robot.jpg" },
      { type: "image", src: "assets/battle_bot/sensor_array.jpg" },
      { type: "video", src: "assets/battle_bot/wall_follow.mp4" },
    ],
    captions: [
      "Fully assembled robot",
      "Double TOF sensor array for wall following",
      "Wall following demo",
    ],
  },
  {
    id: "helix_vault",
    title: "Helix Vault",
    subtitle: "University of Pennsylvania - ESE 5190 Final Project",
    description: [
      "A multi-layer secure safe with three sequential authentication steps: fingerprint scan, analog combination lock, and PIN entry via a 4×4 keypad.",
      "Two ATmega328PB microcontrollers handle primary logic and actuator control; an ESP32 module manages biometrics. Custom GPIO-encoded communication was developed between MCUs without standard UART.",
      "A DC motor drives a linear slider door; a servo actuates a secondary latch. LCD display guides the user through each step.",
      "Built within a $150 budget for ESE 5190 at Penn."
    ],
    meta: ["ATmega328PB", "ESP32", "Biometrics", "Penn ESE 5190", "2025"],
    media: [
      { type: "image", src: "assets/helix_vault/fully_locked.jpg" },
      { type: "image", src: "assets/helix_vault/side_view.jpg" },
      { type: "image", src: "assets/helix_vault/LCD_password.jpg" },
      { type: "image", src: "assets/helix_vault/team_pic.png" },
    ],
    link: { url: "https://upenn-embedded.github.io/helix-vault/", label: "Helix Vault GitHub ↗" },
    captions: [
      "Safe in fully locked state",
      "State after successful fingerprint scan, revealing combination lock panel",
      "Breadboard wiring and electronics testing",
      "Team photo",
    ],
  },
  {
    id: "senior_thesis",
    title: "Engineering a Magnetometer using NV Centers in Diamonds",
    subtitle: "Hamilton College - Senior Physics Thesis",
    description: [
      "Engineered a quantum magnetometer using diamond Nitrogen Vacancy (NV) centers for my senior physics thesis at Hamilton College, advised by Prof. Viva Horowitz.",
      "NV centers are atomic-scale defects in diamond where a nitrogen atom replaces carbon next to a lattice vacancy. Their electrons fluoresce based on spin state: applying 2.87 GHz microwave radiation shifts electrons between spin sublevels, and a magnetic field splits those levels via the Zeeman effect — enabling precise field measurement through Optically Detected Magnetic Resonance (ODMR).",
      "Designed and CNC-milled a grounded coplanar waveguide (GCPW) antenna from copper PCB, impedance-matched to 50 Ω and trace widths chosen to efficiently deliver the 2.87 GHz signal to the diamond sample. Built a lock-in chopping circuit to extract the weak ODMR signal from noise. Assembled and aligned a full confocal microscope system — 532 nm laser, dichroic mirror, avalanche photodiode, and photon counter — and successfully demonstrated magnetic field sensing.",
    ],
    meta: ["CNC Milling", "Fusion 360", "RF / Microwave", "NV Diamonds", "Physics Thesis"],
    media: [
      { type: "image", src: "assets/senior_thesis/in_microscope.jpg" },
      { type: "image", src: "assets/senior_thesis/antennae.jpg" },
      { type: "image", src: "assets/senior_thesis/cnc_machining.jpg" },
    ],
    captions: [
      "Antenna with diamonds under microscope inspection",
      "Finished planar antenna on copper PCB",
      "CNC milling the antenna",
    ],
  },
  {
    id: "turntable_isolation",
    title: "Turntable Isolation",
    subtitle: "Event Curation & Audio Engineering",
    description: [
      "Loud music and dancing create floor vibrations that travel into the turntable needle, causing feedback and skips. Two isolation setups were tested at a live event.",
      "Setup 1: turntable with original feet removed and paper shimming to level the deck, laid upon a concrete slab and a brick with squash ball halves underneath — completely eliminated feedback and skips during the event.",
      "Setup 2: turntable on tape rolls wrapped in rubber bands on a concrete slab and brick — removed continuous feedback but still skipped on nearby impulses and required an extremely delicate touch while manipulating the records and turntable."
    ],
    meta: ["Vibration Isolation", "Audio Engineering", "Live Events"],
    media: [
      { type: "image", src: "assets/turntable_isolation/reloop_squash.jpg" },
      { type: "image", src: "assets/turntable_isolation/technics_tape.jpg" },
    ],
    captions: [
      "Setup 1: concrete slab on squash ball halves",
      "Setup 2: tape rolls & rubber bands on concrete slab",
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
const modal           = document.getElementById("modal");
const modalClose      = document.getElementById("modal-close");
const modalCloseBtn   = document.getElementById("modal-close-btn");
const modalPrev       = document.getElementById("modal-prev");
const modalNext       = document.getElementById("modal-next");
const modalMedia      = document.getElementById("modal-media-pane");
const modalThumbstrip = document.getElementById("modal-thumbstrip");
const modalCaption    = document.getElementById("modal-caption");
const modalSubtitle        = document.getElementById("modal-subtitle");
const modalTitle      = document.getElementById("modal-title");
const modalDesc       = document.getElementById("modal-desc");
const modalTopTitle   = document.getElementById("modal-topbar-title");
const modalCounter    = document.getElementById("modal-counter");
const projectGrid     = document.getElementById("project-grid");
const fileCount       = document.getElementById("file-count");

// ─────────────────────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────────────────────
function initTabs() {
  const tabs   = document.querySelectorAll(".win-tab");
  const panels = document.querySelectorAll(".tab-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => { t.classList.remove("win-tab--active"); t.setAttribute("aria-selected", "false"); });
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
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(idx); }
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
  const activeVideo = modalMedia.querySelector("video");
  if (activeVideo) activeVideo.pause();
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

  modalSubtitle.textContent      = project.subtitle;
  modalTitle.textContent    = project.title;
  // description can be a string or an array of strings (each = one paragraph)
  const lines = Array.isArray(project.description) ? project.description : [project.description];
  let html = lines.map(line =>
    line.startsWith("• ")
      ? `<p class="modal-desc__bullet">${line.slice(2)}</p>`
      : `<p>${line}</p>`
  ).join("");
  if (project.link) {
    html += `<a class="modal-proj-link" href="${project.link.url}" target="_blank" rel="noopener noreferrer">${project.link.label}</a>`;
  }
  modalDesc.innerHTML = html;
  modalTopTitle.textContent = project.title;
  modalCounter.textContent  = `${currentIndex + 1} / ${PROJECTS.length}`;

  modalPrev.disabled = currentIndex === 0;
  modalNext.disabled = currentIndex === PROJECTS.length - 1;

  renderMedia();
  updateCaption();
  renderThumbstrip();
}

// ─────────────────────────────────────────────────────────────
// UPDATE CAPTION
// ─────────────────────────────────────────────────────────────
function updateCaption() {
  const captions = PROJECTS[currentIndex].captions || [];
  modalCaption.textContent = captions[mediaIndex] || "";
}

// ─────────────────────────────────────────────────────────────
// RENDER MAIN MEDIA
// ─────────────────────────────────────────────────────────────
function renderMedia() {
  const items = PROJECTS[currentIndex].media;
  const oldVideo = modalMedia.querySelector("video");
  if (oldVideo) oldVideo.pause();
  modalMedia.innerHTML = "";

  if (!items || items.length === 0) {
    modalMedia.innerHTML = `<span style="font-size:11px;color:#808080;">[No media]</span>`;
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
// EXTRACT A FRAME FROM A VIDEO FILE
// Returns a Promise that resolves with a data URL (JPEG).
// ─────────────────────────────────────────────────────────────
function extractVideoFrame(src) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload     = "metadata";
    video.muted       = true;
    video.crossOrigin = "anonymous";
    video.src         = src;

    const cleanup = () => { video.src = ""; };

    video.addEventListener("loadedmetadata", () => {
      video.currentTime = Math.min(0.75, video.duration * 0.1);
    });

    video.addEventListener("seeked", () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width  = video.videoWidth  || 160;
        canvas.height = video.videoHeight || 90;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        cleanup();
        resolve(canvas.toDataURL("image/jpeg", 0.75));
      } catch (e) {
        cleanup();
        reject(e);
      }
    });

    video.addEventListener("error", () => { cleanup(); reject(new Error("video load error")); });
    setTimeout(() => { cleanup(); reject(new Error("timeout")); }, 6000);
  });
}

// ─────────────────────────────────────────────────────────────
// RENDER THUMBNAIL STRIP
// Images show a preview. Videos extract a canvas frame and
// overlay a play button. Falls back to "▶" on error.
// ─────────────────────────────────────────────────────────────
async function renderThumbstrip() {
  const items = PROJECTS[currentIndex].media;
  modalThumbstrip.innerHTML = "";
  if (!items || items.length <= 1) return;

  for (let i = 0; i < items.length; i++) {
    const item  = items[i];
    const btn   = document.createElement("button");
    const isCur = i === mediaIndex;
    btn.className = "win-thumb" + (isCur ? " win-thumb--active" : "");
    btn.setAttribute("aria-label", `${item.type === "video" ? "Video" : "Image"} ${i + 1}`);
    btn.title = (PROJECTS[currentIndex].captions || [])[i] || `Media ${i + 1}`;

    if (item.type === "image") {
      const img   = document.createElement("img");
      img.src     = item.src;
      img.alt     = "";
      img.loading = "lazy";
      btn.appendChild(img);
    } else {
      // Video: try to extract a frame, fall back to text
      const overlay = document.createElement("div");
      overlay.className = "thumb-play-overlay";

      extractVideoFrame(item.src)
        .then((dataUrl) => {
          const img       = document.createElement("img");
          img.src         = dataUrl;
          img.alt         = "";
          img.style.cssText = "width:100%;height:100%;object-fit:cover;";
          btn.insertBefore(img, overlay); // frame behind overlay
        })
        .catch(() => {
          // fallback: just show the ▶ overlay on plain background
        });

      btn.appendChild(overlay);
    }

    btn.addEventListener("click", () => {
      mediaIndex = i;
      renderMedia();
      updateCaption();
      modalThumbstrip.querySelectorAll(".win-thumb").forEach((t, ti) => {
        t.classList.toggle("win-thumb--active", ti === i);
      });
    });

    modalThumbstrip.appendChild(btn);
  }
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
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
modalPrev.addEventListener("click", () => goToProject(-1));
modalNext.addEventListener("click", () => goToProject(+1));
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape")     closeModal();
  if (e.key === "ArrowLeft")  goToProject(-1);
  if (e.key === "ArrowRight") goToProject(+1);
});

// ─────────────────────────────────────────────────────────────
// UTILITY
// ─────────────────────────────────────────────────────────────
function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
initTabs();
initGrid();
