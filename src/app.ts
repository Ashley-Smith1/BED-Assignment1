import express from "express";
import { calculatePortfolioPerformance, PortfolioPerformance } from "./portfolio/portfolioPerformance";
const app: express.Application = express();
app.use(express.json());
app.get("/api/v1/health", (req, res) => {
    res.status(200).json({ 
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date() .toISOString(),
        version: "1.0.0",
    });
});

app.get("/api/v1/portfolio/performance", (req, res) => {
    const initialInvestment: number = Number(req.query.initialInvestment);
    const currentValue: number = Number(req.query.currentValue);

    const result: PortfolioPerformance = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.status(200).json(result);
});

export default app; 