class Shiritory{
    words = []
    game_over =  true
    
    play(word = ''){
       if(this.words.length > 0){
         const lastLetter = this.words[this.words.length - 1].at(-1)
         if(!this.words.includes(word) && word[0] === lastLetter){
            this.words.push(word)
            return this.words
         }
         else {
            this.game_over = true
            return 'game over'
         }
        }
        this.words.push(word)
        return this.words
    }

    restart(){
        this.words = []
        this.game_over = false
        return "game restarted"
    }
}