
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>סיימון</title>
<style>
    body{
    background-color: #befbf9;
}
    .red{
    background-color: red;
    width: 300px;
    height: 300px;
}
    .blue{
    background-color: blue;
    width: 300px;
    height: 300px;
    border-radius: 50%;
}
    .green{
    background-color: green;
    width: 300px;
    height: 300px;
    /*transform: rotate(45deg);*/
    clip-path: polygon(50% 0%, 0% 50%,50% 100% , 100% 50%);
}
    .yellow{
    background-color: yellow;
    width: 300px;
    height:261px; /* ≈ width * 0.866 for equilateral */
    height:300px; /* ≈ width * 0.866 for equilateral */
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

}
    #btn_panel{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
    .smallBtn{
    transform: scale(0.5);
}
</style>
</head>
<body>
<div id="game_viewer"></div>
<div id="btn_panel">
    <div class="red smallBtn"></div>
    <div class="blue smallBtn"></div>
    <div class="green smallBtn"></div>
    <div class="yellow smallBtn"></div>
</div>
<script>
    const game_viewer=document.getElementById("game_viewer");
    setRed();
    setTimeout(setGreen,500);
    setTimeout(setYellow,1000);
    setTimeout(setBlue,1500);
    let rezef=["red","blue","green","yellow"];
    let rezef_index=0;

    function setRed(){
    game_viewer.className="";
    game_viewer.classList.add("red");
}
    function setGreen(){
    game_viewer.className="";
    game_viewer.classList.add("green");
}
    function setBlue(){
    game_viewer.className="";
    game_viewer.classList.add("blue");
}
    function setYellow(){
    colorStep()

    function colorStep(){
    game_viewer.className="";
    game_viewer.classList.add("yellow");
    game_viewer.classList.add(rezef[rezef_index++]);
    if (rezef_index < rezef.length) {
    setTimeout(colorStep, 500);
}
}
    </script>
    </body>
