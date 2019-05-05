const { exec, escape } = require('../db/mysql')
const getList = async (author, keyword) => {}
const newBlog = async blogData => {}
const delBlog = async (id, author) => {}
const getDetail = async id => {}
const updateBlog = async (id, blogData) => {}

module.exports = {
  getList,
  newBlog,
  delBlog,
  getDetail,
  updateBlog
}
