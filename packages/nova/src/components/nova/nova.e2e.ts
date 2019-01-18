import { newE2EPage } from '@stencil/core/testing';

describe('nova', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<nova-badge></nova-badge>');
        const element = await page.find('nova-badge');
        expect(element).toHaveClass('hydrated');
    });
});
