//-----------------------------------------------------------------------------signup.js

let nomeDosAttr=["nome","sobrenome","email","password"];
let  submitButtonIcon=["success"];
let  submitButtonName=["Cadastrar"];





  function creatinInputSigun(){
    //for(var i=0;i<nomeDosAttr.length;i++){
    for(let i in nomeDosAttr){
      
      document.write("<label for='"+nomeDosAttr[i]+"'><b>"+nomeDosAttr[i]+"</b></label>");
      document.write("<input type='"+nomeDosAttr[i]+"' name='"+nomeDosAttr[i]+"' id='"+nomeDosAttr[i]+"' placeholder='"+nomeDosAttr[i]+"'class='form-control' > <br>");
      if(nomeDosAttr[i]=="password"){

        document.write("<label for='"+nomeDosAttr[i]+"-repeat'><b>repetir "+nomeDosAttr[i]+"</b></label><p>");
      document.write("<input type='"+nomeDosAttr[i]+"' name='"+nomeDosAttr[i]+"-repeat' id='"+nomeDosAttr[i]+"-repeat' placeholder='"+nomeDosAttr[i]+"'class='form-control' onblur=ValidatePass()> <br>");
         }
      
    }
    document.write("<p>Para se registrar no animale leia os nossos termos de inclusão ao serviço<a href='#'' style='color:dodgerblue'>Terms & Privacy</a>.</p>");

      document.write("<div class='container'>");
      
    //for(let i=0;i<submitButtonName.length;++i)
    for(let i in submitButtonName)  
    document.write(" <button type='submit' name='"+submitButtonName[i]+"' id='"+submitButtonName[i]+"' value='"+submitButtonName[i]+"' class='btn btn-"+submitButtonIcon[i]+"' style='width: 100%;'>"+submitButtonName[i]+"</button>");
            document.write("</div>");
  }

  





  function basicSignup() {
    
    var x = document.createElement("link");
    x.rel="stylesheet";
    x.href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css';
    document.head.appendChild(x);
    
    CreatinInputSigun();

}






function signupWithRepeatPass(){
document.write("<style>body {font-family: Arial, Helvetica, sans-serif;}</style>");
document.write("<style>*{box-sizing: border-box;}</style>");
document.write("<style>input[type=email], input[type=password],input[type=text] {width: 100%;padding: 15px;margin: 5px 0 22px 0;display: inline-block;border: none;background: #f1f1f1;}</style>");
document.write("<style>input[type=text]:focus, input[type=password]:focus,input[type=email]:focus{background-color: #ddd;outline: none;} </style>");
document.write("<style>hr {border: 1px solid #f1f1f1;margin-bottom: 25px;}</style>");
document.write("<style>button {background-color: #4CAF50;color: white;padding: 14px 20px;margin: 8px 0;border: none;cursor: pointer;width: 100%;opacity: 0.9;}</style>");
document.write("<style>button:hover {opacity:1;}</style>");
document.write("<style>.cancelbtn {padding: 14px 20px;background-color: #f44336;}</style>");
document.write("<style>.cancelbtn, .signupbtn {float: left;width: 50%;}</style>");
document.write("<style>.container {padding: 16px;}</style>");
document.write("<style>.clearfix::after {content:clear: both; display: table;}</style>");
document.write("<style>@media screen and (max-width: 300px) {.cancelbtn, .signupbtn {width: 100%; }}</style>");


document.write("<div class='container'>");
document.write("<h1>Cadastro</h1>");
document.write("<p>Preencha os campos abaixo para criar sua conta.</p>");
document.write("<hr>");
CreatinInputSigun();
document.write("</div>");

}
//SignupWithRepeatPass();
//SignupBase();



