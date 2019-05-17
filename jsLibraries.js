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
for(let i=0;i<Alibs.length;i++){
var x = document.createElement('script');
x.src=Alibs[i];
document.body.appendChild(x);
/*
x.onload=function(){
alert(_);
};
script.onerror = function() {
  alert("Error loading " + this.src);
  };
  */
}
}
