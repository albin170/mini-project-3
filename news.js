function analyzeNews(){

let text=document.getElementById("newsText").value;

let score=100;

let suspicious=[

"breaking",

"shocking",

"secret",

"unbelievable",

"exposed"

];

suspicious.forEach(word=>{

if(text.toLowerCase().includes(word))

score-=15;

});

document.getElementById("score").innerHTML=

"Credibility Score: "+score+"%";

}
