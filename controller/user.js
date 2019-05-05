const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')
const { SussessModel, ErrorModel } = require('../model/resModel')

const register = async (username, password) => {
  // 预防 sql 注入
  username = escape(username)
  // 生成加密密码
  password = genPassword(password)
  password = escape(password)
  let currentTime = new Date().getTime()
  let PASSWORD = `password`
  const verifyUser = `select username,realname from users where username=${username}`
  const sql = `insert into users(username,${PASSWORD},register_time,register_ip) values (${username},${password},${currentTime},'127.0.0.1');`
  const data = await exec(sql)
  const rows = await exec(verifyUser)
  if (rows.length !== 0) {
    return new ErrorModel('用户名重复')
  }
  if (data) {
    return new SussessModel('注册成功')
  }
}

const login = async (username, password) => {
  // 预防 sql 注入
  username = escape(username)
  // 验证加密密码
  password = genPassword(password)
  password = escape(password)
  const verifyUser = `select username,realname from users where username=${username}`
  const sql = `select username,realname from users where username=${username} and password=${password}`
  const rows = await exec(verifyUser)
  const data = await exec(sql)
  if (rows.length === 0) {
    return new ErrorModel('用户名不存在!')
  }
  if (data.length !== 0) {
    return new SussessModel(data[0], '登录成功')
  }
  return new ErrorModel('密码错误!')
}

module.exports = {
  register,
  login
}
