'use strict';
// 需要额外配置时添加本文件
module.exports = {
//   target: 'web', // 客户端渲染打开
  entry: {
    'index/index': 'app/web/page/index/index.vue',
  },
  plugins: [
    { imagemini: false },
  ],
};
