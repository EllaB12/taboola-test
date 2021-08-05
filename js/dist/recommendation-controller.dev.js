'use strict';

function onInit() {
  renderRecommendations();
}

function renderRecommendations() {
  getRecommendations().then(function (recommendations) {
    var strHTMLs = recommendations.map(function (recommendation) {
      var item = getRecommendationCard(recommendation);
      return "\n            <li class=\"recommendation-item\">\n                ".concat(item, "\n            </li>");
    });
    var elList = document.querySelector('.recommendation-list');
    elList.innerHTML = strHTMLs.join('');
  });
}

function getRecommendationCard(recommendation) {
  return "\n    <a href=\"".concat(recommendation.url, "\">\n        <img class=\"recommendation-img\" src=\"").concat(recommendation.thumbnail[0].url, "\"/>\n        <div class=\"recommendation-content\">\n            <span class=\"name\">").concat(recommendation.name, "</span>\n            <span class=\"branding\">").concat(recommendation.branding, "</span>\n        </div>\n    </a>");
}