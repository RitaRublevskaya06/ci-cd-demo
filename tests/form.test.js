const fs = require('fs');
const path = require('path');

describe('Contact Form Tests (без браузера)', () => {
    let htmlContent;

    beforeAll(() => {
        const filePath = path.join(__dirname, '..', 'index.html');
        htmlContent = fs.readFileSync(filePath, 'utf8');
    });

    test('Page title should be "CI/CD Demo"', () => {
        const match = htmlContent.match(/<title>(.*?)<\/title>/);
        expect(match[1]).toBe('CI/CD Demo');
    });

    test('Form should have input with id="name"', () => {
        expect(htmlContent).toContain('id="name"');
    });

    test('Form should have input with id="email"', () => {
        expect(htmlContent).toContain('id="email"');
    });

    test('Form should have button with id="submitBtn"', () => {
        expect(htmlContent).toContain('id="submitBtn"');
    });

    test('Page should have paragraph with id="message"', () => {
        expect(htmlContent).toContain('id="message"');
    });
});