import React from "react";
import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/e-commerce.png";
import IMG3 from "../../assets/hotel.png";
import IMG4 from "../../assets/furniture.png";
import IMG5 from "../../assets/todo.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "INCO",
      description: "Design landing page for INCO by HTML, CSS, Js",
      img: IMG1,
      link: "https://ahmed-sh98.github.io/landing-page-inco/",
      github: "https://github.com/Ahmed-sh98/landing-page-inco",
    },
    {
      id: 2,
      title: "ecommerce",
      description: "Design ecommerce by HTML, CSS, Js, Bootstrap",
      img: IMG2,
      link: "",
      github: "",
    },
    {
      id: 3,
      title: "hotel",
      description: "Design Landing Page For Hotel by HTML, CSS, Js",
      img: IMG3,
      link: "https://ahmed-sh98.github.io/hotel-page/",
      github: "https://github.com/Ahmed-sh98/hotel-page",
    },
    {
      id: 4,
      title: "store furniture",
      description: "Design Store Furniture by HTML, CSS, Js, Bootstrap",
      img: IMG4,
      link: "https://ahmed-sh98.github.io/store_furniture/",
      github: "https://github.com/Ahmed-sh98/store_furniture",
    },
    {
      id: 5,
      title: "To Do ",
      description: "Design To Do by HTML, CSS, Js",
      img: IMG5,
      link: "",
      github: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
