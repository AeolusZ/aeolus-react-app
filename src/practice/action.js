import {post} from '../FetchApi'

const getDb = (reqBody) => {
   return (dispatch) => {
     return post('http://localhost:3000/db', reqBody)
        .then(res => {
            return dispatch({
                type: 'fetch-db-success',
                payload: res
            })
        })
        .catch(err => {
           return dispatch({
                type: 'fetch-db-failure'
            })
        })
    }
}
export default {getDb}