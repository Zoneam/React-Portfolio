import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  projects,
  webPortfolio,
  featuredPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "web",
      title: "Web Apps",
    },


  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "projects":
        setData(projects);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((src) => (
          <div className="item">
           
            <img
              src={src.img}
              alt={src.title}
            />
            <a href={src.gitHubLink} className="portfolioUpper">Github Repo</a>
            <h3>{src.title}</h3>
            <a href={src.deployedLink} className="portfolioLower">Deployed App</a>
          </div>
        ))}
      </div>
    </div>
  );
}
