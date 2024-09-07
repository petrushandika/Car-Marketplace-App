/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://velocia_owner:5TfjgBQ6uYpi@ep-wispy-hall-a53zyy94.us-east-2.aws.neon.tech/car-marketplace?sslmode=require",
  },
};
