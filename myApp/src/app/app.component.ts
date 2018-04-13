import { Component} from '@angular/core';

const list: string[] = [
  'http://www.gogetnews.info/uploads/posts/2017-04/1492366965_dzhim-kerri.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/C1OaF6U9TDS._SL1000_.png',
  'http://lichnosti.net/photos/4199/main.jpg',
  'https://s5.cdn.teleprogramma.pro/wp-content/uploads/2017/08/a52cdcd4604afc84079c9266a24e9b96.jpg'
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'people';
  mainImageSrc = 'http://www.gogetnews.info/uploads/posts/2017-04/1492366965_dzhim-kerri.jpg';
  list = list;

 onImageSelect(src: string){
   this.mainImageSrc = src;
 }

 onMainImageClick(src: string){
   const currentIndex = this.list.indexOf(src);

   let newIndex = currentIndex + 1;

   if ((this.list.length -1) == currentIndex){
     newIndex = 0;
   }

   this.onImageSelect(this.list[newIndex]);
 }
}
