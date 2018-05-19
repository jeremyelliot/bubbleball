import Phaser from './phaser-arcade-physics.min.js';

export default class Scoreboard {

    constructor(scene, x, y) {
        this.scene = scene;
        this.score = 0;
        this.board = scene.add.text(x, y, 'Points', {
            fontFamily: 'Impact',
            fontSize: '32px',
            fill: '#a8f'
        })
                .setDepth(90)
                .setScrollFactor(0);
        this.textTemplate = 'SCORE: [score]';
        this.addPoints(0);
    }

    addPoints(points) {
        this.score += points;
        this.board.setText(
                this.textTemplate.replace('[score]', this.score)
                );
    }

    getScore() {
        return (this.score);
    }

}