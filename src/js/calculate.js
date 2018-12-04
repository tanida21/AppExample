function calculate(){
    var imagePath = "src/img/";
    var imageId = $("#result");
    var input = inputScore();
    var result = process(input);
    var picture = output(result);
    if(picture == undefined){
        picture = "300x300.jpg";
    }
    imageId.attr("src", imagePath+picture);
}
