import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as activitiesActions from './store/actions'

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function activityAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('/activities', transformRequest(params))
        .then(res => {
          dispatch(activitiesActions.add(transformResponse(res.data)))
          return resolve()
        })
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: '',
              replaceStr: '',
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
}

export function activityUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`activities/${params.id}`, transformRequest(params))
        .then(res => {
          dispatch(activitiesActions.add(transformResponse(res.data)))
          return resolve()
        })
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: '',
              replaceStr: '',
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
}

export function activityRemoveRequest(id) {
  return dispatch => {
    Http.delete(`activities/${id}`)
      .then(() => {
        dispatch(activitiesActions.remove(id))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function activityListRequest({pageNumber = 1, url = '/activities'}) {
  return dispatch => {
    if (pageNumber > 1) {
      url = url + `?page=${pageNumber}`
    }

    Http.get(url)
      .then((res) => {
        dispatch(activitiesActions.list(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function activityEditRequest(id) {
  return dispatch => {
    Http.get(`activities/${id}`)
      .then((res) => {
        dispatch(activitiesActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function activityFetchRequest(slug) {
  return dispatch => {
    Http.get(`activities/published/${slug}`)
      .then((res) => {
        dispatch(activitiesActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}