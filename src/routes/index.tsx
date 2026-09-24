import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Droplets,
  Heart,
  Leaf,
  Menu,
  Moon,
  MoveRight,
  Quote,
  Sun,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/fitlife-hero.jpg";
import foodImage from "@/assets/fitlife-food.jpg";
import hikeImage from "@/assets/fitlife-hike.jpg";
import wellnessImage from "@/assets/fitlife-wellness.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FitLife — A Gentler Way to Feel Strong" },
      {
        name: "description",
        content:
          "Thoughtful movement, vibrant food, and simple rituals for a healthy life that feels naturally yours.",
      },
      { property: "og:title", content: "FitLife — A Gentler Way to Feel Strong" },
      {
        property: "og:description",
        content:
          "A premium wellness journal for thoughtful movement, nourishing food, and everyday balance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FitLifePage,
});

const workouts = [
  {
    number: "01",
    title: "Strength",
    description: "Slow, considered resistance work that builds a capable body for everyday life.",
    benefit: "Supports bones, posture & lasting energy",
  },
  {
    number: "02",
    title: "Mobility",
    description: "Fluid sequences that invite space back into joints and ease into movement.",
    benefit: "Improves range, balance & recovery",
  },
  {
    number: "03",
    title: "Outdoor Cardio",
    description: "Walking, hiking, or cycling at a pace where nature becomes part of the practice.",
    benefit: "Strengthens heart, lungs & mood",
  },
];

const foods = [
  ["Leafy greens", "Folate, fibre and minerals for steady daily energy."],
  ["Whole grains", "Slow-release carbohydrates that help you stay satisfied."],
  ["Colourful fruit", "Antioxidants and hydration in nature’s sweetest form."],
  ["Healthy fats", "Support for the brain, hormones and nutrient absorption."],
];

const habits = [
  { icon: Sun, label: "Morning light", text: "Step outside soon after waking to support your natural rhythm." },
  { icon: Droplets, label: "Drink often", text: "Keep water within reach and sip before thirst takes over." },
  { icon: Moon, label: "Protect sleep", text: "Create a quiet, consistent wind-down that tells your body it is safe to rest." },
  { icon: Heart, label: "Choose connection", text: "Share movement, meals, and honest conversation with people you love." },
];

const journal = [
  { tag: "Movement", title: "Why walking is still one of the best things you can do", read: "5 min read" },
  { tag: "Nourishment", title: "A practical guide to building a more colourful plate", read: "7 min read" },
  { tag: "Mind", title: "Rest is not a reward — it is part of the work", read: "4 min read" },
];

function LeafMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Leaf size={compact ? 17 : 20} strokeWidth={1.7} />
    </span>
  );
}

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function FitLifePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fitlife-page">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="FitLife home" onClick={closeMenu}>
          <LeafMark />
          <span>FitLife</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#move" onClick={closeMenu}>Move</a>
          <a href="#nourish" onClick={closeMenu}>Nourish</a>
          <a href="#restore" onClick={closeMenu}>Restore</a>
          <a href="#journal" onClick={closeMenu}>Journal</a>
          <a href="#about" onClick={closeMenu}>Our story</a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <img className="hero-image" src={heroImage} alt="Woman stretching in a mountain meadow at sunrise" width={1600} height={1200} />
          <div className="hero-wash" />
          <div className="hero-botanical" aria-hidden="true">❧</div>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Your everyday wellness journal</p>
            <h1>A gentler way<br />to feel <em>strong.</em></h1>
            <p className="hero-copy">Thoughtful movement, vibrant food, and simple rituals for a healthy life that feels naturally yours.</p>
            <a className="circle-link" href="#categories" aria-label="Explore the guide">
              <span>Explore<br />the guide</span>
              <ArrowDownRight size={20} />
            </a>
          </div>
          <p className="edition-note">FIELD NOTES · VOLUME 01</p>
        </section>

        <section className="categories section" id="categories">
          <div className="section-shell">
            <div className="categories-intro reveal">
              <p className="eyebrow">Begin where you are</p>
              <h2>Wellness is a whole-life practice.</h2>
            </div>
            <div className="category-list">
              {([
                ["01", "Move", "Build strength and freedom in your body."],
                ["02", "Nourish", "Eat with colour, pleasure, and ease."],
                ["03", "Restore", "Make room for rest and quiet."],
                ["04", "Connect", "Grow the relationships that hold you."],
              ] as const).map(([number, name, text]) => (
                <a href={`#${name.toLowerCase()}`} className="category-row" key={name}>
                  <span>{number}</span><strong>{name}</strong><p>{text}</p><ArrowRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="movement-section section" id="move">
          <div className="section-shell">
            <SectionTitle eyebrow="Move with purpose" title="Workouts that give back." intro="The best kind of movement does more than tire you out. It makes the rest of your life feel easier." />
            <div className="workout-layout">
              <div className="workout-image-wrap reveal">
                <img src={hikeImage} alt="Friends hiking through green mountain hills" loading="lazy" width={1408} height={1008} />
                <span className="image-caption">Fresh air counts, too.</span>
              </div>
              <div className="workout-list">
                {workouts.map((item) => (
                  <article className="workout-item" key={item.title}>
                    <span>{item.number}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <small><Check size={14} /> {item.benefit}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="food-section section" id="nourish">
          <div className="section-shell food-layout">
            <div className="food-copy reveal">
              <p className="eyebrow">Eat the rainbow</p>
              <h2>Food that looks good,<br /><em>and feels good.</em></h2>
              <p>Healthy eating does not need to be perfect. Start with satisfying whole foods, add more colour, and leave space for joy.</p>
              <div className="food-list">
                {foods.map(([name, benefit]) => (
                  <div key={name}><Leaf size={18} /><span><strong>{name}</strong>{benefit}</span></div>
                ))}
              </div>
            </div>
            <div className="food-image-wrap reveal">
              <div className="watercolor-stain" />
              <img src={foodImage} alt="Colourful grain bowl with greens, fruit, avocado, and seeds" loading="lazy" width={1200} height={1200} />
              <span className="round-note">more colour<br />more goodness</span>
            </div>
          </div>
        </section>

        <section className="day-section section">
          <div className="section-shell">
            <SectionTitle eyebrow="A balanced day" title="Small anchors, from sunrise to sleep." />
            <div className="day-path" aria-label="A suggested balanced daily rhythm">
              {[
                ["6:30", "Wake gently", "Water, daylight, a few deep breaths."],
                ["8:00", "Fuel well", "A colourful breakfast with protein and fibre."],
                ["12:30", "Reset", "Step outside, stretch, eat away from your screen."],
                ["17:30", "Move", "Choose strength, a walk, or whatever feels inviting."],
                ["21:30", "Soften", "Lower the lights and let the day become quiet."],
              ].map(([time, title, text], index) => (
                <article className="day-stop" key={time}>
                  <span className="day-number">{index + 1}</span><time>{time}</time><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="habits-section section">
          <div className="section-shell">
            <SectionTitle eyebrow="Healthy habits" title="A little, often, becomes a life." intro="Skip the reinvention. The quiet rituals you return to are the ones that shape how you feel." />
            <div className="habits-grid">
              {habits.map(({ icon: Icon, label, text }) => (
                <article key={label}>
                  <Icon aria-hidden="true" /><h3>{label}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wellness-section section" id="restore">
          <img src={wellnessImage} alt="Woman meditating beside a tranquil mountain lake" loading="lazy" width={1408} height={1008} />
          <div className="wellness-panel reveal">
            <p className="eyebrow">Inner wellness</p>
            <h2>Quiet is where you hear yourself.</h2>
            <p>Wellness is also the pause between doing. A few undistracted minutes can settle the nervous system, sharpen attention, and restore perspective.</p>
            <div className="breath-line"><span>Inhale · 4</span><i /><span>Exhale · 6</span></div>
          </div>
        </section>

        <section className="myths-section section">
          <div className="section-shell myths-layout">
            <div>
              <p className="eyebrow">Myths vs facts</p>
              <h2>Let’s clear the air.</h2>
              <p className="section-intro">Health advice can be noisy. Keep what is evidence-based, useful, and kind.</p>
            </div>
            <div className="myths-list">
              {[
                ["MYTH", "You need to work out every day.", "FACT", "Recovery is where adaptation happens. Consistency includes rest."],
                ["MYTH", "Healthy food is always restrictive.", "FACT", "A nourishing pattern can include culture, comfort, and pleasure."],
                ["MYTH", "Sweat measures workout quality.", "FACT", "Temperature and genetics affect sweat; effort has many signals."],
              ].map(([a, myth, b, fact]) => (
                <article key={myth}>
                  <div><span>{a}</span><p>{myth}</p></div>
                  <MoveRight aria-hidden="true" />
                  <div><span>{b}</span><p>{fact}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="styles-section section">
          <div className="section-shell">
            <SectionTitle eyebrow="Find your rhythm" title="There is more than one way to be fit." />
            <div className="style-cloud">
              {[
                ["Yoga", "soft-blue"], ["Trail walking", "forest"], ["Pilates", "terracotta"], ["Swimming", "sage"],
                ["Dance", "olive"], ["Cycling", "cream"], ["Calisthenics", "sage"], ["Tai chi", "soft-blue"],
              ].map(([name, tone]) => <span className={tone} key={name}>{name}</span>)}
            </div>
          </div>
        </section>

        <section className="start-section section">
          <div className="section-shell start-layout">
            <div className="start-title">
              <p className="eyebrow">Learn before you start</p>
              <h2>A good beginning is an honest one.</h2>
            </div>
            <ol className="start-list">
              <li><span>01</span><div><h3>Notice your baseline</h3><p>Energy, sleep, experience, and health history all matter. Begin from your real life, not someone else’s highlight reel.</p></div></li>
              <li><span>02</span><div><h3>Choose the smallest version</h3><p>Ten minutes you repeat will serve you better than an hour you dread.</p></div></li>
              <li><span>03</span><div><h3>Leave room to progress</h3><p>Finish feeling like you could do a little more. Gradual challenge is both safer and more sustainable.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="journal-section section" id="journal">
          <div className="section-shell">
            <div className="journal-heading">
              <SectionTitle eyebrow="The wellness journal" title="Ideas worth keeping." />
              <p>Thoughtful reads for a life in motion.</p>
            </div>
            <div className="journal-grid">
              {journal.map((article, index) => (
                <article className="journal-card" key={article.title}>
                  <div className={`journal-art art-${index + 1}`} aria-hidden="true"><Leaf /><span>0{index + 1}</span></div>
                  <div className="journal-card-copy"><span>{article.tag}</span><h3>{article.title}</h3><small>{article.read}</small></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="section-shell about-layout">
            <div className="about-mark"><LeafMark /><span>EST. WITH CARE</span></div>
            <div className="about-copy">
              <p className="eyebrow">About FitLife</p>
              <h2>Wellness, without the pressure.</h2>
              <p>FitLife is an independent guide to feeling well in the body and life you already have. We believe strength can be soft, food can be joyful, and health should make your world bigger—not smaller.</p>
              <blockquote><Quote size={22} /> Progress is not a straight line. It is a practice of returning.</blockquote>
            </div>
          </div>
        </section>

        <section className="cta-section" id="connect">
          <div className="cta-botanical" aria-hidden="true"><Leaf /><Leaf /><Leaf /></div>
          <p className="eyebrow">A note for your week</p>
          <h2>Take good care<br />of your <em>whole self.</em></h2>
          <p>Fresh perspective, practical rituals, and seasonal inspiration—delivered occasionally.</p>
          <a href="mailto:hello@fitlife.example" className="cta-button">Write to FitLife <ArrowRight size={18} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand"><LeafMark compact /><span>FitLife</span></div>
        <p>Movement · nourishment · rest · connection</p>
        <div><a href="#top">Back to top</a><span>© 2026 FitLife</span></div>
      </footer>
    </div>
  );
}