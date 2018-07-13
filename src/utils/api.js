const requestData = {}
export default function api(param, paramData) {
  requestData.url = param.url
  requestData.method = param.method
  requestData.data = paramData

  return new Promise((resolve, reject) => {
    requestData.success = (data) => {
      resolve(data)
    }

    requestData.fail = (data) => {
      reject(data)
    }

    if (param.url) {
      wx.request(requestData)
    }
  })
}
