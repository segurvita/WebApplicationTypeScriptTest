//挨拶クラスを定義
class Greeter {
    //非公開メンバ変数
    private greeting: string;

    //コンストラクタ
    constructor(message: string) {
        this.greeting = message;
    }

    //公開メソッド
    public greet() {
        return "Hello " + this.greeting;
    }
}

//インスタンス化
var greeter = new Greeter("World");
alert(greeter.greet());