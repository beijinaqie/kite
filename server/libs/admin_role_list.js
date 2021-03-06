const config = require('../config')
const admin_authority_list = require('./admin_authority_list')
let operatingArr = []
admin_authority_list.map(item => {
  if (item.authority_type === '2') {
    operatingArr.push(item.authority_id)
  }
})

module.exports = [
  {
    // 初始化创建超管，并且只有一个超管的角色，否则会报错
    role_id: config.SUPER_ROLE_ID,
    role_name: 'super admin',
    role_description: 'super admin',
    admin_authority_ids: operatingArr.join(',')
  }
]
