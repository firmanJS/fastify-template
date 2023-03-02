module.exports = {
  LIMIT: 10,
  PAGE: 1,
  SQL: {
    SORT: ['ASC', 'DESC']
  },
  HTTP: {
    CREATED: 201,
    OK: 200,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500
  },
  METHOD: {
    DEL: 'DELETE',
    PUT: 'PUT',
    POST: 'POST',
    GET: 'GET',
  },
  MODEL_PROPERTIES: {
    TABLES: {
      USERS: 'mst_users'
    },
    PRIMARY_KEY: {
      ID: 'id'
    },
    CREATED: [
      'created_at', 'created_by',
      'updated_at', 'updated_by', 'deleted_at', 'deleted_by'
    ],
    DATE_ONLY: [
      'created_at', 'updated_at', 'deleted_at'
    ]
  }
}
