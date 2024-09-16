const CarMakes = [
  {
    id: 1,
    name: "Nissan",
  },
  {
    id: 2,
    name: "BMW",
  },
  {
    id: 3,
    name: "Hyundai",
  },
  {
    id: 4,
    name: "Toyota",
  },
  {
    id: 5,
    name: "Honda",
  },
  {
    id: 6,
    name: "Ford",
  },
  {
    id: 7,
    name: "Chevrolet",
  },
  {
    id: 8,
    name: "Audi",
  },
  {
    id: 9,
    name: "Mercedes-Benz",
  },
  {
    id: 10,
    name: "Volkswagen",
  },
];

const Pricing = [
  {
    id: 1,
    amount: "1.000$",
  },
  {
    id: 2,
    amount: "2.000$",
  },
  {
    id: 3,
    amount: "3.000$",
  },
  {
    id: 4,
    amount: "5.000$",
  },
  {
    id: 5,
    amount: "10.000$",
  },
  {
    id: 6,
    amount: "20.000$",
  },
  {
    id: 7,
    amount: "30.000$",
  },
  {
    id: 8,
    amount: "50.000$",
  },
  {
    id: 9,
    amount: "75.000$",
  },
  {
    id: 10,
    amount: "100.000$",
  },
  {
    id: 11,
    amount: "200.000$",
  },
  {
    id: 12,
    amount: "300.000$",
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
    name: "Truck",
    icon: truckIcon,
  },
  {
    id: 4,
    name: "Coupe",
    icon: coupeIcon,
  },
  {
    id: 5,
    name: "Convertible",
    icon: convertibleIcon,
  },
  {
    id: 6,
    name: "Van",
    icon: vanIcon,
  },
  {
    id: 7,
    name: "Hatchback",
    icon: hatchbackIcon,
  },
  {
    id: 8,
    name: "Electric",
    icon: electricIcon,
  },
  {
    id: 9,
    name: "Hybrid",
    icon: hybridIcon,
  },
];

export default {
  CarMakes,
  Pricing,
  Category,
};
