from heapq import heapify, heappush, heappop

class Solution:
    def __init__(self):
        pass

    def findKthSmallest(self, nums, K):
        # Heap implementation
        ans = []
        heapify(ans)
        for val in nums:
            val = val * -1
            if len(ans) < K:
                heappush(ans, val)
            else:
                if ans[0] < val:
                    heappop(ans)
                    heappush(ans, val)

        ans = list(ans)
        return -1 * ans[0]


solution = Solution()

testsets = [
    {"nums": [13, 7, 6, 12], "K": 4},
    {"nums": [4, 8, 5, 2, 25], "K": 3},
    {"nums": [4,5,1,3,2,3,2,2], "K": 2}
]

for testcase in testsets:
    nums = testcase["nums"]
    K = testcase["K"]
    answer = solution.findKthSmallest(nums, K)
    print(answer)