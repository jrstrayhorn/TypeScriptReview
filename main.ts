import { LikeComponent } from './like-component'

// using IIFE to remove ts error about block scoping
(function () {

    var likeComponent = new LikeComponent(3);
    likeComponent.clickLikeButton();
    likeComponent.displayState();
    likeComponent.clickLikeButton();
    likeComponent.displayState();
    likeComponent.clickLikeButton();
    likeComponent.clickLikeButton();
    likeComponent.displayState();
    
})();