export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
): PortfolioPerformance {
    const profitOrLoss: number = currentValue - initialInvestment;

    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    const performanceSummary: string = 
        percentageChange >= 30
            ? "Excellent performance! Your investments are doing great."
            : percentageChange > 0
            ? "Solid gain. Keep monitoring your investments."
            : percentageChange === 0
            ? "No change. Your portfolio is holding steady."
            : "The portfolio has performed poorly.";

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}