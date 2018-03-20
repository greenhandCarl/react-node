import * as type from '../contants/actionTypes'
import asios from 'axios'

export function queryIncomeReport (params, after) {
  return {
    actionType: type.QUERY_INCOME_REPORT,
    callAPI: asios.get('/api/repot/business-income-detail', {params}),
    payload: params,
    after: after()
  }
}