def tree_from_traversals(preorder, inorder):
    if len(preorder) != len(set(preorder)):
        raise ValueError("traversals must have the same length")
    elif len(inorder) != len(set(inorder)):
        raise ValueError("traversals must contain unique items")
    elif set(preorder) != set(inorder):
        raise ValueError("traversals must have the same elements")
        
    return build_from_traversals(preorder, inorder)


def build_from_traversals(preorder, inorder):
    if preorder == []:
        return {}

    i = inorder.index(preorder[0])

    return {
        "v": preorder[0],
        "l": build_from_traversals(preorder[1:i + 1], inorder[:i]),
        "r": build_from_traversals(preorder[i + 1:], inorder[i + 1:]),
    }