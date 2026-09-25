# BED Assignment 1

This project is for my BED Assignment 1.

It is an Express API that has a health check endpoint and a portfolio performance endpoint.

## API Endpoints

### Health Check

`GET /api/v1/health`

This endpoint checks if the API is running.

It returns:
- status
- uptime
- timestamp
- version

### Portfolio Performance

`GET /api/v1/portfolio/performance`

This endpoint uses:
- initialInvestment
- currentValue

It calculates:
- profit or loss
- percentage change
- performance summary

## Testing

I used Jest and Supertest to test the portfolio function and API endpoints.

To run the tests:

```bash
npx jest
```
