
export const setCompanyDetails = (data) => {
return {
    type: 'setDetails',
    payload: data,
}
}
export const clearStore = () => {
    return {
        type: 'clearStore',
        payload: [],
    }
    }