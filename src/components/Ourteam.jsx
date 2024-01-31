import Prashant from "../assets/images/Team/Prasant.jpeg";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Ourteam = () => {
  const cardsData = [
    {
      id: 1,
      title: "Prasant Rao",
      Linkedin: "https://www.linkedin.com/in/raopk2020/",
      Github: "https://github.com/pkrao20",
      image: Prashant,
    },
  ];
  return (
    <div className="ourteam">
      <h2 className="teamheading">Developed By</h2>
      <div className="profilecard">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} className="img-profile" alt="" />
            <h4>{card.title}</h4>
            <div className="icon-container">
              {" "}
              <a href={card.Linkedin} target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="icon" />{" "}
              </a>
              <a href={card.Github} target="_blank" rel="noopener noreferrer">
                <BsGithub className="icon" />{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
