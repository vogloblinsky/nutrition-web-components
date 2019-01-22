const assert = require('assert');

const WAIT_TIME_EDGE = 1000;

describe('Nova badge page', () => {
    let novaBadge,
        scoreElement,
        browserName = browser.capabilities.browserName;

    before(function() {
        browser.url('http://localhost:8080/nova/www/');
        novaBadge = $('nova-badge');

        if (browserName === 'MicrosoftEdge' || browserName === 'internet explorer') {
            // If no shadow-DOM
            scoreElement = $('nova-badge .score');
        } else {
            scoreElement = novaBadge.$(function() {
                return this.shadowRoot.querySelector('.score');
            });
        }
    });

    it('should have the right title', () => {
        const title = browser.getTitle();
        assert.equal(title, 'Nutrition Web Component - Nova badge');
    });

    it('should have the nova badge element hydrated', () => {
        const CSSClass = novaBadge.getAttribute('class');
        assert.notEqual(CSSClass.indexOf('hydrated'), -1);
    });

    it('should have the nova badge score to 1', () => {
        assert.equal(scoreElement.getText(), 1);
    });
    it('should have the nova badge score correct CSS class', () => {
        assert.notEqual(scoreElement.getAttribute('class').indexOf('one'), -1);
    });

    it('should have the nova badge score to 2 after score attribute updated', () => {
        browser.execute(() => {
            document.querySelector('nova-badge').setAttribute('score', '2');
        });
        browser.pause(WAIT_TIME_EDGE);
        assert.equal(scoreElement.getText(), 2);
    });
    it('should have the nova badge score correct CSS class', () => {
        assert.notEqual(scoreElement.getAttribute('class').indexOf('two'), -1);
    });

    it('should have the nova badge score to 1 if updated score > 4', () => {
        browser.execute(() => {
            document.querySelector('nova-badge').setAttribute('score', '5');
        });
        browser.pause(WAIT_TIME_EDGE);
        assert.equal(scoreElement.getText(), 1);
    });
});
