/*
written by alxsyccVostrikov@gmail.com,
"how use it",....

<script src='https://raw.githack.com/alxsyccVostrikov/javascript/master/JSlibraries.js'> <script>

<script>
//add news libraries...
addLib("hash","Button",MenuLateral");
or
addAnotherLib('https://raw.githack.com/alxsyccVostrikov/javascript/master/hash.js','https://raw.githack.com/alxsyccVostrikov/javascript/master/Button.js')
</script>

<script>
//functions from files
</script>
*/

function addLib(...args){
let libs=args;
for(let i=0;i<libs.length;i++)
document.write("<script src='https://raw.githack.com/alxsyccVostrikov/javascript/master/"+libs[i]+".js'><\/script>");
}

function addAnotherLib(...args) {
let Alibs=args;
for(let i=0;i<args.length;i++){
    var script = document.createElement("script");
    script.src = Alibs[i];  
 //document.head.appendChild(script);
 document.getElementsByTagName('head')[0].appendChild(script);
}
}
