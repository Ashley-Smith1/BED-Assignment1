interface PortfolioPerformance {
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
    const profitOrLoss = currentValue - initialInvestment;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    const performanceSummary = 
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