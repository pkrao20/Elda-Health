import aboutImg from "../assets/images/about/5184243.jpg";

function Aboutme() {
  return (
    <div className="about-container">
      <img className="about-image" src={aboutImg} alt="personal photo" />

      <div className="rectangle1"></div>
      <div className="rectangle2"></div>

      <section>
        <h2>About Us</h2>
        <p>
        Elda Health is a holistic wellness platform for women, focusing on menopause and
midlife care. At Elda Health, we focus on physical fitness of women through a bunch
of Yoga programs.  </p>
      </section>
    </div>
  );
}

export default Aboutme;
