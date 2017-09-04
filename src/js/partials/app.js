var ideas = ['Sport and Activity', 'Wellness and Health', 'Extreme Sports and Expeditions', 'Games', 'Culture' +
' and Education', 'Relaxation', 'Travelling'];

function inputPhoto(a, b, c) {


var apiURL = 'https://pixabay.com/api/?key=5992000-de0663331a4d0b877fb659d73&q=' + a + '&orientation=horizontal';

var promise = fetch(apiURL)
        .then(function(response){
            if (response.ok){
                return response.json();
            }
            throw new Error('Error during fetch');
        })
        .then(function(data){
            var y = _.random(1,c);
            // console.log(data.hits[y].webformatURL);
            var link = data.hits[y].webformatURL;
            // console.log(link);
            var img = document.getElementById(b);
            // console.log(img);
            img.setAttribute('src', link);
 })
}

inputPhoto(ideas[0],0,10);
inputPhoto(ideas[1],1,20);
inputPhoto(ideas[2],2,3);
inputPhoto(ideas[3],3,20);
inputPhoto(ideas[4],4,8);
inputPhoto(ideas[5],5,8);
inputPhoto(ideas[6],6,10);

var $grid = $('.grid').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $grid.masonry({
        fitWidth: true
        // options...
    });
});

function hideColText() {
    var $colText = $('.col-text');
    console.log($colText);
    $colText.hide();
}



function createURL() {
    var input = document.getElementById('searching');
    console.log(searching);
    var q = input.value;
    return ('https://pixabay.com/api/?key=5992000-de0663331a4d0b877fb659d73&q=' + q + '&orientation=horizontal');
}
var apiUrl = createURL();
console.log(apiUrl);


var btn = document.getElementById('btn');

btn.addEventListener('clock', createURL);




function searchPhoto () {

}



// var arrowLeft = document.getElementsByClassName('fa-angle-left');
// var arrowRight = document.getElementsByClassName('fa-angle-right');
//
// console.log(arrowRight);
// var step1 = document.getElementById('block1');
// var step2 = document.getElementById('block2');
// var step3 = document.getElementById('block3');
//
// console.log(step1);
// arrowLeft[0].addEventListener('click', function (){
// if (step1.style.backgroundImage == "url('../img/step1-1440.png')") {
//
//     step1.style.backgroundImage = "url('../img/step3-1440.png')";
//
// } if (step1.style.backgroundImage == "url('../img/step2-1440.png')"){
//
//
//
// }
// function changeBg () {
//     if (  )
//
// }

// function render(template, data, parent) {
//     var htmlString = ' ';
//
//     _.forEach(data, function(item) {
//         htmlString = template(item);
//     });
//
//     parent.innerHTML = htmlString;
// }
// var container = document.getElementById('photo');
// var source = document.getElementById('template').textContent;
// var compiled = _.template(source);

// function searchInput(q){
//
//  var apiURL = 'https://pixabay.com/api/?key=5992000-de0663331a4d0b877fb659d73&q=' + q + '&orientation=horizontal';
//
//  var promise = fetch(apiURL)
//         .then(function(response){
//             if (response.ok){
//                 return response.json();
//             }
//             throw new Error('Error during fetch');
//         })
//         .then(function(data){
//             console.log(data);
//             var imgs = _.map(data.hits, function(item){
//
//                 return {
//                     webformatURL:item.webformatURL,
//                     tags: item.tags
//                 };
//         });
// // console.log(imgs);
//
// // console.log(img);
//
//         //
//     render(compiled, imgs, container);
//  })
//
// }
//
// // function createAPI (i){
// //
// //     return ('https://pixabay.com/api/?key=5992000-de0663331a4d0b877fb659d73&q=' + ideas[i] + '&orientation=horizontal');
// // }
// //
// //
// searchInput(ideas[0]);
// searchInput(ideas[1]);
// searchInput(ideas[2]);
// searchInput(ideas[3]);
// searchInput(ideas[4]);
// searchInput(ideas[5]);
// searchInput(ideas[6]);