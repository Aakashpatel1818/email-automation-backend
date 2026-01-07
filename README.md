# Email Automation Backend

Production-grade email automation system using Node.js + Express.

## Features
- Bulk email sending with Zoho SMTP
- Excel/Google Sheets parsing
- Queue-based processing (Bull/Redis)
- Error handling & retry logic
- MongoDB persistence
- Comprehensive logging
- RESTful API

## Tech Stack
- Node.js + Express
- MongoDB
- Redis + Bull
- Zoho SMTP
- Winston Logger
- Joi Validation

## Quick Start
npm install
npm run dev

## API Endpoints
- POST /api/v1/emails/send-bulk
- GET /api/v1/emails/campaign/:id/status
- POST /api/v1/campaigns

## Author
Aakash Patel
