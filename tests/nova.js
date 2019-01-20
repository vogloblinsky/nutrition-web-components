const assert = require('assert');

describe('Nova badge page', () => {
    let novaBadge;

    before(function() {
        browser.url('http://localhost:8080/tests');
        novaBadge = $('nova-badge');
    });
    it('should have the right title', () => {
        const title = browser.getTitle();
        assert.equal(title, 'Nutrition Web Component - Nova badge');
    });
    it('should have the nova badge element hydrated', () => {
        const CSSClass = novaBadge.getAttribute('class');
        assert.equal(CSSClass, 'hydrated');
    });
    it('should have the nova badge score to 3', () => {
        let scoreElementValue = novaBadge.$(function() {
            return this.shadowRoot.querySelector('.score');
        });
        assert.equal(scoreElementValue.getText(), 3);
    });
    it('should have the nova badge score to 2 after score attribute updated', () => {
        browser.execute(() => {
            document.querySelector('nova-badge').setAttribute('score', 2);
        });
        let scoreElementValue = novaBadge.$(function() {
            return this.shadowRoot.querySelector('.score');
        });
        assert.equal(scoreElementValue.getText(), 2);
    });
});
