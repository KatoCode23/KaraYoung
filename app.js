var app = angular.module('app', []);

app.controller('myController', function($scope){

var log = console.log;

log('Hello World!!!!')


$scope.karasPictures = [
   {
      name: 'Beach Photoshoot',
      link: 'http://www.vogue.com/',
      img1: '1.jpg',
      img2: '2.jpg',
      img3: '3.jpg'

   },
   {
      name: 'VOGUE',
      link: 'http://www.vogue.com/',
      img1: '2.jpg',
      img2: '3.jpg',
      img3: '4.jpg'

   },
   {
      name: 'ELLE',
      link: 'http://www.vogue.com/',
      img1: '3.jpg',
      img2: '4.jpg',
      img3: '5.jpg'
   },
   {
      name: 'PLAYBOY',
      link: 'http://www.vogue.com/',
      img1: '4.jpg',
      img2: '5.jpg',
      img3: '6.jpg'

   },
   {
      name: 'PARIS',
      link: 'http://www.vogue.com/',
      img1: '5.jpg',
      img2: '6.jpg',
      img3: '7.jpg'
   },
   {
      name: 'BEACH COMBER',
      link: 'http://www.vogue.com/',
      img1: '6.jpg',
      img2: '7.jpg',
      img3: '8.jpg'
   },
   {
      name: 'VALENTINO',
      link: 'http://www.vogue.com/',
      img1: '7.jpg',
      img2: '8.jpg',
      img3: '9.jpg'
   },
   {
      name: 'VOGUE',
      link: 'http://www.vogue.com/',
      img1: '8.jpg',
      img2: '9.jpg',
      img3: '10.jpg'
   },
   {
      name: 'COVERGIRL',
      link: 'http://www.vogue.com/',
      img1: '9.jpg',
      img2: '10.jpg',
      img3: '1.jpg'
   },
   {
      name: 'GLAMOUR',
      link: 'http://www.vogue.com/',
      img1: '10.jpg',
      img2: '1.jpg',
      img3: '2.jpg'
   }
];

console.log($scope.karasPictures);




});
