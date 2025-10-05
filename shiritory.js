/**
 * Class representing a Shiritori game.
 * Shiritori is a Japanese word game where players take turns
 * saying a word that starts with the last letter of the previous word.
 */
class Shiritory {
    /**
     * @type {string[]} - Stores the sequence of words played in the game.
     */
    words = [];

    /**
     * @type {boolean} - Indicates whether the game is over.
     */
    game_over = true;

    /**
     * Play a word in the Shiritori game.
     * If the word is valid (not repeated and starts with the last letter of the previous word),
     * it will be added to the game sequence. Otherwise, the game ends.
     *
     * @param {string} [word=''] - The word to play.
     * @returns {string[] | string} - Returns the updated list of words if successful,
     *                                or 'game over' if the move is invalid.
     */
    play(word = '') {
        if (this.words.length > 0) {
            const lastLetter = this.words[this.words.length - 1].at(-1);
            if (!this.words.includes(word) && word[0] === lastLetter) {
                this.words.push(word);
                return this.words;
            } else {
                this.game_over = true;
                return 'game over';
            }
        }
        this.words.push(word);
        return this.words;
    }

    /**
     * Restart the Shiritori game.
     * Resets the word list and marks the game as not over.
     *
     * @returns {string} - A message indicating that the game has been restarted.
     */
    restart() {
        this.words = [];
        this.game_over = false;
        return "game restarted";
    }
}
