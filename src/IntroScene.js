import Phaser from './phaser-arcade-physics.min.js';

export default class IntroScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'IntroScene',
            physics: {
                system: 'arcade',
                gravity: {y: 0}
            }
        });
        this.logo;
    }

    preload() {
        this.load.image('background', 'assets/background-nebula.jpg');
        this.load.image('start-game', 'assets/start-game.png');
        this.load.image('logo', 'assets/bubbleball-logo.png');
        this.load.spritesheet('mine', 'assets/mine.png', {
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 15
        });
        this.load.spritesheet('explosion', 'assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 24
        });
        this.load.image('bubbleball', 'assets/football-bw.png');
        this.load.image('wall', 'assets/wall.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.spritesheet('booster', 'assets/booster-active.png', {
            frameWidth: 100,
            frameHeight: 24,
            endFrame: 11
        });
        this.load.image('droplet', 'assets/droplet.png');
        this.load.image('bubble', 'assets/bubble.png');
        this.load.image('bullet', 'assets/bullet5.png');
        this.load.image('game-over', 'assets/game-over.png');
        this.load.image('pipe', 'assets/pipe.png');
        this.load.image('pipe-overlay', 'assets/pipe-overlay.png');
        this.load.image('level-completed', 'assets/level-completed.png');

        this.load.audioSprite('sfx', 'assets/sfx_1.3.ogg', 'assets/sfx.json');

    }

    create() {
        this.physics.world.setBounds(0, 0, 1600, 600);
        this.add.tileSprite(400, 300, 1600, 600, 'background');
        this.logo = this.add.image(400, 200, 'logo');
        this.startGame = this.add.image(410, 400, 'start-game');

        // create animations
        this.anims.create({
            key: 'mine.rotate',
            frames: this.anims.generateFrameNumbers('mine', {start: 0, end: 15, first: 0}),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'explosion.explode',
            frames: this.anims.generateFrameNumbers('explosion', {
                start: 0,
                end: 24,
                first: 0
            }),
            frameRate: 45
        });
        this.anims.create({
            key: 'booster',
            frames: this.anims.generateFrameNumbers('booster', {
                start: 0,
                end: 8,
                first:0
            }),
            frameRate: 18,
            repeat: -1
        });
        this.anims.create({
            key: 'booster.boost',
            frames: this.anims.generateFrameNumbers('booster', {
                start: 9,
                end: 11,
                first: 9
            }),
            frameRate: 18
        });

        // set up camera
        this.cameras.main.setBounds(0, 0, 1600, 600);
        this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        if (this.startKey.isDown) {
            this.scene.stop('IntroScene');
            this.scene.launch('Level01');

        }
    }
}