const acno = sessionStorage.getItem('accno');
const ddet = JSON.parse(localStorage.getItem(acno))
console.log(acno);
function updateTable(){
    let htmlData = '';

    for (let dd of ddet.details) {
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

    for (let dd of ddet.wdetails) {
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
