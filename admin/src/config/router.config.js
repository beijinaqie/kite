export default [
  // user
  {
    path: '/sign_in',
    title: '登录',
    component: () => import('../containers/Sign/view/SignIn')
  },
  {
    path: '/manager',
    component: require('../containers/Manager/view/Manager').default,
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      /*  {path: '/', redirect: '/dashboard/analysis'}, */
      {
        path: '/manager/index',
        name: 'Index',
        title: '首页',
        component: () => import('../containers/Index/view/index') // 首页
      },
      {
        path: '/manager/user',
        name: 'User',
        title: '前台用户管理',
        component: () => import('../containers/User/view/User') // 前台用户
      },
      {
        path: '/manager/article',
        name: 'Article',
        title: '文章汇总',
        component: () => import('../containers/Article/view/Article') // 文章汇总
      },
      {
        path: '/manager/article_tag',
        name: 'ArticleTag',
        title: '文章标签',
        component: () => import('../containers/ArticleTag/view/ArticleTag') // 文章标签
      },
      {
        path: '/manager/article_column',
        name: 'ArticleColumn',
        title: '文章专栏',
        component: () =>
          import('../containers/ArticleColumn/view/ArticleColumn') // 文章专栏
      },
      {
        path: '/manager/user_role',
        name: 'UserRole',
        title: '用户角色',
        component: () => import('../containers/UserRole/view/UserRole') // 用户角色
      },
      {
        path: '/manager/user_authority',
        name: 'UserAuthority',
        title: '用户权限',
        component: () =>
          import('../containers/UserAuthority/view/UserAuthority') // 用户权限
      },
      {
        path: '/manager/user_avatar_review',
        name: 'UserAvatarReview',
        title: '用户头像审核',
        component: () => import('../containers/AvatarReview/view/AvatarReview') // 用户头像审核
      },
      {
        path: '/manager/picture',
        name: 'Picture',
        title: '图片管理',
        component: () => import('../containers/Picture/view/Picture') // 图片管理
      },
      {
        path: '/manager/comment',
        name: 'Comment',
        title: '评论管理',
        component: () => import('../containers/Comment/view/Comment') // 评论管理
      },
      {
        path: '/manager/admin_user',
        name: 'AdminUser',
        title: '后台管理员管理',
        component: () => import('../containers/AdminUser/view/AdminUser') // 后台管理员
      },
      {
        path: '/manager/admin_role',
        name: 'AdminRole',
        title: '后台角色',
        component: () => import('../containers/AdminRole/view/AdminRole') // 后台角色
      },
      {
        path: '/manager/admin_authority',
        name: 'AdminAuthority',
        title: '后台权限',
        component: () =>
          import('../containers/AdminAuthority/view/AdminAuthority') // 后台权限
      },
      {
        path: '/manager/system_config',
        name: 'SystemConfig',
        title: '系统配置',
        component: () => import('../containers/SystemConfig/view/SystemConfig') // 系统配置
      },
      {
        path: '/manager/admin_system_log',
        name: 'AdminSystemLog',
        title: '后台系统日志',
        component: () =>
          import('../containers/AdminSystemLog/view/AdminSystemLog') // 后台系统日志
      },
      {
        path: '/manager/website_config',
        name: 'WebsiteConfig',
        title: '网站配置',
        component: () =>
          import('../containers/WebsiteConfig/view/WebsiteConfig') // 网站配置
      }
    ]
  }
]
