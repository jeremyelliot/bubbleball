//import BubbleBallGame from './bubbleball.js';
import Phaser from './phaser-arcade-physics.js';
import Level01 from './levels/Level01.js';
import IntroScene from './IntroScene.js';

window.game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
    scene: [new IntroScene(), new Level01('Level01')]
});