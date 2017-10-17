module.exports = class {
  static create() {
    return new this();
  }

  async generateCode(appModulePrefix, branch) {
    return "alert('hello')";
  }
}
