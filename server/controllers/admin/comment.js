const models = require('../../../db/mysqldb/index')
const { sign_resJson, admin_resJson } = require('../../utils/res_data')
const {
  tools: { encrypt }
} = require('../../utils/index')
const config = require('../../config')
const moment = require('moment')
const Op = require('sequelize').Op

function err_mess (message) {
  this.message = message
  this.name = 'UserException'
}

class Comment {
  /**
   * 获取标分页评论列表操作
   * @param   {object} ctx 上下文对象
   */
  static async get_comment_list (ctx) {
    const { page = 1, pageSize = 10, content, status } = ctx.request.body
    try {
      let where_params = {} // 定义查询条件

      content && (where_params['content'] = { [Op.like]: `%${content}%` })
      status && (where_params['status'] = status)

      let { count, rows } = await models.comment.findAndCountAll({
        where: where_params, // 为空，获取全部，也可以自己添加条件
        offset: (page - 1) * Number(pageSize), // 开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
        limit: Number(pageSize) // 每页限制返回的数据条数
      })

      for (let i in rows) {
        rows[i].setDataValue(
          'create_at',
          await moment(rows[i].create_date).format('YYYY-MM-DD H:m:s')
        )
        rows[i].setDataValue(
          'article',
          (await models.article.findOne({
            where: { aid: rows[i].aid },
            attributes: ['aid', 'title']
          })) || []
        )
      }

      admin_resJson(ctx, {
        state: 'success',
        message: '返回成功',
        data: {
          count: count,
          list: rows
        }
      })
    } catch (err) {
      admin_resJson(ctx, {
        state: 'error',
        message: '错误信息：' + err.message
      })
    }
  }

  /**
   * 更新评论
   * @param   {object} ctx 上下文对象
   */
  static async update_comment (ctx) {
    const req_data = ctx.request.body
    try {
      await await models.comment.update(
        {
          status: req_data.status
        },
        {
          where: {
            id: req_data.id // 查询条件
          }
        }
      )
      admin_resJson(ctx, {
        state: 'success',
        message: '更新评论成功'
      })
    } catch (err) {
      admin_resJson(ctx, {
        state: 'error',
        message: '错误信息：' + err.message
      })
    }
  }

  /**
   * 删除评论
   */
  static async delete_comment (ctx) {
    const { id } = ctx.request.body
    try {
      let find_comment = await models.comment.findOne({ where: { id } })
      await models.comment.destroy({ where: { id } })
      await models.article.update(
        {
          // 更新文章评论数
          comment_count: await models.comment.count({
            where: {
              aid: find_comment.aid,
              parent_id: 0
            }
          })
        },
        { where: { aid: find_comment.aid } }
      )

      admin_resJson(ctx, {
        state: 'success',
        message: '删除用户评论成功'
      })
    } catch (err) {
      admin_resJson(ctx, {
        state: 'error',
        message: '错误信息：' + err.message
      })
    }
  }
}

module.exports = Comment
