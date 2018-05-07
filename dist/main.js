/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/IntroScene.js":
/*!***************************!*\
  !*** ./src/IntroScene.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IntroScene; });\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phaser-arcade-physics.js */ \"./src/phaser-arcade-physics.js\");\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass IntroScene extends _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n\n    constructor() {\n        super({\n            key: 'IntroScene',\n            physics: {\n                system: 'arcade',\n                gravity: { y: 0 }\n            }\n        });\n        this.logo;\n    }\n\n    preload() {\n        this.load.image('background', 'assets/background-nebula.jpg');\n        this.load.image('start-game', 'assets/start-game.png');\n        this.load.image('logo', 'assets/bubbleball-logo.png');\n    }\n\n    create() {\n        this.physics.world.setBounds(0, 0, 1600, 600);\n        this.add.tileSprite(400, 300, 1600, 600, 'background');\n        this.logo = this.add.image(400, 200, 'logo');\n        this.startGame = this.add.image(410, 400, 'start-game');\n        // set up camera\n        this.cameras.main.setBounds(0, 0, 1600, 600);\n        this.startKey = this.input.keyboard.addKey(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.S);\n    }\n\n    update() {\n        if (this.startKey.isDown) {\n            this.scene.stop('IntroScene');\n            this.scene.launch('Level01');\n\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/IntroScene.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phaser-arcade-physics.js */ \"./src/phaser-arcade-physics.js\");\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _levels_Level01_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/Level01.js */ \"./src/levels/Level01.js\");\n/* harmony import */ var _IntroScene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IntroScene.js */ \"./src/IntroScene.js\");\n//import BubbleBallGame from './bubbleball.js';\n\n\n\n\nwindow.game = new _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.Game({\n    type: _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n    width: 800,\n    height: 600,\n    physics: {\n        default: 'arcade',\n        arcade: {\n            gravity: {y: 500},\n            debug: false\n        }\n    },\n    scene: [new _IntroScene_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), new _levels_Level01_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Level01')]\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels/GameLevel.js":
/*!*********************************!*\
  !*** ./src/levels/GameLevel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameLevel; });\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../phaser-arcade-physics.js */ \"./src/phaser-arcade-physics.js\");\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/Sprites.js */ \"./src/sprites/Sprites.js\");\n/*\n * Base class for game levels\n */\n\n\n\nclass GameLevel extends _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n\n    constructor(key) {\n        super({\n            key: key,\n            physics: {\n                system: 'arcade',\n                gravity: {y: 500}\n            }\n        });\n        this.player;\n        this.walls;\n        this.boosters;\n        this.droplets;\n        this.bullets;\n        this.mines;\n        this.audioSprite;\n        this.score;\n        this.cursorkeys;\n        this.fireButton;\n        this.timeLastFired = 0;\n        this.timeLastBoosted = 0;\n        this.minePositions;\n        this.exitPoints;\n        this.spriteGroups;\n    }\n\n    gameOver(player) {\n        var image = this.add.sprite(800, 300, 'game-over')\n                .setScrollFactor(0);\n        // create fade-in for 'game-over'\n        this.tweens.add({\n            targets: image,\n            x: 400,\n            ease: 'Linear',\n            duration: 600,\n            repeat: 0\n        });\n    }\n\n    levelCompleted() {\n        var player = this.player;\n        console.log('levelCompleted');\n        var image = this.add.sprite(0, 300, 'level-completed')\n                .setScrollFactor(0);\n        this.tweens.add({\n            targets: image,\n            x: 400,\n            ease: 'Linear',\n            duration: 600,\n            repeat: 0,\n            onComplete: function () {\n                player.kill(false).destroy();\n            }\n        });\n    }\n\n    preload() {\n        this.load.image('background', 'assets/background-nebula.jpg');\n        this.load.image('bubbleball', 'assets/football-bw.png');\n        this.load.image('wall', 'assets/wall.png');\n        this.load.image('booster', 'assets/booster1.png');\n        this.load.image('droplet', 'assets/droplet.png');\n        this.load.image('bubble', 'assets/bubble.png');\n        this.load.image('bullet', 'assets/bullet5.png');\n        this.load.image('game-over', 'assets/game-over.png');\n        this.load.image('pipe', 'assets/pipe.png');\n        this.load.image('pipe-overlay', 'assets/pipe-overlay.png');\n        this.load.image('level-completed', 'assets/level-completed.png');\n\n        this.load.spritesheet('mine', 'assets/mine.png', {frameWidth: 64, frameHeight: 64, endFrame: 15});\n        this.load.spritesheet('explosion', 'assets/explosion.png', {frameWidth: 64, frameHeight: 64, endFrame: 24});\n\n        this.load.audioSprite('sfx', 'assets/sfx_1.3.ogg', 'assets/sfx.json');\n\n    }\n}\n\n//# sourceURL=webpack:///./src/levels/GameLevel.js?");

