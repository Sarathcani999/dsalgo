# Tree

- root: first element
- leaf node: if a node does not have children then it is called a leaf node
- subtree: node + all the children of that node
- ancestor: all nodes from which a node is derived

Types:

- Full Binary tree: every node should have either 0 or 2 children
- Complete Binary tree: all levels are completely filled except the last. The last level has all nodes in left as possible
- Perfect Binary tree: all leaf nodes are at same level
- Balanced Binary tree: Height can be max log(N)
- Degenerate tree: every node has single child (Linked list)

Traversals

- Inorder: L Root R
- Preorder: Root L R
- Postorder: L R Root
- BFS: traverse each level from L to R. Requires queue

## Preorder

```typescript
function preorder(root: Node): void {
    // Base case
    if (root === null) return;
    // root traversal
    console.log(root.value);
    // left traversal
    preorder(root.left);
    // right traversal
    preorder(root.right);
}
```

## Inorder

```typescript
function preorder(root: Node): void {
    // Base case
    if (root === null) return;
    // left traversal
    preorder(root.left);
    // root traversal
    console.log(root.value);
    // right traversal
    preorder(root.right);
}
```

## Postorder

```typescript
function preorder(root: Node): void {
    // Base case
    if (root === null) return;
    // left traversal
    preorder(root.left);
    // right traversal
    preorder(root.right);
    // root traversal
    console.log(root.value);
}
```

## BFS or Level order traversal

```typescript
function bfs(root: Node): void {
    if (root === null) return;

    const ans: Array<Array<number>> = [];
    const queue: Array<Node> = [];
    queue.push(root);

    while (queue.length) {
        const size = queue.length;
        const level = [];
        for (const node of queue) {
            queue.pop() // pops from front since queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            level.push(node.value);
        }
        ans.push(level);
    }

    return ans;
}
```

