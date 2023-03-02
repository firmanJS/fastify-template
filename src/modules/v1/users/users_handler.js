/**
 *
 * @param {*} lang this is for consisent with other language message
 * @param {*} repository this is repository for postgres definition
 * @param {*} req express request you can see with console.log(req)
 * @param {*} res express response you can see with console.log(req)
 * @param {*} paramsHttp if request condition is and operator, you can use this
 * @return {JSON}
*/
const repository = require('./users_repository')
const {
  baseResponse, paramsHttp, dynamicFilter, paging,
  dynamicOrder, bodyHttp, METHOD, paginationResponse
} = require('../../../utils')

const optionsPayload = (req, type_method) => {
  const where = paramsHttp(req)
  const payload = bodyHttp(req)
  where.deleted_at = null
  const options = {
    where,
    type_method,
    column: ['name', 'email'],
    payload
  }

  return options
}

/**
 *
 * @param request as req
 * @param reply as res
 * @return {void}
*/
exports.store = async (req, res) => {
  const payload = bodyHttp(req)
  const result = await repository.create(req, payload)
  return baseResponse(res, result)
}

/**
 *
 * @param request as req
 * @param reply as res
 * @return {void}
*/
exports.fetch = async (req, res) => {
  const where = dynamicFilter(req, repository.COLUMN)
  const filter = paging(req, repository.DEFAULT_SORT)
  const order = dynamicOrder(filter)
  const options = { where, order, filter }
  const result = await repository.get(req, options)
  return paginationResponse(req, res, result)
}

/**
 *
 * @param request as req
 * @param reply as res
 * @return {void}
*/
exports.fetchByParam = async (req, res) => {
  const where = paramsHttp(req)
  const options = { where }
  const result = await repository.getByParam(req, options)
  return baseResponse(res, result)
}

/**
 *
 * @param request as req
 * @param reply as res
 * @return {void}
*/
exports.update = async (req, res) => {
  let type = ''
  if (req?.method === METHOD.DEL) {
    type = 'soft-delete'
  } else {
    type = 'update'
  }
  const options = optionsPayload(req, type)
  const result = await repository.update(req, options)
  return baseResponse(res, result)
}
