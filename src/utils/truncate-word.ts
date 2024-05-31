export function truncateWord(word: string) {
  if (word.length > 25) {
    return `${word.slice(0, 24)}...`;
  }
  return word;
}
