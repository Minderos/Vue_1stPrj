const app = Vue.createApp({
    data(){
        return{
            url : 'https://google.com',
            showBooks : true,
            books:[
                { title: 'name of the wind', author: 'patrick rothfuss', img: './assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: './assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', img: './assets/3.jpg', isFav: true}
            ],
         
            x: 0,
            y: 0
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e, e.type)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
        // changeTitle(){
        //   this.title = 'Words of Radiance'  
        // }
    },
    computed: {
       filteredBooks(){
        return this.books.filter((book)=> book.isFav)
        }
    }
})

app.mount('#app')