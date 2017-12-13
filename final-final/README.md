
# final code plan-final version


##### First, I need define my variables, such as bubble, fish pictures, interfaceitems(button), and positions arrays, and hitzones, some pictures(background, peach,watermelon, banana, shoes and animation pictures)and 4 soundfiles.Also the default of my picture and framerate.

##### Then, I need to preload my images, animations and music.

##### Thirdly, I create my canvas and interface buttons, and set my current background picture. Also,i add bubble, random fishes arrays and random positions of my food in the setup.

##### Fourthly, I add background and draw my hero fish(the eyes of my hero have mapping function) to the draw. Also, I set if statements to my hitzones to add some interesting scenarios(such as showing pictures and text, playing sounds and changing framerate). Then I add random target fish to the draw,.
##### finally，i write bubble ,interface and "mousepressed" functions.

# the user interaction explanation
## my project is about my hero fish, who is on his way to find food and his mate.
#### the hero fish is moving with the mouse,also the eyes of my hero have mapping movement. when you open the site, you cannot find anything, but the background music and animation start .
## There are 2 interface buttons below the background:"find your food" and "find your mate".
### find your food
#### After clicking "find your food"button, the text"on your way to find your food" would appear. If you find your food (watermelon/banana),
1. a cheering sound plays;
2. the bubbles move faster;
3. animation frame becomes fast;
4. the text"you find your food!!" would appear on the top.
#### Also, the position of these food is random.

#### if you find a non-food product that cannot be eat(shoes),
1. a slam sound plays;
2. the bubbles move more slowly;
3. animation frame becomes slower;
4. the text"Sorry, you are wrong!" would appear on the top.
#### Also, the position of non-food product is random.

### find your mate
#### After clicking "find your mate"button,if you find your mate,
1. a very brisk song will play; 
2. the environment will change;
3. display a peachheart;
4. animation become faster;
5.  the text" you find your mate!!!" would appear on the top.
#### Also, the target fish is random.


