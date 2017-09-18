module.exports = [
  {
    type: 'plugin-configs',
    id: '@cardstack/ephemeral'
  },
  {
    type: 'data-sources',
    id: 'cardstack-ephemeral-default',
    attributes: {
      'source-type': '@cardstack/ephemeral'
    }
  }
];
