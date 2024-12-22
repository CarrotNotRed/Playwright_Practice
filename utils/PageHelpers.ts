import {Page} from "@playwright/test";

export async function scrollPage(page: Page, scrollPercent: number) {
    await page.evaluate(scrollPercentage => {
        window.scrollTo(0, scrollPercentage * document.body.scrollHeight);
    }, scrollPercent);
}

export async function getAdSlot(page: Page, adSlotId: String) {
    return await page.evaluate(adSlotId => {
        // @ts-ignore
        const slot = googletag.pubads().getSlots().find(({getSlotElementId}) => {
            return getSlotElementId() === adSlotId;
        });
        return slot.getTargetingMap();
    }, adSlotId);
}

export async function waitForElementDisappeared(page: Page, loc: string) {
    return await page.waitForSelector(loc, {state: "hidden"});
}