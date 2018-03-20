import * as type from '../constants/actionTypes'
import asios from 'axios'
import qs from 'qs'

export function queryBusiness (params, after) {
  return {
    actionType: type.QUERY_BUSINESS,
    callAPI: axios.get('/api/project', {params}),
    payload: params,
    after: after()
  }
}