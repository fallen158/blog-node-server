const { exec, escape } = require('../db/mysql');
const { genPassword } = require('../utils/cryp');
const register = async (username, password) => {
  username = escape(username);
  // 生成加密密码
  password = genPassword(password);
  password = escape(password);
  let currentTime = new Date().getTime()
  let PASSWORD = `password`
  const sql = `insert into users(username,${PASSWORD},register_time,register_ip) values (${username},${password},${currentTime},'127.0.0.1');`
  const rows = await exec(sql);
  return rows[0] || {};
};

const login = async (username, password) => {
    username = escape(username);
    // 生成加密密码
    password = genPassword(password)
    password = escape(password);
    const sql = `select username,realname from users where username=${username} and password=${password}`;
    const rows = await exec(sql)
    return rows[0] || {}
  };

module.exports = {
  register,
  login
};
