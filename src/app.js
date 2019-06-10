const puppeteer = require('puppeteer')
const chalk = require('chalk')
const config = require('./config/default')
const srcToImg = require('./helper/srcToImg')

class App {
    constructor(conf) {
        this.conf = Object.assign({}, config, conf);
    }

    async start(){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(this.conf.searchPath);
        console.log(chalk.green(`go to ${this.conf.searchPath}`));

        await page.setViewport({
            width: 1920,
            height: 700
        })

        await page.focus('#kw')

        await page.keyboard.sendCharacter(this.conf.keyword)

        await page.click('.s_search')

        console.log(chalk.green(`get start searching pictures`))

        page.on('load', async ()=> {
            console.log(chalk.green(`searching pictures done, start fetch...`));
            
            const srcs = await page.$$eval('img.main_img', pictures => {
                return pictures.map(img => img.src);
            })

            console.log(chalk.green(`get ${srcs.length} pictures, start download`))

            srcs.forEach(async (src) => {
                await page.waitFor(200)
                await srcToImg(src, this.conf.outputPath)
            })
            await browser.close();
        })
    }
}

module.exports = App;