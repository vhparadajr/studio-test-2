import { defineField, defineType } from 'sanity'

export const contentType = defineType({
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time (24h)', // Clear label for editors
      type: 'string',
      validation: (rule) => rule.required().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {name: "24-hour time"}).error('Must be in HH:mm format (24-hour)'),
    }),
    defineField({
      name: 'fadeTime',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
})