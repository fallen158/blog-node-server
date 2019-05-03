const crypto = require('crypto')

// 密钥
const SECRET_KEY = 'APNG@#_8932jbhdjsa_!ds139821DKLSPCCNOP22705246122814837'

// md5加密
function md5 (content) {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

// 加密函数
function genPassword (password) {
  const str = `password=${password}&key=${SECRET_KEY}&value=dnijiosa@xsas!#@`
  return md5(str)
}

console.log(genPassword('123'))
module.exports = {
  genPassword
}
