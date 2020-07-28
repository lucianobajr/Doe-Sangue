import { all } from 'redux-saga/effects'

import donor from './donor/sagas'

export default function* rootSaga() {
    return yield all([donor])
}