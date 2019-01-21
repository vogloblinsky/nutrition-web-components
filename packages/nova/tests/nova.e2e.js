const assert = require('assert');

describe('Nova badge page', () => {
    let novaBadge;

    before(function() {
        browser.url('http://localhost:8080');
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

    it('should have the nova badge score to 1', () => {
        let scoreElementValue = novaBadge.$(function() {
            return this.shadowRoot.querySelector('.score');
        });
        assert.equal(scoreElementValue.getText(), 1);
    });
    it('should have the nova badge score correct CSS class', () => {
        let scoreElementValue = novaBadge.$(function() {
            return this.shadowRoot.querySelector('.score');
        });
        assert.equal(scoreElementValue.getAttribute('class'), 'score one');
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
    it('should have the nova badge score correct CSS class', () => {
        let scoreElementValue = novaBadge.$(function() {
            return this.shadowRoot.querySelector('.score');
        });
        assert.equal(scoreElementValue.getAttribute('class'), 'score two');
    });

    it('should have the nova badge score to 1 if updated score > 4', () => {
        browser.execute(() => {
            document.querySelector('nova-badge').setAttribute('score', 5);
        });
        let scoreElementValue = novaBadge.$(function() {
            return this.shadowRoot.querySelector('.score');
        });
        assert.equal(scoreElementValue.getText(), 1);
    });
});
