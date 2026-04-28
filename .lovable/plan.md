# Lotus English Academy — Landing Page Plan (HTML/CSS/JS)

A clean, lead-focused landing page built with **plain HTML, CSS, and vanilla JavaScript** — no React, no frameworks. Every call-to-action funnels visitors straight to **WhatsApp** so the academy gets messages directly on their phone.

## Goals
- Drive **WhatsApp messages** for free demo bookings as the only conversion goal.
- One-tap call and WhatsApp from any device.
- Build trust with real photos, certificates, and student testimonials from the booklet.

## Tech approach
- A single `index.html` file at the project root, plus `styles.css` and `script.js`.
- Vanilla JS only — used for the mobile menu, language toggle, gallery tabs, and testimonial slider.
- No build step needed; opens directly in any browser.
- Existing React files in `src/` will be left aside; the new static site will be served as the landing page.

## Page sections (top to bottom)

1. **Sticky header**
   - Logo + "Lotus English Academy" / tagline "Get ready for the world"
   - Nav links: Courses, Features, Gallery, Testimonials, Contact
   - Language toggle: **EN / मराठी**
   - Green "WhatsApp Us" button + phone icon (click-to-call)
   - Hamburger menu on mobile

2. **Hero**
   - Headline: "Speak English with Confidence"
   - Subhead: spoken English, soft skills & interview prep, online & offline batches
   - Trust chips: Online & Offline · Flexible Timings · Certifications
   - **Primary CTA: "Book Free Demo on WhatsApp"** → opens `wa.me/919730799621` with a prefilled message like *"Hi, I'd like to book a free demo class."*
   - Secondary CTA: "Call 9730799621"

3. **Special Discount banner**
   - "Join 3 courses in just ₹6000" (Spoken English + Soft Skills + Interview Skills)
   - "Limited Seats" badge
   - CTA → WhatsApp with prefilled message *"Hi, I'm interested in the ₹6000 combo offer."*

4. **Our Courses** — 3 cards
   - Spoken English, Soft Skills, Interview Skills — icon, short description, bullet list of topics from the booklet
   - Each card has a "Enquire on WhatsApp" button with course name prefilled

5. **Why Choose Lotus** — features grid
   - Learn from basics · Individual attention · Activity-based learning · Expert trainers · Flexible/weekend batches · Progress reports · Certifications

6. **Gallery** — tabbed
   - Tabs: Classrooms · Events & Celebrations · Contests & Rewards · Certificates
   - Real photos from the booklet, click to enlarge (lightbox)

7. **Testimonials**
   - 4 student quotes from the booklet (Sonu, Swapnil, Pragati, Pratik) with their photos, in a simple slider

8. **Contact**
   - Address: Office No 30A, 1st Floor, Royale Shell, Near DY Patil Engineering College, Akurdi, Pune-411044
   - Phones: 9730799621 / 9373039514
   - Email: Lotusenglishacademy37@gmail.com
   - Big buttons: WhatsApp · Call · Email
   - Embedded Google Map of the address

9. **Footer**
   - Logo, quick links, contact info, copyright

10. **Floating WhatsApp + Call buttons** — always visible on mobile

## Design
- Palette from the logo: deep blue `#1E50A2`, sky blue `#4FB3E8`, white background, soft blue tints for sections; WhatsApp green for action buttons.
- Fonts via Google Fonts CDN: **Poppins** for English, **Noto Sans Devanagari** for Marathi.
- Rounded cards, soft shadows, generous whitespace, gentle fade-in animations on scroll.
- Fully responsive, mobile-first.

## Bilingual toggle (EN / मराठी)
- All visible text uses `data-en="..."` and `data-mr="..."` attributes.
- A small JS function swaps content based on selected language.
- Choice saved in `localStorage` so it persists on return visits.
- `<html lang>` and font family update with the language.

## WhatsApp links
- Every CTA uses the format:
  `https://wa.me/919730799621?text=<URL-encoded message>`
- Different prefilled messages per CTA (free demo, combo offer, course-specific enquiry, general contact) so the academy knows where the lead came from.

## Assets
- Round logo → `assets/logo.png` (also used as favicon).
- 8–12 best photos from the booklet copied to `assets/gallery/` (classrooms, events, contests, certificates, group photo).
- Four testimonial portraits to `assets/testimonials/`.

## Files to be created
```
index.html
styles.css
script.js
assets/logo.png
assets/gallery/*.jpg
assets/testimonials/*.jpg
```

After your approval I'll switch to build mode and implement it.