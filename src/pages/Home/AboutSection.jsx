import { useNavigate } from "react-router-dom";
import "../../styles/aboutSection.css";
<<<<<<< HEAD
import img4 from "../../assets/image1.jpg";
import img5 from "../../assets/image2.jpg";
import img3 from "../../assets/g3.jpg";
=======
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
>>>>>>> 36737131500f0259807a8de4f5f258d39c61b061

export default function AboutSection() {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/about"); // 🔥 Redirect to login page
  };

  return (
    <section className="about-sec text-center">
      <div className="container py-5">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6">

            <div className="about-topline mx-auto" />

            <h2 className="about-title">
              A place to remember
            </h2>

            <p className="about-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Donec malesuada lorem maximus mauris scelerisque, at rutrum
              nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
              finibus.
            </p>

            <div className="about-list mt-4 d-flex flex-column align-items-center">
              <div className="about-item">
                <span className="about-check">✓</span>
                <span>Donec malesuada lorem maximus mauris scelerisque</span>
              </div>

              <div className="about-item">
                <span className="about-check">✓</span>
                <span>Malesuada lorem maximus mauris scelerisque</span>
              </div>
            </div>

            <button
              className="about-btn mt-5"
              onClick={handleReadMore}
            >
              Read More
            </button>
          </div>

          {/* RIGHT COLLAGE */}
          <div className="col-12 col-lg-6">
            <div className="about-collage">
<<<<<<< HEAD
              <img className="img-main" src={img4} alt="" />
              <img className="img-top" src={img5} alt="" />
=======
              <img className="img-main" src={img1} alt="" />
              <img className="img-top" src={img2} alt="" />
>>>>>>> 36737131500f0259807a8de4f5f258d39c61b061
              <img className="img-bottom" src={img3} alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
