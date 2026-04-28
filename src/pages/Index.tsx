import { useEffect } from "react";

const PHONE = "919730799621";
const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

const Index = () => {
  useEffect(() => {
    document.title = "Lotus English Academy — Spoken English, Soft Skills & Interview Training in Pune";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Learn Spoken English, Soft Skills and Interview Skills at Lotus English Academy, Akurdi Pune. Online & offline batches. Book a free demo on WhatsApp.");

    // Language toggle
    const applyLang = (lang: "en" | "mr") => {
      document.documentElement.lang = lang;
      document.querySelectorAll<HTMLElement>("[data-en]").forEach((el) => {
        const txt = el.getAttribute(lang === "mr" ? "data-mr" : "data-en");
        if (txt !== null) el.textContent = txt;
      });
      document.querySelectorAll<HTMLButtonElement>(".lang-toggle button, .lang-toggle-mobile button").forEach((b) => {
        b.classList.toggle("active", b.dataset.lang === lang);
      });
      try { localStorage.setItem("lea-lang", lang); } catch { }
    };
    const saved = (typeof localStorage !== "undefined" && (localStorage.getItem("lea-lang") as "en" | "mr")) || "en";
    applyLang(saved);
    document.querySelectorAll<HTMLButtonElement>(".lang-toggle button, .lang-toggle-mobile button").forEach((b) => {
      b.onclick = () => applyLang((b.dataset.lang as "en" | "mr") || "en");
    });

    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("mainNav");
    if (menuBtn && nav) {
      menuBtn.onclick = () => nav.classList.toggle("open");
      nav.querySelectorAll("a").forEach((a) => (a.onclick = () => nav.classList.remove("open")));
    }

    // Gallery tabs
    document.querySelectorAll<HTMLButtonElement>(".tab").forEach((tab) => {
      tab.onclick = () => {
        document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
        document.querySelectorAll(".gallery-pane").forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        const pane = document.getElementById("pane-" + tab.dataset.tab);
        if (pane) pane.classList.add("active");
      };
    });

    // Lightbox
    const lb = document.getElementById("lightbox") as HTMLElement | null;
    const lbImg = document.getElementById("lightboxImg") as HTMLImageElement | null;
    document.querySelectorAll<HTMLImageElement>(".gallery-item img").forEach((img) => {
      img.onclick = () => {
        if (lb && lbImg) { lbImg.src = img.src; lb.classList.add("open"); }
      };
    });
    if (lb) lb.onclick = () => lb.classList.remove("open");

    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            <img src="/assets/logo.jpg" alt="Lotus English Academy logo" />
            <div className="logo-text">
              <span className="logo-name">Lotus English Academy</span>
              <span className="logo-tag" data-en="Get ready for the world" data-mr="जगासाठी सज्ज व्हा">Get ready for the world</span>
            </div>
          </a>

          <nav id="mainNav" className="nav">
            <div className="lang-toggle-mobile" role="tablist" aria-label="Language">
              <button data-lang="en">EN</button>
              <button data-lang="mr">मराठी</button>
            </div>
            <a href="#courses" data-en="Courses" data-mr="कोर्सेस">Courses</a>
            <a href="#features" data-en="Features" data-mr="वैशिष्ट्ये">Features</a>
            <a href="#gallery" data-en="Gallery" data-mr="गॅलरी">Gallery</a>
            <a href="#testimonials" data-en="Testimonials" data-mr="प्रशंसा">Testimonials</a>
            <a href="#contact" data-en="Contact" data-mr="संपर्क">Contact</a>
          </nav>

          <div className="header-actions">
            <div className="lang-toggle" role="tablist" aria-label="Language">
              <button data-lang="en">EN</button>
              <button data-lang="mr">मराठी</button>
            </div>
            <a className="btn btn-wa btn-sm" href={wa("Hi Lotus English Academy, I want to know more about your courses.")}
              target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: "0px" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="btn-text" data-en="WhatsApp Us" data-mr="व्हॉट्सॲप करा">WhatsApp Us</span>
            </a>
            <button id="menuBtn" className="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow" data-en=" Free Demo Class Available" data-mr=" मोफत डेमो क्लास उपलब्ध"> Free Demo Class Available</span>
              <h1>
                <span data-en="Speak English with " data-mr="आत्मविश्वासाने इंग्रजी ">Speak English with </span>
                <span className="accent" data-en="Confidence" data-mr="बोला">Confidence</span>
              </h1>
              <p className="lead" data-en="Join Pune's friendly English academy for Spoken English, Soft Skills and Interview Training. Online & offline batches with expert trainers." data-mr="पुण्यातील आघाडीच्या इंग्रजी अकॅडमीमध्ये सहभागी व्हा — स्पोकन इंग्लिश, सॉफ्ट स्किल्स आणि इंटरव्ह्यू ट्रेनिंग. ऑनलाइन व ऑफलाइन बॅच, अनुभवी शिक्षक.">
                Join Pune's friendly English academy for Spoken English, Soft Skills and Interview Training. Online & offline batches with expert trainers.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-wa" href={wa("Hi! I'd like to book a FREE DEMO class at Lotus English Academy.")} target="_blank" rel="noopener"
                  data-en=" Book Free Demo on WhatsApp" data-mr=" व्हॉट्सॲपवर मोफत डेमो बुक करा"> Book Free Demo on WhatsApp</a>
                <a className="btn btn-outline" href="tel:+919730799621" data-en="📞 Call 9730799621" data-mr="📞 कॉल 9730799621">📞 Call 9730799621</a>
              </div>
              <div className="trust-chips">
                <span className="chip" data-en="Online & Offline" data-mr="ऑनलाइन व ऑफलाइन">Online & Offline</span>
                <span className="chip" data-en="Flexible Timings" data-mr="लवचिक वेळा">Flexible Timings</span>
                <span className="chip" data-en="Certifications" data-mr="प्रमाणपत्र">Certifications</span>
                <span className="chip" data-en="Expert Trainers" data-mr="अनुभवी शिक्षक">Expert Trainers</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="blob"></div>
              <img src="/assets/hero.jpg" alt="Students learning English at Lotus Academy" />
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section className="offer" style={{ padding: "36px 0" }}>
          <div className="container offer-inner">
            <div className="offer-text">
              <span className="offer-badge" data-en="🔥 Limited Seats" data-mr="🔥 मर्यादित जागा">🔥 Limited Seats</span>
              <h3>
                <span data-en="Join 3 Courses in just " data-mr="3 कोर्सेस फक्त ">Join 3 Courses in just </span>
                <span className="price">₹6000/-</span>
              </h3>
              <p data-en="Spoken English + Soft Skills + Interview Skills — special combo discount." data-mr="स्पोकन इंग्लिश + सॉफ्ट स्किल्स + इंटरव्ह्यू स्किल्स — खास कॉम्बो ऑफर.">
                Spoken English + Soft Skills + Interview Skills — special combo discount.
              </p>
            </div>
            <a className="btn btn-wa" href={wa("Hi! I'm interested in the ₹6000 combo offer (Spoken English + Soft Skills + Interview Skills).")} target="_blank" rel="noopener"
              data-en="Claim Offer on WhatsApp →" data-mr="व्हॉट्सॲपवर ऑफर मिळवा →">Claim Offer on WhatsApp →</a>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow" data-en="Our Courses" data-mr="आमचे कोर्सेस">Our Courses</span>
              <h2 data-en="Programs designed to get you job-ready" data-mr="करिअरसाठी सज्ज होण्याचे प्रोग्राम्स">Programs designed to get you job-ready</h2>
              <p data-en="Three specialised tracks — pick one or take the combo offer." data-mr="तीन खास ट्रॅक्स — एक निवडा किंवा कॉम्बो ऑफर घ्या.">Three specialised tracks — pick one or take the combo offer.</p>
            </div>
            <div className="courses-grid">
              {[
                {
                  icon: "🗣️",
                  title_en: "Spoken English", title_mr: "स्पोकन इंग्लिश",
                  desc_en: "Speak naturally and confidently with daily practice and personal feedback.",
                  desc_mr: "रोजच्या सरावाने व वैयक्तिक मार्गदर्शनाने सहज व आत्मविश्वासाने बोला.",
                  items_en: ["Basic to Advanced Grammar", "Vocabulary Building", "Pronunciation", "Business Communication"],
                  items_mr: ["बेसिक ते ॲडव्हान्स्ड ग्रामर", "शब्दसंग्रह वाढवा", "उच्चार सुधारणा", "बिझनेस कम्युनिकेशन"],
                  msg: "Hi! I want to enquire about the Spoken English course."
                },
                {
                  icon: "🤝",
                  title_en: "Soft Skills", title_mr: "सॉफ्ट स्किल्स",
                  desc_en: "Communication, teamwork and leadership skills that employers truly value.",
                  desc_mr: "कम्युनिकेशन, टीमवर्क आणि लीडरशिप — नोकरीसाठी आवश्यक स्किल्स.",
                  items_en: ["Presentation Skills", "Group Discussion", "Public Speaking", "Email Writing"],
                  items_mr: ["प्रेझेंटेशन स्किल्स", "ग्रुप डिस्कशन", "पब्लिक स्पीकिंग", "ईमेल रायटिंग"],
                  msg: "Hi! I want to enquire about the Soft Skills course."
                },
                {
                  icon: "💼",
                  title_en: "Interview Skills", title_mr: "इंटरव्ह्यू स्किल्स",
                  desc_en: "Crack interviews with confidence — resume to offer letter, fully prepared.",
                  desc_mr: "आत्मविश्वासाने इंटरव्ह्यू द्या — रेझ्युमे ते ऑफर लेटर पर्यंतची पूर्ण तयारी.",
                  items_en: ["Resume Writing", "Mock Interviews with Experts", "Confidence Building", "Salary Negotiation"],
                  items_mr: ["रेझ्युमे रायटिंग", "तज्ज्ञांसोबत मॉक इंटरव्ह्यू", "आत्मविश्वास वाढवा", "पगार चर्चा"],
                  msg: "Hi! I want to enquire about the Interview Skills course."
                }
              ].map((c, i) => (
                <article className="course-card reveal" key={i}>
                  <div className="course-icon" aria-hidden>{c.icon}</div>
                  <h3 data-en={c.title_en} data-mr={c.title_mr}>{c.title_en}</h3>
                  <p className="desc" data-en={c.desc_en} data-mr={c.desc_mr}>{c.desc_en}</p>
                  <ul>
                    {c.items_en.map((it, j) => (
                      <li key={j} data-en={it} data-mr={c.items_mr[j]}>{it}</li>
                    ))}
                  </ul>
                  <a className="btn btn-wa btn-sm" href={wa(c.msg)} target="_blank" rel="noopener"
                    data-en="Enquire on WhatsApp" data-mr="व्हॉट्सॲपवर चौकशी करा">Enquire on WhatsApp</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow" data-en="Why Lotus" data-mr="का लोटस?">Why Lotus</span>
              <h2 data-en="Everything you need to succeed" data-mr="यशासाठी आवश्यक सर्व काही">Everything you need to succeed</h2>
            </div>
            <div className="features-grid">
              {[
                ["📚", "Learn from Basics", "मूळापासून शिका", "Step-by-step learning for every level.", "प्रत्येक स्तरासाठी टप्प्याटप्प्याने शिक्षण."],
                ["👤", "Individual Attention", "वैयक्तिक लक्ष", "Small batches, personal mentoring.", "छोट्या बॅचेस, वैयक्तिक मार्गदर्शन."],
                ["🎯", "Activity-Based", "ॲक्टिव्हिटी-आधारित", "Drama, role-play and live practice.", "ड्रामा, रोल-प्ले आणि लाइव्ह सराव."],
                ["🧑‍🏫", "Expert Trainers", "अनुभवी शिक्षक", "Learn from IT industry experts.", "IT क्षेत्रातील तज्ज्ञांकडून शिका."],
                ["⏰", "Flexible Timings", "लवचिक वेळा", "Weekend & weekday batches available.", "वीकेंड व वीकडे बॅचेस उपलब्ध."],
                ["📈", "Progress Reports", "प्रगती अहवाल", "Track your improvement every week.", "दर आठवड्याला तुमची प्रगती पहा."],
                ["🏆", "Certifications", "प्रमाणपत्र", "Industry-recognised certificates.", "मान्यताप्राप्त प्रमाणपत्र."],
                ["🎉", "Events & Contests", "कार्यक्रम व स्पर्धा", "Build confidence on real stages.", "खऱ्या व्यासपीठावर आत्मविश्वास वाढवा."]
              ].map(([icon, t_en, t_mr, d_en, d_mr], i) => (
                <div className="feature reveal" key={i}>
                  <div className="feature-icon">{icon}</div>
                  <h4 data-en={t_en} data-mr={t_mr}>{t_en}</h4>
                  <p data-en={d_en} data-mr={d_mr}>{d_en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow" data-en="Gallery" data-mr="गॅलरी">Gallery</span>
              <h2 data-en="A peek inside our academy" data-mr="आमच्या अकॅडमीची एक झलक">A peek inside our academy</h2>
              <p data-en="Real classrooms, real events, real students." data-mr="खरे क्लासरूम, खरे कार्यक्रम, खरे विद्यार्थी.">Real classrooms, real events, real students.</p>
            </div>

            <div className="tabs reveal">
              <button className="tab active" data-tab="classrooms" data-en="Classrooms" data-mr="क्लासरूम">Classrooms</button>
              <button className="tab" data-tab="events" data-en="Events" data-mr="कार्यक्रम">Events</button>
              <button className="tab" data-tab="contests" data-en="Contests" data-mr="स्पर्धा">Contests</button>
              <button className="tab" data-tab="certs" data-en="Certificates" data-mr="प्रमाणपत्र">Certificates</button>
            </div>

            {[
              { id: "classrooms", imgs: ["classroom-1.jpg", "classroom-2.jpg", "classroom-3.jpg"], active: true },
              { id: "events", imgs: ["event-1.jpg", "event-2.jpg", "event-3.jpg"] },
              { id: "contests", imgs: ["contest-1.jpg", "contest-2.jpg", "contest-3.jpg"] },
              { id: "certs", imgs: ["cert-1.jpg", "cert-2.jpg"] }
            ].map((p) => (
              <div key={p.id} id={`pane-${p.id}`} className={`gallery-grid gallery-pane ${p.active ? "active" : ""}`}>
                {p.imgs.map((src) => (
                  <div className="gallery-item" key={src}>
                    <img src={`/assets/gallery/${src}`} alt="Lotus English Academy" loading="lazy" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow" data-en="Testimonials" data-mr="प्रशंसा">Testimonials</span>
              <h2 data-en="What our students say" data-mr="आमचे विद्यार्थी काय म्हणतात">What our students say</h2>
            </div>
            <div className="t-grid">
              {[
                {
                  img: "sonu.jpg", name: "Sonu Kumawat",
                  q_en: "No matter what level you are at, Lotus English Academy will work with you to improve your English communication and personality. No one gets left behind. Highly recommend!",
                  q_mr: "तुमचा स्तर कोणताही असो, लोटस इंग्लिश अकॅडमी तुमच्यासोबत मेहनत घेते. कोणीही मागे राहत नाही. नक्की शिफारस करतो!"
                },
                {
                  img: "swapnil.jpg", name: "Swapnil",
                  q_en: "I was having trouble with my English communication and Lotus made me fluent and confident. They were flexible and worked with my schedule.",
                  q_mr: "इंग्रजी बोलण्यात अडचण होती, पण लोटसमुळे मी आत्मविश्वासाने व सहज बोलू लागलो. त्यांनी माझ्या वेळेनुसार सहकार्य केले."
                },
                {
                  img: "pragati.jpg", name: "Pragati Bhondave",
                  q_en: "The teaching at Lotus is wonderful and refreshing! Patient, supportive teachers who keep lessons fun and engaging through activities.",
                  q_mr: "लोटसचे शिक्षण खूपच छान! संयमी व सहकार्यशील शिक्षक, ॲक्टिव्हिटीजमुळे शिकणे मजेशीर बनते."
                },
                {
                  img: "pratik.jpg", name: "Pratik Shinde",
                  q_en: "It's a pleasure to learn English so fast with the warm, personal and caring teachers at Lotus English Academy.",
                  q_mr: "लोटसच्या प्रेमळ व आपुलकीच्या शिक्षकांसोबत इतक्या वेगाने इंग्रजी शिकणे म्हणजे खरंच आनंद आहे."
                }
              ].map((t, i) => (
                <div className="t-card reveal" key={i}>
                  <p data-en={t.q_en} data-mr={t.q_mr}>“{t.q_en}”</p>
                  <div className="t-author">
                    <img src={`/assets/testimonials/${t.img}`} alt={t.name} />
                    <div>
                      <strong>{t.name}</strong>
                      <span data-en="Student" data-mr="विद्यार्थी">Student</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow" data-en="Contact Us" data-mr="संपर्क साधा">Contact Us</span>
              <h2 data-en="Visit our Academy" data-mr="आमच्या अकादमीला भेट द्या">Visit our Academy</h2>
              <p data-en="Have questions? Reach out to us via WhatsApp, call, or visit our office." data-mr="काही शंका आहेत? आम्हाला व्हॉट्सॲप करा, कॉल करा किंवा आमच्या कार्यालयाला भेट द्या.">Have questions? Reach out to us via WhatsApp, call, or visit our office.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-info reveal">
                <div className="contact-row">
                  <div className="ico">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="label" data-en="Our Address" data-mr="आमचा पत्ता">Our Address</div>
                    <div className="val">Office No 30A, 1st Floor, Royale Shell,<br />Near DY Patil Engineering College, Akurdi, Pune-411044</div>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="ico">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="label" data-en="Phone Support" data-mr="फोन सपोर्ट">Phone Support</div>
                    <div className="val">
                      <a href="tel:+919730799621">9730799621</a> / <a href="tel:+919373039514">9373039514</a>
                    </div>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="ico">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="label">Email Address</div>
                    <div className="val"><a href="mailto:Lotusenglishacademy37@gmail.com">Lotusenglishacademy37@gmail.com</a></div>
                  </div>
                </div>

                <div className="contact-actions">
                  <a className="btn btn-wa" href={wa("Hi Lotus English Academy! I'd like to enquire about your courses.")} target="_blank" rel="noopener" data-en="WhatsApp Us" data-mr="व्हॉट्सॲप करा">WhatsApp Us</a>
                  <a className="btn btn-primary" href="tel:+919730799621" data-en="Call Now" data-mr="कॉल करा">Call Now</a>
                </div>
              </div>

              <div className="contact-map reveal">
                <iframe
                  title="Lotus English Academy location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4287538554104!2d73.75497877519467!3d18.644746482473092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b917e1c7d317%3A0x325bc8ae57757612!2sLotus%20Academy!5e0!3m2!1sen!2sin!4v1777378801616!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img src="/assets/logo.jpg" alt="Lotus logo" />
                <span>Lotus English Academy</span>
              </div>
              <p data-en="Pune's friendly academy for Spoken English, Soft Skills and Interview training. Learn from experts, online or offline." data-mr="पुण्यातील प्रिय इंग्रजी अकॅडमी — स्पोकन इंग्लिश, सॉफ्ट स्किल्स, इंटरव्ह्यू ट्रेनिंग. ऑनलाइन व ऑफलाइन.">
                Pune's friendly academy for Spoken English, Soft Skills and Interview training.
              </p>
            </div>
            <div>
              <h5 data-en="Quick Links" data-mr="क्विक लिंक्स">Quick Links</h5>
              <ul>
                <li><a href="#courses" data-en="Courses" data-mr="कोर्सेस">Courses</a></li>
                <li><a href="#features" data-en="Features" data-mr="वैशिष्ट्ये">Features</a></li>
                <li><a href="#gallery" data-en="Gallery" data-mr="गॅलरी">Gallery</a></li>
                <li><a href="#testimonials" data-en="Testimonials" data-mr="प्रशंसा">Testimonials</a></li>
                <li><a href="#contact" data-en="Contact" data-mr="संपर्क">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 data-en="Get in Touch" data-mr="संपर्क साधा">Get in Touch</h5>
              <p>📞 9730799621</p>
              <p>📞 9373039514</p>
              <p>✉️ Lotusenglishacademy37@gmail.com</p>
              <p>📍 Akurdi, Pune-411044</p>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Lotus English Academy. All rights reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING */}
      <div className="floating">
        <a className="fab fab-wa" href={wa("Hi! I'd like to book a free demo class.")} target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a className="fab fab-call" href="tel:+919730799621" aria-label="Call">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>

      {/* LIGHTBOX */}
      <div id="lightbox" className="lightbox">
        <span className="lightbox-close">×</span>
        <img id="lightboxImg" src="" alt="" />
      </div>
    </>
  );
};

export default Index;
