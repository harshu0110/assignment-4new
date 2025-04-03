const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Raw story template
const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

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

  // If a custom name is entered, replace "Bob" with it (capitalize first letter)
  if (customName.value.trim() !== '') {
    const name = customName.value.trim();
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    newStory = newStory.replace('Bob', capitalizedName);
  }

  // Convert to UK units if the UK radio button is checked
  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 / 14) + ' stone'; // Convert 300 pounds to stone
    const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade'; // Convert 94°F to °C

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  // Display the story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}