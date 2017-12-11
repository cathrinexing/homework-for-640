
# final code plan-final(2nd) version


##### First, I need define my variables, such as bubble, fish pictures, interfaceitems(button), and positions arrays, and hitzones, some pictures(background, peach,watermelon,shoes and animation pictures)and 4 soundfiles.Also the default of my picture and framerate.

##### Then, I need to preload my images, animations and music.

##### Thirdly, I create my canvas and interface buttons, and set my current background picture. Also,i add bubble and random fishes arrays and set defaul to animations in the setup.

##### Fourthly, I add background and draw my hero fish(the eyes of my hero have mapping function) to the draw. Also, I set if statement to my hitzones to add some interesting scenarios(such as show pictures,play sounds, change framerate,start animation). Then I add random target fishes to the draw.
##### finally，i write bubble ,interface and "mousepressed" functions.

# the user interaction explanation
## my project is about my hero fish, who is on his way to find food and his mate.
#### the hero fish is moving with the mouse, when you find food(watermelon), a cheering sound plays and the bubbles move faster and animation frame becomes fast(if you want to see animation,you have to press the animation button in the below,or you will not see the waterplant and jellyfish animaitons).
#### if you find another thing that cannot be eat(shoes),a harsh sound plays and the the bubble move more slowly and animation frame becomes slow(if you want to see animation,you have to press the animation button in the below,or you will not see the waterplant and jellyfish animaitons).
#### if you find your mate(mate is our target fish, which is random（change everytime when you refresh your website）),a very brisk song will play and the background changed.also you will see a peachheart and the animation started(if you have not press the animation button before) or become faster(if you have press the animation button before).

## There are four interface button below my background:start music, animation, stop music and setting back.
#### start music:play a background music about the sound of the sea.
#### stop music:can stop all the sounds and songs in  this project.
####  animation:start the animation of the jellyfish and waterplants.
#### setting back: return to the previous status,that is the first time when you open this page, but different from refresh. For the random target fish is the same.