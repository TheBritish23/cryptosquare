# _Cryptosquare_

#### _square code first, 7/18/2019_

#### By _**By Soroush Azizi**_

## Description

_I'm using square code to round up the length of the sentence then putting in a block of text. Message is encoded with words in a certain amount of letters._

## Setup/Installation Requirements

* _CSS_
* _Javascript_
* _Atom_
* _Git_
* _Basht_

## Specs

_Spec 1: Punctuation and spaces are removed_
 _input: don't please_
 _output: dontplease_

_Spec 2: Size of the square (number of columns) should be decided by the length of the message_
 _input: what can i do?_
 _output: 4 x 3_

_Spec 3:  If message is a length that creates a perfect square, uses that number of columns_
 _input: (4, 9, 16, 25, 36, etc)_
 _output: unknown _

_Spec 4:  If not a perfect square, round up_
 _input: "This is a message"_
 _output:[[T,h,i,s],[i,s,a,m],[e,s,s,a],[g,e]]_

_Spec 5: Read down, not side_
 _input: "This is a message"_
 _output: tleg hsse las smg_



## Known Bugs

_You have to refresh page or they stick together _

## Support and contact details

_email.com_

## Technologies Used

_Using Javascript, I had to .join() twice in each forLoop. I also appending a .join()_

### License

MIT License

Copyright (c) 2019 Soroush Azizi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2019 **Epicodus**
