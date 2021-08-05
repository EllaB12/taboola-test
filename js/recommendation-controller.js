'use strict';

import { getRecommendations } from './recommendation-service';

function onInit() {
    renderRecommendations();
}

function renderRecommendations() {
    getRecommendations().then(recommendations => {
        var strHTMLs = recommendations.map(function (recommendation) {
            const item = getRecommendationCard(recommendation)
            return `
            <li class="recommendation-item">
                ${item}
            </li>`
        })
        var elList = document.querySelector('.recommendation-list');
        elList.innerHTML = strHTMLs.join('');
    });
}

function getRecommendationCard(recommendation) {
    return `
    <a href="${recommendation.url}">
        <img class="recommendation-img" src="${recommendation.thumbnail[0].url}"/>
        <div class="recommendation-content">
            <span class="name">${recommendation.name}</span>
            <span class="branding">${recommendation.branding}</span>
        </div>
    </a>`
}

module.exports = {
    onInit,
    renderRecommendations
};