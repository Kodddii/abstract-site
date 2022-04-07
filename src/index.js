class Site {
    constructor(){
        this.boards = [];
    }
    // site = {}
    // site.boards = []
    // Board={}
    addBoard(board){
        if(this.boards.find((anything)=>anything.name===board.name)){
            throw new Error();
        };
        board.isAdded = true;
        this.boards.push(board);
    }
    findBoardByName(board){
        return this.boards.find(ele => ele.name===board)
    }

    
}



class Board extends Site {
    constructor(name){
        super();
        this.articles = [];
        this.name = name
        this.isAdded = false;
        if (this.name ==='' || this.name===null){
            throw new Error()
        }
    }
    publish(article){
        if (this.isAdded === false){
            throw new Error();
        }
        article.isAdded2= true;
        article.createdDate = new Date().toISOString();
        article.id = `${this.name}-${article.createdDate}`
        this.articles.push(article)

    }
    getAllArticles(){
        return Object(this.articles)
    }
}






class Article extends Board {
    constructor(article={}){
        super();
        this.comments = []
        this.subject = article.subject;
        this.content = article.content
        this.author = article.author;
        this.isAdded2=false;
        if (this.subject === '' || this.subject ===null || this.content===''  || this.content===null || this.author==='' || this.author===null){
            throw new Error();
        }
    }
    reply(comment) {
        if(this.isAdded2===false) {
            throw new Error();
        }
        comment.createdDate = new Date().toISOString();
        return this.comments.push(comment);
             
        
    }
    getAllComments(){
        return this.comments;
    }
}


class Comment extends Article {
    constructor(comment){
        super()
        this.content = comment.content
        this.author = comment.author
        if(this.content===null || this.content==='' || this.author===null || this.author===''){
            throw new Error();
        }


    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
