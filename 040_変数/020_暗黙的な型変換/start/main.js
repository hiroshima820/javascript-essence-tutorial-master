function printTypeAndValue(val) {
    console.log(typeof val, val)

}

let a = 0;

printTypeAndValue(a);
// number 0

let b = '1' + a;

printTypeAndValue(b);
// string 10 文字列として変換される

let c = 15 - b;

printTypeAndValue(c);
// number 5 bの文字列10を数値10に変換

let d = c - null;

printTypeAndValue(d);
// number 5 nullを0に変換

let e = d - true;

printTypeAndValue(e);
// number 1 trueを1に変換

let f = parseInt('1') + e;
// parseInt() 数値に変換する関数

printTypeAndValue(f);
// number 5 
