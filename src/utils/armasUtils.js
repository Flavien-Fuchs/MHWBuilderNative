import { armas } from "../assets/data/Armas";

export function findMultiple(type) {
  for (let i = 0; i < armas.length; i++) {
    if (armas[i].name === type) {
      return armas[i].value;
    }
  }
  return 0;
}
