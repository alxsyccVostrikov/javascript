/*
*written by alxsy mostovik
*vostrikovalxsycc@gmail.com
*/



/*
IconMenuLateralUser=[
["LoginUser.php","fa-home","Inicio"],
["#","fa-envelope","Menssagem"],
["#","fa-power-off","Perfil"],
["#","fa-home","Denúncias"],
["#","fa-envelope","Cionfiguração"],
["#","fa-home","Contato"],
["#","fa-envelope","Networking"],
["#","fa-power-off","Estátisticas"],
//["fa-home","Inicio"],
//["fa-envelope","Menssagem"],
["../../index.php","fa-power-off","Sair"],
];
*/
//----------------------------------------------------------------------------MenuLateral.js

//let website;

let menuLateralIcon=["fa-home","fa-envelope","fa-power-off","fa-home","fa-envelope","fa-home","fa-envelope","fa-power-off","fa-power-off"];
let  menuLateralName=["Inicio","Menssagem","Perfil","Denúncias","Configuração","Contato","Networking","Estátisticas","Sair"];
let  menuLateralPage=["LoginUser.php","Menssagem.php","Perfil.php","Denuncia.php","settingsInsideUser.php","contatoInsideUser.php","Network.php","Estatistica.php","../../signin.php"];


function setCss(){
document.write("<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.4.1/css/all.css'>");	
document.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'>);    
document.write("<style>@media (min-width: 768px) {</style>");
document.write("<style>nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{padding: 0 0px 0 0px;}</style>");
document.write("<style>nav.sidebar{width: 150px;height: 100%;margin-left: -160px;float: left;z-index: 8000;margin-bottom: 0px;}</style>");
document.write("<style>nav.sidebar li {width: 100%;}}</style>");
document.write("<style>@media (min-width: 1330px) {</style>");
document.write("<style>.main{width: calc(100% - 200px);margin-left: 200px;}</style>");
document.write("<style>nav.sidebar{margin-left: 0px;float: left;}</style>");
document.write("<style>nav.sidebar .forAnimate{opacity: 1;}}</style>");
document.write("<style>nav.sidebar .navbar-nav .open .dropdown-menu>li>a:hover, nav.sidebar</style>");
document.write("<style>.navbar-nav .open .dropdown-menu>li>a:focus {color: #CCC;background-color: transparent;}</style>");
document.write("<style>nav:hover .forAnimate{opacity: 1;}</style>");
document.write("<style>section{padding-left: 15px;</style>");
document.write("<style>}</style>");
}

function menuLateralUser(website="VostrikovSec"){
    setCss();
document.write("<nav class='navbar navbar-inverse sidebar' role='navigation'>");
    	document.write("<div class='collapse navbar-collapse' id='bs-sidebar-navbar-collapse-1'>");
			document.write("<ul class='nav navbar-nav'>");
  document.write("<li style='text-align:center'>"+website+"</li>");
//for(let i=0;i<menuLateralPage.length;i++)
for(let i in menuLateralPage)
  document.write("<li><a href='"+menuLateralPage[i]+"'><span style='font-size:16px;' class='fa "+menuLateralIcon[i]+"'> "+menuLateralName[i]+"</span></a></li>");
  document.write("</ul>");
	   document.write("</div>");
document.write("</nav>");	
    }








