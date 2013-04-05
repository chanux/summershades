Summershades
============
*bsumm.net color bands for everyone.*

I have been to [bsumm.net](http://bsumm.net) several times through hackernews and every single time the color bands left me puzzled.

On one boring morning I found myself on bsumm.net and realized I still didn't know how those colors are connected to letters.

Then I went on an figured it out. I showed it to my colleagues and one wanted the color bands for her name too. Then I decided to make this.

If you don't want to look at the code, following is how the colors are made.

Every three charachters is used to make Red, Green and Blue hex values. Color values vary from 0-255.
Number English alphabet starting from zero. Then apply following algorithm.
color value = letter index x 10 + floor(lette index / 5)

Demo
----
Gimme my color [bands](http://chanux.github.com/summershades)!

License
-------
Do What The Fuck You Want To Public License ([WTFPL](http://www.wtfpl.net))
