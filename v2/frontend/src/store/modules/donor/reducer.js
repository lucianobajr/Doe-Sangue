import produce from 'immer'

const INITIAL_STATE = {
    name: null,
    email: null,
    blood: null
}

export default function donor(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@donors/DONOR_REQUEST':
                {
                    draft.name = action.payload.name
                    draft.email = action.payload.email
                    draft.blood = action.payload.donor
                    break;
                }
            default:
        }
    })
}