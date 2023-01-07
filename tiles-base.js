const tiles = {};

tiles.base = {
  name: 'Base game',
  tiles: {
    'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-C1s.png': {'count': 1, 'fileName': 'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-C1s.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-C1s'},
    'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1n.png': {'count': 1, 'fileName': 'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1n'},
    'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1s.png': {'count': 2, 'fileName': 'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1s.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1s'},
    'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1n.png': {'count': 3, 'fileName': 'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1n'},
    'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1s.png': {'count': 1, 'fileName': 'base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1s.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1s'},
    'base-c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1n.png': {'count': 3, 'fileName': 'base-c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1n'},
    'base-c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1s.png': {'count': 2, 'fileName': 'base-c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1s.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1s'},
    'base-c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1n.png': {'count': 3, 'fileName': 'base-c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1n'},
    'base-c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1s.png': {'count': 2, 'fileName': 'base-c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1s.png', 'set': 'base', 'sortString': 'c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1s'},
    'base-c1-c1-c1-c2-c2-c2-z1-z1-z1-z1-z1-z1-C1n-C2n.png': {'count': 2, 'fileName': 'base-c1-c1-c1-c2-c2-c2-z1-z1-z1-z1-z1-z1-C1n-C2n.png', 'set': 'base', 'sortString': 'c1-c1-c1-c2-c2-c2-z1-z1-z1-z1-z1-z1-C1n-C2n'},
    'base-c1-c1-c1-f1-r1-f2-f2-r2-f3-f3-r3-f1-C1n.png': {'count': 3, 'fileName': 'base-c1-c1-c1-f1-r1-f2-f2-r2-f3-f3-r3-f1-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-f1-r1-f2-f2-r2-f3-f3-r3-f1-C1n'},
    'base-c1-c1-c1-z1-r1-z2-z2-r1-z1-z1-z1-z1-C1n.png': {'count': 3, 'fileName': 'base-c1-c1-c1-z1-r1-z2-z2-r1-z1-z1-z1-z1-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-z1-r1-z2-z2-r1-z1-z1-z1-z1-C1n'},
    'base-c1-c1-c1-z1-r1-z2-z2-z2-z2-z2-r1-z1-C1n.png': {'count': 3, 'fileName': 'base-c1-c1-c1-z1-r1-z2-z2-z2-z2-z2-r1-z1-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-z1-r1-z2-z2-z2-z2-z2-r1-z1-C1n'},
    'base-c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1n.png': {'count': 1, 'fileName': 'base-c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1n'},
    'base-c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1s.png': {'count': 2, 'fileName': 'base-c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1s.png', 'set': 'base', 'sortString': 'c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1s'},
    'base-c1-c1-c1-z1-z1-z1-c2-c2-c2-z1-z1-z1-C1n-C2n.png': {'count': 3, 'fileName': 'base-c1-c1-c1-z1-z1-z1-c2-c2-c2-z1-z1-z1-C1n-C2n.png', 'set': 'base', 'sortString': 'c1-c1-c1-z1-z1-z1-c2-c2-c2-z1-z1-z1-C1n-C2n'},
    'base-c1-c1-c1-z1-z1-z1-z1-r1-z2-z2-r1-z1-C1n.png': {'count': 3, 'fileName': 'base-c1-c1-c1-z1-z1-z1-z1-r1-z2-z2-r1-z1-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-z1-z1-z1-z1-r1-z2-z2-r1-z1-C1n'},
    'base-c1-c1-c1-z1-z1-z1-z1-z1-z1-z1-z1-z1-C1n.png': {'count': 5, 'fileName': 'base-c1-c1-c1-z1-z1-z1-z1-z1-z1-z1-z1-z1-C1n.png', 'set': 'base', 'sortString': 'c1-c1-c1-z1-z1-z1-z1-z1-z1-z1-z1-z1-C1n'},
    'base-z1-r1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister.png': {'count': 2, 'fileName': 'base-z1-r1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister.png', 'set': 'base', 'sortString': 'z1-r1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister'},
    'base-z1-r1-z2-z2-r1-z1-z1-z1-z1-z1-z1-z1.png': {'count': 9, 'fileName': 'base-z1-r1-z2-z2-r1-z1-z1-z1-z1-z1-z1-z1.png', 'set': 'base', 'sortString': 'z1-r1-z2-z2-r1-z1-z1-z1-z1-z1-z1-z1'},
    'base-z1-r1-z2-z2-r2-z3-z3-r3-z1.png': {'count': 4, 'fileName': 'base-z1-r1-z2-z2-r2-z3-z3-r3-z1.png', 'set': 'base', 'sortString': 'z1-r1-z2-z2-r2-z3-z3-r3-z1'},
    'base-z1-r1-z2-z2-r2-z3-z3-r3-z4-z4-r4-z1.png': {'count': 1, 'fileName': 'base-z1-r1-z2-z2-r2-z3-z3-r3-z4-z4-r4-z1.png', 'set': 'base', 'sortString': 'z1-r1-z2-z2-r2-z3-z3-r3-z4-z4-r4-z1'},
    'base-z1-r1-z2-z2-z2-z2-z2-r1-z1-z1-z1-z1.png': {'count': 8, 'fileName': 'base-z1-r1-z2-z2-z2-z2-z2-r1-z1-z1-z1-z1.png', 'set': 'base', 'sortString': 'z1-r1-z2-z2-z2-z2-z2-r1-z1-z1-z1-z1'},
    'base-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister.png': {'count': 4, 'fileName': 'base-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister.png', 'set': 'base', 'sortString': 'z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister'},
  }
};
