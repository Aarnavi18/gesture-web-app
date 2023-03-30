
prediction1="";
prediction2="";
Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'/>";
    });
}
console.log("ml5version: ",ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ItMZV2B9Z/model.json",modelloaded);
function modelloaded()
{
    console.log("modelloaded");
}
var speak_data=""
function speak()
{
    var synth=window.speechSynthesis;
    
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}

function check()
{
    img=document.getElementById("capture_image");
    classifier.classify(img,gotresult);
    
}
function gotresult(error,results)
{
if(error){
    console.log(error);
}
else{
    console.log(results);
    prediction1=results[0].label;
    document.getElementById("emotion1").innerHTML=prediction1;


if(prediction1=="amazing"){
    document.getElementById("emoji1").innerHTML="&#128076;";
   speak_data="this is looking amazing";
}
if(prediction1=="best"){
    document.getElementById("emoji1").innerHTML="&#128077;";
    speak_data="all the best";
}
    

if(prediction1=="victory"){
    document.getElementById("emoji1").innerHTML="&#9996;";
    speak_data="that was a marvelous victory";
}
speak();
}}
