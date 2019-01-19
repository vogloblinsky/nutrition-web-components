import { newE2EPage } from '@stencil/core/testing';

const testCSSScoreClass = async (page, classString) => {
    const elementScore = await page.evaluateHandle(
        `document.querySelector('nova-badge').shadowRoot.querySelector('.score')`
    );
    const classNameElement = await elementScore.getProperty('className');
    const classNames = await classNameElement.jsonValue();
    const classNamesArray = classNames.split(' ');
    return expect(classNamesArray).toContain(classString);
};

describe('nova', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<nova-badge score="1"></nova-badge>');
        const element = await page.find('nova-badge');
        expect(element).toHaveClass('hydrated');
    });

    it('Score container has one CSS class', async () => {
        const page = await newE2EPage();

        await page.setContent('<nova-badge score="1"></nova-badge>');
        await testCSSScoreClass(page, 'one');
    });

    it('If change score, test score container has new CSS class', async () => {
        const page = await newE2EPage();

        await page.setContent('<nova-badge score="1"></nova-badge>');
        /* If score > 4, test score container has one CSS class */
        await page.$eval('nova-badge', (elm: any) => {
            elm.score = '3';
        });
        await page.waitForChanges();

        await testCSSScoreClass(page, 'three');
    });

    it('If change score > 4, test score container has one CSS class', async () => {
        const page = await newE2EPage();

        await page.setContent('<nova-badge score="1"></nova-badge>');
        /* If score > 4, test score container has one CSS class */
        await page.$eval('nova-badge', (elm: any) => {
            elm.score = '5';
        });
        await page.waitForChanges();

        await testCSSScoreClass(page, 'one');
    });
});
