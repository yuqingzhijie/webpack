import foo from './foo.js';
let invoked = false;
function bar(invoker) {
  debugger;
  if (!invoked) {
    invoked = true;
    console.log(invoker + ' invokes bar.js');
    foo('bar.js');
  }
}
export default bar;
