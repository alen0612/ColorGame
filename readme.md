[spec](https://www.youtube.com/watch?v=CjvT5YkI8YU&list=PLlPcwHqLqJDlKxQfaWR1apRR9EPLz2-yG&index=8)

這次是SS-04， javascripts篇章完成之後的一個小作業。
主要是利用JS設計一個小遊戲，開始的時候會給你一串RGB code，以及三個色塊，user要在三個色塊中選出與RGB code相符的那個，直到猜中為止。
猜到之後下方會有一個play again可以重新開始一局，就這麼簡單。

因為本意是要練習JS，包含了透過getElementByID去完成一些事情，比如說更改innrtHTML的內容、inClick事件等等，所以在HTML和CSS的部分沒有下太多功夫，也沒有去做RWD。
不過說個題外話，我覺得RWD這個東西的原理滿簡單的，就是在不同的screen size下去做object的縮放，不管是要用原生的CSS去做，又或是用Boostrap其實都可以，但他的重點就是在要多練習，一方面可以熟悉Boostrap，一方面我覺得RWD這種東西其實跟設計稍微有點關係。

然後因為有用到JS所以稍微review一下過程好了。
首先就是HTML跟CSS的部分，這邊我覺得沒有什麼特別的，就是先設計一個版型就好，因為後面顏色的部分都會用JS改掉。
JS的部分，我覺得我的作法其實有點陽春，我先用三個var把我設定好的三個色塊div做成object，之後我用random的方式，去決定三個色塊哪一個要是答案。
之後去random出三個色塊的顏色，同時要把答案的RGB code提供出來。

再來是onClick的部分，這邊我試了兩種方法，一種是單純的onClick function，另外一種是用eventListener。
我一開始用eventListener一直失敗，不知道是我寫錯還是這個方法不可行，但應該是我寫錯因為想不太到不可行的可能。
後來改用onClick function就可以了，不過這邊有用到closure的問題，就是我在外面call function的時候，function內部有時候會沒辦法抓到我想要的參數。
其實我不太確定是closure的問題還是我object沒設計好，後來的解決方式就是我的onClick function傳了一大堆的參數進去，這在設計上是滿糟的事情，以後要改進。

另外一個問題就是，因為之前主要都是寫C跟C++，所以在coding style還有思考邏輯上要切換成JS有時候會碰壁，畢竟JS是比較高階的語言，這部分可能要再習慣一下。

JS的部分到這邊，接下來SS-05會進入進階的JS(我猜啦)，之後再把react學完我就要來看後端的東西了，希望十月之前可以進到後端。

-update
後來發現前面在設定div色塊的時候有弄錯，所以有時候答案會被誤植，加上把一些console log拿掉。