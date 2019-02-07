import {
    expect,
    assert,
    fixture,
    aTimeout
} from '@open-wc/testing';

import {
    defineCustomElements
} from '../dist/esm/es2017/nova.define.js';
defineCustomElements(window);

describe('<nova-badge>', () => {
    it('Rendered by Stencil', async () => {
        const el = await fixture('<nova-badge></nova-badge>');
        await el.componentOnReady();

        expect(el.getAttribute('class')).to.equal('hydrated');
    });

    it('should have the nova badge score to 1', async () => {
        const el = await fixture('<nova-badge></nova-badge>');
        await el.componentOnReady();

        const scoreElement = el.shadowRoot.querySelector('.score');
        assert.equal(scoreElement.textContent, '1');
    });

    it('should have the nova badge score correct CSS class', async () => {
        const el = await fixture('<nova-badge></nova-badge>');
        await el.componentOnReady();

        const scoreElement = el.shadowRoot.querySelector('.score');
        assert.notEqual(scoreElement.getAttribute('class').indexOf('one'), -1);
    });

    it('should support shadow DOM', async () => {
        const canShadowDom = !!(
            document.createElement('div').attachShadow ||
            document.createElement('div').createShadowRoot
        );
        assert.isTrue(canShadowDom, 'Support SD');
    });

    it('should have the nova badge score to 2 after score attribute updated', async () => {
        const el = await fixture('<nova-badge></nova-badge>');
        await el.componentOnReady();
        el.setAttribute('score', '2');
        await aTimeout(1500);

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, '2');
        assert.equal(scoreElement.getAttribute('class').indexOf('one'), -1);
    });

    it('should have the nova badge score to 1 if updated score > 4', async () => {
        const el = await fixture('<nova-badge score="5"></nova-badge>');
        await el.componentOnReady();

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, '1');
    });
});
