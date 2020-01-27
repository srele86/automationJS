const puppeteer = require('puppeteer');

jest.setTimeout(80000);
describe('GeicoIdps Smoke test', ()=>{
    it ('Login page', async ()=>{
        const browser = await puppeteer.launch({
            headless : false,
            //slowMo : 150
        });

  const page = await browser.newPage();
    
  const url = 'https://geico.idprotectiononline.com/user/login';
  await page.goto(url);
  
  await page.type('input[id="username"]','Sreten.Sesic1142020500@us.generaliglobalassistance.com');
  await page.type('input[id="password"]','P@assword1');
  await page.click('input[id="saveButton"]');
  //await page.waitFor(15000);
  await page.waitForNavigation({ waitUntil : 'load'});

  await page.click('button[aria-label="My Account"]');
  await page.waitFor(4000);
  await page.click('a[class="css-184o1l6"]');
  await page.waitFor(4000);
  await page.click('button[class="e1srqtq40 css-1iuqhb0"]');
  await page.waitFor(3000);

  await page.click('div[id="nameSuffix"]');
  await page.waitFor(3000);

  //await page.click('div[title="Jr"]');
  await page.click('button[class="e10yvvvp0 css-vs3itg"]');

  

  await page.screenshot({path : "GeicoIdp.png"});
  await page.waitFor(3000);  
  
  const metrics = await page.metrics();
  console.log(metrics);

  await browser.close();
 
})
})