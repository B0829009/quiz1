function change() 
{
    var header = document.createElement("button");;
    header.innerHTML = "Change this document.";
    document.body.appendChild(header);
    header.addEventListener("click", myFunction);
}
function myFunction() 
{
    var header = document.getElementById("hid123");
    header.innerHTML = "CSIE@CGU";
    var para = document.getElementById("pid123");
    para.innerHTML = "怎麼那麼棒";
}