function incrementFactory() {
    
    let num = 0;
    // numは関数内でのみ使える変数となる

    function increment() {
        num = num + 1;
        console.log(num);
    }

    return increment;
}
// incrementに関数incrementFactoryを代入
// incrementFactory();が実行された時のみnumが初期化される
const inc = incrementFactory();

// incrementには関数が代入されているため、();を記述
inc();
inc();
inc();
inc();
