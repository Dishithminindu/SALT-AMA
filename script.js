/* =========================================================
   HALOS CLINICAL ASSESSMENT — CORE SYSTEM
========================================================= */

const FFQ = [
  {
    key: "carbs_staples",
    section: "1. Daily Carbohydrate Staples (Select ONE option)",
    name: "Bread & Grain Staples",
    examples:
      "Bread, Bun, Pittu, Hoppers, String hoppers, Kottu roti\n(Note: 1 bun, 1 hopper, 1 portion pittu, or 1 serving kottu = 2 bread slices)",
    options: {
      "Don't eat": 0,
      "1-2/day": 15,
      "3-4/day": 25,
      "5+/day": 30
    }
  },
  {
    key: "ready_cereals",
    section: "2. Cereals, Bakery & Biscuits",
    name: "Ready-made breakfast cereals",
    examples:
      "Commercial breakfast cereals / grain mixes (excludes plain oats)",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 2,
      "2-3x/wk": 3,
      Daily: 5
    }
  },
  {
    key: "sweet_bakery",
    section: "2. Cereals, Bakery & Biscuits",
    name: "Sweet biscuits & bakery foods",
    examples: "Sweet pastries, bakery cakes, sweet buns, doughnuts",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 2,
      "2-3x/wk": 3,
      Daily: 5
    }
  },
  {
    key: "savoury_biscuits",
    section: "2. Cereals, Bakery & Biscuits",
    name: "Savoury biscuits & crackers",
    examples: "Salted biscuits/crackers, Papadam",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 3,
      "2-3x/wk": 4,
      Daily: 5
    }
  },
  {
    key: "cheeses",
    section: "2. Cereals, Bakery & Biscuits",
    name: "Cheeses",
    examples: "Commercial block or sliced cheeses (excludes paneer/curd)",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 4,
      "2-3x/wk": 6,
      Daily: 12
    }
  },
  {
    key: "sambols_pastes",
    section: "3. Spreads, Soups & Processed Foods",
    name: "Sambols, pastes & spreads",
    examples:
      "Pol sambol, Seeni sambol, Lunumiris, Maldive fish (Umbalakada) paste",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 0.5,
      "2-3x/wk": 1,
      Daily: 2
    }
  },
  {
    key: "instant_soups",
    section: "3. Spreads, Soups & Processed Foods",
    name: "Instant noodles & soups",
    examples:
      "Instant noodles, Instant soup, Soup cubes/seasoning powders, Instant packets",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 1,
      "2-3x/wk": 2,
      Daily: 3
    }
  },
  {
    key: "processed_meats",
    section: "3. Spreads, Soups & Processed Foods",
    name: "Processed meats & preserved fish",
    examples: "Sausages/processed meat, Dried fish (Karawala)",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 10,
      "2-3x/wk": 20,
      Daily: 30
    }
  },
  {
    key: "cooking_sauces",
    section: "3. Spreads, Soups & Processed Foods",
    name: "Bottled sauces for cooking",
    examples:
      "Soy sauce, Tomato sauce/chilli sauce (used during food preparation)",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 3,
      "2-3x/wk": 5,
      Daily: 10
    }
  },
  {
    key: "salt_cooking",
    section: "4. Salt Addition, Condiments & Fast Food",
    name: "Salt added during cooking",
    examples:
      "Salt added while cooking Rice, Dhal curry, Potato/Veg curry, Meat/Fish curry, Brinjal moju",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 8,
      "2-3x/wk": 15,
      Daily: 25
    }
  },
  {
    key: "salt_table",
    section: "4. Salt Addition, Condiments & Fast Food",
    name: "Salt added at the table",
    examples:
      "Extra salt added after cooking directly onto rice, curries, cut fruits, or salads",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 4,
      "2-3x/wk": 6,
      Daily: 12
    }
  },
  {
    key: "table_condiments",
    section: "4. Salt Addition, Condiments & Fast Food",
    name: "Table condiments & pickles",
    examples:
      "Tomato sauce/chilli sauce, Soy sauce, Sri Lankan pickle (Achcharu), Lime pickle",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 2,
      "2-3x/wk": 3,
      Daily: 5
    }
  },
  {
    key: "fast_food",
    section: "4. Salt Addition, Condiments & Fast Food",
    name: "Takeaway, street food & fried snacks",
    examples:
      "Fried rice, Kottu roti, Fish/Veg roll, Cutlet, Pastry, Potato chips, Restaurant rice & curry, Street foods",
    options: {
      "Rarely/Never": 0,
      "1x/wk": 3,
      "2-3x/wk": 4,
      Daily: 5
    }
  }
];

