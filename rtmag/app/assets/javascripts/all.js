
			
			
  var contentClicked = false;
  var searchClicked = false;
  var socialClicked = false;

	$(document).ready(function () {

        /*search open and cloase control */
		    $( "#search-button" ).click(function() {
          var search = document.querySelector("#search");
          if(!searchClicked){
            classie.add( search, "search-open" );
            searchClicked = true;
          }else{
            classie.remove( search, "search-open" );
            searchClicked = false;
          }  
        });

    


       //make image cover whole screen and act like a background image.
       [].slice.call(document.querySelectorAll(".working")).forEach(function(el,i){
			   classie.add( el, "withjs" );
         classie.remove( el, "withoutjs" );
		    });

       $(".node-teaser .withjs a").wrap("<div id='backimg'></div>");
       $(".not-front .field-name-field-teaser-image img").wrap("<div id='backimg'></div>");

       $(".headerwrap").css("height", function(index){
          return $(window).height() - 1;
       });

       $(window).resize(function(){
          $(".headerwrap").css("height", function(index){
            return $(window).height() - 1;
         });
       });

       $(".withjs #backimg").css("height", function(index){
       		return $(window).height() - 1;
       });

       var hold = $(".field-name-field-teaser-image img").attr("src");
       $(".withjs #backimg").css("background-image", "url('" + hold + "')");
       $(".withjs #backimg").css("background-repeat", "no-repeat");
       $(".withjs #backimg").css("background-position", "top center");

       $(window).resize(function(){
       		$(".withjs #backimg").css("height", function(index){
	       		return $(window).height() - 1;
	       });
       });

       /* article body open control on front page */
       $(".node-teaser #backimg").click(function(){
          var bodywrap = document.body;
          var bodywrap2 = document.querySelector("#bodywrap2");
          if(!contentClicked){
            classie.add(bodywrap, "pmu-open");
            $(".withjs #backimg").css("cursor", "auto");
            contentClicked = true;
            $(".front .pager").appendTo(".headerwrap");
          }
       });

       //panel view control
       var pathArray = window.location.pathname.split('index.html');

       if(pathArray[2] == "features" && pathArray[2] == undefined){
          var pageview = document.querySelector("#pageview");
          classie.add(pageview, "panelview");
       }  

       $('#pageview').click(function(){
        
        if(pathArray[1] != "features" && pathArray[2] == undefined){
          window.location.href = "features";
        }else{
          var hold = document.referrer;
          hold = hold.split('index.html');
          console.log(hold);
          if(hold[2] == window.location.hostname){
            parent.history.back();
          }else{
            window.location.href = "index.html";
          }
        }
       });

        /* article share buttons controls */
        $( ".shareBut" ).click(function() {
          var social = document.querySelector("#articleShare");
          if(!socialClicked){
            classie.add( social, "social-open" );
            socialClicked = true;
          }else{
            classie.remove( social, "social-open" );
            socialClicked = false;
          }
          
        });

        /* slide effect on competition home page */
        $(".page-competitions .views-row").hover(function(){
          $(".field-name-title", this).animate({bottom: "0px"} , '100');
        }, function(){
          $(".field-name-title", this).animate({bottom: "-20px"} , '100');
        });

        /* move latest issue on advertise page */
        if($(".view-issue-for-advertise-page") != null){
          $(".view-issue-for-advertise-page").appendTo("#issueholder");
        }
        
        $(document).keydown(function(e) {
          var url = false;
          if (e.which == 37) { // Left arrow key code
            url = $('.pager-previous a').attr('href');
          }
          else if (e.which == 39) { // Right arrow key code
            url = $('.pager-next a').attr('href');
          }
          if (url) {
            window.location = url;
          }
        });

        $('a[href^=http]').click(function () {
            var a = new RegExp('/' + window.location.host + '/');
            if (!a.test(this.href)) {
                window.open(this.href);
                return false;
            }
        });

        if($(".view-competition-page-view").length > 0){
          if($(".view-competition-page-view .view-content").length <= 0){
            $("<img src='sites/all/themes/sport_theme/img/NoCompetition.jpg' style='margin-bottom: 150px;'/>").appendTo(".view-competition-page-view");
          }
        }

        if($("#block-views-front-panel-view-block").length > 0 || ($("#editorial").length > 0 && $(".node-type-page").length > 0)) {
          $(".content-area").css("max-width", "inherit");
        }

        if($("#block-views-related-content-block").length > 0){

          $("#block-views-related-content-block").prependTo("#contentwrap");
          $(window).resize(function(){
          $("#block-views-related-content-block .views-field-field-teaser-summary").dotdotdot({
              watch: "window"
            });
          }).resize();

          var bodywrap3 = document.querySelector("#bodywrap3");
          var foot = document.querySelector("#footwrap");
          classie.add(bodywrap3, "related");
          classie.add(foot, "related");

          if ($("#block-views-related-content-block").css("float") == "none" ){
              $("#block-views-related-content-block").appendTo("#contentwrap");
              $("#block-views-related-content-block").css("display", "block");
            }

          $(window).resize(function(){  
            if ($("#block-views-related-content-block").css("float") == "none" ){
              $("#block-views-related-content-block").appendTo("#contentwrap");
              $("#block-views-related-content-block").css("display", "block");
            }else{
              $("#block-views-related-content-block").prependTo("#contentwrap");
            }
          });

        }



        if($("#block-views-most-viewed-content-block").length > 0){

          $("#block-views-most-viewed-content-block").prependTo("#contentwrap");
          $(window).resize(function(){
          $("#block-views-most-viewed-content-block .views-field-field-teaser-summary").dotdotdot({
              watch: "window"
            });
          }).resize();

          var bodywrap3b = document.querySelector("#bodywrap3");
          var footb = document.querySelector("#footwrap");
          classie.add(bodywrap3b, "related");
          classie.add(footb, "related");

          if ($("#block-views-most-viewed-content-block").css("float") == "none" ){
              $("#block-views-most-viewed-content-block").appendTo("#contentwrap");
              $("#block-views-most-viewed-content-block").css("display", "block");
            }

          $(window).resize(function(){  
            if ($("#block-views-most-viewed-content-block").css("float") == "none" ){
              $("#block-views-most-viewed-content-block").appendTo("#contentwrap");
              $("#block-views-most-viewed-content-block").css("display", "block");
            }else{
              $("#block-views-most-viewed-content-block").prependTo("#contentwrap");
            }
          });

        }



        if($("#inIssue").length > 0){
          var issue = $(".field-name-field-issue-number").text();
          $(".field-name-field-issue-number").wrap("<a href='http://www.sport-magazine.co.uk/issues/issue-" + issue +"' style='color: #000; text-decoration: none;'></a>");
        }
        
        if($("#block-views-front-panel-view-block").length > 0 || $(".view-id-taxonomy_term").length > 0){
          var buts = document.querySelector(".menubuttons");
          classie.add(buts, "panel");
        }

  });

	function getAverageRGB(imgEl) {
    
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;
        
    if (!context) {
        return defaultRGB;
    }
    
    height = canvas.height = 121;
    width = canvas.width = 221;
    
    context.drawImage(imgEl, 0, 0);
    
    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain *///alert('x');
        return defaultRGB;
    }

    length = data.data.length;
    
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }
    
    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    return rgb;
    
}

$(function() {
    FastClick.attach(document.body);
});



