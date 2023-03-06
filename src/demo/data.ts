export default {
  name: 'Simple',
  schema: {
    description: 'A simple form example.',
    type: 'string',
    required: ['name', 'age'],
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'number',
      },
    },
  },
}
