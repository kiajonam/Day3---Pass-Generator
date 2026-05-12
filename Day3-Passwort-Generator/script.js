const copyInput = document.querySelector(".input-box span");
const passIndicator = document.querySelector(".pass-indicator");
const passSlider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
const generateBtn = document.querySelector(".generate-btn");
const passwordInput = document.querySelector(".input-box input");


/*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789! @ # $ % ^ & * ( ) _ + - = { } [ ] | \ : ; " ' < > , . ? /~ `  */
const characters = {
lowercase: "abcdefghijklmnopqrstuvwxyz",
uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers: "0123456789",
symbols: `@#$%^&*()_+-={}[]|:;"'<>,.?~\``
}

const passwordGeneration = ()=>{
    let staticPassword = "",
    randomPassword = "",
    isDuplicate = false,
    passLength = passSlider.value;

    options.forEach(option =>{
      
        if(option.checked){
            if(option.id !== "exc-duplicate" && option.id !== "spaces"){
                staticPassword += characters[option.id];
            }else if(option.id === "spaces"){
                staticPassword += " ";
            }else{ 
                isDuplicate = true;
            }
        }
        
    });

      if(staticPassword.length === 0){
            return;
        }

    for(let i = 0; i < passLength; i++){
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
    
        if(isDuplicate){
            if(!randomPassword.includes(randomChar) || randomChar === " "){
                randomPassword += randomChar;
            }else {
                i--;
            }
            }else {
                randomPassword += randomChar;
            }

        }
      
            passwordInput.value = randomPassword;
    };


const passwordUpdateIndicator = ()=> {
    passIndicator.id = passSlider.value <= 8 ? "weak" : passSlider.value <= 16 ? "medium" : "strong"; 
};
passwordUpdateIndicator();

const sliderUpadet = ()=> {
    document.querySelector(".pass-length span").innerHTML = passSlider.value;
    passwordGeneration();
    passwordUpdateIndicator();
}

copyInput.innerHTML = "copy_all";
copyInput.style.color ="#d0d0d0";

const passwordCopy = ()=>{
navigator.clipboard.writeText(passwordInput.value);
copyInput.innerText = "check";
copyInput.style.color = "green";
 

 setTimeout(()=>{
            copyInput.innerHTML = "copy_all";
            copyInput.style.color ="#d0d0d0";
            passwordInput.value = " ";
        },1500)

}


generateBtn.addEventListener('click',passwordGeneration);
copyInput.addEventListener("click", passwordCopy);
passSlider.addEventListener("input", sliderUpadet);










// const lengthSlider = document.querySelector(".pass-length input");
// const options = document.querySelectorAll(".option input");
// const copyIcon = document.querySelector(".input-box span");
// const passwordInput = document.querySelector(".input-box input");
// const passIndicator = document.querySelector(".pass-indicator");
// const generateBtn = document.querySelector(".generate-btn");


// const characters = {
//     lowercase: "abcdefghijklmnopqrstuvwxyz",
//     uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     numbers: "0123456789",
//     symbols: "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`",
// };

// const generatePassword = ()=>{
//     let staticPassword = "",
//     radndomPassword = "",
//     excludeDuplicate = false,
//     passLength = lengthSlider.value;

//     options.forEach(option =>{
//         if(option.checked){
//             if(option.id !== "exc-duplicate" && option.id !== "spaces") {
//                 staticPassword += characters[option.id];
//             }else if(option.id === "spaces"){
//                 staticPassword += ` ${staticPassword} `;
//             } else {
//                 excludeDuplicate = true;
//             }
//         }
//     });
// for(let i = 0; i < passLength; i++){
//     let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
//     if(excludeDuplicate){
//         !radndomPassword.includes(randomChar) || randomChar == " " ? radndomPassword += randomChar : i--;
//     } else {
//         radndomPassword += randomChar;
//     }
    
// }

// passwordInput.value = radndomPassword;
// }

// const updatePassIndicator = () => {
//     passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong"; 
// }

// const updateSlider = () =>{
//     document.querySelector(".pass-length span").innerText = lengthSlider.value;
//     generatePassword();
//     updatePassIndicator();
// }
// updateSlider();

// const copyPassword = () =>{
//     navigator.clipboard.writeText(passwordInput.value);
//     copyIcon.innerText = "ckeck";
//     copyIcon.style.color = "#4285f4";
//     setTimeout(() => {
//         copyIcon.innerText = "copy_all";
//         copyIcon.style.color = "#707070";
//     }, 1500);
// }

// copyIcon.addEventListener("click", copyPassword);
// lengthSlider.addEventListener("input", updateSlider);
// generateBtn.addEventListener("click", generatePassword);
















