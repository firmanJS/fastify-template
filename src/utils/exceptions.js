const { logErrDetails } = require('./logger');
const { APP_NAME, NODE_ENV } = require('../config');
const { HTTP, PAGE, LIMIT } = require('./constant')
const { lang } = require('../lang')
/**
 *
 * @param err
 */
function errorHandler(err) {
  logErrDetails({ error: err, message: `Error occurred in ${APP_NAME}` });
}

exports.handlerUncaughtErrors = () => {
  process.on('unhandledRejection', errorHandler);
  process.on('uncaughtException', errorHandler);
};

exports.handlerExit = () => {
  process.on('SIGINT', () => {
    process.exit(0);
  });

  process.on('exit', () => {
    process.exit(0);
  });
};

exports.handlerNotFound = (request, reply) => {
  reply.code(404).send({
    status: false,
    message: `route ${request.url} not found`,
    data: {}
  });
}

exports.errorHandler = (options) => {
  const { request, reply, error } = options
  request.log.error(error);
  const result = reply.code(HTTP.BAD_REQUEST).send({
    status: false,
    message: error.toString(),
    data: {}
  });
  return result
}

exports.baseResponse = (res, rows) => res.code(rows.code).send(rows?.data)

exports.paginationResponse = (req, res, rows) => {
  const options = { status: true, message: lang.__('get.success'), code: HTTP.OK }
  let { status, message, code } = options
  if (Number(rows?.data?.data?.count) === 0) {
    status = false
    message = lang.__('notfound')
    code = HTTP.NOT_FOUND
  }

  if (rows?.code === HTTP.BAD_REQUEST) {
    code = HTTP.BAD_REQUEST
    status = false
    message = rows?.data?.message
  }
  const limitPerPage = req.query?.limit || LIMIT
  const countTotal = Number(rows?.data?.data?.count) || +LIMIT
  res.code(code).send({
    message,
    status,
    data: rows?.data?.data?.result || [],
    _meta: {
      page: Number(req.query?.page) || +PAGE,
      limit_per_page: +limitPerPage,
      total_page: Math.ceil(countTotal / limitPerPage),
      count_per_page: rows?.data?.response?.result?.length || 0,
      count_total: countTotal
    }
  })
}

exports.mappingSuccess = (message, data = [], code = HTTP.OK, status = true) => ({
  code,
  data: {
    status,
    message,
    data
  }
})

const conditionCheck = (error, manipulate, message) => {
  switch (manipulate[0]) {
    case 'JsonWebTokenError':
      message = error
      break
    case 'Error':
      message = lang.__('error.db.connection')
      break
    case 'TypeError':
      message = `error in code ${manipulate.toString()}`
      break
    case 'AggregateError':
      message = lang.__('error.db.query')
      break
    case 'MongoServerError':
      message = manipulate.toString()
      break
    case 'ReferenceError':
      message = manipulate.toString()
      break
    default:
      message = error
  }

  return message
}

exports.mappingError = (req, error, code = HTTP.BAD_REQUEST) => {
  let { message, exception } = ['', '']
  const manipulate = error.toString().split(':')
  console.error(`catch message ${error}`);
  message = lang.__('error.db.transaction')
  if (NODE_ENV === 'development') {
    exception = error.toString()
    message = conditionCheck(error, manipulate, message)
  }
  if (error?.type_error !== 'validation') {
    // sent alert
    console.info('sent alert', error, req?.url)
  }
  return {
    code,
    data: {
      status: false,
      message,
      exception,
      data: []
    }
  }
}
