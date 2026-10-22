# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode | None) -> list[list[int]]:
        if not root:
            return []
        queue = [root]
        res = []
        while len(queue):
            size = len(queue)
            count = 0
            level = []
            while count < size:
                node = queue.pop(0)
                if node is not None:
                    level.append(node.val)
                    if node.left is not None:
                        queue.append(node.left)
                    if node.right is not None:
                        queue.append(node.right)
                count += 1
            res.append(level)
        return res
