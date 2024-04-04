---
layout: post
title: Animate a Simple Pendulum with Manim
date: 2024-04-03 10:00:00
description: Create a basic animation of a simple pendulum using the Python library Manim.
tags: python manim animation pendulum physics
categories: 
featured: false
---


In this post, we'll explore how to create a basic animation of a simple pendulum using the Python library [Manim](https://www.manim.community/). Manim is a powerful and user-friendly tool for creating mathematical animations, perfect for visualizing scientific concepts. Developed by `Grant Sanderson`, the creator of the popular educational YouTube channel [3Blue1Brown](https://www.youtube.com/c/3blue1brown). Manim is a fantastic tool for teachers, researchers to illustrate complicated ideas, simulate how things work in real life, and explain tricky science concepts in a clear and visual way.

## Setting up Manim
### <span style="color:#5e940e"> Manim playground </span>

 Setting up manim simple. While local installation is recommended for full functionality, but if you want to play around with manim you can check out their in-browser interactive manim playground without local installation on [https://try.manim.community/](https://try.manim.community/). \\
You will provided with a jupyter notebook where you can add your python codes to test and play with Manim.
 

### <span style="color:#5e940e"> Local installation </span>

You can install Manim locally , all you need is a decent code editor. I prefer using [`Visual Studio Code`](https://code.visualstudio.com/). After installing the editor install `Python extension for VScode` and `pylance` which will make the programming experience less painful. Installing Manim library which will be different depending up on the OS you are using. 

 - Install VS Code
 - Install Python 
 - Add extensions to VS code - `python` and `pylance` 
 - Install Manim Library on your local machine.
 


 
##### Windows
1. Install a package manager [Chocolatey](https://chocolatey.org/) following their instructions.
2. Open a PowerShell window as administrator and type the following command:

   ```bash
   choco install manim
   ```
 
##### Linux - Ubuntu

1. Open a terminal window.
2. <b> Install dependencies: <b>

   ```bash
   sudo apt update
   sudo apt install build-essential python3-dev libcairo2-dev libpango1.0-dev ffmpeg python3-pip
   ```
3. Install Manim using pip

   ```bash
   pip3 install manim
   ```
  
##### macOS

1. Install [Homebrew](https://brew.sh) - follow the instructions on their website.
2. Open Terminal

   ```bash
   brew install manim
   ```

     
 
 You can find more about the installation process from these links.
 
 
 * [Install Python](https://www.python.org/downloads/)
 
 * [Download Visual Studio Code](https://code.visualstudio.com/)
 * [Pylance for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
 * [Python for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
 * [More about installing extension in VS Code](https://code.visualstudio.com/docs/editor/extension-marketplace#:~:text=You%20can%20browse%20and%20install,on%20the%20VS%20Code%20Marketplace.)
 

 * [Installing Manim on Windows](https://docs.manim.community/en/stable/installation/windows.html)
 * [Instaling Manim on Linux ](https://docs.manim.community/en/stable/installation/linux.html)
 * [Installing Manim on macOS](https://docs.manim.community/en/stable/installation/macos.html)
 
 
 
## Jumping into the code

open the VS Code and create a file named pendulum.py 

The first step is to import the necessary libraries `manim` and `numpy`. numpy is a numerical python package which is needed for calculations like finsing cosine angle `cos` , squre-root `sqrt()` etc. the next step is todefine the frame size for our animation which is not mandatory. Here I have chosen a potrait frame of size `1080 X 1920`. If we do not choose the frame size then the output will be in the default 1920 x 1080.

```python
from manim import *
import numpy as np

config.frame_size = (1080, 1920)

```

Now lets define our first scene. Manim takes classes as scenes and render it as a short . We can create our first scene named `Scene_1` as :
 
```python
class Scene_1(Scene):
     def construct(self):
```

> Please do care about the spaces in the second line, Python is an intened language. Each line of code within a block must be indented by the same number of spaces or tabs.
{: .block-tip }

Now we can create our pendulum. We can start by creating a pendulum stand. For that first we need to create a `Line()`  named lineA which is starting from 8 units above the oringin (center of the frame) to 4 units below. We can color the line blue color. We can set it to behind the scene plane by changing its `z_index` in the same way create another small blue line for the hook and and a blue`Rectangle()` named rect. Group the components with `VGroup()` name it as stand.

``` python
        lineA = Line(start=UP*8,end=DOWN*4)
        lineA.set_color(BLUE)
        lineA.set_z_index(lineA.z_index-1)

        lineB = Line()
        lineB.set_color(BLUE)
        lineB.next_to(lineA,direction=UP,buff=0)
        lineB.set_z_index(lineB.z_index-1)

        rect = Rectangle(height=1,width=2)
        rect.set_color(BLUE)
        rect.set_fill(BLUE, opacity=1)
        rect.next_to(lineA,direction=DOWN,buff=0)
        
        stand = VGroup(lineA,lineB,rect)
```

 Next step is to create a bob and string using `Circle()` with a radius=0.5 and red colour . Create the string with `Line()` as same way we did erlier.
 Connect the bob and string using `VGroup()`.
 
```python
        #  BOB
        circle = Circle(radius=0.5) 
        circle.set_color(WHITE) 
        circle.set_fill(RED, opacity=1)
        
        # string
        fix_point = ORIGIN+UP*8
        line = Line(start=[0,8,0],end=[0,0,0],)
        line.set_z_index(line.z_index-1)
        
        pendulum =VGroup(circle,line)
```
Its time to animate the pendulum.
```python
self.play( Create(stand))
self.play( Create(pendulum))

```

Lets check wether the code works, for that we need to run our code.

 Go to <b> Terminal > New Terminal</b>
 
 A new terminal will be created under the editor
 
<div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/terminal.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
 
 paste the below code to the terminal.
 
 ```bash
 python -m manim ./pendulum.py
 ```
 If everything goes good you will get an output like :
 
<div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/output.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
 
 
 Now check the project window. you will find your animation in <b> media > videos > Scene_1.mp4 </b>
 
 But wait. The pendulum is not oscilating. So what next? So the next step is to add the physics.
 
 \begin{equation}
 \theta =  \theta_o cos(wt)
\end{equation}
Where $$\theta_o$$ is the maximum angle, $$w$$ is the anguar frequancy ($$w=\sqrt(g/l)$$ here $$g$$ is gravitational acceleration and $$l$$ is the length of pendulum) and $$t$$ is the time of oscillation. This equation accurately describes the angular position of a simple pendulum over time. We can  use this equation to oscilate our pendulum.  

Lets define our variables first. Add the variables right under the `def construct` function.
 
```python 
class Scene_1(Scene):
    def construct(self):
        g = 9.8
        l = 8
        t = 0
        theta_init = PI/4
        omega = np.sqrt(g/l)
        theta =  theta_init*np.cos(omega*t)
       
```

Make an Oscillation using `Rotate()` function. paste the below code after removing the line `self.play(Create(pendulum))`  

```python
self.wait(duration=1)
        while t <=5 :
            theta = theta_init*np.cos(omega*t+1)
            t = t+2.25
            
            self.play(
                Rotate(
                    pendulum,
                    angle=theta,
                    about_point = fix_point,
                    run_time=1.5
                )
            )
```

The final code will look like :

``` python
class Scene_1(Scene):
    def construct(self):
        g = 9.8
        l = 8
        t = 0
        theta_init = PI/4
        omega = np.sqrt(g/l)
        theta =  theta_init*np.cos(omega*t)
       

       #  Pendulum stand
        lineA = Line(start=UP*8,end=DOWN*4)
        lineA.set_color(BLUE)
        lineA.set_z_index(lineA.z_index-1)

        lineB = Line()
        lineB.set_color(BLUE)
        lineB.next_to(lineA,direction=UP,buff=0)
        lineB.set_z_index(lineB.z_index-1)

        rect = Rectangle(height=1,width=2)
        rect.set_color(BLUE)
        rect.set_fill(BLUE, opacity=1)
        rect.next_to(lineA,direction=DOWN,buff=0)
        
        stand = VGroup(lineA,lineB,rect)
           
       #  BOB
        circle = Circle(radius=0.5) 
        circle.set_color(WHITE) 
        circle.set_fill(RED, opacity=1)
       # string
        fix_point = ORIGIN+UP*8
        line = Line(start=[0,8,0],end=[0,0,0],)
        line.set_z_index(line.z_index-1)

        pendulum =VGroup(circle,line)

    
        self.play( Create(stand))
        self.wait(duration=1)
        while t <=5 :
            theta = theta_init*np.cos(omega*t+1)
            t = t+2.25
            
            self.play(
                Rotate(
                    pendulum,
                    angle=theta,
                    about_point = fix_point,
                    run_time=1.5
                )
            )

```

Run the code . Now the pendulum is oscillating!

> See this simple pendulum animation here : [https://www.youtube.com/shorts/khpV78PiApc](https://www.youtube.com/shorts/khpV78PiApc)
 
 
