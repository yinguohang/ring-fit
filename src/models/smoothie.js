export class IngredientCount {
  name;
  count;
  constructor (name, count) {
    this.name = name
    this.count = count
  }
}
export class Smoothie {
  id;
  name;
  ingredients;
  recovery;
  effect;
  world;
  description;
  constructor (rawArray) {
    this.id = rawArray[0]
    this.name = rawArray[1]
    this.ingredients = [
      new IngredientCount(rawArray[2], rawArray[3]),
      new IngredientCount(rawArray[4], rawArray[5]),
      new IngredientCount(rawArray[6], rawArray[7])
    ]
    this.recovery = rawArray[8]
    this.effect = rawArray[9]
    this.world = rawArray[10]
    this.description = rawArray[11]
  }
}
