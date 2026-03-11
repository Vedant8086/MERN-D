import { useState } from "react";
import ReactCoreConcepts from "./assets/react-core-concepts.png";
import TabButton from "./TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./Data.jsx";
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
  const [selectTopic, setSelectTopic] = useState('');
  function handleSelect(selectedButton) {
    setSelectTopic(selectedButton);
    console.log(selectedButton)
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get Started!!!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept
                key={conceptItem.title}
                title={conceptItem.title}
                desc={conceptItem.description}
                reactCoreConcepts={conceptItem.image}
                alt={conceptItem.title}
              />
            ))}
            {/* <CoreConcept
              title="React Core Concepts"
              desc={CORE_CONCEPTS[0].description}
              reactCoreConcepts={config}
              alt="Core Concepts"
            />
            <CoreConcept
              title="React Core Concepts"
              desc={CORE_CONCEPTS[1].description}
              reactCoreConcepts={jsxUI}
              alt="Core Concepts"
            />
            <CoreConcept
              title="React Core Concepts"
              desc={CORE_CONCEPTS[2].description}
              reactCoreConcepts={stateMG}
              alt="Core Concepts"
            />
            <CoreConcept
              title="React Core Concepts"
              desc={CORE_CONCEPTS[3].description}
              reactCoreConcepts={components}
              alt="Core Concepts"
            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectTopic ? <p>Please select a topic to read</p> :
            <div id="tab-content">
              <h3>{EXAMPLES[selectTopic].title}</h3>
              <p>{EXAMPLES[selectTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectTopic].code}
                </code>
              </pre>
            </div>}
          {/* or approach 
            {!selectTopic && <p>Please select a topic to read</p>}
          {selectTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectTopic].code}
              </code>
            </pre>
          </div>}
          */}
        </section>
      </main>
    </>
  );
}

export default Section_1;
