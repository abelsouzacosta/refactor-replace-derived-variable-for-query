import { ProductionPlan } from "../src/main";

describe("ProductionPlan", () => {
  it("Should create a paln and has production the same amount of the argument value given in the constructor", () => {
    let productionPlan = new ProductionPlan(0);

    expect(productionPlan.getProduction()).toEqual(0);
  });

  it("Should modify the production with the amount given in the adjusment object using applyAdjusment method", () => {
    let productionPlan = new ProductionPlan(0);

    productionPlan.applyAdjustment({ amount: 23 });

    expect(productionPlan.getProduction()).toEqual(23);
  });
});
