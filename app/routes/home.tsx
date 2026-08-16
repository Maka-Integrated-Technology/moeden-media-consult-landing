import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { LogoBadge } from "~/components/LogoMark";
import { SectionMarker } from "~/components/SectionMarker";
import { services, processSteps, values, sectors, tags } from "~/data/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moeden Media Consult — Clarity in a Noisy World" },
    {
      name: "description",
      content:
        "Moeden Media Consult is a strategic PR, marketing and development communications agency based in Abuja, Nigeria. Clarity in a Noisy World.",
    },
  ];
}

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [openService, setOpenService] = useState<string>(services[0].id);
  const [activeStep, setActiveStep] = useState<string>("1");

  // Deep-link support: #service-xxx opens & scrolls to the matching card
  useEffect(() => {
    const handleHash = () => {
      const id = window.location.hash.replace("#", "");
      if (services.some((s) => s.id === id)) {
        setOpenService(id);
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      {/*
        DEV NOTE — Pre-launch checklist:
        [ ] Replace "insert-email@moedenmedia.com" with the real contact email
        [ ] Replace placeholder social links (#) with real LinkedIn, X, Instagram URLs
        [ ] Confirm "Work With Us" / "Start a Conversation" CTA destination (currently anchors to #contact form)
        [ ] Confirm the six "Explore [Pillar] →" links — currently in-page anchors that expand each service card
        [ ] Logo: current mark is a redrawn approximation of the supplied artwork — swap in the client's real
            vector file (dark/blue variant for direct-on-white use) before go-live.
      */}

      <header className="site-header">
        <div className="container">
          <LogoBadge />

          <nav className={`nav-links${navOpen ? " is-open" : ""}`}>
            <a href="#top" onClick={closeNav}>Home</a>
            <a href="#intent" onClick={closeNav}>Approach</a>
            <a href="#services" onClick={closeNav}>Services</a>
            <a href="#process" onClick={closeNav}>Process</a>
            <a href="#why" onClick={closeNav}>Why Moeden</a>
            <a href="#sectors" onClick={closeNav}>Sectors</a>
          </nav>

          <div className="nav-cta">
            <a href="#contact" className="btn btn-secondary">Work With Us</a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* SECTION 1 — Hero */}
        <section className="hero" id="top">
          <div className="container">
            <div className="hero-copy">
              <SectionMarker number="01" label="Home" />
              <h1>Clarity in a Noisy World.</h1>
              <p className="lede">Important ideas deserve to be understood.</p>
              <div className="body">
                <p>
                  Moeden Media Consult helps organisations turn complicated, high-stakes ideas into
                  communication people understand, trust and act on.
                </p>
                <p>
                  We work with businesses, institutions, development organisations and public-sector
                  actors whose communication needs to do more than get noticed. It needs to build
                  understanding, earn credibility and move people to act.
                </p>
              </div>
              <div className="actions">
                <a href="#contact" className="btn btn-primary">Work With Us</a>
                <a href="#services" className="btn btn-secondary">Explore Our Services</a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-card hero-card--one">
                <span className="hero-card__label">What We Do</span>
                <span className="hero-card__value">PR, Marketing &amp; Development Comms</span>
              </div>
              <div className="hero-card hero-card--two">
                <span className="hero-card__label">Working With</span>
                <span className="hero-card__value">Public, Private &amp; Development Sectors</span>
              </div>
              <div className="hero-card hero-card--three">
                <span className="hero-card__label">Approach</span>
                <span className="hero-card__value">Understand → Measure</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Communication With Intent */}
        <section id="intent">
          <div className="container">
            <SectionMarker number="02" label="Approach" />
            <p className="pull-quote">Being heard isn't the same as being understood.</p>
            <div className="section-body">
              <p>
                Organisations are constantly communicating. The challenge is making sure the right
                people understand what is being said, and know why it matters.
              </p>
              <p>
                Moeden brings strategy, media, public engagement, marketing and development
                communications together to solve that challenge.
              </p>
              <p>
                Whether we're launching a brand, explaining a policy, shaping public perception or
                telling a development story, we start with why the communication needs to exist,
                not just what it should say.
              </p>
            </div>
            <div className="question-block">
              <p>What needs to be understood?</p>
              <p>Who needs to understand it?</p>
              <p>And what should happen next?</p>
            </div>
            <div className="section-body">
              <p>Those questions shape our work.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — What We Do */}
        <section id="services">
          <div className="container">
            <SectionMarker number="03" label="What We Do" />
            <h2 className="section-heading">
              Six ways we help organisations communicate with purpose.
            </h2>
            <div className="section-body">
              <p>Communication challenges don't all look the same.</p>
              <p>
                Sometimes it's positioning. Sometimes it's reputation. Other times, a policy or
                product is just too complex to explain clearly. Or the message is right but isn't
                reaching the people who need to hear it.
              </p>
              <p>Our six service pillars take those challenges from strategy through to execution.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const isOpen = openService === service.id;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className={`service-card${isOpen ? " is-open" : ""}`}
                    tabIndex={0}
                    onClick={() => setOpenService(isOpen ? "" : service.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenService(isOpen ? "" : service.id);
                      }
                    }}
                  >
                    <div className="service-card__number">{service.number}</div>
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__hook">{service.hook}</p>
                    <div className="service-card__detail">
                      <div className="service-card__detail-inner">
                        <p className="service-card__intro">{service.intro}</p>
                        <ul className="service-card__services">
                          {service.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <a
                          href="#contact"
                          className="service-card__explore"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {service.exploreLabel}
                        </a>
                      </div>
                    </div>
                    {!isOpen && <div className="service-card__toggle-hint">Click to explore</div>}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4 — Strategy Before Noise */}
        <section id="process">
          <div className="container">
            <SectionMarker number="04" label="Our Process" />
            <h2 className="section-heading">
              We don't start with the message. We start with the problem.
            </h2>
            <div className="section-body">
              <p>
                Before deciding what should be said, where it should appear or what it should look
                like, we ask what the communication needs to achieve.
              </p>
            </div>

            <div className="process-connector">
              {processSteps.map((step, i) => (
                <span key={step.step} style={{ display: "contents" }}>
                  <span
                    className={`step-label${activeStep === step.step ? " active" : ""}`}
                    onClick={() => setActiveStep(step.step)}
                  >
                    {step.label}
                  </span>
                  {i < processSteps.length - 1 && <span className="arrow">→</span>}
                </span>
              ))}
            </div>

            <div className="process-steps">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className={`process-step${activeStep === step.step ? " active" : ""}`}
                  onClick={() => setActiveStep(step.step)}
                  onMouseEnter={() => setActiveStep(step.step)}
                >
                  <div className="process-step__num">0{step.step}</div>
                  <div className="process-step__title">{step.title}</div>
                  <p className="process-step__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Why Moeden? */}
        <section id="why">
          <div className="container">
            <SectionMarker number="05" label="Why Moeden" />
            <h2 className="section-heading">We look beyond what you want to say.</h2>
            <div className="section-body">
              <p>A communications brief can begin with a simple question: "What should we say?"</p>
              <p>We ask a few more.</p>
            </div>
            <div className="question-block">
              <p>Why does it matter?</p>
              <p>Who needs to hear it?</p>
              <p>What do they already think?</p>
              <p>What do they need to understand?</p>
              <p>And what should change after they hear it?</p>
            </div>
            <div className="section-body">
              <p>That way of thinking shapes every assignment we take on.</p>
            </div>

            <div className="value-row">
              {values.map((v, i) => (
                <div className={`value-card${i === 2 ? " value-card--dark" : ""}`} key={v.title}>
                  <div className="value-card__title">{v.title}</div>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — Built For Organisations Doing Work That Matters */}
        <section id="sectors">
          <div className="container">
            <SectionMarker number="06" label="Who We Work With" />
            <h2 className="section-heading">Built for organisations doing serious, high-stakes work.</h2>
            <div className="section-body">
              <p>
                Moeden works across the public, private and development sectors, wherever ideas or
                initiatives need to reach real people and actually land.
              </p>
            </div>

            <div className="sector-grid">
              {sectors.map((sector) => (
                <div className="sector-card" key={sector.title}>
                  <div className="sector-card__title">{sector.title}</div>
                  <ul>
                    {sector.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="tag-row">
              {tags.map((tag) => (
                <span className="tag-pill" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — From Complex Ideas To Clear Communication */}
        <section className="closing">
          <div className="container">
            <SectionMarker number="07" label="The Gap We Close" />
            <h2 className="section-heading">From complex ideas to clear communication.</h2>

            <div className="closing-lines">
              <p>A policy can be difficult to understand.</p>
              <p>A technical product can be difficult to explain.</p>
              <p>A development programme can be difficult to communicate.</p>
              <p>A brand can struggle to articulate its value.</p>
            </div>

            <div className="closing-peak">
              <p>And sometimes, a good idea doesn't fail because it isn't valuable.</p>
              <p>It fails because people don't understand it.</p>
            </div>

            <p className="closing-gap">
              That's the gap Moeden exists to close.
              <br />
              We help organisations make important ideas clearer, more credible and easier for the
              right people to engage with.
            </p>

            <div className="closing-cta-block" id="contact">
              <h3>Let's make your next idea impossible to misunderstand.</h3>
              <p className="prompt">Have a communication challenge?</p>
              <p className="desc">
                Whether it's strategic counsel, PR and media relations, brand or development
                communication, event communications, or getting an idea from strategy to
                execution, let's start with the challenge, not the service.
              </p>

              <div className="contact-grid">
                <form
                  className="contact-form"
                  action="mailto:insert-email@moedenmedia.com"
                  method="post"
                  encType="text/plain"
                >
                  <div className="field">
                    <label htmlFor="cf-name">Name</label>
                    <input type="text" id="cf-name" name="Name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-org">Organisation</label>
                    <input type="text" id="cf-org" name="Organisation" />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-email">Email</label>
                    <input type="email" id="cf-email" name="Email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-message">Tell us about the challenge</label>
                    <textarea id="cf-message" name="Message" required />
                  </div>
                  <button type="submit" className="btn btn-primary">Start a Conversation</button>
                  <p className="contact-note">
                    This form currently sends via your email client. Replace with a live form
                    endpoint before go-live.
                  </p>
                </form>

                <div className="contact-side">
                  <div className="row"><div><strong>Email</strong>[insert email]</div></div>
                  <div className="row"><div><strong>Phone</strong>0803 517 9750</div></div>
                  <div className="row"><div><strong>Location</strong>Abuja, Nigeria</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 8 — Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <LogoBadge />
              <p className="footer-tagline">
                Strategic PR, Marketing &amp; Development Communications
                <span className="accent">Clarity in a Noisy World.</span>
              </p>
            </div>

            <div className="footer-social">
              <a href="#" aria-label="LinkedIn" title="LinkedIn (placeholder, add real URL)">in</a>
              <a href="#" aria-label="X" title="X (placeholder, add real URL)">X</a>
              <a href="#" aria-label="Instagram" title="Instagram (placeholder, add real URL)">IG</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Moeden Media Consult. All rights reserved.</span>
            <span>Abuja, Nigeria · 0803 517 9750</span>
          </div>
        </div>
      </footer>
    </>
  );
}