const EXTRA_SALT_MAP = {
  Never: 0,
  Rarely: 200,
  Sometimes: 500,
  Often: 1000,
  Always: 2000
};

const state = {
  gender: "Male",
  stomaHas: "NO",
  stomaType: "None",

  famDiabetes: "No",
  famHypertension: "No",
  famHeart: "No",
  personalDiag: "No",

  exVigorous: "No",
  exModerate: "No",
  exWalking: "No",

  smoking: "Never smoked",
  alcohol: "Never",
  extraSalt: "Never",

  ffq: {}
};

const pageMeta = {
  vitals: [
    "Patient Profile",
    "Demographics and baseline clinical measurements"
  ],
  meals: [
    "FFQ Dietary Intake",
    "Select frequency options for each dietary staple"
  ],
  lifestyle: [
    "History & Lifestyle",
    "Family history, physical activity, and habits"
  ],
  results: [
    "AI Assessment Results",
    "Risk estimates, blood pressure classification & recommendations"
  ]
};

let lastReport = null;

/* =========================================================
   BASIC HELPERS & TOAST
========================================================= */

function id(name) {
  return document.getElementById(name);
}

function toast(message) {
  const toastElement = id("toast");
  if (!toastElement) return;

  toastElement.textContent = message;
  toastElement.classList.add("show");

  clearTimeout(window._toast);
  window._toast = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2800);
}

/* =========================================================
   AUTOMATIC PARTICIPANT ID
========================================================= */

function generatePatientId() {
  const now = new Date();
  const stamp = [
    now.getFullYear().toString().slice(-2),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0")
  ].join("");

  const random = Math.floor(100 + Math.random() * 900);
  return `PID-${stamp}-${random}`;
}

function initId() {
  const pid = generatePatientId();
  const participantInput = id("participant");
  const patientChip = id("patientChip");

  if (participantInput) participantInput.value = pid;
  if (patientChip) patientChip.textContent = pid;
}

/* =========================================================
   FFQ GENERATION & SCORING
========================================================= */

function renderFFQ() {
  const root = id("ffqContainer");
  if (!root) return;

  root.innerHTML = "";
  let currentSection = "";

  FFQ.forEach(item => {
    if (item.section !== currentSection) {
      currentSection = item.section;
      const section = document.createElement("div");
      section.className = "ffq-section";
      section.innerHTML = `
        <div class="section-band">${item.section.toUpperCase()}</div>
        <div class="ffq-head">
          <div>Food Category</div>
          <div>Sri Lankan Food Examples</div>
          <div>Frequency / Portion Option (Select ONE)</div>
        </div>
      `;
      root.appendChild(section);
    }

    if (!(item.key in state.ffq)) {
      state.ffq[item.key] = Object.keys(item.options)[0];
    }

    const row = document.createElement("div");
    row.className = "ffq-row";

    const optionsHTML = Object.keys(item.options)
      .map(label => {
        const selected = state.ffq[item.key] === label ? "selected" : "";
        return `
          <button
            type="button"
            class="option ${selected}"
            data-ffq="${item.key}"
            data-value="${label.replace(/"/g, "&quot;")}"
          >
            ${label}
          </button>
        `;
      })
      .join("");

    row.innerHTML = `
      <div><div class="food-name">${item.name}</div></div>
      <div><div class="food-examples">${item.examples}</div></div>
      <div><div class="ffq-options">${optionsHTML}</div></div>
    `;

    root.appendChild(row);
  });

  if (!root.dataset.bound) {
    root.addEventListener("click", event => {
      const button = event.target.closest("[data-ffq]");
      if (!button) return;

      const key = button.dataset.ffq;
      const value = button.dataset.value;

      state.ffq[key] = value;

      root.querySelectorAll(`[data-ffq="${key}"]`).forEach(option => {
        option.classList.toggle("selected", option === button);
      });

      updateScore();
    });

    root.dataset.bound = "true";
  }
}

