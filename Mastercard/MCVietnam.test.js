const puppeteer = require('puppeteer');

jest.setTimeout(80000);
describe('MC Vietnam test', ()=>{
    it ('Login page', async ()=>{
        const browser = await puppeteer.launch({
            headless : false
        });

  const page = await browser.newPage()
    
  const url = 'https://mastercardidps.staging-idp.com/user/login';
  await page.waitFor(4000);

  await page.goto(url);


  await page.screenshot({path : "mastercardProfile.png"});
  await page.waitFor(4000);        

  await browser.close();
 
})
})