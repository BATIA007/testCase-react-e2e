const userTestPage = require("../pageobjects/userTestPage");

describe('User test e2e', () => {
  it('should load data', async () => {
    await userTestPage.open()
    await userTestPage.loadData()
  });
  it('should delete users', async () => {
    await userTestPage.open()
    await userTestPage.loadData()
    await userTestPage.deleteUser(5)
  });
});