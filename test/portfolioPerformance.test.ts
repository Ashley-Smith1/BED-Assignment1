import {
    calculatePortfolioPerformance,
    PortfolioPerformance,
} from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {

    it("should calculate an excellent gain", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 16000;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result.profitOrLoss).toBe(6000);
        expect(result.percentageChange).toBe(60);
        expect(result.performanceSummary).toBe(
            "Excellent performance! Your investments are doing great."
        );
    });

    it("should handle no change in the portfolio", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 10000;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe(
            "No change. Your portfolio is holding steady."
        );
    });

    it("should calculate a solid gain", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 12999.9;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result.profitOrLoss).toBeCloseTo(2999.9);
        expect(result.percentageChange).toBeCloseTo(29.999);
        expect(result.performanceSummary).toBe(
            "Solid gain. Keep monitoring your investments."
        );
    });

});