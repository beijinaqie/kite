import http from '../../../utils/http'

export const get_system_config_info = (data, callback) => {
  return (dispatch) => {
    http.get('/system-config/info', data)
      .then(result => {
        if (callback) {
          callback(result)
        }
        return dispatch({
          type: 'SET_SYSTEM_CONFIG_INFO',
          data: result.info
        })
      })
  }
}

export const update_system_config_info = (data, callback) => {
  return (dispatch) => {
    http.post('/system-config/update', data)
      .then(result => {
        if (callback) {
          callback(result)
        }
      })
  }
}
