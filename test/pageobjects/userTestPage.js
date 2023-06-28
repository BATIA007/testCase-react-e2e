const Page = require('./page')

class userTestPage extends Page {

  get loading() {
    return $('#user-loading')
  }

  get list() {
    return $('#user-list')
  }

  get users() {
    return browser.react$$('UserTestComponent')
  }

  async loadData() {
    try {
      await this.loading.waitForDisplayed({ timeout: 3000 })
      await this.list.waitForDisplayed({ timeout: 3000 })
    } catch (error) {
      throw Error('Error with loading users')
    }
  }

  async deleteUser(id = 0) {
    try {
      const count = await this.users.length

      if (!count) {
        throw new Error('Error with loading users')
      }

      await this.users[id].$('#user-delete').click()
      const count2 = await this.users.length

      if (count - 1 !== count2) {
        throw new Error('Error delete was not realized or delete more 1 users')
      }

    } catch (error) {
      throw new Error('Error with delete user' + error.message)
    }
  }

  open() {
    return super.open('/users-test')
  }
}

module.exports = new userTestPage()