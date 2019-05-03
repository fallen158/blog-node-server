class BassMode {
  constructor (data, message) {
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SussesMode extends BassMode {
  constructor (data, message) {
    super(data, message)
    this.code = 0
  }
}

class ErrorMode extends BassMode {
  constructor (data, message) {
    super(data, message)
    this.code = 1
  }
}

module.exports = {
  SussesMode,
  ErrorMode
}
