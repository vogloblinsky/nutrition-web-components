import { newE2EPage } from '@stencil/core/testing';

describe('nova', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<nova-badge score="1"></nova-badge>');
        const element = await page.find('nova-badge');
        expect(element).toHaveClass('hydrated');

        /* Test score container has one CSS class */
        const elementScore = await page.evaluateHandle(
            `document.querySelector('nova-badge').shadowRoot.querySelector('.score')`
        );
        const classNameElement = await elementScore.getProperty('className');
        const classNames = await classNameElement.jsonValue();
        const classNamesArray = classNames.split(' ');
        expect(classNamesArray).toContain('one');

        /* If score > 4, test score container has one CSS class */
    });
});
