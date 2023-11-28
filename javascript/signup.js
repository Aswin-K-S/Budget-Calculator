


function register(){

const usrdt={
    usernm:usrnm.value,
    paswd:pswd.value,
    balance:0,
    expense:0,
    details:[],
    wdetails:[]
}
    if(acno.value in localStorage){
        alert('Account already exist')
    }
    else if(acno.value && usrnm.value && pswd.value){
        localStorage.setItem(acno.value,JSON.stringify(usrdt))
        alert('Account successfully registered')
        window.location.href='./index.html'
    }
    else{
        alert('Form not complete')
    }
}