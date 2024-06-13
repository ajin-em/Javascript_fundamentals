let username;
document.getElementById('btn').onclick = function(){
    username = document.getElementById('inp').value;
    document.getElementById('heading').textContent = `Hello ${username}...`
}