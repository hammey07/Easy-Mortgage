export const loadingMessages = [
  "Finding out how expensive adulthood is…",
  "One moment… negotiating with reality…",
  "Turning dreams into monthly payments…",
  "Checking your wallet’s emotional state…",
  "Running numbers we wish were smaller…",
  "Trying to keep this affordable…",
  "Calculating your future flex…",
  "Making peace with big numbers…",
  "This is where the serious maths happens…",
];

export const impossibleInputMessages = [
  "Yeah… that’s definitely not true. But okay, let’s pretend.",
  "Nice try… we both know that’s impossible.",
  "Bold move. That’s pure fantasy, but we’ll play along.",
  "Hmm… nice imagination, but that’s not real.",
  "We see what you did there… that’s not happening.",
];

export const getRandomMessage = (valid) => {
  const array = valid ? loadingMessages : impossibleInputMessages;
  return array[Math.floor(Math.random() * array.length)];
};
