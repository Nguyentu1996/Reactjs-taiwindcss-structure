/* eslint-disable no-unused-vars */
import { call, put } from 'redux-saga/effects'
import Notification from '../../components/modals/notification'

export default function sagaHelper({ api, success, message }) {
  return function* ({ type, data, callback }) {
    const requestType = `${type}_REQUEST`
    const successType = `${type}_SUCCESS`
    const failureType = `${type}_FAILURE`
    try {
      yield put({ type: requestType, payload: data })
      let result = yield call(api, data)
      yield put({ type: successType, data: result, payload: data })
      if (success) {
        Notification.success(success)
      }

      if (callback) callback(true, result)
    } catch (exception) {
      yield put({ type: failureType, exception })
    }
  }
}
