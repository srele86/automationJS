const puppeteer = require('puppeteer');

jest.setTimeout(80000);
describe('MastercardIdps test', ()=>{
    it ('Login page', async ()=>{
        const browser = await puppeteer.launch({
            headless : false
                  });

  const page = await browser.newPage()
    
  const url = 'https://mastercardidps.staging-idp.com/user/login';
  await page.waitFor(4000);

  await page.goto(url);

  await page.type('input[id="username"]', 'Sreten.Sesic192020229@us.generaliglobalassistance.com');
  await page.type('input[id="password"]', 'P@assword1');
  await page.click('input[id="saveButton"]');
  await page.waitFor(10000);

  //await page.waitForNavigation({ waitUntil : 'load'});
  
  await page.click('button[aria-label="My Account"]');
  await page.waitFor(4000);

  await page.click('a[class="css-1ejsyo8"]');
//  const linkHandlers = await page.$x("//a[contains(text(), 'css-1ejsyo8')]");
//  if (linkHandlers.length > 0) {
 // await linkHandlers[0].click();
//} else {
 // throw new Error("Link not found");
//}

  await page.waitFor(4000);
  await page.click('button[class="e1srqtq40 css-11vx062"]');

  await page.screenshot({path : "mastercard.png"});
  
  await page.type('input[name="city"]', 'Fenix');
  await page.click('button[class="css-1868qxm"]');
  await page.waitFor(4000);

  await page.click('button[class="css-wk18yo"]');
  await page.waitFor(7000);
  
  // phone # input
  await page.type('input[name="phone"]', '2408083308');
  await page.waitFor(3000);
  // radio button
  await page.click('input[type="radio"]');
  // checkbox
  await page.click('input[id="accept"]');

  await page.click('button[class="css-1epbs95"]');

  await page.waitFor(3000);
  await page.click('img[src="https://d1tgwfv75yuvfs.cloudfront.net/images/MasterCard/brand-logo-gga.png"]');
  await page.waitFor(3000);
  await page.click('button[aria-label="My Account"]');
  await page.click('button[class="css-q4n1al"]');

  await page.screenshot({path : "mastercardProfile.png"});
  await page.waitFor(4000);        

  await browser.close();
 
})
})