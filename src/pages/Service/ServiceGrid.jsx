import "../../styles/serviceGrid.css";

const ITEMS = [
  { icon: "bi-bicycle", title: "Bike Rentals" },
  { icon: "bi-water", title: "Boat Trips" },
  { icon: "bi-shop", title: "Restaurants" },
  { icon: "bi-umbrella", title: "Massages" },
  { icon: "bi-ticket-perforated", title: "Event Tickets" },
  { icon: "bi-signpost-split", title: "Hiking" },
];

const TEXT =
  "Nulla massa dui, posuere non erat in, eleifend mattis dui. Vivamus luctus luctus rhoncus. Donec sagittis nulla id finibus iaculis. Mauris odio tortor.";

function ServiceItem({ icon, title }) {
  return (
    <div className="col-12 col-md-4">
      <div className="sg-item">
        <div className="sg-icon">
          <i className={`bi ${icon}`} aria-hidden="true"></i>
        </div>

        <h3 className="sg-title">{title}</h3>

        <p className="sg-text">{TEXT}</p>
      </div>
    </div>
  );
}

export default function ServiceGrid() {
  return (
    <section className="sg-section py-5">
      <div className="container py-4">
        <div className="row g-5">
          {ITEMS.map((it) => (
            <ServiceItem key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
