import Phaser from './phaser-arcade-physics.js';
import Player from './Player.js';
import Bullet from './Bullet.js';
import Mine from './Mine.js';
import Bubble from './Bubble.js';
import Droplet from './Droplet.js';
import Booster from './Booster.js';
import IntroScene from './IntroScene.js';
import Level01 from './Level01.js';

/*
 * BubbleBall.js
 * 
 * 
 */
var BubbleBallGame = function () {
    this.introScene = new IntroScene();
    this.level01 = new Level01();
};


export default BubbleBallGame;