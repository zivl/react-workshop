# Part 0: Setup

Each attendee should come to the course with their own computer, so that they can follow the steps. We also ask all attendees to complete the following installation items before the first day of the course.

## The Command Line Terminal

The React tool-chain is quite command-line oriented, so we recommend installing a good command-line terminal program. For __Mac OS X__ we recommend
[iTerm2](http://iterm2.com/).

For __Windows__, we'll be using `Git Bash`, which comes with `git`, below.

## Git

We'll be using `git` from the command line:

<http://git-scm.com/download/>

__Windows Users__: Just select the default options in the installation wizard.

__Windows Users__: The rest of this course assumes you are using the terminal that comes with `git` (`Git Bash`) to run all command-line examples.

There are tools that provide a GUI interface for `git`, for both OS X and Windows. Attendees who are proficient with `git` and prefer to use those tools can do so if they wish. However, all of our instructions will be for the command line, so we recommend having this available as a backup.

## Node.JS

<http://nodejs.org/download/>

This should install two commands: `node` and `npm`.

`npm` may require some extra configuration to set permissions properly on your system.

On __Mac OS X__, do the following:

```sh
npm config set prefix ~/.npm
echo 'export PATH="$PATH:~/.npm/bin"' >> ~/.bashrc
~/.bashrc
```

On __Windows__, fire up `Git Bash` and type the following:

```sh
mkdir /c/Users/$USER/AppData/Roaming/npm
echo 'export PATH="$PATH:/c/Program Files/nodejs"' >> ~/.bashrc
~/.bashrc
```
__Note:__ if you installed the 32-bit Windows version of node, the second line above should instead read:

```
echo 'export PATH="$PATH:/c/Program Files (x86)/nodejs"' >> ~/.bashrc
```

## Google Chrome

Please install a recent version of Google Chrome, since we'll be using tools that assume it.

## A Code Editor

Any text editor will work. At Rangle.io the most popular editors/IDEs are:

* [Sublime Text](http://www.sublimetext.com/)
* [Atom](https://atom.io/)
* [WebStorm](https://www.jetbrains.com/webstorm/)
* Vim

## Verifying the Setup

Once you have all the tools set up correctly, you should be able to do the following steps through the command line. This is the best way to check that `git`, `node`, and `npm` were installed correctly.

Clone the training repository:

```sh
  git clone https://github.com/rangle/react-workshop.git
  cd react-workshop/base
  npm install
  npm start
```
