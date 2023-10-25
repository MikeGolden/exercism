//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  // Remove leading and trailing whitespace to check for empty message
  message = message.trim();

  // Check if the message is empty (no content)
  if (message === "") {
    return 'Fine. Be that way!';
  }

  // The message is a question (ends with a question mark)
  const isQuestion = message.endsWith('?');

  // The message is in all capitals (yelling)
  const isShouting = message === message.toUpperCase() && message !== message.toLowerCase();

  if (isQuestion && isShouting) {
    return "Calm down, I know what I'm doing!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  // Check if the message is in all capitals (yelling)
  if (isShouting) {
    return 'Whoa, chill out!';
  }

  // Default response if none of the above conditions are met
  return 'Whatever.';
};

