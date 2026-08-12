/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    function build(leftIn, rightIn, leftPost, rightPost) {
        if (leftIn > rightIn) {
            return null;
        }
        let rootVal = postorder[rightPost];
        let rootIndex = inorder.indexOf(rootVal);
        let node = new TreeNode(rootVal);
        let leftSize = rootIndex - leftIn;
        node.left = build(leftIn, rootIndex - 1, leftPost, leftPost + leftSize - 1);
        node.right = build(rootIndex + 1, rightIn, leftPost + leftSize, rightPost - 1);
        return node;
    }
    let leftIn = 0;
    let rightIn = inorder.length - 1;
    let leftPost = 0;
    let rightPost = postorder.length - 1;
    return build(leftIn, rightIn, leftPost, rightPost);

};