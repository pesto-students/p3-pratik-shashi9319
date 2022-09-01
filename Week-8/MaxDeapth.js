//https://leetcode.com/submissions/detail/781959461/
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
 * @return {number}
 */
var maxDepth = (root) => {
  let maxDepth = 0;
  let BFS = (node, level) => {
    if (node == null) return;

    if (level > maxDepth) maxDepth = level;

    BFS(node.left, level + 1);
    BFS(node.right, level + 1);
  };
  BFS(root, 1);
  return maxDepth;
};
