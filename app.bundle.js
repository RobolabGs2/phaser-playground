/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getGameHeight = exports.getGameWidth = void 0;\nvar getGameWidth = function (scene) {\n    return scene.game.scale.width;\n};\nexports.getGameWidth = getGameWidth;\nvar getGameHeight = function (scene) {\n    return scene.game.scale.height;\n};\nexports.getGameHeight = getGameHeight;\n\n\n//# sourceURL=webpack:///./src/helpers.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.game = void 0;\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar scenes_1 = __webpack_require__(/*! ./scenes */ \"./src/scenes/index.ts\");\nvar gameConfig = {\n    title: 'Sample',\n    type: Phaser.AUTO,\n    scale: {\n        width: window.innerWidth,\n        height: window.innerHeight,\n    },\n    scene: scenes_1.default,\n    physics: {\n        default: 'arcade',\n        arcade: {\n            debug: true,\n        },\n    },\n    parent: 'game',\n    backgroundColor: '#000000',\n};\nexports.game = new Phaser.Game(gameConfig);\nwindow.addEventListener('resize', function () {\n    exports.game.scale.refresh();\n});\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BootScene = void 0;\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/helpers.ts\");\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: 'Boot',\n};\n/**\n * The initial scene that loads all necessary assets to the game and displays a loading bar.\n */\nvar BootScene = /** @class */ (function (_super) {\n    __extends(BootScene, _super);\n    function BootScene() {\n        return _super.call(this, sceneConfig) || this;\n    }\n    BootScene.prototype.preload = function () {\n        var _this = this;\n        var halfWidth = helpers_1.getGameWidth(this) * 0.5;\n        var halfHeight = helpers_1.getGameHeight(this) * 0.5;\n        var progressBarHeight = 100;\n        var progressBarWidth = 400;\n        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);\n        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);\n        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);\n        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);\n        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);\n        this.load.on('progress', function (value) {\n            progressBar.width = (progressBarWidth - 30) * value;\n            var percent = value * 100;\n            percentText.setText(percent + \"%\");\n        });\n        this.load.on('fileprogress', function (file) {\n            assetText.setText(file.key);\n        });\n        this.load.on('complete', function () {\n            loadingText.destroy();\n            percentText.destroy();\n            assetText.destroy();\n            progressBar.destroy();\n            progressBarContainer.destroy();\n            _this.scene.start('MainMenu');\n        });\n        this.loadAssets();\n    };\n    /**\n     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)\n     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene\n     * is currently active, so they can be accessed anywhere.\n     */\n    BootScene.prototype.loadAssets = function () {\n        // Load sample assets\n        // Source: Open Game Art\n        this.load.image('man', 'assets/sprites/character.png');\n    };\n    return BootScene;\n}(Phaser.Scene));\nexports.BootScene = BootScene;\n\n\n//# sourceURL=webpack:///./src/scenes/boot-scene.ts?");

/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GameScene = void 0;\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/helpers.ts\");\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: 'Game',\n};\nvar GameScene = /** @class */ (function (_super) {\n    __extends(GameScene, _super);\n    function GameScene() {\n        var _this = _super.call(this, sceneConfig) || this;\n        _this.speed = 200;\n        return _this;\n    }\n    GameScene.prototype.create = function () {\n        // Add a player sprite that can be moved around. Place him in the middle of the screen.\n        this.image = this.physics.add.sprite(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'man');\n        // This is a nice helper Phaser provides to create listeners for some of the most common keys.\n        this.cursorKeys = this.input.keyboard.createCursorKeys();\n    };\n    GameScene.prototype.update = function () {\n        // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.\n        var velocity = new Phaser.Math.Vector2(0, 0);\n        if (this.cursorKeys.left.isDown) {\n            velocity.x -= 1;\n        }\n        if (this.cursorKeys.right.isDown) {\n            velocity.x += 1;\n        }\n        if (this.cursorKeys.up.isDown) {\n            velocity.y -= 1;\n        }\n        if (this.cursorKeys.down.isDown) {\n            velocity.y += 1;\n        }\n        // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.\n        var normalizedVelocity = velocity.normalize();\n        this.image.setVelocity(normalizedVelocity.x * this.speed, normalizedVelocity.y * this.speed);\n    };\n    return GameScene;\n}(Phaser.Scene));\nexports.GameScene = GameScene;\n\n\n//# sourceURL=webpack:///./src/scenes/game-scene.ts?");

