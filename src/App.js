import Header from "./components/Header";
import Card from "./components/Card";
import travelData from "./data";

function App() {

  const cards = travelData.map(item => {
    return (
      <Card
        id={item.id}
        {...item}
      ></Card>
    )
  })

  return (
    <>
      <Header></Header>
      <section className="card-row">
        {/* <Card></Card> */}
        {cards}
      </section>
    </>
  );
}

export default App;