function updateScore() {
  const score = FFQ.reduce((total, item) => {
    return total + (item.options[state.ffq[item.key]] || 0);
  }, 0);

  const scoreElement = id("liveScore");
  if (scoreElement) {
    scoreElement.textContent = score.toFixed(1);
  }

  return score;
}

/* =========================================================
   OPTION BUTTON GROUPS
========================================================= */

function wireOptionGroups() {
  document.querySelectorAll(".option-group").forEach(group => {
    if (group.dataset.bound === "true") return;

    group.addEventListener("click", event => {
      const button = event.target.closest(".option");
      if (!button) return;

      event.preventDefault();

      group.querySelectorAll(".option").forEach(option => {
        option.classList.remove("selected");
      });

      button.classList.add("selected");

      const name = group.dataset.name;
      if (name) {
        state[name] = button.dataset.value;
      }
    });

    group.dataset.bound = "true";
  });
}

/* =========================================================
   BMI CALCULATION & LISTENERS
========================================================= */

function calcBMI() {
  const heightInput = id("height");
  const weightInput = id("weight");
  const bmiField = id("bmi");

  if (!heightInput || !weightInput || !bmiField) return;

  const height = Number.parseFloat(heightInput.value);
  const weight = Number.parseFloat(weightInput.value);

  if (Number.isFinite(height) && Number.isFinite(weight) && height > 0 && weight > 0) {
    const bmi = weight / Math.pow(height / 100, 2);
    bmiField.value = bmi.toFixed(1);
  } else {
    bmiField.value = "";
  }
}

function attachBMIListeners() {
  ["height", "weight"].forEach(fieldId => {
    const field = id(fieldId);
    if (field) {
      field.addEventListener("input", calcBMI);
      field.addEventListener("change", calcBMI);
      field.addEventListener("blur", calcBMI);
    }
  });
  calcBMI();
}

/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(key) {
  const targetPage = id(`page-${key}`);
  if (!targetPage) return;

  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  targetPage.classList.add("active");

  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle("active", button.dataset.page === key);
  });

  if (pageMeta[key]) {
    const titleEl = id("pageTitle");
    const subTitleEl = id("pageSubtitle");
    if (titleEl) titleEl.textContent = pageMeta[key][0];
    if (subTitleEl) subTitleEl.textContent = pageMeta[key][1];
  }

  const step = key === "vitals" ? 1 : key === "meals" ? 2 : key === "lifestyle" ? 3 : 4;
  const progressWidth = key === "results" ? 100 : (step / 3) * 100;

  const progressBar = id("progressBar");
  const progressText = id("progressText");

  if (progressBar) progressBar.style.width = `${progressWidth}%`;
  if (progressText) {
    progressText.textContent = key === "results" ? "Completed" : `Step ${step} of 3`;
  }

  const sidebar = id("sidebar");
  if (sidebar) sidebar.classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function wireNavigationButtons() {
  document.querySelectorAll("[data-next]").forEach(button => {
    if (button.dataset.navBound === "true") return;
    button.addEventListener("click", event => {
      event.preventDefault();
      const target = button.dataset.next;
      if (target) showPage(target);
    });
    button.dataset.navBound = "true";
  });

  document.querySelectorAll("[data-back]").forEach(button => {
    if (button.dataset.navBound === "true") return;
    button.addEventListener("click", event => {
      event.preventDefault();
      const target = button.dataset.back;
      if (target) showPage(target);
    });
    button.dataset.navBound = "true";
  });

  document.querySelectorAll(".nav-item").forEach(button => {
    if (button.dataset.navBound === "true") return;
    button.addEventListener("click", event => {
      event.preventDefault();
      if (button.dataset.page) showPage(button.dataset.page);
    });
    button.dataset.navBound = "true";
  });
}

/* =========================================================
   MOBILE MENU
========================================================= */

function wireMobileMenu() {
  const mobileMenu = id("mobileMenu");
  const sidebar = id("sidebar");

  if (mobileMenu && sidebar) {
    mobileMenu.addEventListener("click", e => {
      e.stopPropagation();
      sidebar.classList.toggle("open");
    });

    document.addEventListener("click", e => {
      if (sidebar.classList.contains("open") && !sidebar.contains(e.target) && e.target !== mobileMenu) {
        sidebar.classList.remove("open");
      }
    });
  }
}

