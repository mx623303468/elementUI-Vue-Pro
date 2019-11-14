// 引入 axios request
import request from '@/utils/request'

/**
 * 示例1：
 * 登录的方法
 * @param {Boolean} data
 * @param {String} data.username 用户名
 * @param {String} data.password 密码
 */
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
