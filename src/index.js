$(document).ready(function(){


  $('#photo-form').on('submit', e=> {
    e.preventDefault()

    var image = $('input')[0].value
    var caption = $('input')[1].value

    if (image === "" && caption === "" ) {
      { $('#error').html("Enter information in both fields before you submit") }
    }
    else if ( image === "" )
      { { $('#error').html("Enter an image URL") } }
    else if ( caption === "" )
      { { $('#error').html("Enter a caption") } }
    else {
        $('#photo-list').append('<img src=' + image + ' width="400"><br>')
        $('#photo-list').append(caption + '<br>')
        $('#error').html("")
    }

    // postIfValid()

  })

})

// function postIfValid() {
//
//   if (image === "" && caption === "" ) {
//     { $('#error').html("Enter information in both fields before you submit") }
//   }
//   else if ( image === "" )
//     { { $('#error').html("Enter an image URL") } }
//   else if ( caption === "" )
//     { { $('#error').html("Enter a caption") } }
//   else {
//       $('#photo-list').append('<img src=' + image + ' width="400"><br>')
//       $('#photo-list').append(caption + '<br>')
//       $('#error').html("")
//   }
//
// }





// https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg
// http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-7.jpg
// http://static.boredpanda.com/blog/wp-content/uploads/2016/06/rescue-dog-loves-baby-greyhound-racing-mosley-lucas-2.gif
