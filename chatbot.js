async function sendMessage(){

let input=document.getElementById("userInput").value;

let chatbox=document.getElementById("chatbox");

chatbox.innerHTML+= "<p><b>You:</b> "+input+"</p>";

const response=await fetch(

"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY",

{

method:"POST",

headers:{ "Content-Type":"application/json" },

body:JSON.stringify({

contents:[{parts:[{text:input}]}]

})

}

);

const data=await response.json();

let ai=data.candidates[0].content.parts[0].text;

chatbox.innerHTML+= "<p><b>AI:</b> "+ai+"</p>";

}


function startVoice(){

let recognition=new webkitSpeechRecognition();

recognition.onresult=function(event){

let speech=event.results[0][0].transcript;

document.getElementById("userInput").value=speech;

sendMessage();

};

recognition.start();

}
