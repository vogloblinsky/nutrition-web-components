const assert = require('assert');

describe('Nova badge page', () => {
    let novaBadge,
        scoreElement;

    before(function() {
        browser.url('http://localhost:8080');
        novaBadge = $('nova-badge');
        scoreElement = novaBadge.$(function() {
            return this.shadowRoot.querySelector('.score');
        });
        if (!scoreElement) {
            // If no shadow-DOM
            scoreElement = novaBadge.$(function() {
                return this.querySelector('.score');
            });
        }
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
        assert.equal(scoreElement.getText(), 1);
    });
    it('should have the nova badge score correct CSS class', () => {
        assert.equal(scoreElement.getAttribute('class'), 'score one');
    });

    it('should have the nova badge score to 2 after score attribute updated', () => {
        browser.execute(() => {
            document.querySelector('nova-badge').setAttribute('score', 2);
        });
        assert.equal(scoreElement.getText(), 2);
    });
    it('should have the nova badge score correct CSS class', () => {
        assert.equal(scoreElement.getAttribute('class'), 'score two');
    });

    it('should have the nova badge score to 1 if updated score > 4', () => {
        browser.execute(() => {
            document.querySelector('nova-badge').setAttribute('score', 5);
        });
        assert.equal(scoreElement.getText(), 1);
    });
});
