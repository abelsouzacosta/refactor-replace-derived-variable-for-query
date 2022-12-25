// todo: [refactor] - replace temp varioable with query
// we have to refacotr this code so that production is never modified
// first we should create a function to calculate production

export class ProductionPlan {
  protected adjustments: any[];

  constructor(protected production: number = 0) {
    this.adjustments = [];
  }

  getProduction() {
    return this.production;
  }

  getCalculatedProduction() {
    return this.adjustments.reduce(
      (sum, adjustment) => sum + adjustment.amount,
      0
    );
  }

  applyAdjustment(anAdjusment: any) {
    this.adjustments.push(anAdjusment);
    this.production += anAdjusment.amount;
  }
}
