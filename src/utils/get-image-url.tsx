export function getImageUrl(folder: string, fileName: string) {
  return new URL(`../images/${folder}/${fileName}.png`, import.meta.url).href;
}
