const piano_keys = document.querySelectorAll(".piano-keys .key");
const volume_slider = document.querySelector(".volume-slider input");
const key_checkbox = document.querySelector(".keys-checkbox input"); 

let allkeys=[];
let audio = new Audio("tunes/a.wav")
const playtune=(key)=>{
    audio.src = `tunes/${key}.wav`;
    audio.play();
    const clicked_key=document.querySelector(`[data-key="${key}"]`);
    clicked_key.classList.add("active");
    setTimeout(() => {
        clicked_key.classList.remove("active");
    }, 150);
}

piano_keys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click",()=>playtune(key.dataset.key))
});

const pressedKey = (e)=>{
    if (allkeys.includes(e.key)) {
        playtune(e.key);
    }
}
 
const handlevol = (vol)=>{
    audio.volume = vol.target.value;
}

const ShowhideKey = ()=>{
   piano_keys.forEach(key=>key.classList.toggle("hide"))
}
document.addEventListener("keydown",pressedKey);
volume_slider.addEventListener("input",handlevol);
key_checkbox.addEventListener("click", ShowhideKey);
