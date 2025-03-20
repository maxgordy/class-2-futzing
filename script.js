document.addEventListener("DOMContentLoaded", function () {
    const asciiArt = document.getElementById("ascii-art");
    
    function glitchEffect() {
        let text = asciiArt.innerText;
        let chars = text.split("");
        let newHtml = "";
        
        for (let i = 0; i < chars.length; i++) {
            let char = chars[i] === " " ? (Math.random() > 0.5 ? "*" : " ") : chars[i];
            let color = Math.random() > 0.5 ? "white" : "pink";
            newHtml += `<span style="color: ${color};">${char}</span>`;
        }
        
        asciiArt.innerHTML = newHtml;
    }
    
    setInterval(glitchEffect, 200);
});