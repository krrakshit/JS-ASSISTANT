
let mic = document.getElementById('mic');
let messages_area = document.querySelector('.messages_area');
let chats = document.querySelector('.chats');
let notchat = document.getElementById('notchat');
let darky = document.querySelector('#darky');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


const userMSg = (msg) => {
    let output = '';
    output += `<p class="message right">${msg}</p>`;
    chats.innerHTML += output;
    return chats;
}
const assistanSpeak = (msg) => {
    let output = '';
    output += `<p class="message left">${msg}</p>`;
    chats.innerHTML += output;
    return chats;
}


const assistantMsg = (msg) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = "sorry!";
    speech.lang = "hi";
    if (msg.includes('who are you')) {
        let result = intro[Math.floor(Math.random() * intro.length)]
        speech.text = result;
    }
    else if (msg.includes('awesome movie')) {
        const result = movie[Math.floor(Math.random() * movie.length)];
        speech.text = result;
    }
    else if (msg.includes('what is my name')) {
        const result = names[Math.floor(Math.random() * names.length)];
        speech.text = result;
    }

    else if (msg.includes('thank you robo')) {
        const result = thanks[Math.floor(Math.random() * thanks.length)];
        speech.text = result;
    }

    else if (msg.includes('gest my work robo')) {
        const result = work[Math.floor(Math.random() * work.length)];
        speech.text = result;
    }

    else if (msg.includes('closing robo')) {
        const result = close[Math.floor(Math.random() * close.length)];
        speech.text = result;
    }
    window.speechSynthesis.speak(speech);
    messages_area.append(assistanSpeak(speech.text));
}

//conversion status
recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    messages_area.append(userMSg(transcript));
    assistantMsg(transcript);
    transcript ? notchat.style.display = "none" : notchat.style.display = "block";
};




mic.addEventListener('click', () => {
    recognition.start();
})


darky.addEventListener('click', ()=>{
    document.querySelector('.box').classList.toggle('dark');
})