/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ \"./src/scenes/main-menu-scene.ts\");\nvar boot_scene_1 = __webpack_require__(/*! ./boot-scene */ \"./src/scenes/boot-scene.ts\");\nvar game_scene_1 = __webpack_require__(/*! ./game-scene */ \"./src/scenes/game-scene.ts\");\nexports.default = [boot_scene_1.BootScene, main_menu_scene_1.MainMenuScene, game_scene_1.GameScene];\n\n\n//# sourceURL=webpack:///./src/scenes/index.ts?");

/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MainMenuScene = void 0;\nvar menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ \"./src/ui/menu-button.ts\");\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: 'MainMenu',\n};\n/**\n * The initial scene that starts, shows the splash screens, and loads the necessary assets.\n */\nvar MainMenuScene = /** @class */ (function (_super) {\n    __extends(MainMenuScene, _super);\n    function MainMenuScene() {\n        return _super.call(this, sceneConfig) || this;\n    }\n    MainMenuScene.prototype.create = function () {\n        var _this = this;\n        this.add\n            .text(100, 50, 'This is a sample main menu. Click the \"Start\" button below to run your game.', {\n            color: '#FFFFFF',\n        })\n            .setFontSize(24);\n        new menu_button_1.MenuButton(this, 100, 150, 'Start Game', function () {\n            _this.scene.start('Game');\n        });\n        new menu_button_1.MenuButton(this, 100, 250, 'Settings', function () { return console.log('settings button clicked'); });\n        new menu_button_1.MenuButton(this, 100, 350, 'Help', function () { return console.log('help button clicked'); });\n    };\n    return MainMenuScene;\n}(Phaser.Scene));\nexports.MainMenuScene = MainMenuScene;\n\n\n//# sourceURL=webpack:///./src/scenes/main-menu-scene.ts?");

/***/ }),

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuButton = void 0;\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar padding = 10;\nvar minimumWidth = 200;\nvar minimumHeight = 50;\nvar MenuButton = /** @class */ (function (_super) {\n    __extends(MenuButton, _super);\n    function MenuButton(scene, x, y, text, onClick) {\n        var _this = _super.call(this, scene, x, y) || this;\n        scene.add.existing(_this);\n        _this.setOrigin(0, 0);\n        _this.label = scene.add\n            .text(x + padding, y + padding, text)\n            .setFontSize(18)\n            .setAlign('center');\n        var labelWidth = _this.label.width + padding;\n        var labelHeight = _this.label.height + padding;\n        _this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;\n        _this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;\n        _this.setInteractive({ useHandCursor: true })\n            .on('pointerover', _this.enterMenuButtonHoverState)\n            .on('pointerout', _this.enterMenuButtonRestState)\n            .on('pointerdown', _this.enterMenuButtonActiveState)\n            .on('pointerup', _this.enterMenuButtonHoverState);\n        if (onClick) {\n            _this.on('pointerup', onClick);\n        }\n        _this.enterMenuButtonRestState();\n        return _this;\n    }\n    MenuButton.prototype.enterMenuButtonHoverState = function () {\n        this.label.setColor('#000000');\n        this.setFillStyle(0x888888);\n    };\n    MenuButton.prototype.enterMenuButtonRestState = function () {\n        this.label.setColor('#FFFFFF');\n        this.setFillStyle(0x888888);\n    };\n    MenuButton.prototype.enterMenuButtonActiveState = function () {\n        this.label.setColor('#BBBBBB');\n        this.setFillStyle(0x444444);\n    };\n    return MenuButton;\n}(Phaser.GameObjects.Rectangle));\nexports.MenuButton = MenuButton;\n\n\n//# sourceURL=webpack:///./src/ui/menu-button.ts?");

/***/ })

/******/ });