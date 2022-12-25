export class ProductionPlan {
  protected adjusments: any[];

  constructor(protected production: number) {
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
