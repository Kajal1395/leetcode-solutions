class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        n = len(prices)
        maxsofar=0
        maxprofit=0
        for i in range(n - 1, -1, -1):
            maxsofar = max(prices[i], maxsofar)
            maxprofit = max(maxsofar - prices[i],maxprofit)


        print(maxprofit, "max")
        return maxprofit
