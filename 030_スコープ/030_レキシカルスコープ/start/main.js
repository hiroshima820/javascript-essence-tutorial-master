let a = 2;
function fn1() {
    let b = 1;
    function fn2() {
        let c = 3;
        console.log(b);
    }
    fn2();
}
fn1();
// 関数fn1のスコープ外では、bを参照することができない
