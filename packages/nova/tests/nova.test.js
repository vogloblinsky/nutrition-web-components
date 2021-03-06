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

        expect(el.getAttribute('class')).to.equal('hydrated');
    });

    it('should have the nova badge score to 1', async () => {
        const el = await fixture('<nova-badge></nova-badge>');

        const scoreElement = el.shadowRoot.querySelector('.score');
        assert.equal(scoreElement.textContent, '1');
    });

    it('should have the nova badge score correct CSS class', async () => {
        const el = await fixture('<nova-badge></nova-badge>');

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

        el.setAttribute('score', '2');
        await aTimeout(1500);

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, '2');
        assert.equal(scoreElement.getAttribute('class').indexOf('one'), -1);
    });

    it('should have the nova badge score to 1 if updated score > 4', async () => {
        const el = await fixture('<nova-badge score="5"></nova-badge>');

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, '1');
    });

    it('should render others values - 2', async () => {
        const el = await fixture('<nova-badge score="2"></nova-badge>');

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, '2');
    });

    it('should render others values - 3', async () => {
        const el = await fixture('<nova-badge score="3"></nova-badge>');

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, '3');
    });

    it('should render others values - 4', async () => {
        const el = await fixture('<nova-badge score="4"></nova-badge>');

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, '4');
    });
});
