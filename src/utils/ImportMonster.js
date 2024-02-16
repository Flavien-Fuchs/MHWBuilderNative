import monsterImg1 from "./../../src/assets//images/monster/Rathalos1.webp";
import monsterImg2 from "./../../src/assets/images/monster/Diablos1.webp";
import monsterImg3 from "./../../src/assets/images/monster/Jyuratodus1.webp";
import monsterImg4 from "./../../src/assets/images/monster/Zinogre1.webp";
// import monsterImg5 from "./../../src/assets/images/monster/chara5.webp";
// import charaBody6 from "./../../src/assets/images/characteres/chara6.png";
// import charaBody7 from "./../../src/assets/images/characteres/chara7.png";
// import charaBody8 from "./../../src/assets/images/characteres/chara8.png";
// import charaBody9 from "./../../src/assets/images/characteres/chara9.png";
// import charaBody10 from "./../../src/assets/images/characteres/chara10.png";
// import charaBody11 from "./../../src/assets/images/characteres/chara11.png";

import monsterVideo1 from "./../../src/assets/videos/Rathalos.mp4";
import monsterVideo2 from "./../../src/assets/videos/Diablos.mp4";
import monsterVideo3 from "./../../src/assets/videos/Jyuratodus.mp4";
import monsterVideo4 from "./../../src/assets/videos/Zinogre.mp4";
// import monsterVideo5 from "./../../src/assets/videos/characteres/chara_img_05.jpg";
// import charaCover6 from "./../../src/assets/images/characteres/chara_img_06.jpg";
// import charaCover7 from "./../../src/assets/images/characteres/chara_img_07.jpg";
// import charaCover8 from "./../../src/assets/images/characteres/chara_img_08.jpg";
// import charaCover9 from "./../../src/assets/images/characteres/chara_img_09.jpg";
// import charaCover10 from "./../../src/assets/images/characteres/chara_img_10.jpg";
// import charaCover11 from "./../../src/assets/images/characteres/chara_img_11.jpg";

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
  // else if (id === 5) {
  //   if (type === "img") {
  //     return monsterImg5;
  //   }
  //   return monsterVideo5;
  // }
};
