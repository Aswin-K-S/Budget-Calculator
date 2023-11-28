//#region Animation----------------------------------------------------------------------------------

let timeline= gsap.timeline();


timeline.from("section #heading",{
    width:70,
    duration:1,

},
".6"
);

timeline.from("header",
{
   opacity:0,
   duration:.7,
   


},
".7"
);

timeline.from("section #section",
    {
        top:`${document.querySelector('h1').offsetHeight / 2 -100}px`,
        opacity:0,
        duration:1,
         ease: "back.out(1.7)",
    },
    ".2"
 );

 timeline.from("section .bank",
    {
        opacity:0,
       duration:1,
       ease: "slow(0.7, 0.7)", 
    },
    ".8"
 );
// #endregion

//main 
function logout(){
    window.location = './index.html'
}

const urlParams = new URLSearchParams(window.location.search);
const acno = urlParams.get('acno');
const ud = JSON.parse(localStorage.getItem(acno))
const unm = ud.usernm
const nm = document.getElementById('heading')
nm.innerHTML = `Welcome <span id="un"> &nbsp;${unm}</span>`

const disp = document.getElementById('savi');
disp.innerHTML=`<h4 class="text-center t fw-bold " id="sav" style="color:greenyellow" id="savings"> ${ud.balance} </h4>`

const disp1 = document.getElementById('expe');
disp1.innerHTML=`<h4 class="text-center  fw-bold " id="exp" style="color:rgb(255, 0, 0)" id="savings"> ${ud.expense} </h4>`


function Clear() {
   
    ud.details = [];
    ud.wdetails = [];
    ud.balance=0;
    ud.expense=0;
    console.log('hey');
    localStorage.setItem(acno, JSON.stringify(ud))
    alert('Details cleared successfully');
    location.reload();
}


function BalanceDisplay(balance) {
    const disp = document.getElementById('savi');
    disp.innerHTML=`<h4 class="text-center t fw-bold " id="sav" style="color:greenyellow" id="savings"> ${balance} </h4>`
}
function wBalanceDisplay(balance) {
    const disp1 = document.getElementById('expe');
    disp1.innerHTML=`<h4 class="text-center  fw-bold " id="exp" style="color:rgb(255, 0, 0)" id="savings"> ${balance} </h4>`
}

function deposit() {
    if (damt.value > 0 && damt.value && ddesc.value) {
       
            ud.balance += parseInt(damt.value)
            const currentDate = new Date();
            const dt={
                desc:ddesc.value,
                damount:damt.value,
                balance:ud.balance,
                dateTime: currentDate.toLocaleString()
            }
            ud.details.push(dt)
            localStorage.setItem(acno, JSON.stringify(ud))
            alert(`${damt.value} has been added to your account`)
            damt.value=""
            ddesc.value=""
            BalanceDisplay(ud.balance);
            
        }
    else {
        alert('Enter a valid amount and description')
    }
}

function withdraw() {


    if (wamt.value > 0 && wamt.value && wdesc.value) {
      
                ud.balance -= parseInt(wamt.value)
                ud.expense+= parseInt(wamt.value)
                const currentDate = new Date();
                const dt={
                    desc:wdesc.value,
                    damount:wamt.value,
                    balance:ud.balance ,
                    dateTime: currentDate.toLocaleString()
                }
                ud.wdetails.push(dt)
                localStorage.setItem(acno, JSON.stringify(ud))
                wamt.value=""
                wdesc.value=""
                BalanceDisplay(ud.balance);
                wBalanceDisplay(ud.expense)
            }
    else {
        alert('Enter a valid amount and description')
    }
}

function updateTable(){
    let htmlData = '';

    for (let dd of ud.details) {
        console.log(dd.desc);
        htmlData += `
            <tr>
                <th scope="row">${dd.desc}</th>
                <td>${dd.damount}</td>
                <td>${dd.balance}</td>
                <td>${dd.dateTime}</td>
            </tr>
        `;
    }
    result.innerHTML = htmlData;
}
function wupdateTable(){
    let htmlData1 = '';

    for (let dd of ud.wdetails) {
        htmlData1 += `
            <tr>
                <th scope="row">${dd.desc}</th>
                <td>${dd.damount}</td>
                <td>${dd.balance}</td>
                <td>${dd.dateTime}</td>
            </tr>
        `;
    }
    wresult.innerHTML = htmlData1;
}
let htmlData = '';

for (let dd of ud.details) {
    console.log(dd.desc);
    htmlData += `
        <tr>
            <th scope="row">${dd.desc}</th>
            <td>${dd.damount}</td>
            <td>${dd.balance}</td>
            <td>${dd.dateTime}</td>
        </tr>
    `;
}
result.innerHTML = htmlData;

let htmlData1 = '';

for (let dd of ud.wdetails) {
    htmlData1 += `
        <tr>
            <th scope="row">${dd.desc}</th>
            <td>${dd.damount}</td>
            <td>${dd.balance}</td>
            <td>${dd.dateTime}</td>
        </tr>
    `;
}
wresult.innerHTML = htmlData1;