/***/ }),

/***/ "./src/levels/Level01.js":
/*!*******************************!*\
  !*** ./src/levels/Level01.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level01; });\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../phaser-arcade-physics.js */ \"./src/phaser-arcade-physics.js\");\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/Sprites.js */ \"./src/sprites/Sprites.js\");\n/* harmony import */ var _GameLevel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLevel.js */ \"./src/levels/GameLevel.js\");\n\n\n\n\nclass Level01 extends _GameLevel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n\n    constructor(key) {\n        super(key);\n        this.minePositions = [\n            [400, 300],\n            [500, 400],\n            [600, 300],\n            [400, 50],\n            [500, 50],\n            [650, 100],\n            [1100, 150],\n            [1100, 250],\n            [1100, 550]\n        ];\n        this.wallPositions = [\n            [0, 100],\n            [0, 300],\n            [0, 500],\n            [1586, 100],\n            [1586, 300],\n            [1586, 500],\n            [200, 600],\n            [500, 200],\n            [1000, 250],\n            [1000, 400],\n            [1200, 450]\n        ]\n    }\n\n    createPlayer() {\n        var player = new _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](this, 100, 200, 'bubbleball');\n        return player;\n    }\n\n    createWalls() {\n        var walls = this.physics.add.group({\n            classType: _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__[\"Wall\"],\n            defaultKey: 'wall'\n        });\n        for (let position of this.wallPositions) {\n            walls.create(position[0], position[1], 'wall').body.immovable = true;\n        }\n        return walls;\n    }\n\n    createBoosters() {\n        var boosters = this.physics.add.group({\n            classType: _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__[\"Booster\"],\n            defaultKey: 'booster'\n        });\n        boosters.create(800, 600, 'booster').body.immovable = true;\n        boosters.create(1400, 600, 'booster').body.immovable = true;\n        return boosters;\n    }\n\n    createMines() {\n        var mines = this.physics.add.group({\n            classType: _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__[\"Mine\"],\n            defaultKey: 'mine'\n        });\n        for (let i = 0; i < this.minePositions.length; i++) {\n            mines.create(\n                    this.minePositions[i][0],\n                    this.minePositions[i][1],\n                    'mine')\n                    .setCircle(32)\n                    .body.immovable = true;\n        }\n        return mines;\n    }\n\n    createBubbles() {\n        var bubbles = this.physics.add.group({\n            classType: _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__[\"Bubble\"],\n            defaultKey: 'bubble',\n            maxSize: 80\n        });\n        return bubbles;\n    }\n\n    createDroplets() {\n        var droplets = this.physics.add.group({\n            classType: _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__[\"Droplet\"],\n            defaultKey: 'droplet',\n            maxSize: 80\n        });\n        return droplets;\n    }\n\n    createBullets() {\n        var bullets = this.physics.add.group({\n            classType: _sprites_Sprites_js__WEBPACK_IMPORTED_MODULE_1__[\"Bullet\"],\n            defaultKey: 'bullet',\n            maxSize: 30\n        });\n        bullets.setDepth(this.player.z + 1);\n        return bullets;\n    }\n\n    createExitPoints() {\n        var exitPosition = {x: 1600, y: 100};\n        var exitPoints = this.physics.add.staticGroup();\n        this.add.image(exitPosition.x, exitPosition.y, 'pipe-overlay')\n                .setDepth(110);\n        exitPoints.create(exitPosition.x, exitPosition.y, 'pipe');\n        return exitPoints;\n    }\n\n    createColliders(player, groups) {\n        var scene = this;\n        // calls hitWorldBounds() on any bodies that are listening for 'worldbounds'\n        this.physics.world.on(\"worldbounds\", function (body) {\n            if (body.gameObject.hitWorldBounds)\n                body.gameObject.hitWorldBounds(body);\n        });\n        this.physics.add.collider(player, groups.walls, function (player, wall) {\n            wall.hitPlayer(player);\n        });\n        this.physics.add.collider(player, groups.boosters, function (player, booster) {\n            booster.hitPlayer(player);\n        });\n        this.physics.add.collider(player, groups.mines, function (player, mine) {\n            mine.hitPlayer(player);\n        }, null, this);\n        this.physics.add.collider(groups.bullets, groups.mines, function (bullet, mine) {\n            mine.hitBullet(bullet);\n        });\n        this.physics.add.overlap(player, groups.bubbles, function (player, bubble) {\n            bubble.hitPlayer(player);\n        });\n        this.physics.add.overlap(player, groups.droplets, this.collectDroplet,\n                null, this);\n        this.physics.add.collider(groups.bullets, groups.walls, function (bullet, wall) {\n            bullet.hitWall();\n        });\n        this.physics.add.overlap(groups.exitPoints, player, function (player, exitPoint) {\n            exitPoint.disableBody();\n            player.setCollideWorldBounds(false);\n            player.onWorldBounds = false;\n            scene.tweens.add({\n                targets: player,\n                x: 1650,\n                y: 100,\n                duration: 400,\n                onComplete: scene.levelCompleted()\n            });\n        });\n    }\n\n    create() {\n        this.physics.world.setBounds(0, 0, 1600, 600);\n        this.add.tileSprite(400, 300, 1600, 600, 'background')\n                .setScrollFactor(0.2);\n        this.sound.addAudioSprite('sfx');\n\n        // create sprite grounds\n        this.player = this.createPlayer();\n        this.spriteGroups = {\n            walls: this.createWalls(),\n            bullets: this.createBullets(),\n            boosters: this.createBoosters(),\n            droplets: this.createDroplets(),\n            mines: this.createMines(),\n            bubbles: this.createBubbles(),\n            exitPoints: this.createExitPoints()\n        };\n        this.createColliders(this.player, this.spriteGroups);\n\n        // create animations\n        this.anims.create({\n            key: 'mine.rotate',\n            frames: this.anims.generateFrameNumbers('mine', {start: 0, end: 15, first: 0}),\n            frameRate: 20,\n            repeat: -1\n        });\n        this.anims.create({\n            key: 'explosion.explode',\n            frames: this.anims.generateFrameNumbers('explosion', {\n                start: 0,\n                end: 24,\n                first: 0\n            }),\n            frameRate: 45\n        });\n        //start mine animation\n        this.anims.staggerPlay('mine.rotate', this.spriteGroups.mines.getChildren(), 0.13);\n\n        // set up camera\n        this.cameras.main.setBounds(0, 0, 1600, 600);\n        this.cameras.main.startFollow(this.player);\n\n        // get input keys\n        this.cursorKeys = this.input.keyboard.createCursorKeys();\n        this.fireButton = this.input.keyboard.addKey(\n                _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.SPACE\n                );\n    }\n\n    update(time) {\n        if (this.player.isAlive()) {\n            var angularVelocityChange = 15;\n            if (this.timeLastFired === 0) {\n                this.timeLastFired = time - 10;\n            }\n            if (this.cursorKeys.left.isDown) {\n                this.player.setAngularVelocity(this.player.body.angularVelocity - angularVelocityChange);\n            }\n            if (this.cursorKeys.right.isDown) {\n                this.player.setAngularVelocity(this.player.body.angularVelocity + angularVelocityChange);\n            }\n            if (this.fireButton.isDown && time > this.timeLastFired) {\n                this.player.fireBullet();\n                this.timeLastFired = time + 50;\n            }\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/levels/Level01.js?");

