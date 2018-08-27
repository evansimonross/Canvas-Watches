# Canvas-Watches
A tool to convert watchmaker watches into javascript code to display in an HTML canvas.

## How to Use
Just copy and paste the .watch file of the watch you want to convert into the watches folder. Then on the command line, run `node convert.js watch_name` with the file name of your watch replacing watch_name. To view the watch, open the index.html file. To reuse the watch on your own webpage, copy and paste the code in watch.js or in watch_name.js and link it to a canvas on your webpage. The canvas can be of any height/width, but 512 and 256 provide the clearest pictures. 

Not every watchmaker feature has been implemented in this converter. Because the way of representing various elements in watchmaker is totally different from representing them in HTML canvas, each type of item needs to be individually coded. If you find something that needs implementing or needs reworking, please submit an issue on the Github page. If you'd like to try your hand at developing it yourself, feel free to do so. If you add `ast` after your watch name in the node command, a syntax tree file will also be generated so you can look into the nuts and bolts of the watch's behavior. 

## Special Thanks
I had to learn a lot along the way developing this program. I'd like to mention some sources that were instrumental in this process.
* The W3 Schools [Canvas Clock Tutorial](https://www.w3schools.com/graphics/canvas_clock.asp). This was my starting point in figuring out how HTML canvas worked and how to get it to update with the time.
* Rik Lewis' article on [Unpacking the .watch File](https://wear360.blogspot.com/2015/02/watchmaker-unpacking-watch-file.html). This introduction helped me figure out how easily I could unzip the .watch file and read its contents. 
* Ezekiel Victor's [HTML Canvas Gradient Creator](http://victorblog.com/html5-canvas-gradient-creator/). I figured out some rudiments of creating a gradient from W3 Schools' tutorial, but how to translate Watchmaker's gradient angle into the coordinate system of HTML canvas' gradients eluded me. I dived into Ezekiel's code for his tool and found just what I was looking for.