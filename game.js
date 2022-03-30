// alert("hell");
var isStarted=false;
var level=0;
var gamePattern=[];
var userClickedPattern=[];
var colors=["green","red","yellow","blue"];
var cnt=0;
$(document).keypress(function()
{
    if(isStarted==false)    
    {
        isStarted=true;
        nextSequence();
    }
});
function nextSequence()
{
    level++;
    $("h1").html("level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=colors[randomNumber];
    gamePattern.push(randomChosenColor);
    btnAnimate(randomChosenColor);
    userClickedPattern=[];
    cnt=0;
}
$(".btn").click(function()
{
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    btnAnimate(userChosenColor);
    compare(userChosenColor);
    cnt++;
    if(cnt==level)
    {
        setTimeout(function()
        {
            nextSequence();
        },1000);
    }
});
function compare(userChosenColor)
{
    if(userChosenColor!=gamePattern[cnt])
    {   
        $("h1").html("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        },150); 
        startOver();
    }
}
function btnAnimate(currentColor)
{
    // console.log(randomNumber);
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () 
    {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
    var audio=new Audio("sounds/"+currentColor+".mp3");
    audio.play();
}
function startOver()
{
    level=0;
    isStarted=false;
    gamePattern=[];
}