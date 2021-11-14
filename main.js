quick_draw_data_set=["pen","paper","book","bottle"]
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}
function updateCanvas() {
    background("white");
random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1)
sketch = quick_draw_data_set[random_no]
}
console.log("sketch to be drawn:"+sketch);
document.getElementById("sketch").innerHTML = "sketch to be drawn:"+sketch;
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
function draw() {
 checksketch();
 if(drawn_sketch==sketch) {
     score+1;
     document.getElementById("score")=score;
     answer_holder="set";

 }  
 }
 function checksketch() {
     timer_counter+1;
     console.log(timer_counter)
     document.getElementById("timer")=timer_counter;
     if(timer_counter==400) {
         timer_counter=0;
         timer_check="completed";
        

     }

 }
 if(timer_check=="completed", answer_holder=="set")
 {
timer_check="";
answer_holder="";
updateCanvas();
 }