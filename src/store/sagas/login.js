import { takeLatest } from 'redux-saga/effects'
import { TYPES } from '../actions'
import sagaHelper from './saga-helper'
import { login } from '../../api/login'

export default function* watchFetchData() {
  yield takeLatest(TYPES.LOGIN, sagaHelper({ api: login }))
}
