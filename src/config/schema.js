module.exports = {
  responseSchema: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'boolean' },
        message: { type: 'string' },
        data: { type: 'object' }
      }
    },
    // [HTTP.NOT_FOUND]: {
    //   type: 'object',
    //   properties: {
    //     status: { type: 'boolean' },
    //     message: { type: 'string' },
    //     data: { type: 'object' }
    //   }
    // },
    // [HTTP.BAD_REQUEST]: {
    //   type: 'object',
    //   properties: {
    //     status: { type: 'boolean' },
    //     message: { type: 'string' },
    //     exception: { type: 'object' },
    //     data: { type: 'object' }
    //   }
    // }
  }
}
