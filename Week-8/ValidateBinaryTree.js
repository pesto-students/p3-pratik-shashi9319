//https://leetcode.com/submissions/detail/782115624/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return dfs(root, -Infinity, Infinity);
};

function dfs(node, min, max) {
  if (!node) {
    return true;
  }
  if (node.val <= min || node.val >= max) {
    return false;
  }

  return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
}
