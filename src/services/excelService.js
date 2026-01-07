const fs = require('fs');

class ExcelService {
  parseCSV(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n');
    const headers = lines.split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const obj = {};
      headers.forEach((h, i) => obj[h.trim()] = values[i]?.trim());
      return obj;
    });
  }

  validateEmails(emailList) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailList.filter(e => emailRegex.test(e.email));
  }
}

module.exports = new ExcelService();
