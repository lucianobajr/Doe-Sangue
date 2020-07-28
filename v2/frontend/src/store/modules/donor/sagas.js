import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import { donorFailure } from './action'

function* donors({ payload }) {
    try {
        const { name, email, blood } = payload

        yield call(api.post, 'donors', {
            name,
            email,
            blood
        })

        toast.success('Obrigado por ajudar! Entraremos em contato por email.')
    } catch (error) {
        toast.error('Falha no cadastro, verifique seus dados!')

        yield put(donorFailure())
    }
}

export default all([
    takeLatest('@donors/DONOR_REQUEST', donors)
])