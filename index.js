let setReply
let setRepost
let setHeart
let setBookMark
let setView

let domReply
let domRepost
let domHeart
let domBookmark
let domView

document.addEventListener('change', () => {
    setReply = document.getElementById('setreply').value
    setRepost = document.getElementById('setrepost').value
    setHeart = document.getElementById('setheart').value
    setBookMark = document.getElementById('setbookmark').value
    setView = document.getElementById('setview').value

    domReply = document.getElementById('reply').value
    domRepost = document.getElementById('repost').value
    domHeart = document.getElementById('heart').value
    domBookmark = document.getElementById('bookmark').value
    domView = document.getElementById('view').value

})


document.getElementById('run').addEventListener('click', () => {
    const Reply = Number(setReply) * Number(domReply)
    const Repost = Number(setRepost) * Number(domRepost)
    const Heart = Number(setHeart) * Number(domHeart)
    const BookMark = Number(setBookMark) * Number(domBookmark)
    const View = Number(setView) * Number(domView)
    document.getElementById('Result').innerText = `${Reply + Repost + Heart + BookMark + View}個`
    document.getElementById('Result2').innerText = `↩️返信:${Reply}個 ♻️リポスト:${Repost}個 ♥️いいね:${Heart}個 🔖ブクマ:${BookMark}個 👀閲覧数:${View}個`
})