import { pgTable, serial, varchar, json, integer } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey(),
  listingTitle: varchar("listingTitle").notNull(),
  tagLine: varchar("tagLine"),
  originalPrice: varchar("originalPrice"),
  sellingPrice: varchar("sellingPrice").notNull(),
  category: varchar("category").notNull(),
  condition: varchar("condition").notNull(),
  type: varchar("type").notNull(),
  make: varchar("make").notNull(),
  model: varchar("model").notNull(),
  year: varchar("year").notNull(),
  driveType: varchar("driveType"),
  transmission: varchar("transmission").notNull(),
  fuelType: varchar("fuelType").notNull(),
  mileage: varchar("mileage").notNull(),
  engineSize: varchar("engineSize"),
  cylinder: varchar("cylinder"),
  color: varchar("color").notNull(),
  doors: varchar("doors").notNull(),
  vin: varchar("vin"),
  offerType: varchar("offerType").notNull(),
  listingDescription: varchar("listingDescription").notNull(),
  features: json("features"),
  images: json("images"),
  createdBy: varchar("createdBy").notNull().default("Petrus Handika"),
  postedOn: varchar("postedOn"),
});

export const CarImages = pgTable("carImages", {
  id: serial("id").primaryKey(),
  imageUrl: varchar("imageUrl"),
  carListingId: integer("carListingId")
    .notNull()
    .references(() => CarListing.id),
});
