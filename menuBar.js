/*
*written by alxsy mostovik
*vostrikovalxsycc@gmail.com
*/
//--------------------------------------------------------------------------MenuBar.js


  let website="Animale";

  let person={
  email:"vostrikovalxsycc@gmail.com",
  nome:"Alxsy",
};

let pag=["index.php","sobre.php","contato.php","QuemSomos.php","denuncia.php","contribuir.php"];
let pagName=["Inicial","Sobre","Contato","QuemSomos","Denuncia","Contribuir"];


 let  glyphicon=["user","log-in"];
let  glyphiconName=["Inscrever-se","Entrar"];
 let  glyphiconPag=["signup.php","signin.php"];
 



function setCss(){
document.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'>");
document.write("<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.4.1/css/all.css'>");
}
setCss();


//left menu full
function me(pathE){
  document.write("<nav class='navbar navbar-inverse'>");
    document.write("<a class='navbar-brand' onclick='sms()'>"+website+"</a>");
      document.write("<ul class='nav navbar-nav'>");    
      //  for(let i=0;i<pag.length;i++)
     for(let i in pag)    
   document.write("<li><a href='"+pathE+pag[i]+"'>"+pagName[i]+"</a></li>");

           document.write("</ul>");    
}

//right menu full
function md(pathD){
  document.write("<ul class='nav navbar-nav navbar-right'>");
//   for(let i=0;i<glyphicon.length;i++)
    for(let i in glyphiconPag)   
      document.write("<li><a href='"+pathD+glyphiconPag[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");
        document.write("</ul>");
  document.write("</nav>");

}



//message
function sms(){
  alert("Desenvolvido por:"+person["nome"]+"\nemail:"+person["email"]);
}

  
//creatin menu
function criarMenu(pathE="./",pathD="./"){
me(pathE);
  md(pathD);
}
//CriarMenu();


//another wat to create menu
function tst(pathE="./",pathD="./"){
   document.write("<nav class='navbar navbar-inverse'>");
    document.write("<a class='navbar-brand' onclick='sms()'>"+website+"</a>");
      document.write("<ul class='nav navbar-nav'>");    
      
  //  for(let i=0;i<pag.length;i++)
  for(let i in pag)    
  document.write("<li><a href='"+pathE+pag[i]+"'>"+pagName[i]+"</a></li>");
           document.write("</ul>");    
document.write("<ul class='nav navbar-nav navbar-right'>");

    //   for(let i=0;i<glyphicon.length;i++)
    for(let i in glyphiconPag)   
      document.write("<li><a href='"+pathD+glyphiconPag[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");
        document.write("</ul>");
  document.write("</nav>");
}
//tst();
