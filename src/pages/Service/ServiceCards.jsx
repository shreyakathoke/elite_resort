import "../../styles/serviceCards.css";

const SERVICES = [
  {
    icon: "bi bi-house-door",
    title: "Houseboat Stays",
    desc: "Drift along the tranquil backwaters in a traditional Kettuvallam.",
  },
  {
    icon: "bi bi-cup-hot",
    title: "Tea Gardens",
    desc: "Walk through the lush green tea plantations of Munnar.",
  },
  {
    icon: "bi bi-heart-pulse",
    title: "Ayurveda Wellness",
    desc: "Rejuvenate your mind and body with ancient Ayurvedic treatments.",
  },
  {
    icon: "bi bi-tree",
    title: "Hill Trekking",
    desc: "Explore the misty peaks and wildlife of the Western Ghats.",
  },
];

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="svc-card h-100">
        <div className="svc-iconWrap">
          <span className="svc-iconCircle">
            <i className={icon}></i>
          </span>
        </div>

        <h3 className="svc-title">{title}</h3>
        <p className="svc-desc">{desc}</p>
      </div>
    </div>
  );
}

export default function ServiceCards() {
  return (
    <section className="svc-section py-5">
      <div className="container py-3">
        <div className="row g-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
