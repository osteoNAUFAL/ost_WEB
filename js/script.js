document.getElementById('loginFrom').addEventListener('submit',  function(event){
    event.preventDefault();

    const correctUsername = 'princess';
    const correctPassword = 'princess';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctPassword && password  === correctPassword){
        alert("Login berhasil");
        window.location.href = 'index.html';
    }else{
        alert("Username atau Password tidak sesuai");
    }
});