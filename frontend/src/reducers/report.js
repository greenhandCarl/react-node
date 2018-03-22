import * as type from '../constants/actionTypes'
import createReducer from './creator'

const report = createReducer({}, {
  [type.QUERY_INCOME_REPORT + type.SUCCESS] (state, action) {
    return {...state, incomeData: action.response}
  },
  [type.GET_REPORT_FORMINFO + type.REQUEST] (state, action) {
    return {...state, loadding: true}
  },
  [type.GET_REPORT_FORMINFO + type.SUCCESS] (state, action) {
    return {...state, loadding: false, reportInfo: action.response}
  }
})

export default report
