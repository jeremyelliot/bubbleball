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



    create() {
        this.physics.world.setBounds(0, 0, 1600, 600);
        this.add.tileSprite(400, 300, 1600, 600, 'background');
        this.logo = this.add.image(400, 200, 'logo');
        this.startGame = this.add.image(410, 400, 'start-game');


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