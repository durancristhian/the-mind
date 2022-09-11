export function getImageUrl(concept: string, number: number) {
  return new URL(`../images/${concept}/${number}.png`, import.meta.url).href;
}
