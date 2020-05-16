export class IngredientLocation {
  world;
  stageNumber;
  ingredients;
  course;
  constructor (raw) {
    this.id = parseInt(raw[0])
    this.world = parseInt(raw[1])
    this.stageNumber = raw[2]
    this.ingredients = [raw[3], raw[4], raw[5], raw[6], raw[7]]
  }
}
