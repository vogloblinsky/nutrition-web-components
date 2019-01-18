import { newE2EPage } from '@stencil/core/testing';

describe('nutri-score', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<nutri-score></nutri-score>');
        const element = await page.find('nutri-score');
        expect(element).toHaveClass('hydrated');
    });
});
