import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reduer'
import user from '../modules/user/store/reducer'
import activities from '../modules/activity/store/reducer'

export default combineReducers({ auth, user, activities })
