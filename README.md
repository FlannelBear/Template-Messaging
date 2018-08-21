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

## Notes

* Duration - 5 hours (2 hours to build backend solution logic, 3 hours to build the GUI)

* Choosing to build such a bare bones GUI using React resulted in a lot of overhead to get up and running, hence the GUI taking 3 hours to build.

* The solution makes use of a single Template class in order to adhere to OOP.  A new instance is created each time a template is added, and only one method is used. However this method makes use of several internal methods.  This class provides a solution that is wholey self contained.  If one were to drop the class into another program and provide it the correct data, it would work.

* Finally, there is some hard coded logic in the class that assumes the data structure of objects given to the methods will remain the same and not change (checking for known nested keys).  This makes the class strict and inflexible.  However, the alternative method, which would result in greater flexibility, of making use of recursion to find nested keys would not scale well with growing data sets.  The longer the template messages get, the longer the solution will take to provide the message, because all words in the template string would require testing.  Therefore, I chose to stick to a stricter, but faster solution.