/* =========================================================
   BLOOD PRESSURE CLASSIFICATION & RISK ESTIMATION
========================================================= */

function classifyBP(sys, dia) {
  if (sys > 180 || dia > 120) {
    return {
      name: "Hypertensive Crisis",
      level: "danger",
      text: "🚨 HYPERTENSIVE CRISIS (SBP > 180 and/or DBP > 120 mmHg): Requires immediate emergency medical evaluation."
    };
  }
  if (sys >= 140 || dia >= 90) {
    return {
      name: "Stage 2 Hypertension",
      level: "danger",
      text: "🫀 STAGE 2 HYPERTENSION (SBP ≥ 140 or DBP ≥ 90 mmHg): Medical consultation for antihypertensive therapy is strongly advised."
    };
  }
  if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
    return {
      name: "Stage 1 Hypertension",
      level: "warn",
      text: "🫀 STAGE 1 HYPERTENSION (SBP 130–139 or DBP 80–89 mmHg): Initiate structured lifestyle modifications and arrange clinical follow-up."
    };
  }
  if (sys >= 120 && sys <= 129 && dia < 80) {
    return {
      name: "Elevated BP",
      level: "warn",
      text: "🫀 ELEVATED BLOOD PRESSURE (SBP 120–129 and DBP < 80 mmHg): Adopt heart-healthy lifestyle modifications and minimize sodium intake."
    };
  }
  if (sys < 120 && dia < 80) {
    return {
      name: "Normal BP",
      level: "good",
      text: "✅ NORMAL BLOOD PRESSURE (SBP < 120 and DBP < 80 mmHg): Optimal range. Continue maintaining a balanced lifestyle."
    };
  }

  return {
    name: "Stage 1 Hypertension",
    level: "warn",
    text: "🫀 STAGE 1 HYPERTENSION (DBP 80–89 mmHg): Diastolic pressure elevated. Schedule clinical follow-up."
  };
}

function estimateRisks({ age, bmi, sodium, exercise, smoking, alcohol, famHist, personalHist, sys, dia, waist }) {
  const exFactor = (exercise / 3) * 0.1;

  const probBP = Math.max(0, (sys / 180) * 0.6 + (sodium / 6000) * 0.2 + (alcohol / 2) * 0.1 + personalHist * 0.1 - exFactor);
  const probDiab = Math.max(0, (bmi / 40) * 0.35 + (waist / 120) * 0.35 + famHist * 0.15 + personalHist * 0.15 - exFactor);
  const probHeart = Math.max(0, probBP * 0.35 + (smoking / 2) * 0.25 + (alcohol / 2) * 0.15 + (age / 100) * 0.25 - exFactor);
  const probStroke = Math.max(0, probBP * 0.5 + (smoking / 2) * 0.2 + (alcohol / 2) * 0.15 + (age / 100) * 0.15 - exFactor);
  const probKidney = Math.max(0, probBP * 0.4 + probDiab * 0.3 + (sodium / 6000) * 0.15 + personalHist * 0.15);
  const probChol = Math.max(0, (bmi / 40) * 0.3 + (waist / 120) * 0.3 + (alcohol / 2) * 0.2 + (age / 100) * 0.2 - exFactor);

  return [probBP, probDiab, probHeart, probStroke, probKidney, probChol].map(v => Math.max(0, Math.min(1, v)) * 100);
}

