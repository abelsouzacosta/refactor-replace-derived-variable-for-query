// todo: [refactor] - replace temp varioable with query
// we have to refacotr this code so that production is never modified
// first we should create a function to calculate production

export class ProductionPlan {
  protected adjustments: any[];

  constructor() {
    this.adjustments = [];
  }

  getProduction() {
    return this.adjustments.reduce(
      (sum, adjustment) => sum + adjustment.amount,
      0
    );
  }

  applyAdjustment(anAdjusment: any) {
    this.adjustments.push(anAdjusment);
  }
}
