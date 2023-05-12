function janken(user) {
    
    let pcJankens = ['gu_rev.png', 'cho_rev.png', 'pa_rev.png'];
 
    
    let userJankens = ['gu.png', 'cho.png', 'pa.png'];
 
    // コンピュータの手を乱数(0～2）で作成
    let pc = Math.floor(Math.random() * 3);
 
    let userImg = document.getElementById("userImg");

    userImg.src = "/img/" + userJankens[user];

    let pcImg = document.getElementById("pcImg");
    pcImg.src = "/img/" + pcJankens[pc];
 
    // ユーザから見た勝敗結果を保存
    let result = [['あいこ', '勝ち', '負け'],
                  ['負け', 'あいこ', '勝ち'],
                  ['勝ち', '負け', 'あいこ']];
 
    // 勝敗結果を
    document.getElementById("result").textContent = result[user][pc];
}