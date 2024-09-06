import { faker } from "@faker-js/faker";

function randomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://www.jamesedition.com/stories/wp-content/uploads/2022/10/main1-fin.jpg",
    miles: 1000,
    gearType: "Automatic",
    price: faker.finance.amount({ min: 4000, max: 20000 }),
  };
}

const carList = faker.helpers.multiple(randomCarList, {
  count: 7,
});

export default {
  carList,
};
