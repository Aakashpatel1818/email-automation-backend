class TemplateService {
  personalize(template, data) {
    let html = template;
    Object.keys(data).forEach(key => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      html = html.replace(regex, data[key] || '');
    });
    return html;
  }

  extractVariables(template) {
    const regex = /{{(\w+)}}/g;
    const vars = [];
    let match;
    while ((match = regex.exec(template)) !== null) {
      vars.push(match);
    }
    return [...new Set(vars)];
  }
}

module.exports = new TemplateService();
