const assert = require('assert');

const WAIT_TIME_EDGE = 1000;

describe('Nutri-score badge page', () => {
    let nutriScoreBadge,
        scoreElement,
        browserName = browser.capabilities.browserName;

    before(function() {
        browser.url('http://localhost:8080/nutri-score/www/');
        nutriScoreBadge = $('nutri-score');

        if ((browserName === 'MicrosoftEdge')) {
            // If no shadow-DOM
            scoreElement = $('nutri-score .score');
        } else {
            scoreElement = nutriScoreBadge.$(function() {
                return this.shadowRoot.querySelector('.score');
            });
        }
    });

    it('should have the right title', () => {
        const title = browser.getTitle();
        assert.equal(title, 'Nutrition Web Component - Nutri-score badge');
    });

    it('should have the nutri-score badge element hydrated', () => {
        const CSSClass = nutriScoreBadge.getAttribute('class');
        assert.notEqual(CSSClass.indexOf('hydrated'), -1);
    });

    it('should have the nutri-score badge score to A', () => {
        assert.equal(scoreElement.getText(), 'A');
    });
    it('should have the nutri-score badge score correct CSS class', () => {
        assert.notEqual(scoreElement.getAttribute('class').indexOf('a'), -1);
    });

    it('should have the nutri-score badge score to B after score attribute updated', () => {
        browser.execute(() => {
            document.querySelector('nutri-score').setAttribute('score', 'B');
        });
        browser.pause(WAIT_TIME_EDGE);
        assert.equal(scoreElement.getText(), 'B');
    });
    it('should have the nutri-score badge score correct CSS class', () => {
        assert.notEqual(scoreElement.getAttribute('class').indexOf('b'), -1);
    });

    it('should have the nutri-score badge score to A if updated score > D', () => {
        browser.execute(() => {
            document.querySelector('nutri-score').setAttribute('score', 'F');
        });
        browser.pause(WAIT_TIME_EDGE);
        assert.equal(scoreElement.getText(), 'A');
    });
});
