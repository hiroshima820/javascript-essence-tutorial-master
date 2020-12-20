let a = 2;
window.a = 4;
function fn1() {
    // let a = 1;
    function fn2() {
        if (true) {
            console.log(a);
            if(true) {
                var a = 3;
            }
            // ブロック内でvarで変数宣言しているので、console.log(a);の結果はundefinedとなる
        }
    }
    fn2();
}
fn1();
