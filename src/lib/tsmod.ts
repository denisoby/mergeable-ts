import { ts } from 'ts-morph';

function applyPatch(): void {
  // get patch
  // read patch file
  // revert patch to matching pattern
  // get comments
  // remove code with "add" comments
  // add code with "remove" comments
  // reverse "before/was"
  // find code matching pattern
  // apply "remove"
  // apply "add"
}

class NodeMatcher {
  constructor(public node: ts.Node) {
  }

  match(parentNode: ts.Node) {

  }
}

enum NodePatchType {
  ADD,
  MODIFY,
  REMOVE
}

class NodePatch {
  type: NodePatchType;
  nodeBefore: ts.Node;
  nodeAfter: ts.Node;
  isOptional = false;
  matcher: NodeMatcher;

  childrenPatches: NodePatch[];
}
