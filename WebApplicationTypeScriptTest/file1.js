//挨拶クラスを定義
var Greeter = (function () {
    //コンストラクタ
    function Greeter(message) {
        this.greeting = message;
    }
    //公開メソッド
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
})();

//インスタンス化
var greeter = new Greeter("World");
alert(greeter.greet());
