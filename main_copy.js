const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
const fs = require("fs");

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, 0);
    });
}

async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "/usr/bin/google-chrome",
    });
    const page = await browser.newPage();
    await page.goto("https://www.surveymonkey.com/r/LWDR538");

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("ok-button");
        elements[0].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("answer-label");
        elements[4].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("next-button");
        elements[0].click();
    });

    await delay(250);

    await page.waitForNavigation({ waitUntil: "networkidle2" });

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("next-button");
        elements[0].click();
    });

    await page.waitForNavigation({ waitUntil: "networkidle2" });

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("next-button");
        elements[0].click();
    });

    await page.waitForNavigation({ waitUntil: "networkidle2" });

    await page.evaluate(() => {
        let elements = document.getElementsByClassName(
            "checkbox-button-label-text"
        );
        elements[5].click();
        elements[6].click();
        elements[7].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("ok-button");
        elements[0].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("answer-label");
        elements[16].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("ok-button");
        elements[0].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("no-touch");
        elements[0].ariaValueNow = "100";
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("ok-button");
        elements[0].value = " ";
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("textarea");
        elements[0].ariaValueNow = "100";
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("ok-button");
        elements[0].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("answer-label");
        elements[25].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("ok-button");
        elements[0].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("answer-label");
        elements[37].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("ok-button");
        elements[0].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("answer-label");
        elements[48].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("ok-button");
        elements[0].click();
    });

    await delay(250);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName("next-button");
        elements[0].click();
    });

    await browser.close();
}

run();
