function Home() {
    const cards = [
      { title: "Wolf_Rising05 Simulator", link: "#" },
      { title: "Aliens VS Robots", link: "#" },
      { title: "Taki Madness", link: "#" },
      { title: "Ben Destroys City Simulator", link: "#" },
      { title: "DO NOT TOUCH!", link: "#" },
      { title: "Doodle Racers", link: "#" },
      { title: "Dorito Survival™", link: "#" },
      { title: "LittleBigCity 2", link: "#" },
      { title: "Beware of Ronald McDonald [HORROR]", link: "#" },
      { title: "Car Game (Beta)", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "Spn0g bob", link: "#" },
      { title: "TEST!!!!!!!!!!!!!!!!!", link: "#" },
    ];
  
    return (
      <div className="home">
        <div className="grid">
          {cards.map((card, idx) => (
            <a key={idx} href={card.link} className="card">
              {card.title}
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;  