/***/ }),

/***/ "./src/phaser-arcade-physics.js":
/*!**************************************!*\
  !*** ./src/phaser-arcade-physics.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/sprites/Booster.js":
/*!********************************!*\
  !*** ./src/sprites/Booster.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Booster; });\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../phaser-arcade-physics.js */ \"./src/phaser-arcade-physics.js\");\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GameSprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameSprite.js */ \"./src/sprites/GameSprite.js\");\n\n\n\nclass Booster extends _GameSprite_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    constructor(scene, x, y, key) {\n        super(scene, x, y, key);\n        this.body.allowGravity = false;\n//        this.body.immovable = true;\n        this.timeLastBoosted = 0;\n    }\n\n    hitPlayer(player) {\n        if (this.body.touching.up\n                && !(this.body.touching.left || this.body.touching.right)\n                && player.body.velocity.y < 0\n                && this.scene.time.now > this.timeLastBoosted + 100\n                ) {\n            this.scene.sound.playAudioSprite('sfx', 'booster');\n            player.setVelocityX(player.body.angularVelocity / 2);\n            var newVX = player.body.velocity.x * 1.2;\n            var newVY = player.body.velocity.y * 1.2;\n            var vMax = 730;\n            player.setVelocityX(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Clamp(newVX, -vMax, vMax));\n            player.setVelocityY(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Clamp(newVY, -vMax, vMax));\n            this.timeLastBoosted = this.scene.time.now;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/sprites/Booster.js?");

