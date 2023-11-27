const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.alura.com.br/formacao-front-end");
//   await page.screenshot({ path: "example.png" });

//   await browser.close();
// })();

const url =  "https://www.mercadolivre.com.br/";
const searchFor = "macbook";

(async ()=> {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  console.log("iniciei !");

  await page.goto(url);
  console.log("fui para a url !");

  await page.waitForSelector('#cb1-edit');

  await page.type('#cb1-edit', searchFor);

  await Promise.all([
    page.waitForNavigation(),
    page.click('.nav-search-btn')
  ])

  await page.waitForTimeout(3000)

  await browser.close();
})();