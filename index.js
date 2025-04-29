let setReply
let setRepost
let setHeart
let setBookMark
let setView
let setFollow

let domReply
let domRepost
let domHeart
let domBookmark
let domView
let domFollow

document.addEventListener('change', () => {
    try {
        setReply = document.getElementById('setreply').value
        setRepost = document.getElementById('setrepost').value
        setHeart = document.getElementById('setheart').value
        setBookMark = document.getElementById('setbookmark').value
        setView = document.getElementById('setview').value
        setFollow = document.getElementById('setfollow').value

        domReply = document.getElementById('reply').value
        domRepost = document.getElementById('repost').value
        domHeart = document.getElementById('heart').value
        domBookmark = document.getElementById('bookmark').value
        domView = document.getElementById('view').value
        domFollow = document.getElementById('follow').value
    } catch (e) {
        alert("エラーが発生しました。001")
        console.log("エラー001:", e);
    }

})


document.getElementById('run').addEventListener('click', () => {
    try {
        const Reply = Number(setReply) * Number(domReply)
        const Repost = Number(setRepost) * Number(domRepost)
        const Heart = Number(setHeart) * Number(domHeart)
        const BookMark = Number(setBookMark) * Number(domBookmark)
        const View = Number(setView) * Number(domView)
        const Follow = Number(setFollow) * Number(domFollow)
        document.getElementById('Result').innerText = `${Reply + Repost + Heart + BookMark + View + Follow}個`
        document.getElementById('Result2').innerText = `↩️返信:${Reply}個 ♻️リポスト:${Repost}個 ♥️いいね:${Heart}個 🔖ブクマ:${BookMark}個 👀閲覧数:${View}個 ➕フォロー:${View}個`
    } catch (e) {
        alert("エラーが発生しました。002")
        console.log("エラー002:", e);
    }
})
