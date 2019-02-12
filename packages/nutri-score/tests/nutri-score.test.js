import {
    expect,
    assert,
    fixture,
    aTimeout
} from '@open-wc/testing';

import {
    defineCustomElements
} from '../dist/esm/es2017/nutri-score.define.js';
defineCustomElements(window);

describe('<nutri-score>', () => {
    it('Rendered by Stencil', async () => {
        const el = await fixture('<nutri-score></nutri-score>');

        expect(el.getAttribute('class')).to.equal('hydrated');
    });

    it('should have the nutri-score badge score to A', async () => {
        const el = await fixture('<nutri-score></nutri-score>');

        const scoreElement = el.shadowRoot.querySelector('.score');
        assert.equal(scoreElement.textContent, 'A');
    });

    it('should have the nutri-score badge score correct CSS class', async () => {
        const el = await fixture('<nutri-score></nutri-score>');

        const scoreElement = el.shadowRoot.querySelector('.score');
        assert.notEqual(scoreElement.getAttribute('class').indexOf('a'), -1);
    });

    it('should support shadow DOM', async () => {
        const canShadowDom = !!(
            document.createElement('div').attachShadow ||
            document.createElement('div').createShadowRoot
        );
        assert.isTrue(canShadowDom, 'Support SD');
    });

    it('should have the nutri-score badge score to B after score attribute updated', async () => {
        const el = await fixture('<nutri-score></nutri-score>');

        el.setAttribute('score', 'B');
        await aTimeout(1500);

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, 'B');
        assert.equal(scoreElement.getAttribute('class').indexOf('a'), -1);
    });

    it('should have the nutri-score badge score to A if updated score > E', async () => {
        const el = await fixture('<nutri-score score="F"></nutri-score>');

        const scoreElement = el.shadowRoot.querySelector('.score');

        assert.equal(scoreElement.textContent, 'A');
    });

    it('should support vertical mode', async () => {
        const el = await fixture('<nutri-score score="F" vertical></nutri-score>');

        const containerElement = el.shadowRoot.querySelector('.container');

        assert.notEqual(containerElement.getAttribute('class').indexOf('vertical'), -1);
    });
});