function generateSuggestions(score, sodium, bmi, sys, dia, risks) {
  const suggestions = [];
  const bp = classifyBP(sys, dia);

  suggestions.push({
    text: bp.text,
    kind: bp.level === "danger" ? "critical" : bp.level === "good" ? "good" : "normal"
  });

  if (score >= 50) {
    suggestions.push({
      text: `⚠️ DIETITIAN REFERRAL FLAG: Questionnaire score is ${score.toFixed(1)} (≥ 50 cutoff). High sodium intake detected; dietitian/nutritionist referral advised.`,
      kind: "critical"
    });
  } else {
    suggestions.push({
      text: `✅ Sodium Intake Within Limits: FFQ score is ${score.toFixed(1)} (< 50 cutoff). Maintain current sodium-control practices.`,
      kind: "good"
    });
  }

  if (["3-4/day", "5+/day"].includes(state.ffq.carbs_staples)) {
    suggestions.push({
      text: "🍚 Carbohydrate Staples: High daily consumption of bread/grain staples detected. Review portion sizes of white rice, bun and kottu roti.",
      kind: "normal"
    });
  }

  if (["2-3x/wk", "Daily"].includes(state.ffq.processed_meats)) {
    suggestions.push({
      text: "🐟 Processed Meats & Dried Fish: High intake of sausages or dried fish (Karawala) adds excessive sodium. Consider fresh fish or unseasoned lean protein.",
      kind: "normal"
    });
  }

  if (state.ffq.salt_cooking === "Daily" || ["2-3x/wk", "Daily"].includes(state.ffq.salt_table)) {
    suggestions.push({
      text: "🧂 Salt Addition: Regular salt addition detected. Limit extra table salt and bottled sauces during food preparation.",
      kind: "normal"
    });
  }

  if (state.stomaHas === "YES") {
    suggestions.push({
      text: `⚕️ Stoma Management (${state.stomaType}): Active stoma reported. Hydration and electrolyte status should be managed with clinical supervision.`,
      kind: "normal"
    });
  }

  if (bmi >= 25 || risks[1] >= 40) {
    suggestions.push({
      text: `⚖️ Weight Management: BMI is ${bmi.toFixed(1)} kg/m². Discuss sustainable weight-management strategies with a qualified professional.`,
      kind: "normal"
    });
  }

  const exerciseCount = [state.exVigorous, state.exModerate, state.exWalking].filter(v => v === "Yes").length;
  if (exerciseCount < 2) {
    suggestions.push({
      text: "🏃 Physical Activity Boost: Aim for at least 150 minutes of moderate physical activity per week where medically appropriate.",
      kind: "normal"
    });
  }

  if (state.smoking !== "Never smoked") {
    suggestions.push({
      text: "🚭 Smoking Cessation: Quitting smoking is crucial for reducing cardiovascular and stroke risks.",
      kind: "normal"
    });
  }

  return suggestions;
}

/* =========================================================
   VALIDATION
========================================================= */

function validate() {
  const fieldsConfig = [
    { fieldId: "age", label: "Age", min: 1, max: 120 },
    { fieldId: "height", label: "Height", min: 30, max: 250 },
    { fieldId: "weight", label: "Weight", min: 1, max: 400 },
    { fieldId: "sysBP", label: "Systolic BP", min: 50, max: 300 },
    { fieldId: "diaBP", label: "Diastolic BP", min: 30, max: 200 },
    { fieldId: "waist", label: "Waist circumference", min: 30, max: 250 }
  ];

  for (const item of fieldsConfig) {
    const field = id(item.fieldId);
    const val = field ? Number.parseFloat(field.value) : NaN;

    if (!field || !field.value.trim()) {
      toast(`Please enter ${item.label}.`);
      showPage("vitals");
      if (field) field.focus();
      return false;
    }

    if (Number.isNaN(val) || val < item.min || val > item.max) {
      toast(`Please enter a valid ${item.label} (${item.min}-${item.max}).`);
      showPage("vitals");
      if (field) field.focus();
      return false;
    }
  }

  return true;
}

/* =========================================================
   RUN ASSESSMENT
========================================================= */

