import { CollectionConfig } from "payload/types";

export const Snippets: CollectionConfig = {
  slug: "snippets",
  auth: false,
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      required: true,
    },
    {
      name: "createdAt",
      type: "date",
      label: "Created At",
      required: true,
    },
    {
      name: "updatedAt",
      label: "Last Modified",
      type: "date",
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "content", // required
      label: "Content",
      type: "richText", // required
      defaultValue: [
        {
          children: [{ text: "Here is some default content for this field" }],
        },
      ],
      required: true,
      admin: {
        elements: [
          "h2",
          "h3",
          "h4",
          "link",
          "blockquote",
          // {
          //   name: 'cta',
          //   Button: CustomCallToActionButton,
          //   Element: CustomCallToActionElement,
          //   plugins: []
          // }
        ],
        leaves: [
          "bold",
          "italic",
          // {
          //   name: 'highlight',
          //   Button: CustomHighlightButton,
          //   Leaf: CustomHighlightLeaf,
          //   plugins: []
          // }
        ],
        link: {
          // Inject your own fields into the Link element
          fields: [
            {
              name: "rel",
              label: "Rel Attribute",
              type: "select",
              hasMany: true,
              options: ["noopener", "noreferrer", "nofollow"],
            },
          ],
        },
        upload: {
          collections: {
            media: {
              fields: [
                // any fields that you would like to save
                // on an upload element in the `media` collection
              ],
            },
          },
        },
      },
    },
    {
      name: "tags",
      label: "Tags",
      type: "select",
      required: true,
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: "Front End",
          value: "front-end",
        },
        {
          label: "Testing",
          value: "testing",
        },
        {
          label: "Fundamentals",
          value: "fundamentals",
        },
        {
          label: "Database",
          value: "database",
        },
        {
          label: "Design Pattern",
          value: "design-pattern",
        },
        {
          label: "Architecture",
          value: "architecture",
        },
        {
          label: "Architecture",
          value: "architecture",
        },
      ],
    },
  ],
};