/***/ }),

/***/ "./src/sprites/Bubble.js":
/*!*******************************!*\
  !*** ./src/sprites/Bubble.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bubble; });\n/* harmony import */ var _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSprite.js */ \"./src/sprites/GameSprite.js\");\n//import Phaser from '../phaser-arcade-physics.js';\n\n\nclass Bubble extends _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(scene, x, y, key) {\n        super(scene, x, y, key);\n        this.body.allowGravity = false;\n    }\n\n    hitPlayer(player) {\n        this.setVisible(false);\n        this.setActive(false);\n        var droplet = this.scene.spriteGroups.droplets.getFirstDead(true);\n        droplet.setDepth(2)\n                .setActive(true)\n                .setVisible(true)\n                .setPosition(\n                        this.body.x + this.displayWidth / 2,\n                        this.body.y + this.displayHeight / 2\n                        )\n                .setCollideWorldBounds(true);\n        this.kill();\n    }\n\n    kill() {\n        this.scene.sound.playAudioSprite('sfx', 'pop');\n        this.scene.spriteGroups.bubbles.remove(this, true);\n        this.destroy();\n    }\n\n};\n\n//# sourceURL=webpack:///./src/sprites/Bubble.js?");

/***/ }),

/***/ "./src/sprites/Bullet.js":
/*!*******************************!*\
  !*** ./src/sprites/Bullet.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\n/* harmony import */ var _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSprite.js */ \"./src/sprites/GameSprite.js\");\n\n\nclass Bullet extends _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(scene, x, y, key) {\n        super(scene, x, y, key);\n        this.setScale(1.5);\n        this.setDepth(2);\n        this.body.allowGravity = false;\n        this.fireVelocity = 600;\n    }\n\n    hitWall() {\n        this.kill();\n    }\n\n    kill() {\n        this.setVisible(false);\n        this.scene.spriteGroups.bullets.kill(this);\n    }\n};\n\n\n//# sourceURL=webpack:///./src/sprites/Bullet.js?");

/***/ }),

/***/ "./src/sprites/Droplet.js":
/*!********************************!*\
  !*** ./src/sprites/Droplet.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Droplet; });\n/* harmony import */ var _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSprite.js */ \"./src/sprites/GameSprite.js\");\n\n\nclass Droplet extends _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(scene, x, y, key) {\n        super(scene, x, y, key);\n//        scene.add.existing(this);\n//        scene.physics.add.existing(this);\n        this.body.allowGravity = true;\n        this.setDepth(2);\n        this.setActive(false);\n        this.setVisible(false);\n        this.body.collideWorldBounds = true;\n        this.body.onWorldBounds = true;\n    }\n\n    hitWorldBounds(body) {\n        this.scene.spriteGroups.droplets.remove(this, true);\n        this.destroy();\n    }\n};\n\n//# sourceURL=webpack:///./src/sprites/Droplet.js?");

/***/ }),

/***/ "./src/sprites/GameSprite.js":
/*!***********************************!*\
  !*** ./src/sprites/GameSprite.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameSprite; });\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../phaser-arcade-physics.js */ \"./src/phaser-arcade-physics.js\");\n/* harmony import */ var _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass GameSprite extends _phaser_arcade_physics_js__WEBPACK_IMPORTED_MODULE_0___default.a.Physics.Arcade.Sprite {\n\n    constructor(scene, x, y, key) {\n        super(scene, x, y, key);\n        scene.add.existing(this);\n        scene.physics.add.existing(this);\n    }\n}\n\n//# sourceURL=webpack:///./src/sprites/GameSprite.js?");

/***/ }),

/***/ "./src/sprites/Mine.js":
/*!*****************************!*\
  !*** ./src/sprites/Mine.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mine; });\n/* harmony import */ var _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSprite.js */ \"./src/sprites/GameSprite.js\");\n\n\nclass Mine extends _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(scene, x, y, key) {\n        super(scene, x, y, key);\n        this.body.allowGravity = false;\n        this.body.immovable = true;\n    }\n\n    hitPlayer(player) {\n        player.kill();\n    }\n\n    hitBullet(bullet) {\n        var bubble = this.scene.spriteGroups.bubbles.get(true);\n        if (bubble) {\n            bubble.setDepth(2);\n            bubble.setActive(true);\n            bubble.setVisible(true);\n            bubble.setPosition(\n                    this.body.x + this.displayWidth / 2,\n                    this.body.y + this.displayHeight / 2\n                    );\n        }\n        bullet.kill();\n        this.kill();\n    }\n\n    kill() {\n        this.scene.sound.playAudioSprite('sfx', 'explode-burst');\n        this.setActive(false).destroy();\n    }\n}\n\n//# sourceURL=webpack:///./src/sprites/Mine.js?");

