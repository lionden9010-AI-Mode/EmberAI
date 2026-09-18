import "./styles.css";

type View = "library" | "characters" | "stories" | "settings";
const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("EmberAI root element was not found");
const root = app;

const cards = [
  { name: "Mira Vale", role: "Clockwork cartographer", color: "violet", memory: "Remembers the routes you discover together." },
  { name: "The Hearthkeeper", role: "Gentle village oracle", color: "amber", memory: "Keeps your world's lore close at hand." },
  { name: "Nova", role: "Starlight pilot", color: "blue", memory: "Picks up every thread worth returning to." },
];
let view: View = "library";

function render() {
  root.innerHTML = `
    <main class="shell">
      <nav class="sidebar" aria-label="Main navigation">
        <a class="brand" href="#library"><span class="brand-mark">✦</span><span>ember<span>ai</span></span></a>
        <div class="nav-links">
          ${nav("library", "⌂", "Library")}${nav("characters", "♙", "Characters")}${nav("stories", "✎", "Stories")}${nav("settings", "⚙", "Settings")}
        </div>
        <div class="sidebar-foot"><span class="privacy-dot"></span>Private by default</div>
      </nav>
      <section class="content">
        <header><div><p class="eyebrow">YOUR STORY SPACE</p><h1>${title()}</h1></div><button class="profile" aria-label="Open profile">EM</button></header>
        ${body()}
      </section>
    </main>`;
  root.querySelectorAll<HTMLButtonElement>("[data-view]").forEach((button) => button.addEventListener("click", () => { view = button.dataset.view as View; render(); }));
  root.querySelector<HTMLButtonElement>("#new-character")?.addEventListener("click", openComposer);
}
function nav(id: View, icon: string, label: string) { return `<button class="nav-link ${view === id ? "active" : ""}" data-view="${id}"><span>${icon}</span>${label}</button>`; }
function title() { return ({ library: "Welcome back, Ember.", characters: "Your characters", stories: "Stories in progress", settings: "Your space, your rules" })[view]; }
function body() {
  if (view === "settings") return `<div class="setting-card"><h2>Privacy comes first.</h2><p>Choose where generation happens, control discovery, and export or delete your data at any time.</p><div class="toggle-row"><span>Cloud processing</span><button class="toggle" aria-label="Cloud processing enabled"><span></span></button></div><div class="toggle-row"><span>Long-term memory</span><button class="toggle" aria-label="Long-term memory enabled"><span></span></button></div></div>`;
  if (view === "stories") return `<section class="empty-state"><span>✦</span><h2>Start a story worth remembering.</h2><p>Build a world, choose a character, and let the first scene unfold.</p><button class="primary" id="new-character">Create a character</button></section>`;
  return `<section class="hero"><div><p class="eyebrow">A NEW KIND OF STORYTELLING</p><h2>Every world has a spark.</h2><p>Meet a character, make a choice, and keep the moments that matter.</p><button class="primary" id="new-character">+ Create character</button></div><div class="orb" aria-hidden="true"><span>✦</span></div></section><section class="section-heading"><div><h2>${view === "characters" ? "Character studio" : "Continue your adventures"}</h2><p>${view === "characters" ? "Original personalities, worlds, and instructions—made by you." : "Characters with context, not just a chat history."}</p></div><button class="text-button">See all →</button></section><section class="character-grid">${cards.map((card) => `<article class="character-card"><div class="portrait ${card.color}"><span>✦</span></div><div><h3>${card.name}</h3><p>${card.role}</p><small>${card.memory}</small></div></article>`).join("")}</section>`;
}
function openComposer() { alert("Character studio is ready for the next build: profile, greeting, world lore, Story Cards, and custom instructions."); }
render();
