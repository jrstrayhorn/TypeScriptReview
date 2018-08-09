"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(numberOfLikes) {
        this.numberOfLikes = numberOfLikes;
        this.buttonState = false;
    }
    LikeComponent.prototype.clickLikeButton = function () {
        console.log('Clicking Like Button');
        if (this.buttonState == false) {
            this.numberOfLikes++;
            this.buttonState = true;
        }
        else {
            this.numberOfLikes--;
            this.buttonState = false;
        }
    };
    LikeComponent.prototype.displayState = function () {
        console.log("Total Number of Likes: " + this.numberOfLikes + ", Button State: " + this.buttonState);
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
