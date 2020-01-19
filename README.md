# VTT Test File
Here is a bunch of `.vtt` file in the [vtt files/](https://github.com/1c7/vtt-test-file/tree/master/vtt%20files) folder     

All of `.vtt` file follow this specification:         
[WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/webvtt1/)

![Spec Screenshot](./img/spec.jpg)

## Purpose
Testing

## Who can benefit from this?
* Developer
* Developer who needs to write a program to deal with `.vtt` file.

## What kind of benefit?
Save time

## How to use this?
If you are writing a program that parse `.vtt` file.   
and you want to test if the program can handle all kind of variation of vtt file.     
Just grab vtt file from the [vtt files/](https://github.com/1c7/vtt-test-file/tree/master/vtt%20files) folder and use them for testing.  

## Why I created this
I built a Desktop app called [Tern - Subtitle File Translator](http://tern.1c7.me/)     
It can read `.srt` `.ass` `.vtt` and translate them into another language.  
(For example, French to English)     
It's like a `Google Translator Toolkit` replacement

I have to parse `.vtt` file.     
To make sure my program works with all kind of `.vtt` file.     
I create/collected these. 

I open-source it so everyone can save time.

## Package: node-webvtt 
I did a quick test on npm package: [node-webvtt](https://www.npmjs.com/package/node-webvtt)    
You can run test with  
```
git clone https://github.com/1c7/vtt-test-file.git
cd vtt-test-file/
npm install

node test-node-webvtt.js
```

## Side note
if you are using youtube-dl, For example:

```bash
youtube-dl https://www.youtube.com/watch?v=T7Rv4tGRlfc --skip-download --sub-format vtt --write-sub
```

You would get a vtt file   
`The Future of Artificial Intelligence - Crash Course AI #20-T7Rv4tGRlfc.en.vtt`

Which contain these text

```
WEBVTT
Kind: captions
Language: en

00:00:00.240 --> 00:00:05.410
Hey everyone, I’m Jabril and welcome to
the final episode of Crash Course AI.
```

Let's focus on this part  
```
Kind: captions
Language: en
```

This `Kind:` and `Language:`   
Doesn't seem like following WebVTT standard  
I ask about that on [youtube-dl Issue](https://github.com/ytdl-org/youtube-dl/issues/23777) 

Clearly it's from Youtube.   
Youtube is not following WebVTT standard   

### Side note conclusion: 

Just delete these manually
```
Kind: captions
Language: en
```

or ignore them in your program   