module.exports = [
  {
    type: 'fields',
    id: 'name',
    attributes: {
      'field-type': '@cardstack/core-types::string'
    }
  },
  {
    type: 'content-types',
    id: 'things',
    relationships: {
      fields: {
        data: [
          {
            type: 'fields',
            id: 'name'
          }
        ]
      }
    }
  },
  {
    type: 'things',
    id: 0,
    attributes: {
      name: 'Clarence'
    }
  }
];
