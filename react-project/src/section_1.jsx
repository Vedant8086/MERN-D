import config from "./assets/config.png";
import ReactCoreConcepts from ".src/assets/react-core-concepts.png";
const reactDisciptions = ["Fundamental", "Crucial", "Core"];

function getRandomly(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={ReactCoreConcepts} alt="Stylish atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDisciptions[getRandomly(2)]} React concepts will need you most for
        any app your going to build!!!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.reactCoreConcepts} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
}
function Section_1() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get Started!!!</h2>
          <ul>
            <CoreConcept
              title="React Core Concepts"
              desc="This is react core concepts png"
              img={config}
              alt="Core Concepts"
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </>
  );
}

export default Section_1;
