

const initialState = {
    CompanyTable: [],
    Sectors:['Medical','Information technology','E-Commerce','Finance','Banking','Government','Others'],
}
const companyDetailsReducer = (state= initialState, action) =>  {
    switch (action.type) {
      case 'setDetails':
        return { ...state, CompanyTable:[...state.CompanyTable, action.payload]}
      case 'clearStore':
        return {...state, CompanyTable:action.payload}
      default:
        return state;
    }
  }
  export default companyDetailsReducer;