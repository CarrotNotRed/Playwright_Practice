import {test as simpleTest} from '../../fixtures/SimpleTestFixture';
import {test as loginTest} from '../../fixtures/LoginBeforeTestFixture';
import {test as pFixtures} from '../../fixtures/PageObjectTestFixture';
import {mergeTests} from "@playwright/test";

export const test = mergeTests(simpleTest, loginTest, pFixtures);

test('Title A', async ({initValue}) => {
    console.log('Test Execution');
    console.log(initValue);
})

test('Title B', async ({initValue, numberValue}) => {
    console.log('Test Execution');
    console.log(initValue, numberValue);
})

test('Title C', async ({login}) => {
    console.log('Test Execution');
})

test('Title D', async ({homePage}) => {
    const footerComp = homePage.footerComp();
    const links = await footerComp.customerServiceColumnComp().linksLoc();
    for (let link of links) {
        const linkTest = await link.innerText();
        console.log(`Link: ${linkTest}`);
    }
})


