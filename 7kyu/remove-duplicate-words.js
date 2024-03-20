// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

const removeDuplicateWords = (s) => {
  const set = new Set(s.split(" "))
  return Array.from(set).join(" ")
}
