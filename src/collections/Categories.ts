import { CollectionConfig } from 'payload/types';

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        placeholder: 'Enter title',
      }
    },
  ],
}