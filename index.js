var form = document.querySelector("#myForm");
form.addEventListener("submit",myFunction);

var arr = JSON.parse(localStorage.getItem("Bozaz")) || [];

display(arr);

function myFunction(event){
    event.preventDefault();

    var cat = document.querySelector("#category").value;
    var title = document.querySelector("#title").value;
    var desc = document.querySelector("#desc").value;
    var price = document.querySelector("#price").value;

    var bozazObj = {
        category:cat,
        title:title,
        description:desc,
        price:price,
    };

    arr.push(bozazObj);
    localStorage.setItem("Bozaz",JSON.stringify(arr));
    display(arr);
}

function display(arr){
    var tbody = document.querySelector("tbody");
    tbody.textContent = "";

    arr.map(function(ele,index){
        var row  = document.createElement("tr");

        var td1  = document.createElement("td");
        td1.textContent = index + 1;

        var td2  = document.createElement("td");
        td2.textContent = ele.category;

        var td3  = document.createElement("td");
        td3.textContent = ele.title;

        var td4  = document.createElement("td");
        td4.textContent = ele.description;

        var td5  = document.createElement("td");
        td5.textContent = ele.price;

        var td6 = document.createElement("td");
        td6.textContent = "Delete row";
        td6.style.backgroundColor = "red";
        td6.style.color = "whitesmoke";
        td6.style.cursor = "pointer";

        td6.addEventListener("click",function(){
            deleteItem(index);
        })

        row.append(td1,td2,td3,td4,td5,td6);
        tbody.append(row);
        

    })
}

function deleteItem(ind){
    arr.splice(ind,1);
    localStorage.setItem("Bozaz",JSON.stringify(arr));

    display(arr);
}
