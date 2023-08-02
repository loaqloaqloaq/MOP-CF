# Mic On Project　クラウドファンディングサイト
- 開発者：張 皓嵐
- 香港VtuberサークルMic On Projectの依頼をうけ、開発したものです。
- NuxtJS 2 というフレームワークを使用しました。
- 開発言語はJavaScript
- URL：[https://cf.miconproject.com/](https://cf.miconproject.com/)

## 独自に実装した要素・PR ポイント：
- PC版とモバイル版は同じHTMLで、CSSだげで変換を行います。
- 右の点は今見っている部分を表示し、クリックすると、他の部分に行きます。
- 05 / EVENT PROGRESSに表示した金額は[Adminページ](https://cf.miconproject.com/admin)で入力して、firebaseに保存しています。
- [Adminページ](https://cf.miconproject.com/admin)はログインしないとアクセスできません。
- ログインはfirebaseのGoogle Loginを使っています。特定のID以外はログインしても[Adminページ](https://cf.miconproject.com/admin)にアクセスできません。

*ローカルでホストする場合.envが必要ですが、firebase SDKキーなど見せないものがあるので、提供できません。ご了承ください。
