let setRepost
let setHeart
let setBookMark
let domRepost
let domHeart
let domBookmark

document.addEventListener('change', () => {
    setRepost = document.getElementById('setrepost').value
    setHeart = document.getElementById('setheart').value
    setBookMark = document.getElementById('setbookmark').value
    domRepost = document.getElementById('repost').value
    domHeart = document.getElementById('heart').value
    domBookmark = document.getElementById('bookmark').value
    const Repost = Number(setRepost) * Number(domRepost)
    const Heart = Number(setHeart) * Number(domHeart)
    const BookMark = Number(setBookMark) * Number(domBookmark)
    document.getElementById('POST').setAttribute("text", `♻️リポスト:${Repost}個 ♥️いいね:${Heart}個 🔖ブクマ:${BookMark}個`)
})


document.getElementById('run').addEventListener('click', () => {
    const Repost = Number(setRepost) * Number(domRepost)
    const Heart = Number(setHeart) * Number(domHeart)
    const BookMark = Number(setBookMark) * Number(domBookmark)
    document.getElementById('Result').innerText = `${Repost + Heart + BookMark}個`
    document.getElementById('Result2').innerText = `♻️リポスト:${Repost}個 ♥️いいね:${Heart}個 🔖ブクマ:${BookMark}個`
})