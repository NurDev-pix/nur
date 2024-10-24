function exploreMore() {
    alert("Explore our programming tutorials and services!");
}


function showSignIn() {
    document.getElementById("signInForm").classList.add("active");
    document.getElementById("signUpForm").classList.remove("active");
}


function showSignUp() {
    document.getElementById("signUpForm").classList.add("active");
    document.getElementById("signInForm").classList.remove("active");
}

window.onload = function() {
    const audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Ошибка воспроизведения:', error);
    });
};

window.onload = function() {
    var audio = document.getElementById('myAudio');
    audio.play().catch(function(error) {
        console.log("Ошибка воспроизведения:", error);
    });
};
