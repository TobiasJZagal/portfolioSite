$(window).on("load", sidenErLoadet);

var OmOut = 0;
var picNumber = 0;

function sidenErLoadet() {
    console.log("klar");

    frontpageEffect();
}

$("body").mouseover(
function frontpageEffect() {
    $("body").removeClass("color1");
     $("body").addClass("color2");
    $("body").addClass("color3");

   $("Om").removeClass("color1");
     $("Om").addClass("color2");
    $("Om").addClass("color3");


    $("#Om").addClass("boxshadow");
    $("#Indhold").addClass("boxshadow");

    $("#frontpage").on("click",scrollDown);

     frontpageEffectEnd();
    OmEffect();

}
    );

function scrollDown() {
    window.scrollBy({
        top: 900,
        left: 0,
        behavior: 'smooth'
    });
}




$("body").mouseout(
    function frontpageEffectEnd() {
        $("body").removeClass("color2");
     $("body").addClass("color1");


    $("#frontpagebox").removeClass("boxshadow");
      $("#Indhold").removeClass("boxshadow");
        $("#Om").removeClass("boxshadow");
        frontpageEffect();
    }

)



function PictureSwitch() {



}



function picNumber2() {
    $("#OmGallery").removeClass("GalleryOm1");
        $("#OmGallery").addClass("GalleryOm2");

    setTimeout(picNumber1,3000);
}

function picNumber1() {
    $("#OmGallery").removeClass("GalleryOm2");
        $("#OmGallery").addClass("GalleryOm1");

    setTimeout(picNumber2,3000);
}









