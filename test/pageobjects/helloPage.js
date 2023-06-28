const Page = require('./page')

class HelloPage extends Page {

  get btn() {
    return $('#hello-btn')
  }

  get input() {
    return $('#hello-input')
  }

  get text() {
    return $('#hello-text')
  }

  async toggle(text) {
    await this.input.setValue(text)
    await this.btn.click()
  }

  open() {
    return super.open('/hello')
  }
}

module.exports = new HelloPage()