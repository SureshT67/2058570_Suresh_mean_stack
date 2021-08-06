var BlogData=[];
function storeInSession() {
   sessionStorage.setItem("Info",JSON.stringify(blogData));
}
function retrieveFromSession() {
    var obj = JSON.parse(sessionStorage.getItem("Info"));
    console.log(obj);
}
function onFormSubmit() {
    var formData = readData();
   creatediv(formData)
    resetForm();
    BlogData.push(formData);  
    console.log(BlogData);
}
function readData() {
    var formData={};
    formData.title=document.getElementById("title").value;
    formData.content = document.getElementById("content").value;
    formData.imgid=document.getElementById("imgid").value;
    console.log(formData);
    return formData;
}

function deleteRecord(data){
    var row = data.parentElement.parentElement;
    document.getElementById("details").deleteRow(row.rowIndex);
}
var data;
function updateRecord(data){
    this.data = data;
    var row = data.parentElement.parentElement;
    var cells = row.getElementsByTagName("td");
    var name = cells[0].innerHTML;
    var age =  cells[1].innerHTML;
    document.getElementById("name").value=name;
    document.getElementById("age").value=age; 
    document.getElementById("b1").value="Update Record";
}
function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("content").value="";  
    document.getElementById("imgid").value="";
}

function creatediv(formData){
        let div = document.createElement('div');
            div.id = 'blog';
            div.className = 'container col-sm-5 border ';

        let h3 = document.createElement('h3');
            h3.textContent = 'Title: '+formData.title;
                    let p = document.createElement('p');
                p.textContent = 'Content: '+formData.content;
        let img = document.createElement('img');
                        img.className = 'img';
                        img.src =  
                                formData.imgid; 

div.appendChild(h3);
div.appendChild(p);
div.appendChild(img);
document.body.appendChild(div);
}