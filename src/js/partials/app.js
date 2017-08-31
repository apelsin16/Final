var ideas = ['Sport and Activity', 'Wellness and Health', 'Extreme Sports and Expeditions', 'Games', 'Culture' +
' and Education', 'Relaxation', 'Travelling'];

function inputPhoto(a, b) {


var apiURL = 'https://pixabay.com/api/?key=5992000-de0663331a4d0b877fb659d73&q=' + a + '&orientation=horizontal';

var promise = fetch(apiURL)
        .then(function(response){
            if (response.ok){
                return response.json();
            }
            throw new Error('Error during fetch');
        })
        .then(function(data){
            var y = _.random(1,8);
            console.log(data.hits[y].webformatURL);
            var link = data.hits[y].webformatURL;
            console.log(link);
            var img = document.getElementById(b);
            console.log(img);
            img.setAttribute('src', link);
 })
}

inputPhoto(ideas[0],0);
inputPhoto(ideas[1],1);
inputPhoto(ideas[2],2);
inputPhoto(ideas[3],3);
inputPhoto(ideas[4],4);
inputPhoto(ideas[5],5);
inputPhoto(ideas[6],6);

var $grid = $('.grid').masonry({
    // options...
});
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