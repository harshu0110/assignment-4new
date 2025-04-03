const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
2. RAW TEXT STRINGS

const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"];
  
// Event listener for button click
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  // Get random items from arrays
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders with random values
  newStory = newStory
    .replaceAll(':insertx:', xItem)
    .replace(':inserty:', yItem)
    .replace(':insertz:', zItem);