/***/ }),

/***/ "./src/sprites/Player.js":
/*!*******************************!*\
  !*** ./src/sprites/Player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player extends Phaser.Physics.Arcade.Sprite {\n\n    constructor(scene, x, y, key) {\n        super(scene, x, y, key);\n        scene.add.existing(this);\n        scene.physics.add.existing(this);\n        this.setOrigin(0.5, 0.5);\n        this.setDepth(100);\n        this.setVelocity(0, 200);\n        this.body.maxAngular = 400;\n        this.body.maxVelocity = 600;\n        this.setBounce(0.99);\n        this.setCollideWorldBounds(true);\n        this.body.onWorldBounds = true;\n        this.alive = true;\n    }\n\n    hitWorldBounds(body) {\n        this.setVelocityX(body.angularVelocity / 2);\n        this.scene.sound.playAudioSprite('sfx', 'bounce');\n    }\n\n    fireBullet() {\n        if (!this.isAlive())\n            return;\n        var bullet = this.scene.spriteGroups.bullets.getFirstDead(true);\n        bullet.setActive(true)\n                .setVisible(true)\n                .setPosition(\n                        this.body.x + this.displayWidth / 2,\n                        this.body.y + this.displayHeight / 2\n                        );\n        var bulletVX = bullet.fireVelocity;\n        bullet.setFlipX(false);\n        if (this.body.angularVelocity < 0) {\n            bulletVX *= -1;\n            bullet.setFlipX(true);\n        }\n        bullet.setVelocity(bulletVX, 0);\n        this.scene.sound.playAudioSprite('sfx', 'blaster');\n    }\n\n    kill(explode = true) {\n        this.alive = false;\n        if (explode) {\n            var player = this;\n            var scene = this.scene;\n            scene.add.sprite(this.body.x, this.body.y)\n                    .on('animationcomplete', function (animation, frame) {\n                        scene.gameOver(player)\n                    })\n                    .play('explosion.explode');\n        }\n        this.setActive(false)\n                .setVisible(false)\n                .disableBody();\n        return this;\n    }\n\n    isAlive() {\n        return (this.alive);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/sprites/Player.js?");

/***/ }),

/***/ "./src/sprites/Sprites.js":
/*!********************************!*\
  !*** ./src/sprites/Sprites.js ***!
  \********************************/
/*! exports provided: Player, Bullet, Mine, Bubble, Droplet, Booster, Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/sprites/Player.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return _Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Bullet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet.js */ \"./src/sprites/Bullet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Bullet\", function() { return _Bullet_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Mine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mine.js */ \"./src/sprites/Mine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Mine\", function() { return _Mine_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Bubble_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bubble.js */ \"./src/sprites/Bubble.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Bubble\", function() { return _Bubble_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _Droplet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Droplet.js */ \"./src/sprites/Droplet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Droplet\", function() { return _Droplet_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _Booster_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Booster.js */ \"./src/sprites/Booster.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Booster\", function() { return _Booster_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _Wall_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Wall.js */ \"./src/sprites/Wall.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Wall\", function() { return _Wall_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/sprites/Sprites.js?");

/***/ }),

/***/ "./src/sprites/Wall.js":
/*!*****************************!*\
  !*** ./src/sprites/Wall.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wall; });\n/* harmony import */ var _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSprite.js */ \"./src/sprites/GameSprite.js\");\n\n\nclass Wall extends _GameSprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(scene, x, y, key) {\n        super(scene, x, y, key);\n        this.body.allowGravity = false;\n        this.body.immovable = true;\n    }\n\n    hitPlayer(player) {\n        if (player.body.touching.left || player.body.touching.right) {\n            // change direction of rotation\n            player.setAngularVelocity(player.body.angularVelocity * -1);\n        } else\n        if (player.body.touching.up || player.body.touching.down) {\n            player.setVelocityX(player.body.angularVelocity / 2);\n            this.scene.sound.playAudioSprite('sfx', 'bounce');\n        }\n    }\n    \n}\n\n\n\n//# sourceURL=webpack:///./src/sprites/Wall.js?");

/***/ })

/******/ });