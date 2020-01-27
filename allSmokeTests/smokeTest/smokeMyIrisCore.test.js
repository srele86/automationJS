const puppeteer = require('puppeteer');

jest.setTimeout(80000);
describe('smokeMyIrisCore', ()=>{
    it ('Login page', async ()=>{
        const browser = await puppeteer.launch({
            headles : false
        });
        const page = await browser.newPage();
        const url = 'https://myiriscore.idprotectiononline.com/user/login';
        await page.goto(url);
         
        await page.type('input[id="username"]', 'Sreten.Sesic@us.generaliglobalassistance.com');
        await page.type('input[id="password"]', 'Redstar1986!');
        await page.click('input[id="saveButton"]');
        await page.waitForNavigation({ waitUntil : 'load'});
        await page.screenshot({path : "MyIrisCore.png"});

        await page.click('button[aria-label="My Account"]');
        await page.click('a[class="css-184o1l6"]');
        await page.waitFor(3000);

        await page.click('button[name="smsAllAlerts"]');
        await page.screenshot({path : "MyIrisCorepProfile.png"});

        await page.waitFor(3000);
        await page.click('div[class="wrap header-wrapper css-10vcvfo en65p551"]');
        await page.click('button[aria-label="My Account"]');

        await page.waitFor(3000);
        await page.click('button[class="css-1qm2ut8"]');
        


        await browser.close();
    
    
    })
})