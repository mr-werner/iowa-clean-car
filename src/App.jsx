import React, { useEffect, useState } from "react";
import {
  ArrowRight, BadgePercent, Briefcase, Car, Check, CreditCard, Droplets, Mail, MapPin, Menu, Navigation, Phone, Send, Sparkles, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/brelsford-logo.png";
import waukeeImg from "./assets/waukee.jpg";
import grimesImg from "./assets/grimes.jpg";
import adelImg from "./assets/adel.jpg";
import img156 from "./assets/156th.jpg";
import grimesBays from "./assets/grimes-bays.jpg";

// ------------------------------------------------------------ Content (all from iowacleancar.com)
const COMPANY = "Iowa Clean Car";
const OPERATOR = "Brelsford Properties";
const ABBR = "icc";
const END_DATE = "2026-11-30T23:59:59-06:00";
const ORIGINAL = "http://www.iowacleancar.com";
const PHONE = "515-490-2163";
const PHONE_TEL = "+15154902163";
const EMAIL = "comments@iowacleancar.com";
const ACCOUNT_EMAIL = "colby@iowacleancar.com";
const MAILING = ["P.O. Box 912", "Waukee, IA 50263"];
const GOOGLE_REVIEWS = "https://www.google.com/search?q=Iowa+Clean+Car+Waukee+Grimes+Adel+Urbandale";

const LOCATIONS = [
  {
    id: "waukee", name: "Waukee Auto Wash", town: "Waukee", street: "440 Hickman Ave", city: "Waukee, IA 50263",
    img: waukeeImg, automatic: 2, selfServe: 6, note: "Self-serve bays take credit cards",
  },
  {
    id: "grimes", name: "Grimes Laser Wash", town: "Grimes", street: "1420 S 3rd St", city: "Grimes, IA 50111",
    img: grimesImg, automatic: 3, selfServe: 3, note: "Self-serve bays take credit cards",
  },
  {
    id: "adel", name: "Clean Works Adel", town: "Adel", street: "707 Greene St", city: "Adel, IA 50003",
    img: adelImg, automatic: 2, selfServe: 0, note: "Touch-free automatics",
  },
  {
    id: "156th", name: "Clean Works on 156th", town: "Urbandale", street: "4575 156th St", city: "Urbandale, IA 50322",
    img: img156, automatic: 4, selfServe: 0, note: "Touch-free automatics",
  },
];

// VIP Wash Card packages, exactly as listed on the current site and its pricing table.
const PACKAGES = [
  { value: 25, pay: 23, discount: 8 },
  { value: 50, pay: 46, discount: 8 },
  { value: 100, pay: 90, discount: 10 },
  { value: 150, pay: 135, discount: 10 },
  { value: 200, pay: 170, discount: 15 },
  { value: 250, pay: 212.5, discount: 15 },
  { value: 300, pay: 246, discount: 18 },
  { value: 350, pay: 287, discount: 18 },
];

const money = (n) => `$${n.toFixed(2)}`;
const mapsUrl = (l) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${l.name}, ${l.street}, ${l.city}`)}`;

const NAV = [["#locations", "Locations"], ["#vip", "VIP Wash Card"], ["#business", "Fleet accounts"], ["#contact", "Contact"]];

// ------------------------------------------------------------ Pieces
function Bubbles({ count = 14, className = "" }) {
  const dots = Array.from({ length: count }, (_, i) => {
    const size = 10 + ((i * 37) % 54);
    return <span key={i} style={{ width: size, height: size, left: `${(i * 53) % 100}%`, top: `${(i * 29) % 100}%`, animationDelay: `${(i % 7) * 0.9}s` }} />;
  });
  return <div className={`bubbles ${className}`} aria-hidden="true">{dots}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}>
          <img src={logo} alt="Brelsford Properties" />
          <span className="brand-sub">Iowa Clean Car</span>
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-call" href={`tel:${PHONE_TEL}`}><Phone size={16} /> {PHONE}</a>
        </nav>
        <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const totalAuto = LOCATIONS.reduce((s, l) => s + l.automatic, 0);
  const totalSelf = LOCATIONS.reduce((s, l) => s + l.selfServe, 0);
  return (
    <section className="hero" id="top">
      <Bubbles count={18} />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow light"><Droplets size={15} /> Waukee · Grimes · Adel · Urbandale</span>
          <h1>Four touch-free car washes, <em>one VIP card.</em></h1>
          <p className="lede">{OPERATOR} owns and operates four car washes west of Des Moines. Pull into a touch-free automatic or grab a self-serve bay, and pay with the VIP Wash Card to save up to 18% on every wash.</p>
          <div className="hero-actions">
            <a className="btn btn-white" href="#locations"><MapPin size={18} /> Find the nearest wash</a>
            <a className="btn btn-outline" href="#vip"><CreditCard size={18} /> Get a VIP Wash Card</a>
          </div>
          <a className="hero-phone" href={`tel:${PHONE_TEL}`}><Phone size={16} /> Office {PHONE}</a>
        </div>
        <div className="hero-board" aria-label="Locations at a glance">
          <div className="board-photo">
            <img src={grimesBays} alt="The touch-free bays at Grimes Laser Wash" />
            <span className="board-tag">Grimes Laser Wash</span>
          </div>
          <div className="board-stats">
            <div><strong>4</strong><span>locations</span></div>
            <div><strong>{totalAuto}</strong><span>touch-free automatics</span></div>
            <div><strong>{totalSelf}</strong><span>self-serve bays</span></div>
          </div>
          <ul className="board-list">
            {LOCATIONS.map((l) => (
              <li key={l.id}>
                <a href={`#loc-${l.id}`}>
                  <span className="board-dot" aria-hidden="true" />
                  <span><strong>{l.name}</strong><small>{l.street}, {l.town}</small></span>
                  <ArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <svg className="suds-edge" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C 60 10, 120 70, 180 40 S 300 10, 360 40 S 480 70, 540 40 S 660 10, 720 40 S 840 70, 900 40 S 1020 10, 1080 40 S 1200 70, 1260 40 S 1380 10, 1440 40 V90 H0 Z" />
      </svg>
    </section>
  );
}

function BayIcons({ count, kind }) {
  return (
    <span className={`bay-icons ${kind}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => <i key={i} />)}
    </span>
  );
}

function Locations() {
  return (
    <section className="section locations" id="locations">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our locations</span>
          <h2>Pick the wash on your way.</h2>
          <p>Every location takes the VIP Wash Card in its automatic and self-serve bays.</p>
        </div>
        <div className="loc-grid">
          {LOCATIONS.map((l, i) => (
            <article className="loc-card" id={`loc-${l.id}`} key={l.id}>
              <div className="loc-photo">
                <img src={l.img} alt={`${l.name} in ${l.town}`} loading="lazy" />
                <span className="loc-num">0{i + 1}</span>
              </div>
              <div className="loc-body">
                <span className="loc-town">{l.town}</span>
                <h3>{l.name}</h3>
                <p className="loc-addr">{l.street}<br />{l.city}</p>
                <div className="loc-bays">
                  <div>
                    <BayIcons count={l.automatic} kind="auto" />
                    <span><strong>{l.automatic}</strong> touch-free automatic{l.automatic > 1 ? "s" : ""}</span>
                  </div>
                  {l.selfServe > 0 && (
                    <div>
                      <BayIcons count={l.selfServe} kind="self" />
                      <span><strong>{l.selfServe}</strong> self-serve bays</span>
                    </div>
                  )}
                </div>
                <p className="loc-note"><Check size={15} /> {l.note} · VIP card accepted</p>
                <a className="loc-dir" href={mapsUrl(l)} target="_blank" rel="noopener noreferrer"><Navigation size={16} /> Directions</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VipCard({ pkg }) {
  return (
    <div className="vip-card" aria-hidden="true">
      <div className="vip-card-top">
        <span className="vip-chip" />
        <span className="vip-label">VIP WASH CARD</span>
      </div>
      <div className="vip-card-value">
        <small>Card value</small>
        <strong>${pkg.value}</strong>
      </div>
      <div className="vip-card-foot">
        <span>Iowa Clean Car</span>
        <span>Waukee · Grimes · Adel · 156th</span>
      </div>
      <Bubbles count={7} className="card-bubbles" />
    </div>
  );
}

function Vip() {
  const [mode, setMode] = useState("new");
  const [idx, setIdx] = useState(2);
  const [site, setSite] = useState("");
  const [account, setAccount] = useState("");
  const [done, setDone] = useState(false);
  const pkg = PACKAGES[idx];

  function submit(e) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section className="section vip" id="vip">
      <Bubbles count={12} className="soft" />
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">VIP Wash Card program</span>
          <h2>Load the card once. <em>Save up to 18%</em> every wash.</h2>
          <p>Instead of paying full price every time, buy a wash card loaded with more than you pay for. It works like a debit card in the automatic and self-serve bays at all four locations.</p>
        </div>

        <div className="vip-grid">
          <div className="vip-left">
            <VipCard pkg={pkg} />
            <ul className="vip-perks">
              <li><Sparkles size={18} /> <span><strong>No more quarters.</strong> No hunting for crisp bills or the right change. Swipe it in the card reader like a debit card.</span></li>
              <li><Car size={18} /> <span><strong>Automatic and self-serve.</strong> Accepted in every bay at Waukee, Grimes, Adel and 156th.</span></li>
              <li><BadgePercent size={18} /> <span><strong>Free to use.</strong> Accounts are always active: no blackout times and no activation charges.</span></li>
            </ul>
          </div>

          <div className="vip-right">
            <div className="price-table" aria-label="VIP Wash Card packages">
              <div className="pt-row pt-head">
                <span>Card value</span>
                <span>You pay</span>
                <span>You save</span>
              </div>
              {PACKAGES.map((p, i) => (
                <button
                  type="button"
                  key={p.value}
                  className={`pt-row${i === idx ? " is-active" : ""}`}
                  onClick={() => { setIdx(i); setDone(false); }}
                  aria-pressed={i === idx}
                >
                  <span className="pt-value">${p.value}</span>
                  <span>{money(p.pay)}</span>
                  <span className="pt-save">
                    <b>{money(p.value - p.pay)}</b>
                    <i className="pt-bar" style={{ width: `${(p.discount / 18) * 100}%` }} />
                    <em>{p.discount}% off</em>
                  </span>
                </button>
              ))}
            </div>

            <form className="vip-form" onSubmit={submit}>
              <div className="vip-tabs" role="tablist" aria-label="Card order type">
                <button type="button" role="tab" aria-selected={mode === "new"} className={mode === "new" ? "is-active" : ""} onClick={() => { setMode("new"); setDone(false); }}>New card</button>
                <button type="button" role="tab" aria-selected={mode === "recharge"} className={mode === "recharge" ? "is-active" : ""} onClick={() => { setMode("recharge"); setDone(false); }}>Recharge my card</button>
              </div>
              <p className="vip-form-intro">
                {mode === "new"
                  ? "New customers: fund your account and we'll mail your VIP Wash Card."
                  : "Current customers: add funds to the card you already have."}
              </p>
              <div className="vip-fields">
                <label>Package
                  <select value={idx} onChange={(e) => { setIdx(Number(e.target.value)); setDone(false); }}>
                    {PACKAGES.map((p, i) => <option key={p.value} value={i}>VIP ${p.value} value / {money(p.pay)}</option>)}
                  </select>
                </label>
                <label>Home location
                  <select value={site} onChange={(e) => setSite(e.target.value)} required>
                    <option value="">Choose a wash...</option>
                    {LOCATIONS.map((l) => <option key={l.id} value={l.name}>{l.name}</option>)}
                  </select>
                </label>
                {mode === "recharge" && (
                  <label>Account #
                    <input value={account} onChange={(e) => setAccount(e.target.value.replace(/\D/g, "").slice(0, 8))} inputMode="numeric" placeholder="12345678" required />
                  </label>
                )}
              </div>
              <div className="vip-total">
                <span>You pay <strong>{money(pkg.pay)}</strong></span>
                <span>Card loads <strong>${pkg.value}</strong></span>
              </div>
              <button className="btn btn-red full" type="submit"><CreditCard size={18} /> {mode === "new" ? "Buy this card" : "Recharge my card"}</button>
              {done && (
                <p className="vip-demo" role="status">
                  This is a concept preview, so no payment was taken. To buy or recharge a card today, call the office at <a href={`tel:${PHONE_TEL}`}>{PHONE}</a> or email <a href={`mailto:${ACCOUNT_EMAIL}`}>{ACCOUNT_EMAIL}</a>.
                </p>
              )}
              <p className="vip-help">Questions about your account? <a href={`mailto:${ACCOUNT_EMAIL}`}>{ACCOUNT_EMAIL}</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Business() {
  return (
    <section className="section business" id="business">
      <div className="wrap business-grid">
        <div className="business-icon" aria-hidden="true"><Briefcase size={40} /></div>
        <div>
          <span className="eyebrow light">Business accounts</span>
          <h2>Keep the whole fleet clean, and keep track of it.</h2>
          <p>Own a business with vehicles that need to stay clean? VIP business accounts give you the accountability to monitor your fleet's wash activity, and save on your business expenses at the same time.</p>
        </div>
        <div className="business-cta">
          <a className="btn btn-white" href={`mailto:${ACCOUNT_EMAIL}?subject=VIP%20business%20account`}><Mail size={18} /> Ask about fleet accounts</a>
          <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", notes: "", website: "" });
  const [state, setState] = useState("idle");
  const [message, setMessage] = useState("");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Something went wrong.");
      setState("sent");
      setMessage(data.demo ? `Thanks! This is a concept preview, so nothing was sent. Please email ${EMAIL} or call ${PHONE}.` : "Thanks! Your comment is on its way to the Iowa Clean Car office.");
    } catch (err) {
      setState("error");
      setMessage(err.message || `Please call ${PHONE}.`);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Contact the office</span>
          <h2>Questions, comments or a card problem?</h2>
          <p>Reach Brelsford Properties directly. Tell us which wash you visited and we'll follow up.</p>
          <ul className="contact-list">
            <li><Phone size={20} /><div><small>Office</small><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></div></li>
            <li><Mail size={20} /><div><small>Comments</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
            <li><CreditCard size={20} /><div><small>VIP accounts</small><a href={`mailto:${ACCOUNT_EMAIL}`}>{ACCOUNT_EMAIL}</a></div></li>
            <li><MapPin size={20} /><div><small>Mailing address</small><span>{OPERATOR}<br />{MAILING[0]}<br />{MAILING[1]}</span></div></li>
          </ul>
          <a className="review-link" href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">See our reviews on Google <ArrowRight size={16} /></a>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <h3>Send a comment</h3>
          <label>Name<input value={form.name} onChange={(e) => update("name", e.target.value)} required autoComplete="name" /></label>
          <div className="two">
            <label>Phone<input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} required autoComplete="tel" /></label>
            <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
          </div>
          <label>Location
            <select value={form.location} onChange={(e) => update("location", e.target.value)}>
              <option value="">Any / not sure</option>
              {LOCATIONS.map((l) => <option key={l.id} value={l.name}>{l.name}</option>)}
            </select>
          </label>
          <label>Comment<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} /></label>
          <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label></div>
          <button className="btn btn-red full" type="submit" disabled={state === "sending"}><Send size={18} /> {state === "sending" ? "Sending..." : "Send to the office"}</button>
          {message && <p className={`form-msg ${state}`} role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-logo"><img src={logo} alt="Brelsford Properties" loading="lazy" /></div>
          <p>Iowa Clean Car: four touch-free car washes in Waukee, Grimes, Adel and Urbandale, owned and operated by {OPERATOR}.</p>
        </div>
        <div>
          <h4>Locations</h4>
          <ul>{LOCATIONS.map((l) => <li key={l.id}><a href={`#loc-${l.id}`}>{l.name}</a><small>{l.street}, {l.town}</small></li>)}</ul>
        </div>
        <div>
          <h4>Office</h4>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />{MAILING[0]}, {MAILING[1]}</p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {OPERATOR}. Concept redesign by Blueprint WebStudio · Independent concept, not for official use. Current site: <a href={ORIGINAL}>iowacleancar.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-row">
          <span><Droplets size={14} /> VIP Wash Card: save up to 18% at all four locations</span>
          <a href={`tel:${PHONE_TEL}`}><Phone size={14} /> {PHONE}</a>
        </div>
      </div>
      <Header />
      <main>
        <Hero />
        <Locations />
        <Vip />
        <Business />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
