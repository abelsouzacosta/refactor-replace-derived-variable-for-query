class ProductionPlan {
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

let plan = new ProductionPlan(23);

let anAdjusment = {
  amount: 23,
};

plan.applyAdjustment(anAdjusment);

console.log(plan);
