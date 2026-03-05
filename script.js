function openTab(tabName) {

let tabs = document.getElementsByClassName("tabcontent");

for (let i = 0; i < tabs.length; i++) {
tabs[i].style.display = "none";
}

document.getElementById(tabName).style.display = "block";
}


function sendMessage(){

let input = document.getElementById("userInput").value;

let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += "<p><b>You:</b> "+input+"</p>";

let response = chatbotResponse(input);

chatbox.innerHTML += "<p><b>AI:</b> "+response+"</p>";

}


function chatbotResponse(input){

input = input.toLowerCase();

if(input.includes("exam"))
return "Start preparing early and practice previous question papers.";

if(input.includes("programming"))
return "Focus on logic building and practice coding daily.";

if(input.includes("assignment"))
return "Break your assignment into smaller tasks and research each part.";

return "I can help with exams, coding, assignments, and study tips.";

}


function checkNews(){

let news = document.getElementById("newsInput").value;

let result = document.getElementById("result");

let suspiciousWords = ["shocking","unbelievable","secret","breaking"];

let fakeScore = 0;

suspiciousWords.forEach(word=>{
if(news.toLowerCase().includes(word))
fakeScore++;
});

if(fakeScore > 1)
result.innerHTML = "⚠️ This news may be FAKE. Verify from trusted sources.";

else
result.innerHTML = "✅ This news appears more reliable but still verify.";
}
