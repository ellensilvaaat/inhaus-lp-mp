import React from "react";
import "./AdvantagesSection.css";

const advantages = [
  {
    id: 1,
    icon: "https://img.icons8.com/3d-fluency/94/color-palette.png",
    title: "Experienced designers",
    text: "Guidance from experts who understand your renovation needs."
  },
  {
    id: 2,
    icon: "https://img.icons8.com/3d-fluency/94/process.png",
    title: "Trusted process",
    text: "Clear steps designed to make every decision simple and confident."
  },
  {
    id: 3,
    icon: "https://img.icons8.com/3d-fluency/94/contract.png",
    title: "Quality assurance",
    text: "Reliable, durable and carefully curated products for your project."
  },
  {
    id: 4,
    icon: "https://img.icons8.com/3d-fluency/94/timeline.png",
    title: "Save time",
    text: "Everything you need in one place, so your renovation moves faster."
  },
];

export default function AdvantagesSection() {
  return (
    <section className="advantages-section">
      <h2 className="advantages-title">
        Why homeowners choose Us
        <span className="advantages-underline"></span>
      </h2>
      <h3 className="advantages-subtitle"> Trusted by homeowners across Sydney and Canberra, Inhaus Living is known for thoughtful design, immersive showrooms and a considered approach to renovation.</h3>
      <div className="advantages-grid">
        {advantages.map((item) => (
          <div className="adv-card" key={item.id}>
            <img src={item.icon} alt={item.title} className="adv-icon" />

            <h3 className="adv-title">{item.title}</h3>

            <p className="adv-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
