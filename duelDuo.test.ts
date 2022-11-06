
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Add to Duo displays when clicked', async () => {
    const addDuo = await driver.findElement(By.className('bot-btn'))
    const display = await driver.findElement(By.id("player-duo"))
    const view = await display.isDisplayed()

    await addDuo.click()
    expect(view).toBe(true)
    await driver.sleep(2000)
} )

test ('Clicking on Draw displays div',async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const divChoice = await driver.findElement(By.id('choices'))
    const divChoicDisplay = await divChoice.isDisplayed()
    await drawBtn.click()
    expect(divChoicDisplay).toBe(true)
})

test ('see all bots btn shows up',async () => {
    const seeAll = await driver.findElement(By.id('see-all'))
    const seeAllDisplay = await seeAll.isDisplayed();
    expect(seeAllDisplay).toBe(true);
})