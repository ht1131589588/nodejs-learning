'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
    app.root_path = __dirname;
  }
  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }
  configDidLoad() {
    // Config, plugin files have been loaded.
  }
  async didLoad() {
    // All files have loaded, start plugin here.
  }
  async willReady() {
    // All plugins have started, can do some thing before app ready
  }
  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
    console.log('========Init Data=========');
    // 创建一个匿名上下文
    const ctx = await this.app.createAnonymousContext();
    // 删除数据（清除现场处理）
    await ctx.model.User.remove();
    // 初始化数据
    await ctx.service.user.create({
      mobile: '18086523212',
      password: '111111',
      realName: '老夏',
    });
  }
  async serverDidReady() {
    // Do some thing before app DidReady.
  }
  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;
