import monsterImg1 from "./../../src/assets//images/monster/Rathalos1.webp";
import monsterImg2 from "./../../src/assets/images/monster/Diablos1.webp";
import monsterImg3 from "./../../src/assets/images/monster/Jyuratodus1.webp";
import monsterImg4 from "./../../src/assets/images/monster/Zinogre1.webp";

import monsterVideo1 from "./../../src/assets/videos/Rathalos.mp4";
import monsterVideo2 from "./../../src/assets/videos/Diablos.mp4";
import monsterVideo3 from "./../../src/assets/videos/Jyuratodus.mp4";
import monsterVideo4 from "./../../src/assets/videos/Zinogre.mp4";

export const getImageOrVideoMonster = (type = "img", id) => {
  if (id === 1) {
    if (type === "img") {
      return monsterImg1;
    }
    return monsterVideo1;
  } else if (id === 2) {
    if (type === "img") {
      return monsterImg2;
    }
    return monsterVideo2;
  } else if (id === 3) {
    if (type === "img") {
      return monsterImg3;
    }
    return monsterVideo3;
  } else if (id === 4) {
    if (type === "img") {
      return monsterImg4;
    }
    return monsterVideo4;
  }
};
