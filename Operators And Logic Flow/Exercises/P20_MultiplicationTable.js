function multiplicatonTable(n){

    let table = "<table border='1'>\n";
    table +='<tr><th>x</th>'
    for (let index = 1; index <= n; index++) {
        table +=`<th>${index}</th>`
        
    }
    table+='</tr>\n';


    for (let i = 1; i <= n; i++) {
        table +=`<tr><th>${i}</th>`;
        for (let j = 1; j <=n; j++) {
            table +=`<td>${i*j}</td>`
           
        }
        table+='</tr>\n'
    }
    table+='</table>'
return(table);
}


