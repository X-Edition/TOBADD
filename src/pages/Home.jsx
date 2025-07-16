import Card from "../components/Card";
import small from "../assets/small.png"
import large from "../assets/large.png"
import lvl1 from "../assets/walf.png"
import lvl2 from "../assets/alienvrobot.png"
import lvl3 from "../assets/taki.png"
import lvl4 from "../assets/mcdonald.png"
import lvl5 from "../assets/404.png"

function Home() {
  const cards = [
    {
      title: "Wolf_Rising05 Simulator",
      link: "#",
      thumbnail: lvl1,
      large: true,
    },
    {
      title: "🟩 Aliens VS Robots 🟪",
      link: "#",
      thumbnail: lvl2,
      large: false,
    },
    {
      title: "Taki Madness🔥",
      link: "#",
      thumbnail: lvl3,
      large: false,
    },
    {
      title: "Ben Destroys City Simulator",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "DO NOT TOUCH!⚠️",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "TEST!!!!!!!!!!!!!!!!!",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "Doodle Racers (PVP) ⚔️",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "Dorito Survival™",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "LittleBigCity 2 (BETA)",
      link: "#",
      thumbnail: large,
      large: true,
    },
    {
      title: "Beware of Ronald McDonald [HORROR]",
      link: "#",
      thumbnail: lvl4,
      large: false,
    },
    {
      title: "Car Game (Beta)",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "Spn0g bob",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "📺 Channel 404",
      link: "#",
      thumbnail: lvl5,
      large: false,
    },
    {
      title: "Crunchy Milk Simulator 🥣😨",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "📞 Call From The Basement",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "🔥 Microwave Fighter Turbo",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "Trash Bin Royale ♻️",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "🐀 NYC Subway Escape 3D",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "Sleep Paralysis: The Game 😱💤",
      link: "#",
      thumbnail: small,
      large: false,
    },
    {
      title: "🧼 Microwave Soap Fight 2",
      link: "#",
      thumbnail: small,
      large: false,
    },
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