function runAssessment() {
  if (!validate()) return;

  const score = updateScore();
  const age = Number(id("age").value) || 40;
  const height = Number(id("height").value) || 170;
  const weight = Number(id("weight").value) || 70;
  const bmi = Number(id("bmi").value) || 24.2;
  const sys = Number(id("sysBP").value) || 120;
  const dia = Number(id("diaBP").value) || 80;
  const waist = Number(id("waist").value) || 90;
  const fbs = id("fbs") ? id("fbs").value : "";

  const sodium = score * 40 + (EXTRA_SALT_MAP[state.extraSalt] || 0);
  const exercise = [state.exVigorous, state.exModerate, state.exWalking].filter(v => v === "Yes").length;
  const smoking = state.smoking === "Current smoker" ? 2 : state.smoking === "Former smoker" ? 1 : 0;
  const alcoholMap = { Never: 0, Occasional: 1, "Regular/Heavy": 2 };
  const alcohol = alcoholMap[state.alcohol] || 0;

  const famHist = [state.famDiabetes, state.famHypertension, state.famHeart].some(v => v === "Yes") ? 1 : 0;
  const personalHist = state.personalDiag === "Yes" ? 1 : 0;

  const risks = estimateRisks({
    age, bmi, sodium, exercise, smoking, alcohol, famHist, personalHist, sys, dia, waist
  });

  const bp = classifyBP(sys, dia);
  const suggestions = generateSuggestions(score, sodium, bmi, sys, dia, risks);

  const participantInput = id("participant");
  const pid = participantInput && participantInput.value ? participantInput.value : generatePatientId();

  lastReport = {
    participant: pid,
    age,
    height,
    weight,
    bmi,
    sys,
    dia,
    waist,
    fbs,
    gender: state.gender,
    score,
    sodium,
    bp,
    risks,
    suggestions,
    createdAt: new Date().toISOString()
  };

  localStorage.setItem("clinicalAssessmentLatest", JSON.stringify(lastReport));
  const count = Number(localStorage.getItem("clinicalAssessmentCount") || 0) + 1;
  localStorage.setItem("clinicalAssessmentCount", String(count));

  renderResults(lastReport);
  showPage("results");
  toast("Assessment completed and saved locally.");
}

/* =========================================================
   RESULTS RENDERING
========================================================= */

