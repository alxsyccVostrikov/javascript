/*
*written by alxsy mostovik
*vostrikovalxsycc@gmail.com
*/
let  icon=[];
let  uri=[];
 

let   url=["https://www.facebook.com/"+website,"https://www.instagram.com/"+website,"https://mail.yandex.com/?uid=869376094#compose",
           "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+person["email"]+"&su=DenunciaAnimale&body=my-text&ui=2&tf=1&pli=1",
           "https://web.telegram.org/"+website,"https://www.skype.com/"+website,"https://chat.whatsapp.com/"+website,"https://www.patreon.com/"+website,
           "https://www.bitcoin.com/"+website,"https://www.paypal.com/"+website,"https://www.mercadopago.com.br/"+website,
           "https://pagseguro.uol.com.br/"+website,"https://www.visa.com/"+website,"https://www.bradesco.com/"+website,
           "https://www.itau.com/"+website,"http://www.twitter.com/"+website];



//css style,automatizacao de testes

      function setCss(){
document.write("<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.4.1/css/all.css'>");
document.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'>");
document.write("<style>button{margin: 5px;}</style>");
document.write("<style>body{padding: 0;margin: 0;}</style>");
document.write("<style>.middle{position: absolute;top: 50%;transform: translateY(-50%);width: 100%;text-align: center;}</style>");
document.write("<style>.btn{display: inline-block;width: 90px;height: 90px;background: #f1f1f1;margin: 10px;border-radius: 30%;box-shadow: 0 5px 15px -5px #00000070;color: #3498db;overflow: hidden;position: relative;}</style>");
document.write("<style>.btn i{line-height: 90px;font-size: 26px;transition: 0.2s linear;}</style>");
document.write("<style>.btn:hover i{transform: scale(1.3);color: #f1f1f1;}</style>");
document.write("<style>.btn i{line-height: 90px;font-size: 26px;transition: 0.2s linear;}</style>");
document.write("<style>.btn:hover i{transform: scale(1.3);color: #f1f1f1;}</style>");
document.write("<style>.btn:hover::before{animation: aaa 0.7s 1;top: -10%;left: -10%;}</style>");
document.write("<style>@keyframes aaa {0%{left: -110%;top: 90%;}50%{left: 10%;top: -30%;}100%{top: -10%;left: -10%;}}</style>");
}
setCss();




function criandoIcons(...args){
      //   for(let j=0;j<args.length;j++)
    //       for(let i=0;i<url.length;i++)
  for(let j in args)
     for(let i in url)

             if(url[i].split(/[/?#]/)[2].replace(/^\w+./,"").length>15){
              if(args[j]==url[i].split(/[/?#]/)[2].replace(/(.\w+){1,3}$/,"").replace(/^\w+./,""))
                icon.push(url[i].split(/[/?#]/)[2].replace(/(.\w+){1,3}$/,"").replace(/^\w+./,""));
            }else{
              if(args[j]==url[i].split(/[/?#]/)[2].replace(/(.\w+){1}$/,"").replace(/^\w+./,""))
                icon.push(url[i].split(/[/?#]/)[2].replace(/(.\w+){1}$/,"").replace(/^\w+./,""));
            }


  }



  function boobleSort() {
    icon.sort();
//        for(let j=0;j<icon.length;j++)
//          for(let i=0;i<url.length;i++)
    for(let j in icon)
      for(let i in url)
            if(url[i].split(/[/?#]/)[2].replace(/^\w+./,"").length>15){
              if(icon[j]==url[i].split(/[/?#]/)[2].replace(/(.\w+){1,3}$/,"").replace(/^\w+./,""))
                uri.push(url[i]);
            }
            else{
              if(icon[j]==url[i].split(/[/?#]/)[2].replace(/(.\w+){1}$/,"").replace(/^\w+./,""))
                uri.push(url[i]);
              //              alert(uri.toString());
  } 
}


function genericSocialShare( i){
      window.open(uri[i],'sharer','toolbar=0,status=0,width=648,height=395');
        return true;
    }
    
    
  function botoesDenuncia(){
    boobleSort();
    document.writeln("<div class='middle'>");
//    for(let i=0;i<icon.length;i++)
  for(let i in icon)
    document.write("<button onclick=genericSocialShare("+i+") style='margin:8px;'><i class='fab fa-"+icon[i]+"'> "+icon[i]+"</i></button>");
    document.writeln("</div>");
  }

  function binkDenuncia(){
    boobleSort();
    document.writeln("<div class='middle'>");
//    for(let i=0;i<icon.length;i++)
    for(let i in icon)
    document.write("<a class='btn' onclick=genericSocialShare("+i+")><i class='fab fa-"+icon[i]+"'>"+icon[i]+"</i></a>");
    document.writeln("</div>");
  }
    
