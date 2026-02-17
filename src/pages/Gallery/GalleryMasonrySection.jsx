import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../styles/galleryMasonry.css";

// ✅ Use your images here (replace paths with your real assets)
import g11 from "../../assets/image1.jpg";
import g13 from "../../assets/image2.jpg";
import g14 from "../../assets/image3.jpg";
import g4 from "../../assets/g3.jpg";
import g5 from "../../assets/g4.jpg";
import g6 from "../../assets/g5.jpg";
import g7 from "../../assets/g6.jpg";
import g8 from "../../assets/room1.jpg";
import g9 from "../../assets/room2.jpg";
import g10 from "../../assets/room3.jpg";

const gallery = [
  { id: 1, src: g11, alt: "Luxury room" },
  { id: 2, src: g13, alt: "Suite interior" },
  { id: 3, src: g14, alt: "Bedroom view" },
  { id: 4, src: g4, alt: "Resort balcony" },
  { id: 5, src: g5, alt: "Resort lobby" },
  { id: 6, src: g6, alt: "Night pool" },
  { id: 7, src: g7, alt: "Outdoor fun" },
  { id: 8, src: g8, alt: "Pool view" },
  { id: 9, src: g9, alt: "Sunset resort" },
  { id: 10, src: g10, alt: "Resort exterior" },
];

export default function GalleryMasonrySection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="gm-sec">
      <div className="container py-5">
        {/* Heading */}
        <div className="gm-head text-center mb-4" data-aos="fade-up">
          <div className="gm-line mx-auto" />
          <h2 className="gm-title">Visual Journey</h2>
          <p className="gm-sub">
            A glimpse of luxury stays, relaxing views, and unforgettable moments.
          </p>
        </div>

        {/* Masonry */}
        <div className="gm-masonry">
          {gallery.map((item, index) => (
            <figure
              key={item.id}
              className="gm-item"
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <img className="gm-img" src={item.src} alt={item.alt} loading="lazy" />
              <span className="gm-overlay" aria-hidden="true" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
