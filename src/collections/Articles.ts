import { CollectionConfig } from "payload/types";

export const Articles: CollectionConfig = {
  slug: "articles",
  labels: {
    singular: "Article",
    plural: "Articles",
  },
  admin: {
    group: { en: "Content" },
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: {
        en: "Title",
      },
      admin: {
        placeholder: { en: "Enter title" },
      },
    },
    {
      name: "type",
      type: "radio",
      options: [
        {
          value: "news",
          label: { en: "News" },
        },
      ],
    },
  ],
};
