"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _recommendationController = require("./recommendation-controller");

var recommendationService = _interopRequireWildcard(require("./recommendation-service"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

global.fetch = require('jest-fetch-mock');

var path = require('path');

var fs = require('fs');

var html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
var recommendationMock = new Promise(function (resolve, reject) {
  resolve(JSON.stringify({
    list: [{
      branding: "Elle",
      description: "Don't worry, we'll spot you.",
      name: "30 Fitness Commandments to Live By",
      origin: "sponsored",
      thumbnail: [{
        url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fwww.worldsyoga.com%2Fwp-content%2Fthemes%2Fkingsize%2Fimages%2Fupload%2FYoga-man-and-woman.jpg"
      }],
      type: "video",
      url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__841e215d344f9a4e671105a58288f244__68ab42b85d4bbdafe61a2fbc3ab98869&response.session=v2_218ae11eb08a31e7ee2ff1eac1ca34c2_58f456c6-92f5-4803-bc16-0deb7292d49d-tuct80277d6_1627976278_1627976278_CNawjgYQswsY6sPK17AvIAEoATBmOIjrCkCvkBBIntPYA1D___________8BWABgAGju9_aCtbbDttwBcAE&item.id=%7E%7EV1%7E%7E310876821499278023%7E%7ERfL09T5DAVj3rVwCNZkr1wWItCgbhDgY35GBkxDAmIW9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IJkitIyN9Ia-8t8BdF_tS6u_lmlgp1OLwzEjJ_DSC3vW8pAG_BB_VNfscIrUJtUoo4gHAwBK02yBNwsboZR7e24aE3iK7ebMf8nQ4vZ9kk8xiNcjRQ2-LCgLMB-RFQHBbw&item.type=video&sig=50ff19489f97970c0d8427adfccb20766f3b952f984c&redir=http%3A%2F%2Fwww.elle.com%2Fbeauty%2Fhealth-fitness%2Ffitness-commandments%3Fsrc%3Drss%26utm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiCubODr7c3-r1X0MC7u8oijx3U7Df5fd2sRYZsFX5GkhSC5BCjBvNX_1cTt5E4%23tblciGiCubODr7c3-r1X0MC7u8oijx3U7Df5fd2sRYZsFX5GkhSC5BCjBvNX_1cTt5E4&ui=58f456c6-92f5-4803-bc16-0deb7292d49d-tuct80277d6&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHdhdGVyMDk1OICS9ChAiOsKSK-QEFCe09gDWP___________wFjCN3__________wEQ3f__________ARgjZGMIqB8Q6CoYB2RjCNIDEOAGGAhkYwiWFBCfHBgYZGMI9BQQnh0YH2R4AYABAogBqPvZugE"
    }]
  }));
});
it('renders correctly', function _callee() {
  var spy, res, test;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          document.documentElement.innerHTML = html.toString();
          spy = jest.spyOn(recommendationService, 'getRecommendations');
          spy.mockReturnValue(recommendationMock);
          (0, _recommendationController.onInit)();
          res = document.querySelector('.recommendation-item');
          test = "\n                <li class=\"recommendation-item\">          \n                    <a href=\"http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__841e215d344f9a4e671105a58288f244__68ab42b85d4bbdafe61a2fbc3ab98869&response.session=v2_218ae11eb08a31e7ee2ff1eac1ca34c2_58f456c6-92f5-4803-bc16-0deb7292d49d-tuct80277d6_1627976278_1627976278_CNawjgYQswsY6sPK17AvIAEoATBmOIjrCkCvkBBIntPYA1D___________8BWABgAGju9_aCtbbDttwBcAE&item.id=%7E%7EV1%7E%7E310876821499278023%7E%7ERfL09T5DAVj3rVwCNZkr1wWItCgbhDgY35GBkxDAmIW9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IJkitIyN9Ia-8t8BdF_tS6u_lmlgp1OLwzEjJ_DSC3vW8pAG_BB_VNfscIrUJtUoo4gHAwBK02yBNwsboZR7e24aE3iK7ebMf8nQ4vZ9kk8xiNcjRQ2-LCgLMB-RFQHBbw&item.type=video&sig=50ff19489f97970c0d8427adfccb20766f3b952f984c&redir=http%3A%2F%2Fwww.elle.com%2Fbeauty%2Fhealth-fitness%2Ffitness-commandments%3Fsrc%3Drss%26utm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiCubODr7c3-r1X0MC7u8oijx3U7Df5fd2sRYZsFX5GkhSC5BCjBvNX_1cTt5E4%23tblciGiCubODr7c3-r1X0MC7u8oijx3U7Df5fd2sRYZsFX5GkhSC5BCjBvNX_1cTt5E4&ui=58f456c6-92f5-4803-bc16-0deb7292d49d-tuct80277d6&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHdhdGVyMDk1OICS9ChAiOsKSK-QEFCe09gDWP___________wFjCN3__________wEQ3f__________ARgjZGMIqB8Q6CoYB2RjCNIDEOAGGAhkYwiWFBCfHBgYZGMI9BQQnh0YH2R4AYABAogBqPvZugE\">\n                        <img class=\"recommendation-img\" src=\"http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fwww.worldsyoga.com%2Fwp-content%2Fthemes%2Fkingsize%2Fimages%2Fupload%2FYoga-man-and-woman.jpg\"/>\n                        <div class=\"recommendation-content\">\n                            <span class=\"name\">30 Fitness Commandments to Live By</span>\n                            <span class=\"branding\">Elle</span>\n                        </div>\n                    </a>\n                </li>";
          expect(res).toBe(test);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});