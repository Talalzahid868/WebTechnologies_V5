
let total=0;
function addExpense() {
    const expensename=document.getElementById("expencename");
    const expenceamount=document.getElementById("expenceprice");
    const name=expensename.value;
    const amount=Number(expenceamount.value)
    
    if (name==="" || amount<=0)
    {
        alert("Please enter the required fields")
        return;
    }

    const li=document.createElement("li");
    li.innerHTML=`
    <span class="item_name">${name}</span>
    <span class="amount">${amount}</span>
    <button class="dlt_btn" onclick="deleteExpenses(this,${amount})">Discard</button>
    `;

    document.getElementById("Expenseslist").appendChild(li);

    total=total+amount;
    document.getElementById("Totalammount").innerText=total;

    expensename.value="";
    expenceamount.value="";
    
}

function deleteExpenses(button,amount) {
    const li = button.parentElement;
    li.remove();
    total=total-amount;
    document.getElementById("Totalammount").innerText=total;
}


