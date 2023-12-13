"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/animacionPlanetas.js":
/*!*****************************************!*\
  !*** ./components/animacionPlanetas.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimarFondo; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction AnimarFondo() {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        canvas: document.querySelector(\"#bg\")\n    });\n    renderer.gammaOutput = false;\n    renderer.toneMapping = three__WEBPACK_IMPORTED_MODULE_0__.LinearToneMapping;\n    renderer.toneMappingExposure = 0.5;\n    renderer.setPixelRatio(window.devicePixelRatio);\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    camera.position.setZ(30);\n    camera.position.setX(-3);\n    renderer.render(scene, camera);\n    const loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n    loader.gammaOutput = false;\n    loader.toneMapping = three__WEBPACK_IMPORTED_MODULE_0__.LinearToneMapping;\n    loader.toneMappingExposure = 1;\n    const spaceTexture = loader.load(\"/images/espacioGrande.avif\");\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        map: spaceTexture\n    });\n    const formaDona = new three__WEBPACK_IMPORTED_MODULE_0__.TorusGeometry(8, 1, 16, 100);\n    const dona = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(formaDona, material);\n    const angulo = Math.PI / 4; // Ángulo en radianes (ajusta según sea necesario)\n    const radio = 5; // Distancia desde el centro del cubo (ajusta según sea necesario)\n    const xDona = -2 + radio * Math.cos(angulo);\n    const yDona = -4 + radio * Math.sin(angulo);\n    const zDona = -5;\n    dona.position.set(xDona, yDona, zDona);\n    scene.add(dona);\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff);\n    scene.add(ambientLight);\n    Array(400).fill().forEach(addStar);\n    const UrielImagen = loader.load(\"/images/URIELSS.png\");\n    const UrielCubo = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(3, 3, 3), new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        map: UrielImagen\n    }));\n    UrielCubo.position.z = -5;\n    UrielCubo.position.x = 2;\n    UrielCubo.material.lights = false;\n    scene.add(UrielCubo);\n    const texturaLuna = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(\"/images/LUNA.jpg\");\n    const luna = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(3, 32, 32), new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        map: texturaLuna\n    }));\n    luna.position.z = 15;\n    luna.position.x = -10;\n    scene.add(luna);\n    const texturaMarte = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(\"/images/MARTED.png\");\n    const Marte = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(5, 50, 50), new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        map: texturaMarte\n    }));\n    Marte.position.z = 40;\n    Marte.position.x = 2;\n    scene.add(Marte);\n    function addStar() {\n        const formaEstrella = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(0.4, 30, 30);\n        const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({\n            color: 0xffffff\n        });\n        const star = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(formaEstrella, material);\n        const [x, y, z] = Array(3).fill().map(()=>three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloatSpread(200));\n        star.position.set(x, y, z);\n        scene.add(star);\n    }\n    function moveCamera() {\n        const t = document.body.getBoundingClientRect().top;\n        luna.rotation.x += 0.05;\n        luna.rotation.y += 0.075;\n        luna.rotation.z += 0.05;\n        UrielCubo.rotation.y += 0.1;\n        UrielCubo.rotation.z += 0.1;\n        camera.position.z = t * -0.01;\n        camera.position.x = t * -0.0002;\n        camera.rotation.y = t * -0.0002;\n    }\n    function animate() {\n        requestAnimationFrame(animate);\n        dona.rotation.x += 0.01;\n        dona.rotation.y += 0.005;\n        dona.rotation.z += 0.01;\n        luna.rotation.x += 0.005;\n        UrielCubo.rotation.x += 0.005;\n        UrielCubo.rotation.y += 0.005;\n        UrielCubo.rotation.z += 0.005;\n        Marte.rotation.x += 0.01;\n        Marte.rotation.z += 0.01;\n        renderer.render(scene, camera);\n    }\n    document.body.onscroll = moveCamera;\n    animate();\n    moveCamera();\n}\n_c = AnimarFondo;\nvar _c;\n$RefreshReg$(_c, \"AnimarFondo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNSLENBQUMsR0FBR0ksSUFBSSxDQUFDO0lBRTNCO0lBR0EsU0FBU0s7UUFFUEMsc0JBQXNCRDtRQUV0QjNDLEtBQUswQyxRQUFRLENBQUNuQixDQUFDLElBQUk7UUFDbkJ2QixLQUFLMEMsUUFBUSxDQUFDUixDQUFDLElBQUk7UUFDbkJsQyxLQUFLMEMsUUFBUSxDQUFDcEIsQ0FBQyxJQUFJO1FBRW5CSSxLQUFLZ0IsUUFBUSxDQUFDbkIsQ0FBQyxJQUFJO1FBRW5CSCxVQUFVc0IsUUFBUSxDQUFDbkIsQ0FBQyxJQUFJO1FBQ3hCSCxVQUFVc0IsUUFBUSxDQUFDUixDQUFDLElBQUk7UUFDeEJkLFVBQVVzQixRQUFRLENBQUNwQixDQUFDLElBQUk7UUFFeEJPLE1BQU1hLFFBQVEsQ0FBQ25CLENBQUMsSUFBSTtRQUNwQk0sTUFBTWEsUUFBUSxDQUFDcEIsQ0FBQyxJQUFJO1FBQ3BCL0MsU0FBU2UsTUFBTSxDQUFDdEIsT0FBT0U7SUFFekI7SUFFQVEsU0FBUzZELElBQUksQ0FBQ00sUUFBUSxHQUFHUjtJQUN6Qk07SUFDQU47QUFDRjtLQWpId0J0RSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hY2lvblBsYW5ldGFzLmpzPzAxY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWFyRm9uZG8oKXtcclxuICBcclxuICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xyXG4gIFxyXG4gIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2NhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJyksfSk7XHJcbiAgcmVuZGVyZXIuZ2FtbWFPdXRwdXQgPSBmYWxzZTtcclxuICByZW5kZXJlci50b25lTWFwcGluZyA9IFRIUkVFLkxpbmVhclRvbmVNYXBwaW5nO1xyXG4gIHJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUgPSAwLjU7XHJcbiAgXHJcbiAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbiAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICBjYW1lcmEucG9zaXRpb24uc2V0WigzMCk7XHJcbiAgY2FtZXJhLnBvc2l0aW9uLnNldFgoLTMpO1xyXG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICBcclxuXHJcbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKVxyXG4gIGxvYWRlci5nYW1tYU91dHB1dCA9IGZhbHNlO1xyXG4gIGxvYWRlci50b25lTWFwcGluZyA9IFRIUkVFLkxpbmVhclRvbmVNYXBwaW5nO1xyXG4gIGxvYWRlci50b25lTWFwcGluZ0V4cG9zdXJlID0gMTtcclxuXHJcbiAgY29uc3Qgc3BhY2VUZXh0dXJlID0gbG9hZGVyLmxvYWQoXCIvaW1hZ2VzL2VzcGFjaW9HcmFuZGUuYXZpZlwiKTtcclxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogc3BhY2VUZXh0dXJlfSk7XHJcbiAgY29uc3QgZm9ybWFEb25hID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoOCwgMSwgMTYsIDEwMCk7XHJcbiAgY29uc3QgZG9uYSA9IG5ldyBUSFJFRS5NZXNoKGZvcm1hRG9uYSwgbWF0ZXJpYWwpO1xyXG5cclxuICBjb25zdCBhbmd1bG8gPSBNYXRoLlBJIC8gNDsgLy8gw4FuZ3VsbyBlbiByYWRpYW5lcyAoYWp1c3RhIHNlZ8O6biBzZWEgbmVjZXNhcmlvKVxyXG4gIGNvbnN0IHJhZGlvID0gNTsgLy8gRGlzdGFuY2lhIGRlc2RlIGVsIGNlbnRybyBkZWwgY3VibyAoYWp1c3RhIHNlZ8O6biBzZWEgbmVjZXNhcmlvKVxyXG5cclxuICBjb25zdCB4RG9uYSA9IC0yICsgcmFkaW8gKiBNYXRoLmNvcyhhbmd1bG8pO1xyXG4gIGNvbnN0IHlEb25hID0gLTQgKyByYWRpbyAqIE1hdGguc2luKGFuZ3Vsbyk7XHJcbiAgY29uc3QgekRvbmEgPSAtNTtcclxuXHJcbiAgZG9uYS5wb3NpdGlvbi5zZXQoeERvbmEsIHlEb25hLCB6RG9uYSk7XHJcblxyXG4gIHNjZW5lLmFkZChkb25hKTtcclxuXHJcbiAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZik7XHJcbiAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XHJcbiAgXHJcbiAgQXJyYXkoNDAwKS5maWxsKCkuZm9yRWFjaChhZGRTdGFyKTtcclxuICBcclxuICBjb25zdCBVcmllbEltYWdlbiA9IGxvYWRlci5sb2FkKCcvaW1hZ2VzL1VSSUVMU1MucG5nJyk7XHJcbiAgY29uc3QgVXJpZWxDdWJvID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEdlb21ldHJ5KDMsIDMsIDMpLCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IFVyaWVsSW1hZ2VuIH0pKTtcclxuICBVcmllbEN1Ym8ucG9zaXRpb24ueiA9IC01O1xyXG4gIFVyaWVsQ3Viby5wb3NpdGlvbi54ID0gMjtcclxuICBVcmllbEN1Ym8ubWF0ZXJpYWwubGlnaHRzID0gZmFsc2U7XHJcbiAgc2NlbmUuYWRkKFVyaWVsQ3Vibyk7XHJcbiAgXHJcbiAgY29uc3QgdGV4dHVyYUx1bmEgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoJy9pbWFnZXMvTFVOQS5qcGcnKTtcclxuICBjb25zdCBsdW5hID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDMsIDMyLCAzMiksbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHttYXA6IHRleHR1cmFMdW5hfSkpO1xyXG4gIGx1bmEucG9zaXRpb24ueiA9IDE1O1xyXG4gIGx1bmEucG9zaXRpb24ueCA9IC0xMDtcclxuICBzY2VuZS5hZGQobHVuYSk7XHJcbiAgXHJcbiAgY29uc3QgdGV4dHVyYU1hcnRlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL01BUlRFRC5wbmcnKVxyXG4gIGNvbnN0IE1hcnRlID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDUsIDUwLCA1MCksbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHttYXA6IHRleHR1cmFNYXJ0ZX0pKTtcclxuICBNYXJ0ZS5wb3NpdGlvbi56ID0gNDA7XHJcbiAgTWFydGUucG9zaXRpb24ueCA9IDI7XHJcbiAgc2NlbmUuYWRkKE1hcnRlKTtcclxuICBcclxuICBcclxuICBmdW5jdGlvbiBhZGRTdGFyKCkge1xyXG4gICAgY29uc3QgZm9ybWFFc3RyZWxsYSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjQsIDMwLCAzMCk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcclxuICAgIGNvbnN0IHN0YXIgPSBuZXcgVEhSRUUuTWVzaChmb3JtYUVzdHJlbGxhLCBtYXRlcmlhbCk7XHJcbiAgICBjb25zdCBbeCwgeSwgel0gPSBBcnJheSgzKS5maWxsKCkubWFwKCgpID0+IFRIUkVFLk1hdGhVdGlscy5yYW5kRmxvYXRTcHJlYWQoMjAwKSk7XHJcbiAgICBzdGFyLnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgIHNjZW5lLmFkZChzdGFyKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gbW92ZUNhbWVyYSgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgbHVuYS5yb3RhdGlvbi54ICs9IDAuMDU7XHJcbiAgICBsdW5hLnJvdGF0aW9uLnkgKz0gMC4wNzU7XHJcbiAgICBsdW5hLnJvdGF0aW9uLnogKz0gMC4wNTtcclxuICBcclxuICAgIFVyaWVsQ3Viby5yb3RhdGlvbi55ICs9IDAuMTtcclxuICAgIFVyaWVsQ3Viby5yb3RhdGlvbi56ICs9IDAuMTtcclxuICBcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gdCAqIC0wLjAxO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnggPSB0ICogLTAuMDAwMjtcclxuICAgIGNhbWVyYS5yb3RhdGlvbi55ID0gdCAqIC0wLjAwMDI7XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgXHJcbiAgICBkb25hLnJvdGF0aW9uLnggKz0gMC4wMTtcclxuICAgIGRvbmEucm90YXRpb24ueSArPSAwLjAwNTtcclxuICAgIGRvbmEucm90YXRpb24ueiArPSAwLjAxO1xyXG4gIFxyXG4gICAgbHVuYS5yb3RhdGlvbi54ICs9IDAuMDA1O1xyXG5cclxuICAgIFVyaWVsQ3Viby5yb3RhdGlvbi54ICs9IDAuMDA1XHJcbiAgICBVcmllbEN1Ym8ucm90YXRpb24ueSArPSAwLjAwNVxyXG4gICAgVXJpZWxDdWJvLnJvdGF0aW9uLnogKz0gMC4wMDVcclxuICBcclxuICAgIE1hcnRlLnJvdGF0aW9uLnggKz0gMC4wMVxyXG4gICAgTWFydGUucm90YXRpb24ueiArPSAwLjAxXHJcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYm9keS5vbnNjcm9sbCA9IG1vdmVDYW1lcmE7XHJcbiAgYW5pbWF0ZSgpO1xyXG4gIG1vdmVDYW1lcmEoKTtcclxufSJdLCJuYW1lcyI6WyJUSFJFRSIsIkFuaW1hckZvbmRvIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FtbWFPdXRwdXQiLCJ0b25lTWFwcGluZyIsIkxpbmVhclRvbmVNYXBwaW5nIiwidG9uZU1hcHBpbmdFeHBvc3VyZSIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInBvc2l0aW9uIiwic2V0WiIsInNldFgiLCJyZW5kZXIiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwic3BhY2VUZXh0dXJlIiwibG9hZCIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJtYXAiLCJmb3JtYURvbmEiLCJUb3J1c0dlb21ldHJ5IiwiZG9uYSIsIk1lc2giLCJhbmd1bG8iLCJNYXRoIiwiUEkiLCJyYWRpbyIsInhEb25hIiwiY29zIiwieURvbmEiLCJzaW4iLCJ6RG9uYSIsInNldCIsImFkZCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsIkFycmF5IiwiZmlsbCIsImZvckVhY2giLCJhZGRTdGFyIiwiVXJpZWxJbWFnZW4iLCJVcmllbEN1Ym8iLCJCb3hHZW9tZXRyeSIsInoiLCJ4IiwibGlnaHRzIiwidGV4dHVyYUx1bmEiLCJsdW5hIiwiU3BoZXJlR2VvbWV0cnkiLCJ0ZXh0dXJhTWFydGUiLCJNYXJ0ZSIsImZvcm1hRXN0cmVsbGEiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIiwic3RhciIsInkiLCJNYXRoVXRpbHMiLCJyYW5kRmxvYXRTcHJlYWQiLCJtb3ZlQ2FtZXJhIiwidCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJyb3RhdGlvbiIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbnNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animacionPlanetas.js\n"));

/***/ })

});