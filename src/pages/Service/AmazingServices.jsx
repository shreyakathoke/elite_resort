import "../../styles/amazingServices.css";

const SERVICES = [
  { icon: "bi-cup-straw", title: "Pool Beachbar" },
  { icon: "bi-water", title: "Infinity Pool" },
  { icon: "bi-umbrella", title: "Sunbeds" },
];

function ServiceMiniCard({ icon, title }) {
  return (
    <div className="col-12 col-sm-4">
      <div className="as-card">
        <div className="as-icon">
          <i className={`bi ${icon}`} aria-hidden="true"></i>
        </div>
        <div className="as-cardTitle">{title}</div>
      </div>
    </div>
  );
}

export default function AmazingServices() {
  return (
    <section className="as-section">
      <div className="container py-5">
        <div className="row align-items-center gy-5">
          {/* LEFT SIDE */}
          <div className="col-12 col-lg-6 ">
            <div className="as-kicker"></div>
            <h2 className="as-title">Amazing Services</h2>

            <p className="as-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec malesuada lorem
              maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
              cursus faucibus finibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
              sapien. Suspendisse cursus faucibus finibus.
            </p>

            <button type="button" className="as-btn">
              Read More
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-lg-6">
            <div className="row g-4 justify-content-lg-end">
              {SERVICES.map((s) => (
                <ServiceMiniCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
