import request, { Response } from "supertest";
import app from "../src/app";

describe("API endpoints", () => {

    it("should return a healthy status", async () => {
        // Arrange
        const expectedStatus: string = "OK";

        // Act
        const response: Response = await request(app).get("/api/v1/health");

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(expectedStatus);
    });

    it("should return health check details", async () => {
        // Arrange

        // Act
        const response: Response = await request(app).get("/api/v1/health");

        // Assert
        expect(response.body.uptime).toBeDefined();
        expect(response.body.timestamp).toBeDefined();
        expect(response.body.version).toBe("1.0.0");
    });

    it("should return portfolio performance results", async () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 16000;

        // Act
        const response: Response = await request(app).get(
            `/api/v1/portfolio/performance?initialInvestment=${initialInvestment}&currentValue=${currentValue}`
        );

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.profitOrLoss).toBe(6000);
        expect(response.body.percentageChange).toBe(60);
    });

    it("should handle no change in portfolio performance", async () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 10000;

        // Act
        const response: Response = await request(app).get(
            `/api/v1/portfolio/performance?initialInvestment=${initialInvestment}&currentValue=${currentValue}`
        );

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.profitOrLoss).toBe(0);
        expect(response.body.percentageChange).toBe(0);
    });

});