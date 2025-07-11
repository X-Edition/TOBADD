function Home() {
    const cards = [
      { title: "Wolf_Rising05 Simulator", link: "#" },
      { title: "Aliens VS Robots", link: "#" },
      { title: "Taki Madness", link: "#" },
      { title: "Ben Destroys City Simulator", link: "#" },
      { title: "DO NOT TOUCH!", link: "#" },
      { title: "Doodle Racers", link: "#" },
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