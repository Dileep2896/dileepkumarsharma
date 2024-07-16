// WordCloudComponent.js
import WordCloud from "react-wordcloud";

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

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
  fontSizes: [20, 60],
  fontFamily: "Fira Code",
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
  callbacks: {
    onWordClick: null,
    getWordTooltip: (word) => `${word.text}`, // Optional: To show tooltip with word text only
  },
};

const WordCloudComponent = () => {
  return <WordCloud words={words} options={options} />;
};

export default WordCloudComponent;
