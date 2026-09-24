import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {

    it("should calculate an excellent gain", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 16000;

        // Act
        const result = calculatePortfolioPerformance(
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
        const initialInvestment = 10000;
        const currentValue = 10000;

        // Act
        const result = calculatePortfolioPerformance(
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

});