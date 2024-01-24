var app=angular.module("MovieSearch",[]);
app.controller("MovieController",['$scope','$http','$sce',function($scope,$http,$sce){
$scope.movies=[
    {name:"Hanuman",image:"hanuman.jpeg",rating:"9.2",date:"2024-01-14",trailer:"https://www.youtube.com/embed/Oqvly3MvlXA?si=m-z8A0YKwQcq1bgQ"},
{name:"salaar",image:"salaar.jpg",rating:"9.4",date:"2023-12-23",trailer:"https://www.youtube.com/embed/4GPvYMKtrtI?si=sF0rwQ28dWiV9JEW"},
{name:"Animal",image:"animal.jpg",rating:"8.3",date:"2023-12-26",trailer:"https://www.youtube.com/embed/OM6Sgf-Q4Ow?si=qyReSsacA4JooLcp"},
{name:"Guntur Karam",image:"gunturKaaram.jpeg",rating:"7.8",date:"2024-01-14",trailer:"https://www.youtube.com/embed/DYLG65xz55U?si=nT6R7UD4iXwje6eu"},
{name:"Baahubali:The Beginning",image:"baahubali1.jpeg",rating:"8.7",date:"2015-07-10",trailer:"https://www.youtube.com/embed/sOEg_YZQsTI?si=PkWKkSXp5bC2tzDi"},
{name:"Pushpa:The Rise-Part-1",image:"pushpa1.jpeg",rating:"7.6",date:"2021-12-17",trailer:"https://www.youtube.com/embed/Q1NKMPhP8PY?si=1OiRYfLp0ZFZJsHX"},
{name:"Mayabazaar Film my savithri",image:"mayabazaar.jpeg",rating:"9.5",date:"1957-03-27",trailer:"https://www.youtube.com/embed/jaRa8HO2qmY?si=Egx7ZurEfZFfAfBU"},
{name:"john wick :The Beginning",image:"johnwick.jpg",rating:9.3,date:"2014-11-14",trailer:"https://www.youtube.com/embed/C0BMx-qxsP4?si=gXpZHcx_cEAYKfP6"},
{name:"Saptha saagaralu dhaati",image:"ssd.jpg",rating:9.5,date:"2023-09-13",trailer:"https://www.youtube.com/embed/F9ULTPsKur8?si=bJ5Czq4R45SQJU8Z"},
    {name:"kushi film by pawan kalyan",image:"kushi.jpg",rating:"9.1",date:"2021-04-26",trailer:"https://www.youtube.com/embed/Lu6OOg4cEl4?si=2sL0iU0LxqMtgvV4"}

] ;

$scope.trailerURL="";
$scope.inputSearch={};
$scope.searchDate;
$scope.day="";
$scope.filteredMovies=[];
$scope.inputSearchMovieName ;
$scope.modalMovie = {}; 
$scope.trustedUrl = ''; 

// var url = 'https://rapidapi.com/elisbushaj2/api/movies-api14/';
 
// $http.get(url)
//     .then(function(response) {
//         // Success callback
//         $scope.movies = response.data;
//         console.log("JIII");
//     })
//     .catch(function(error) {
//         // Error callback
//         console.error('Error fetching data:', error);
//     });
$scope.playTrailer = function (movie) {
    $scope.trustedUrl = $sce.trustAsResourceUrl(movie.trailer);
    console.log($scope.movieTrailer);
    $('#myModal').modal('show'); 
};
constructor();
function constructor(){
    for(movie of $scope.movies){
        $scope.filteredMovies.unshift(movie);
    }
}




$scope.filterMoviesWithDate=function(){
    $scope.filteredMovies=[];
var fromdate=new Date($scope.inputSearch.fromDate);
var toDate=new Date($scope.inputSearch.toDate)
  

    console.log($scope.filteredMovies);
        console.log($scope.inputSearch.fromDate)
        for(const movie of $scope.movies){
            const movieDate=convertDateStringToDate(movie.date);
           if(fromdate<=movieDate && toDate>=movieDate){
            $scope.filteredMovies.unshift(movie);
           }
        }
}



$scope.filterMovieWithDay=function(){

    $scope.filteredMovies=[];
    $scope.inputSearchMovieName=document.getElementById('inputSearchMovieName').value.toLowerCase().substring(0,5);
    for(movie of $scope.movies){
       var movieName=movie.name.toLowerCase().substring(0,5)+"";
     if(movieName===$scope.inputSearchMovieName){
       $scope.filteredMovies.unshift(movie);
     }
    }
}

function convertDateStringToDate(dateString) {
    const dateArray = dateString.split('-');
    const convertedDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);

    return convertedDate;
}
}]);



