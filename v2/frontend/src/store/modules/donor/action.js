export function donorRequest(name, email, blood) {
    return {
        type: '@donors/DONOR_REQUEST',
        payload: { name, email, blood }
    }
}
export function donorFailure() {
    return {
        type: '@donors/DONOR_FAILURE',
    }
}