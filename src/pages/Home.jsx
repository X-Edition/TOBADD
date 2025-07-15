import Card from "../components/Card";

function Home() {
  const cards = [
    {
      title: "Wolf_Rising05 Simulator",
      link: "#",
      thumbnail: "/thumbnails/wolf.png",
      large: true,
    },
    {
      title: "Aliens VS Robots",
      link: "#",
      thumbnail: "/thumbnails/aliens.png",
    },
    {
      title: "Taki Madness",
      link: "#",
      thumbnail: "/thumbnails/taki.png",
    },
    {
      title: "Ben Destroys City Simulator",
      link: "#",
      thumbnail: "/thumbnails/ben.png",
    },
    {
      title: "DO NOT TOUCH!",
      link: "#",
      thumbnail: "/thumbnails/dnt.png",
    },
    {
      title: "TEST!!!!!!!!!!!!!!!!!",
      link: "#",
      thumbnail: "/thumbnails/test.png",
      large: true,
    },
    // Add more as needed
  ];

  return (
    <div className="home">
      <div className="grid">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
