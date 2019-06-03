import { HungryBear } from './../src/hungry-bear.js';

export class Hiker {

  constructor(name) {
    this.name = name;
    this.alive = true;
    this.backpack =
    {"trailMix": 5 , "granolaBar": 3, "peanutButterSandwich": 3, "bodyParts": 4};
  }

  areYouDead() {
    if (HungryBear.foodLevel === 0) {
      return this.alive = false;
    } else {
      return this.alive = true;
    }
  }

}