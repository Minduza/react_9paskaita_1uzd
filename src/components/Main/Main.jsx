import Card from "../Card/Card";
import "./Main.css";

const Main = () => {
  const countries = [
    {
      country: "Greece",
      image:
        "https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.jpg?s=612x612&w=0&k=20&c=AY_kxRrkTjbDLhqpotxgW8CZp4ovEIM1tRdTrvXKcAM=",
    },
    {
      country: "Turkey",
      image: "https://wallpaperaccess.com/full/449137.jpg",
    },
    {
      country: "Thailand",
      image:
        "https://i.insider.com/55380ced69bedd330b8fddaf?width=1000&format=jpeg&auto=webp",
    },
    {
      country: "Lithuania",
      image:
        "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Lithuania-Trakai-762676237-1440x823.jpg",
    },
    {
      country: "Hawaii",
      image:
        "https://i.natgeofe.com/k/f576c284-661a-4046-ba51-fa95699e1a8b/hawaii-beach_16x9.png?w=1200",
    },
    {
      country: "Spain",
      image:
        "https://media.istockphoto.com/id/509288876/photo/tossa-de-mar-on-the-costa-brava-catalunya-spain.jpg?s=612x612&w=0&k=20&c=51Nw_Kd-_SDBd_RiBSqjv4JC5ZKDeO6oYfv6niYYNNQ=",
    },
  ];

  return (
    <div className="wrapper">
      <h1 className="mainTitle">Countries to Travel</h1>
      <p>
        "Embark on extraordinary journeys filled with breathtaking landscapes,
        cultural encounters, and unforgettable adventures. Explore new horizons,
        immerse yourself in diverse cultures, and create lifelong memories. Let
        our travel agency be your guide to the world's most captivating
        destinations."
      </p>
      <div className="cardContainer">
        {countries.map((country) => (
          <Card
            key={country.country}
            image={country.image}
            alt={country.country}
            title={country.country}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
