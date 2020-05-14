export class IngredientLocation {
  world;
  stageNumber;
  ingredients;
  course;
  constructor (raw) {
    this.world = parseInt(raw[0])
    this.stageNumber = raw[1]
    this.ingredients = [raw[2], raw[3], raw[4], raw[5], raw[6]]
  }
}
