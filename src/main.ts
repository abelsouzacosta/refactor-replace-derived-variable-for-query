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
