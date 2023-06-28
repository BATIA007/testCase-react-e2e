const helloPage = require("../pageobjects/helloPage");

describe('Hello e2e test', () => {
  it('should toggle', async () => {
    await helloPage.open()
    await helloPage.toggle('123')
    await expect(helloPage.text).toBeExisting()
  });

  it('should toggle 2', async () => {
    await helloPage.open()
    await helloPage.toggle('123')
    await expect(helloPage.text).toBeExisting()
    await helloPage.btn.click()
    await expect(helloPage.text).not.toBeExisting()
  });

  it('should not toggle', async () => {
    await helloPage.open()
    await helloPage.toggle('1234')
    await expect(helloPage.text).not.toBeExisting()
  });

  it('should not toggle 2', async () => {
    await helloPage.open()
    await helloPage.toggle('123')
    await expect(helloPage.text).toBeExisting()
    await helloPage.toggle('1234')
    await expect(helloPage.text).toBeExisting()
  });
});