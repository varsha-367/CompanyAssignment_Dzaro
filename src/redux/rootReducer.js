import { combineReducers } from 'redux';
import companyDetailsReducer from '../CompanyForm/companyForm.reducer'

const rootReducer = combineReducers({
    companyDetailsReducer:companyDetailsReducer,
});

export default rootReducer;
