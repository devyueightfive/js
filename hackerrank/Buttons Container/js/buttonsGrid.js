var nums = [1, 2, 3, 6, 9, 8, 7, 4];
var n = nums.length;
var btn5 = document.getElementById('btn5');

btn5.onclick = function () {
    for (let id of nums) {
        let btn = document.getElementById('btn' + id);
        let pos = (nums.indexOf(parseInt(btn.innerHTML)) - 1 + n) % n;
        btn.innerHTML = nums[pos].toString();
    }
}