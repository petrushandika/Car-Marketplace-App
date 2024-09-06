const CarMakes = [
  {
    id: 1,
    name: "Audi",
  },
  {
    id: 2,
    name: "BMW",
  },
  {
    id: 3,
    name: "Ford",
  },
];

const Pricing = [
  {
    id: 1,
    amount: "1000$",
  },
  {
    id: 2,
    amount: "2000$",
  },
  {
    id: 3,
    amount: "5000$",
  },
  {
    id: 4,
    amount: "10000$",
  },
];

import suvIcon from "../../assets/icon/suv.png";
import sedanIcon from "../../assets/icon/sedan.png";
import hatchbackIcon from "../../assets/icon/hatchback.png";
import electricIcon from "../../assets/icon/electric.png";
import truckIcon from "../../assets/icon/truck.png";
import convertibleIcon from "../../assets/icon/convertible.png";
import hybridIcon from "../../assets/icon/hybrid.png";
import coupeIcon from "../../assets/icon/coupe.png";
import vanIcon from "../../assets/icon/van.png";

const Category = [
  {
    id: 1,
    name: "SUV",
    icon: suvIcon,
  },
  {
    id: 2,
    name: "Sedan",
    icon: sedanIcon,
  },
  {
    id: 3,
    name: "Hatchback",
    icon: hatchbackIcon,
  },
  {
    id: 4,
    name: "Electric",
    icon: electricIcon,
  },
  {
    id: 5,
    name: "Truck",
    icon: truckIcon,
  },
  {
    id: 6,
    name: "Convertible",
    icon: convertibleIcon,
  },
  {
    id: 7,
    name: "Hybrid",
    icon: hybridIcon,
  },
  {
    id: 8,
    name: "Coupe",
    icon: coupeIcon,
  },
  {
    id: 9,
    name: "Van",
    icon: vanIcon,
  },
];

export default {
  CarMakes,
  Pricing,
  Category,
};
