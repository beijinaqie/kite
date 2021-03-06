const Seq = require('sequelize')
const shortid = require('shortid')
const time = require('../time')

module.exports = {
  NAME: 'article_column' /* 表名 */,
  TABLE: {
    /* 表结构 */
    /* 表结构 */
    id: {
      // ID
      type: Seq.INTEGER(10),
      primaryKey: true, // 定义主键
      autoIncrement: true, // 自动递增
      comment: 'id',
      field: 'id'
    },
    article_column_id: {
      // 文章专栏
      type: Seq.STRING(20),
      comment: '文章专栏',
      defaultValue: shortid.generate,
      field: 'article_column_id'
    },
    article_column_name: {
      // 专栏名字
      type: Seq.STRING(50),
      comment: '专栏名字',
      field: 'article_column_name'
    },
    article_column_en_name: {
      // 标签英文名字
      type: Seq.STRING(100),
      comment: '专栏英文名字',
      field: 'article_column_en_name'
    },
    article_column_icon: {
      // 专栏图标
      type: Seq.STRING(200),
      comment: '专栏地址',
      field: 'article_column_icon'
    },
    article_tag_ids: {
      // 专栏下属的标签名，以逗号隔开
      type: Seq.TEXT('long'),
      comment: '专栏下属的标签名，以逗号隔开',
      field: 'article_tag_ids'
    },
    article_column_description: {
      // 专栏描述
      type: Seq.STRING(100),
      comment: '专栏描述',
      field: 'article_column_description'
    },
    sort: {
      // 排序
      type: Seq.INTEGER(10),
      comment: '排序',
      field: 'sort'
    },
    is_home: {
      // 是否在首页头部显示
      type: Seq.BOOLEAN,
      comment: '是否在首页头部显示',
      field: 'is_home'
    },
    enable: {
      // 是否可以显示
      type: Seq.BOOLEAN,
      comment: '是否可以显示',
      field: 'enable'
    },
    ...time.create_date
  }
}
