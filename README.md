# Phaser 3 + TypeScript Starter Kit

This repository contains all the code necessary to start making a game in Phaser 3 using TypeScript.

## How to Use

You should be able to clone this repository and run `yarn install` to get any of the necessary dependencies.

Once you're done installing, simply run `yarn dev` and the game should begin to run. You'll have to open an internet browser and go to the port that the game is running on (usually `localhost:8080` by default).

The game opens up to a main menu. Only the "Start Game" button does anything - the other two are placeholders. If you click "Start Game", you'll be taken to a black screen with a small sprite. You can move the sprite with the arrow keys. This starter kit is far from feature complete, but it's meant to take away the boilerplate that can come with getting a Phaser 3 + TypeScript project up-and-running.

Running `yarn dev` runs the game in development mode, which produces larger bundle sizes but compiles faster and provides better debug support. If you desire a smaller game bundle or to host your game on a server, you can use `yarn build:prod` to compile the project into an optimized bundle. You can use `yarn prod` to run your game locally with production compilation, but this will cause your hot reloading to take longer.

 
## Gratitude
A big thank to @josephmbustamante for [this blog post](https://spin.atomicobject.com/2019/07/13/phaser-3-typescript-tutorial/) and [this repository template](https://github.com/josephmbustamante/phaser3-typescript-starter-kit).