function renderResults(report) {
  if (!report) return;

  const emptyEl = id("resultsEmpty");
  const contentEl = id("resultsContent");

  if (emptyEl) emptyEl.hidden = true;
  if (contentEl) contentEl.hidden = false;

  const referral = report.score >= 50 ? "HIGH — DIETITIAN REFERRAL" : "MODERATE / LOW";

  const statsGrid = id("statsGrid");
  if (statsGrid) {
    statsGrid.innerHTML = [
      ["PARTICIPANT ID", report.participant, ""],
      ["BP CLASSIFICATION", report.bp.name, report.bp.level],
      ["FFQ SODIUM SCORE", `${report.score.toFixed(1)} pts`, ""],
      ["SODIUM RISK LEVEL", referral, referral.startsWith("HIGH") ? "danger" : "good"]
    ]
      .map(
        item => `
        <div class="stat">
          <div class="stat-label">${item[0]}</div>
          <div class="stat-value ${item[2]}">${item[1]}</div>
        </div>
      `
      )
      .join("");
  }

  const diseases = [
    "Hypertension",
    "Diabetes",
    "Heart Disease",
    "Stroke",
    "Kidney Disease",
    "High Cholesterol"
  ];

  const riskList = id("riskList");
  if (riskList) {
    riskList.innerHTML = report.risks
      .map((risk, index) => {
        const level = risk >= 60 ? "high" : risk >= 35 ? "medium" : "low";
        const color = risk >= 60 ? "#b84b4b" : risk >= 35 ? "#b7791f" : "#2f806d";

        return `
          <div class="risk-row">
            <div class="risk-top">
              <span>${diseases[index]}</span>
              <span class="risk-pill ${level}">${risk.toFixed(1)}% Risk</span>
            </div>
            <div class="risk-track" style="height:5px;background:#e2e8f0;border-radius:3px;margin-top:6px;overflow:hidden">
              <div class="risk-fill" style="width:${Math.min(100, risk)}%;height:100%;background:${color};border-radius:3px;transition:width 0.4s ease"></div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  const suggestions = id("suggestions");
  if (suggestions) {
    suggestions.innerHTML = report.suggestions
      .map(
        s => `
        <div class="suggestion ${s.kind}">
          ${s.text}
        </div>
      `
      )
      .join("");
  }

  const saveStatus = id("saveStatus");
  if (saveStatus) {
    saveStatus.textContent = `Assessment ${report.participant} was saved in this browser. Export CSV to create a portable record.`;
  }
}

/* =========================================================
   RESET / NEW ASSESSMENT
========================================================= */

function resetAll() {
  lastReport = null;
  initId();

  ["age", "height", "weight", "sysBP", "diaBP", "waist", "fbs"].forEach(fieldId => {
    const field = id(fieldId);
    if (field) field.value = "";
  });

  const bmiField = id("bmi");
  if (bmiField) bmiField.value = "";

  Object.assign(state, {
    gender: "Male",
    stomaHas: "NO",
    stomaType: "None",

    famDiabetes: "No",
    famHypertension: "No",
    famHeart: "No",
    personalDiag: "No",

    exVigorous: "No",
    exModerate: "No",
    exWalking: "No",

    smoking: "Never smoked",
    alcohol: "Never",
    extraSalt: "Never"
  });

  FFQ.forEach(item => {
    state.ffq[item.key] = Object.keys(item.options)[0];
  });

  document.querySelectorAll(".option-group").forEach(group => {
    const groupName = group.dataset.name;
    if (groupName && state[groupName] !== undefined) {
      group.querySelectorAll(".option").forEach(button => {
        button.classList.toggle("selected", button.dataset.value === state[groupName]);
      });
    }
  });

  renderFFQ();
  updateScore();

  const emptyEl = id("resultsEmpty");
  const contentEl = id("resultsContent");
  if (emptyEl) emptyEl.hidden = false;
  if (contentEl) contentEl.hidden = true;

  showPage("vitals");
  toast("New assessment started.");
}

/* =========================================================
   CSV EXPORT
========================================================= */

function exportCSV() {
  if (!lastReport) {
    toast("Run an assessment first.");
    return;
  }

  const headers = [
    "Participant_ID",
    "Date",
    "Age",
    "Gender",
    "Height_cm",
    "Weight_kg",
    "BMI",
    "Systolic_BP",
    "Diastolic_BP",
    "Waist_cm",
    "Fasting_Blood_Sugar",
    "BP_Classification",
    "FFQ_Total_Score",
    "Estimated_Sodium_mg",
    "Dietitian_Referral",
    "Stoma_Has",
    "Stoma_Type",
    "Risk_Hypertension_Pct",
    "Risk_Diabetes_Pct",
    "Risk_Heart_Disease_Pct",
    "Risk_Stroke_Pct",
    "Risk_Kidney_Disease_Pct",
    "Risk_High_Cholesterol_Pct"
  ];

  const row = [
    lastReport.participant,
    lastReport.createdAt,
    lastReport.age,
    lastReport.gender,
    lastReport.height,
    lastReport.weight,
    lastReport.bmi,
    lastReport.sys,
    lastReport.dia,
    lastReport.waist,
    lastReport.fbs,
    lastReport.bp.name,
    lastReport.score,
    lastReport.sodium,
    lastReport.score >= 50 ? "YES" : "NO",
    state.stomaHas,
    state.stomaType,
    ...lastReport.risks
  ];

  const escapeCSV = value => `"${String(value ?? "").replaceAll('"', '""')}"`;
  const csv = [headers, row].map(values => values.map(escapeCSV).join(",")).join("\r\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `clinical_assessment_${lastReport.participant}.csv`;

  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  toast("CSV exported successfully.");
}

/* =========================================================
   ACTION BUTTON EVENT LISTENERS
========================================================= */

function wireActionButtons() {
  const assessmentBtn = id("runAssessment");
  if (assessmentBtn) {
    assessmentBtn.addEventListener("click", e => {
      e.preventDefault();
      runAssessment();
    });
  }

  const newAssessmentBtn = id("newAssessmentBtn");
  if (newAssessmentBtn) {
    newAssessmentBtn.addEventListener("click", e => {
      e.preventDefault();
      if (confirm("Start a new assessment? Current unsaved values will be reset.")) {
        resetAll();
      }
    });
  }

  const tryAgainBtn = id("tryAgainBtn");
  if (tryAgainBtn) {
    tryAgainBtn.addEventListener("click", e => {
      e.preventDefault();
      resetAll();
    });
  }

  const exportBtn = id("exportBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", e => {
      e.preventDefault();
      exportCSV();
    });
  }
}

/* =========================================================
   INITIALIZE APPLICATION
========================================================= */

function initialiseApplication() {
  try {
    renderFFQ();
    wireOptionGroups();
    wireNavigationButtons();
    wireMobileMenu();
    wireActionButtons();
    attachBMIListeners();
    initId();
    updateScore();

    const saved = localStorage.getItem("clinicalAssessmentLatest");
    if (saved) {
      try {
        lastReport = JSON.parse(saved);
        renderResults(lastReport);
      } catch (e) {
        console.warn("Could not load saved assessment.", e);
      }
    }
  } catch (error) {
    console.error("Initialization error:", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseApplication);
} else {
  initialiseApplication();
}
