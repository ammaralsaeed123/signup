/*document.addEventListener("click", onSubmit );
function onSubmit(){
    const name = document.getElementById('name').nodeValue;
    const messege = ValidateName(name);
}*/
/*function validateName(name) {
    if (name == "") {
     document.getElementById("nameError").innerHTML ='Name is Empty';
    }else if(name.split(" ").length >=2){
          document.getElementById("nameError").innerHTML ='Currect';
    }else if(name.split(" ").length <=2){
          document.getElementById("nameError").innerHTML ='name must have first name and second ';
    }}
    function back() {
    const name = document.getElementById('name').value,
      nameMessage = validateName(name);
    if (nameMessage !== '') {
      document.getElementById('nameError').style.display = 'block'
    }}
    var btn = document.getElementById("but");
     btn.addEventListener("click", back);
     */
    /*function isEmte(){
      var password = document.getElementById('password').Value
      return (password =="");
     }
     function ispasswordLeastNum(password) {
        var password=document.getElementById('password').Value;
        return password.includes("@") || pass.includes(".") || password.includes("!")|| password.includes("#")||password.includes("$")||password.includes("&")||password.includes("*");
     }*/


     document.getElementById('social-media-buttons').addEventListener(
       'click',
       onClickSocialMediaButtons
     );

     function onClickSocialMediaButtons() {
        alert('hello');
     }