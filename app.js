var app = angular.module('app', []);

app.controller('myController', function($scope){

var log = console.log;


$scope.karasPictures = [
   {
      name: 'STAR',
      img1: '1.jpg',
      img2: '2.jpg',
      img3: '3.jpg'

   },
   {
      name: 'CAMEO',
      img1: '4.jpg',
      img2: '5.jpg',
      img3: '6.jpg'

   },
   {
      name: 'COVERGIRL',
      img1: '7.jpg',
      img2: '8.jpg',
      img3: '9.jpg'
   },
   {
      name: 'ELLE',
      img1: '10.jpg',
      img2: '11.jpg',
      img3: '12.jpg'

   },
   {
      name: 'COSMO',
      img1: '13.jpg',
      img2: '14.jpg',
      img3: '15.jpg'
   },
   {
      name: 'SUPER MODEL',
      img1: '16.jpg',
      img2: '17.jpg',
      img3: '18.jpg'
   },
   {
      name: 'VALENTINO',
      img1: '19.jpg',
      img2: '20.jpg',
      img3: '21.jpg'
   },
   {
      name: 'VOGUE',
      img1: '22.jpg',
      img2: '23.jpg',
      img3: '24.jpg'
   },
   {
      name: 'PLAYBOY',
      img1: '25.jpg',
      img2: '26.jpg',
      img3: '27.jpg'
   },
   {
      name: 'GLAMOUR',
      img1: '28.jpg',
      img2: '29.jpg',
      img3: '30.jpg'
   },
   {
      name: 'SPORTS ILLUSTRATED',
      img1: '31.jpg',
      img2: '32.jpg',
      img3: '33.jpg'
   },
   {
      name: 'REVLON',
      img1: '34.jpg',
      img2: '35.jpg',
      img3: '36.jpg'

   }
];

$scope.nowPhotos = [
  {
    img1: '100.jpg',
    img2: '101.jpg',
    img3: '102.jpg',
    img4: '103.jpg'
  },
  {
    img1: '104.jpg',
    img2: '105.jpg',
    img3: '106.jpg',
    img4: '107.jpg'
  },
  {
    img1: '108.jpg',
    img2: '109.jpg',
    img3: '110.jpg',
    img4: '111.jpg'
  }
];

log($scope.nowPhotos);

$scope.myClass = '';
$scope.state = null;

$scope.showBio = function(event){
var bio = document.getElementById('rotate-bio');
$scope.myClass = 'rotated';
event = $scope.state;
$scope.state = true;
if($scope.state = true){
  $scope.hideBio = function(event){
  var hideBio = document.getElementById('rotate-bio');
  event = $scope.state;
  $scope.state = false;
    $scope.myClass = 'bio-container.rotated';
  log(hideBio);
  }
  }
log(event);
}



$scope.reset = function(){
  var reset = document.getElementById('rotate-bio');
  $scope.myClass = 'bio-container.rotated';
}


$scope.IsVisible = false;
$scope.ShowHide = function () {
$scope.IsVisible = $scope.IsVisible ? false : true;
}
});
