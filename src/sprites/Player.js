export default class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setOrigin(0.5, 0.5);
        this.setDepth(100);
        this.setVelocity(0, 200);
        this.body.maxAngular = 400;
        this.body.maxVelocity = 600;
        this.setBounce(0.99);
        this.setCollideWorldBounds(true);
        this.body.onWorldBounds = true;
        this.alive = true;
    }

    hitWorldBounds(body) {
        this.setVelocityX(body.angularVelocity / 2);
        this.scene.sound.playAudioSprite('sfx', 'bounce');
    }

    fireBullet() {
        if (!this.isAlive())
            return;
        var bullet = this.scene.spriteGroups.bullets.getFirstDead(true);
        bullet.setActive(true)
                .setVisible(true)
                .setPosition(
                        this.body.x + this.displayWidth / 2,
                        this.body.y + this.displayHeight / 2
                        );
        var bulletVX = bullet.fireVelocity;
        bullet.setFlipX(false);
        if (this.body.angularVelocity < 0) {
            bulletVX *= -1;
            bullet.setFlipX(true);
        }
        bullet.setVelocity(bulletVX, 0);
        this.scene.sound.playAudioSprite('sfx', 'blaster');
    }

    kill(explode = true) {
        this.alive = false;
        if (explode) {
            var player = this;
            var scene = this.scene;
            scene.add.sprite(this.body.x, this.body.y)
                    .on('animationcomplete', function (animation, frame) {
                        scene.gameOver(player)
                    })
                    .play('explosion.explode');
        }
        this.setActive(false)
                .setVisible(false)
                .disableBody();
        return this;
    }

    isAlive() {
        return (this.alive);
    }
}

