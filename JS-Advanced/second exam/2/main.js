class artGallery {
    constructor(creator){
        this.creator =creator;
        this.possibleArticles = {'picture':200,'photo':50,'item':250 };
        this.listOfArticles = ['photo'] ;
        this.guest = [];
    }
    addArticle(articleModel, articleName, quantity){
        let isItFound = false;
        for (const key of Object.keys(this.possibleArticles)){
            var a  = articleModel.toLowerCase();
            if(a === key){
                isItFound = true;
                break;
            }
        }
        if(!isItFound){
            throw new Error('This article model is not included in this gallery!');
        }
        if(this.listOfArticles.includes(articleName)){
            if(true){
                for (const [key,value] of Object.entries(this.possibleArticles)){
                    if(a === key){
                        console.log(value);
                        value= Number(value)+Number(quantity);
                        //console.log(key);
                        break;
                    } 
                }
        }else{
console.log('ggg');

        }
    }else {
        console.log('a');      
    }
} 
}
let artGalleryy = new artGallery('ivailo'); 
artGalleryy.addArticle('picture','photo',4);
