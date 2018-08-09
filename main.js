"use strict";
exports.__esModule = true;
var like_component_1 = require("./like-component");
// using IIFE to remove ts error about block scoping
(function () {
    var likeComponent = new like_component_1.LikeComponent(3);
    likeComponent.clickLikeButton();
    likeComponent.displayState();
    likeComponent.clickLikeButton();
    likeComponent.displayState();
    likeComponent.clickLikeButton();
    likeComponent.clickLikeButton();
    likeComponent.displayState();
})();
