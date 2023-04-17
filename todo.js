const btnAdd = document.getElementById('btnAdd')
const btnDel = document.getElementsByClassName('btnDel')
const input = document.getElementById('input')
const list = document.getElementById('list')
const num = document.getElementsByClassName('num')
const date = document.getElementById('date')
let listcount = 0
let listcheck = 0

// 要新增的表單
function addItem(date, text) {
    let doLi = document.createElement('li')
    let dop = document.createElement('p')
    let btnDel = document.createElement('button')
    btnDel.setAttribute('class', 'btnDel')
    btnDel.innerText = 'X'
    dop.innerText = date + '\t' + 'todo: ' + text
    list.appendChild(doLi)
    doLi.appendChild(dop)
    doLi.appendChild(btnDel)
}

// btnAdd事件內容
function add() {
    let inputValue = input.value;
    let inputDate = date.value;
    if (inputValue.length > 0) {
        addItem(inputDate, inputValue)
        input.value = ''
        // 清單數量
        listcount++
        num[0].innerText = listcount
    }
}

// 加入按鈕事件監聽
btnAdd.addEventListener('click', add)
// 加入鍵盤事件監聽
input.addEventListener('keypress', (e)=>{
    if (e.key == 'Enter') 
        add()
})

// 確認及刪除清單按鈕事件監聽
let check = ''
list.addEventListener('click', (e)=>{
    let target = e.target
    // 確認  
    if (target.tagName === 'P') {
        target.classList.toggle('checked')
        check = target.classList.value
        // 計算數量
        if (target.classList.value != '') {
            listcount-- 
            listcheck++ 
        } else {
            listcount++
            listcheck--
        }
        num[0].innerText = listcount
        num[1].innerText = listcheck
    } 
    // 刪除
    else if (target.className === 'btnDel') {
        let targetparent = target.parentElement
        targetparent.remove()
        // 計算數量
        if (check === '') {
            listcount--
        } else if (check !== '') {
            listcheck--
        }
        num[1].innerText = listcheck
        num[0].innerText = listcount
    }
  })