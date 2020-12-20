function a() {
    let b = 0;
    console.log(b);
}

a();

// ブロックスコープは、if文やfor文の{}内のこと
// ブロックスコープを適用したい場合は、varで変数宣言しない
if(true) {
    var c = 1;

    var d = function() {
        console.log('d is called');
    }

}
d();
console.log(c);
