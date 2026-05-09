import { defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price Text",
      type: "string",
      description: "Display price, e.g. ₹68,000",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "priceValue",
      title: "Price Value",
      type: "number",
      description: "Numeric price value used for filtering and sorting.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
      description: "Use this for product features and specifications.",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
  ],
});
