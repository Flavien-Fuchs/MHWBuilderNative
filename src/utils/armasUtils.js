import { armas } from "../assets/data/Armas";

export function findMultiplie(type) {
  for (let i = 0; i < armas.length; i++) {
    if (armas[i].name === type) {
      return armas[i].value;
    }
  }
  return 0;
}
