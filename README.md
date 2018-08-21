# Template Messaging

This repo contains code for creating message templates, and then messages based on those templates and the company and guest selected.

The code for creating the message from the chosen template, guest and company is on the back-end as a module.

The GUI is built using React, redux and sagas.

## Get Started

In order to view and use this application you'll need to do a couple things.

1. You can either fork and clone this repo down to your system, or you can download the repo and open it in your command line tool.
2. Once you're at the root directory of the project, you'll need to run "npm install" to install all the dependencies
3. Next you'll need to run two commands in the command line, "npm run server" to spin up our server, and then "npm run client" to start up the client.
4. Starting up the client should automatically open the app in your browser, however if it doesn't, navigate to http://localhost:3000 in your browser to view the application.

*There is no database for this project*

## Overview of Design Decisions

> OOP | Javascript Class

In order to approach the project with and Object Oriented Programming solution, I chose to create a Javascript class that I could import into my backend routes.  I decided to approach the problem this way so that the result would be a singular file that I can drop into any project, provide the class with the correct data types and structures, and then I can generate templated messages anywhere.

> Hard Coded Logic for evaluated nested keys

In my solution there is some hard coded logic, specifically in the _checkForKnownNestedKeys method of my Template Class.  When approaching this issue of there being nested keys that I wanted to use for replacing "flag" in the template with proper values, I determined two options.  One option was to hard code in some logic via a switch statement to checkout if a word is a known nested key.  The other option being a recursive function that would dig through choosen guest and company objects in order to evaluate against nested keys.  The issues I saw with recursion was that it would not be scalable.  As the data objects became more and more nested, or the template string increased in word count, the performance of the recursive function would deteriorate.  Although recursion would be flexible, it would become slow if data sets became larger.  Alternatively, by creating a method that can check for known nested keys is inflexbile and rigid.  Yes, we can add known keys as the need arises, but this can become tedious.  But the advantage is that as the datasets increase, our logical check doesn't take as long to perform as the recursive method. The recursive method would be O(n2) or n squared because each word in the template string would need to be checked against each level of nested data structures within a datastructure, where as hard coding the logic via switch statement would be O(n) because the time it takes will increase by the same amount for each word added to the template string.  Therefore I chose to go the rigid route due to my concern for having more performant code.

> React???

I chose to build my GUI using ReactJS because it is the Javascript framework with which I am most comfortable.  However, after building the GUI took me 3 hours, I realize that a lighterweight framework would have been more appropriate for a GUI of this size.  Had I been building a massive application with many features, the amount of time it takes to set up React up front would have been worth it, however with such a barebones application Angular or even jQuery would have been much quicker to implement.

## Language Used and Why?

> Javascript

I chose to write this application using Javascript because it is tha language with which I am the most comfortable.  However, this feels like a throw away answer so let me vouch for Javascript a bit.  Javascript is not very fast, and it can be messy because it is not typed.  However, because it is a high level language it is more semantic than lower level languages.  This makes the code easier to read and easier to communicate ideas across developers.  Additionally, Javascript is quick to implement because it just runs in internet browsers.  With other languages that require compiling, the develop to deploy time frame is longer.  So for a coding exercise like this, creating a solution in Javascript is a good idea because those reading the solution when it's subimitted will have an easier time understanding your ideas, and it takes no time to get up and running to be viewed.

## Process for Verifying Correctness

> Manual Testing

As I built the solution to this challenge I ran a number of test scenarios to check that all known keys were behaving as expected.  I did this manually, and the code can be seen commented out at the bottom of template.class.js.  Had I been more comfortable with testing languages and libraries, such as Mocha and Chai, I would have implemented these instead of manually testing the way I did.  Mocha and Chai would have allowed me to write some tests before developing, and I could have developed with a test driven mindset.  I'm planning on implementing some automated testing now that the solution and application are complete using Mocha and Chai so that I have some experience with writing tests.

## Stretch Goals

> Flexibility

I am still very concerned with how rigid my solution is, and given more time I would like to brainstorm some solutions this and refactor my code.  There could be a different methodolgy for adding "flags" to the template that would solve this problem.  Perhaps performing a type check on words in the template when they are indentified as keys, and if their type if "object" the following word could be the nested key I am looking to use to get the proper value.  This way we can get into nested areas without having to check each and every word of the string against all levels of the data structure.

> Store created templates in JSON

While studying at Prime we were taught how to use both non-relational and relational databases (i.e. MongoDB and PostgreSQL).  However, we did not learn how to write JSON files to update their contents.  If I had more time I would do some research into JSON, how to manipulate JSON files and write JSON files programmatically.  Then I would move the "templates" array that is holding all added and default templates in the template router into a JSON file and refactor my POST routes to write to that file instead.

> Solve it in another language

I can't help but think that some of the difficutly I faced when attempting to solve this challenge could be removed by using a different programming language.  Also, I would like to challenge my own reasoning for using JS above, and attempt to use a lower level language, such as C#.  It would be interesting to audit the differences in pain points and points of ease between a higher level language and a lower level language when completing a challenge such as this.

## Notes

* Duration - 5 hours (2 hours to build Template class, 3 hours to build the GUI and backend routes)(Reflected in the two branches of the Github repo).