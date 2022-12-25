// todo: [refactor] - replace temp varioable with query
// we have to refacotr this code so that production is never modified
// first we should create a function to calculate production

export class ProductionPlan {
  protected adjusments: any[];

  constructor(protected production: number = 0) {
    this.adjusments = [];
  }

  getProduction() {
    return this.production;
  }

  applyAdjustment(anAdjusment: any) {
    this.adjusments.push(anAdjusment);
    this.production += anAdjusment.amount;
  }
}
