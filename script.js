<script>
var text = "Mahdi Bozorgi";
var i = 0;
var speed = 300;
function writeFunction() {
    if (i < text.length) {
        document.getElementById("header").innerHTML += 
        text.charAt(i);
        i++;
        setTimeout(writeFunction, speed);
    } else {
        document.getElementById("header").style.color = "springgreen";
    }
}
writeFunction();
</script>
