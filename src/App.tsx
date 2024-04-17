import { Nav, Hero, Card } from "./components";
import { cardData } from "./Data";
import "./App.css";

function App() {
  const cards = cardData.map((item) => {
    return <Card key={item?.id} data={item} />;
  });
  return (
    <>
      <Nav />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
