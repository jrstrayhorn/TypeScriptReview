export class LikeComponent {
    private buttonState: boolean;

    constructor(private numberOfLikes: number) {
        this.buttonState = false;
    }

    clickLikeButton() {
        console.log('Clicking Like Button');

        if (this.buttonState == false)
        {
            this.numberOfLikes++;
            this.buttonState = true;
        }
        else
        {
            this.numberOfLikes--;
            this.buttonState = false;
        }
    }

    displayState() {
        console.log(`Total Number of Likes: ${this.numberOfLikes}, Button State: ${this.buttonState}`);
    }
}