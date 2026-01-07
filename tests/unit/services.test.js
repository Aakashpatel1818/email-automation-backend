const excelService = require('../../src/services/excelService');
const templateService = require('../../src/services/templateService');

describe('Services', () => {
  test('validateEmails removes invalid emails', () => {
    const emails = [
      { email: 'valid@email.com' },
      { email: 'invalid' }
    ];
    const valid = excelService.validateEmails(emails);
    expect(valid.length).toBe(1);
  });

  test('personalize replaces variables', () => {
    const template = 'Hello {{name}}';
    const result = templateService.personalize(template, { name: 'John' });
    expect(result).toBe('Hello John');
  });

  test('extractVariables finds all variables', () => {
    const template = 'Hello {{name}}, welcome {{user}}';
    const vars = templateService.extractVariables(template);
    expect(vars).toContain('name');
    expect(vars).toContain('user');
  });
});
