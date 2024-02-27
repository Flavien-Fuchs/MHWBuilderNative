import charaBody1 from "./../../src/assets/images/characteres/chara1.png";
import charaBody2 from "./../../src/assets/images/characteres/chara2.png";
import charaBody3 from "./../../src/assets/images/characteres/chara3.png";
import charaBody4 from "./../../src/assets/images/characteres/chara4.png";
import charaBody5 from "./../../src/assets/images/characteres/chara5.png";
import charaBody6 from "./../../src/assets/images/characteres/chara6.png";
import charaBody7 from "./../../src/assets/images/characteres/chara7.png";
import charaBody8 from "./../../src/assets/images/characteres/chara8.png";
import charaBody9 from "./../../src/assets/images/characteres/chara9.png";
import charaBody10 from "./../../src/assets/images/characteres/chara10.png";
import charaBody11 from "./../../src/assets/images/characteres/chara11.png";

import charaCover1 from "./../../src/assets/images/characteres/chara_img_01.jpg";
import charaCover2 from "./../../src/assets/images/characteres/chara_img_02.jpg";
import charaCover3 from "./../../src/assets/images/characteres/chara_img_03.jpg";
import charaCover4 from "./../../src/assets/images/characteres/chara_img_04.jpg";
import charaCover5 from "./../../src/assets/images/characteres/chara_img_05.jpg";
import charaCover6 from "./../../src/assets/images/characteres/chara_img_06.jpg";
import charaCover7 from "./../../src/assets/images/characteres/chara_img_07.jpg";
import charaCover8 from "./../../src/assets/images/characteres/chara_img_08.jpg";
import charaCover9 from "./../../src/assets/images/characteres/chara_img_09.jpg";
import charaCover10 from "./../../src/assets/images/characteres/chara_img_10.jpg";
import charaCover11 from "./../../src/assets/images/characteres/chara_img_11.jpg";

export const getImageCharacter = (type = "body", id) => {
  if (id === 1) {
    if (type === "body") {
      return charaBody1;
    }
    return charaCover1;
  } else if (id === 2) {
    if (type === "body") {
      return charaBody2;
    }
    return charaCover2;
  } else if (id === 3) {
    if (type === "body") {
      return charaBody3;
    }
    return charaCover3;
  } else if (id === 4) {
    if (type === "body") {
      return charaBody4;
    }
    return charaCover4;
  } else if (id === 5) {
    if (type === "body") {
      return charaBody5;
    }
    return charaCover5;
  } else if (id === 6) {
    if (type === "body") {
      return charaBody6;
    }
    return charaCover6;
  } else if (id === 7) {
    if (type === "body") {
      return charaBody7;
    }
    return charaCover7;
  } else if (id === 8) {
    if (type === "body") {
      return charaBody8;
    }
    return charaCover8;
  } else if (id === 9) {
    if (type === "body") {
      return charaBody9;
    }
    return charaCover9;
  } else if (id === 10) {
    if (type === "body") {
      return charaBody10;
    }
    return charaCover10;
  } else if (id === 11) {
    if (type === "body") {
      return charaBody11;
    }
    return charaCover11;
  } else if (id === 12) {
    if (type === "body") {
      return charaBody12;
    }
    return charaCover12;
  }
};
