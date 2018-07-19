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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/js/Player.js":
/*!**************************!*\
  !*** ./dev/js/Player.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = function () {\n  function Player(audio) {\n    _classCallCheck(this, Player);\n\n    this.audio = audio;\n    this.playState = false;\n    this.playPause = document.getElementById('PlayPause');\n  }\n\n  _createClass(Player, [{\n    key: 'setButtonEvents',\n    value: function setButtonEvents() {\n      var _this = this;\n\n      this.playPause.addEventListener('click', function () {\n        if (_this.playState) {\n          _this.audio.pause();\n          _this.setPausedMode();\n        } else {\n          _this.audio.play();\n          _this.setPlayingMode();\n        }\n\n        _this.playState = !_this.playState;\n      });\n\n      // this.volMaxBttn.addEventListener('click', () => {\n      //   this.audio.setVolume(1);\n      // });\n\n      // this.volHalfBttn.addEventListener('click', () => {\n      //   this.audio.setVolume(0.5);\n      // });\n\n      // this.volMinBttn.addEventListener('click', () => {\n      //   this.audio.setVolume(0.1);\n      // });\n\n      // this.volPlusBttn.addEventListener('click', () => {\n      //   let currentVolume = this.audio.getVolume();\n      //   this.audio.setVolume(Math.min(1, currentVolume += 0.1));\n      // });\n\n      // this.volMinusBttn.addEventListener('click', () => {\n      //   let currentVolume = this.audio.getVolume();\n      //   this.audio.setVolume(Math.max(0, currentVolume -= 0.1));\n      // });\n    }\n  }, {\n    key: 'setPlayingMode',\n    value: function setPlayingMode() {\n      this.playPause.classList.remove('fa-play');\n      this.playPause.classList.add('fa-pause');\n    }\n  }, {\n    key: 'setPausedMode',\n    value: function setPausedMode() {\n      this.playPause.classList.remove('fa-pause');\n      this.playPause.classList.add('fa-play');\n    }\n  }, {\n    key: 'end',\n    value: function end() {\n      if (this.playState) {\n        this.setPausedMode();\n        this.playState = false;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\nexports.default = Player;\n\n//# sourceURL=webpack:///./dev/js/Player.js?");

/***/ }),

/***/ "./dev/js/WebAudio.js":
/*!****************************!*\
  !*** ./dev/js/WebAudio.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar WebAudio = function () {\n  function WebAudio(audioTrack, fftSize, barsTotal) {\n    _classCallCheck(this, WebAudio);\n\n    // Cross browser shinnannigins\n    this.AudioContext = window.AudioContext || window.webkitAudioContext;\n\n    this.barsTotal = barsTotal;\n    this.audioTrack = audioTrack;\n    this.audioCtx = new AudioContext();\n    this.audioSrc = this.audioCtx.createMediaElementSource(this.audioTrack);\n\n    this.analyser = this.audioCtx.createAnalyser();\n    this.gainNode = this.audioCtx.createGain();\n\n    this.audioSrc.connect(this.analyser);\n    this.audioSrc.connect(this.gainNode);\n    this.gainNode.connect(this.audioCtx.destination);\n\n    this.analyser.fftSize = fftSize;\n    this.bufferLength = this.analyser.frequencyBinCount;\n    this.dataArray = new Uint8Array(this.bufferLength);\n    this.analyser.getByteFrequencyData(this.dataArray);\n  }\n\n  _createClass(WebAudio, [{\n    key: \"getData\",\n    value: function getData() {\n      return Array.from(this.dataArray).slice(0, this.barsTotal);\n    }\n  }, {\n    key: \"updateData\",\n    value: function updateData() {\n      this.analyser.getByteFrequencyData(this.dataArray);\n      return this.getData();\n    }\n  }, {\n    key: \"setVolume\",\n    value: function setVolume(newValue) {\n      this.gainNode.gain.value = newValue;\n    }\n  }, {\n    key: \"getVolume\",\n    value: function getVolume() {\n      return this.gainNode.gain.value;\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.audioTrack.pause();\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.audioTrack.play();\n    }\n  }]);\n\n  return WebAudio;\n}();\n\nexports.default = WebAudio;\n\n//# sourceURL=webpack:///./dev/js/WebAudio.js?");

/***/ }),

/***/ "./dev/js/index.js":
/*!*************************!*\
  !*** ./dev/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _WebAudio = __webpack_require__(/*! ./WebAudio */ \"./dev/js/WebAudio.js\");\n\nvar _WebAudio2 = _interopRequireDefault(_WebAudio);\n\nvar _Player = __webpack_require__(/*! ./Player */ \"./dev/js/Player.js\");\n\nvar _Player2 = _interopRequireDefault(_Player);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import ZingDashboard from './charts/ZingDashboard';\n// import GaugeList from './charts/GaugeList';\n\n__webpack_require__(/*! ../sass/primary.scss */ \"./dev/sass/primary.scss\");\n\nvar audioTrack = new Audio('something.mp3');\nvar myAudio = new _WebAudio2.default(audioTrack, 128, 32);\nvar myPlayer = new _Player2.default(myAudio);\n\nmyPlayer.setButtonEvents();\n\naudioTrack.onended = function () {\n  myPlayer.end();\n};\n\n// const gaugeEqualizer = new GaugeList('gaugeGrid');\n// gaugeEqualizer.createList(myAudio.getData());\n\n// const dialBoard = new ZingDashboard('newChart', myAudio.getData());\n// dialBoard.activate();\n\nzingchart.render({\n  id: 'chart',\n  height: '200',\n  borderWidth: 10,\n  data: {\n    \"scale-x\": {\n      \"line-color\": \"#0f1011\",\n      item: {\n        \"font-color\": \"#0f1011\"\n      },\n      guide: {\n        visible: 0\n      }\n    },\n    \"scale-y\": {\n      \"line-color\": \"#0f1011\",\n      item: {\n        \"font-color\": \"#0f1011\"\n      }\n    },\n    backgroundColor: 'none',\n    type: 'bar',\n    plot: {\n      'border-radius': '10px'\n    },\n    series: [{\n      values: myAudio.getData(),\n      \"background-color\": \"#6666FF #FF0066\"\n    }]\n  }\n});\n\nfunction draw() {\n  requestAnimationFrame(draw);\n\n  var audioData = myAudio.updateData();\n\n  // gaugeEqualizer.updateList(audioData);\n  // dialBoard.updateConfig(audioData);\n\n  zingchart.exec('chart', 'setseriesdata', {\n    data: [{\n      values: audioData,\n      \"background-color\": \"#4a7a8c #FF0066 #fc0\"\n    }]\n  });\n\n  console.log('Status: ', audioTrack.duration, audioTrack.currentTime);\n}\n\nwindow.onload = function () {\n  draw();\n};\n\n//# sourceURL=webpack:///./dev/js/index.js?");

/***/ }),

/***/ "./dev/sass/primary.scss":
/*!*******************************!*\
  !*** ./dev/sass/primary.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./dev/sass/primary.scss?");

/***/ })

/******/ });