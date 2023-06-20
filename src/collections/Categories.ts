import { CollectionConfig } from "payload/types";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  admin: {
    useAsTitle: "title",
    listSearchableFields: ["title"],
    group: 'Filters',
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      admin: {
        placeholder: "Enter category title",
      },
    },
  ],
};
