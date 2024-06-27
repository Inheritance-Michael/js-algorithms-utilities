function assert(c, m) { if (!c) throw new Error(m); console.log("PASS: " + m); }

assert(typeof arrayHelper_8([1,2,3]) === 'object', 'arrayHelper_8 returned slice');
