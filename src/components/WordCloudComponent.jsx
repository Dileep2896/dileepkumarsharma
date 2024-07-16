// WordCloudComponent.js
import WordCloud from "react-d3-cloud";

const words = [
  { text: "Software", value: 1000 },
  { text: "Developement", value: 950 },
  { text: "Engineer", value: 1000 },
  { text: "Java", value: 800 },
  { text: "JavaScript", value: 850 },
  { text: "Python", value: 700 },
  { text: "Kotlin", value: 650 },
  { text: "C++", value: 600 },
  { text: "React", value: 550 },
  { text: "Node", value: 500 },
  { text: "Express", value: 500 },
  { text: "MongoDB", value: 500 },
  { text: "Android", value: 450 },
  { text: "AWS", value: 400 },
  { text: "Firebase", value: 350 },
  { text: "Google Cloud", value: 200 },
  { text: "SQL", value: 150 },
  { text: "PostgreSQL", value: 150 },
];

const fontSizeMapper = (word) => Math.log2(word.value) * 5;
const rotate = () => (Math.random() > 0.5 ? 0 : 90);

const WordCloudComponent = () => {
  return (
    <div>
      <WordCloud data={words} fontSizeMapper={fontSizeMapper} rotate={rotate} />
    </div>
  );
};

export default WordCloudComponent;
