const text = ["Pharmacy Student 💊", "AI Developer 🤖", "Future Entrepreneur 🚀"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];
    
    if (!isDeleting) {
        j++;
    } else {
        j--;
    }

    document.getElementById("typing").innerHTML = currentText.substring(0, j);

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
