// =================================== MY JQUERY =================================== //

////////////////////////////// SCROLL ANIMATION - START //////////////////////////////
$('.scroll').on('click',function(e) {
     e.preventDefault();
     var offset = 0;
     var target = this.hash;
     if ($(this).data('offset') != undefined) offset = $(this).data('offset');
     $('html, body').stop().animate({
          'scrollTop': $(target).offset().top - offset
     }, 250, 'swing', function() {
          // window.location.hash = target;
     });
});
////////////////////////////// SCROLL ANIMATION - END //////////////////////////////

////////////////////////////// COOKIE BANNER - START //////////////////////////////
if ($('body').hasClass('cookieBannerV1')) {
     function cookiebanner() {
          $('.cookiebanner.version-1').slideDown();
          $('header .header').css('position', 'absolute');
     }
     window.onload = cookiebanner;

     $('#cookieBannerV1').on('click',function(e) {
          e.preventDefault();
          $('.cookiebanner.version-1').slideUp();
          $('header .header').css('position', 'fixed').addClass('active');
     });
} else if ($('body').hasClass('cookieBannerV2')) {
     $('#cookieBannerV2, .cookiebanner.version-2 .close').on('click',function(e) {
          e.preventDefault();
          $('.cookiebanner.version-2').hide();
     });
}
////////////////////////////// COOKIE BANNER - END //////////////////////////////

////////////////////////////// NAVIGATION - START //////////////////////////////
if ($('main').hasClass('apprentice')) {
     $('nav a.navigation__link--top-level--apprentice').append('<div class="border"></div>').addClass('active-section');
} else if ($('main').hasClass('employer')) {
     $('nav a.navigation__link--top-level--employer').append('<div class="border"></div>').addClass('active-section');
} else if ($('main').hasClass('real-stories')) {
     $('nav a.navigation__link--top-level--real-stories').append('<div class="border"></div>').addClass('active-section');
} else if ($('main').hasClass('interests-page')) {
     $('nav a.navigation__link--top-level--interests').append('<div class="border"></div>').addClass('active-section');
}

else {
     $('nav a.navigation__link--top-level--apprentice, nav a.navigation__link--top-level--employer').remove('border').removeClass('active-section');
}
////////////////////////////// NAVIGATION - END //////////////////////////////

////////////////////////////// FAA SEARCH BOX - START //////////////////////////////
$('#search-results-filter .cta-faa h2').on('click',function(e) {
     $(this).find('.open').toggleClass('close');
     $('#search-results-filter .form-content').toggleClass('show');
});

$('.faa-fat-link-block.cta-faa.search #faa-search-keyword').on('change',function(e) {
     if ($(this).val() == 'Agriculture, environment and animal care') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('agriculture').attr('data-faa-interest', 'agriculture');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Business and administration') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('business').attr('data-faa-interest', 'business');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Care services') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('care-services').attr('data-faa-interest', 'care-services');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Catering and hospitality') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('catering-hospitality').attr('data-faa-interest', 'catering-hospitality');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Construction') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('construction').attr('data-faa-interest', 'construction');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Creative and design') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('creative').attr('data-faa-interest', 'creative');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Digital') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('digital').attr('data-faa-interest', 'digital');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Education and childcare') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('education').attr('data-faa-interest', 'education');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Engineering and manufacturing') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('engineering').attr('data-faa-interest', 'engineering');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Hair and beauty') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('hair').attr('data-faa-interest', 'hair');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Health and science') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('health').attr('data-faa-interest', 'health');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Legal, finance and accounting') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('legal').attr('data-faa-interest', 'legal');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Protective services') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('protective').attr('data-faa-interest', 'protective');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Sales, marketing and procurement') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('sales').attr('data-faa-interest', 'sales');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Transport and logistics') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('transport').attr('data-faa-interest', 'transport');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
});
////////////////////////////// FAA SEARCH BOX - END //////////////////////////////

////////////////////////////// FAA SEARCH RESULTS LIST - START //////////////////////////////
// $(document).ready(function () {
//      size_li = $("#vacancy-search-results li").size();
//      x=10;
//      $('#vacancy-search-results li:lt('+x+')').show();
//      $('#loadMore').click(function () {
//           x= (x+5 <= size_li) ? x+5 : size_li;
//           $('#vacancy-search-results li:lt('+x+')').show();
//           $('#showLess').show();
//           if(x == size_li){
//                $('#loadMore').hide();
//           }
//      });
//      $('#showLess').click(function () {
//           x=(x-5<0) ? 10 : x-5;
//           $('#vacancy-search-results li').not(':lt('+x+')').hide();
//           $('#loadMore').show();
//           $('#showLess').show();
//           if(x == 10){
//                $('#showLess').hide();
//           }
//      });
// });
////////////////////////////// FAA SEARCH RESULTS LIST - END //////////////////////////////

////////////////////////////// COMPARE COMPONENT - START //////////////////////////////
$('#compare-component .more-info').on('click',function(e) {
     e.preventDefault();
     $(this).toggleClass('close');
     // $(this).parent().find('.content-container').toggleClass('open');
     $(this).text(function(i, v){
          return v === 'Show more info' ? 'Hide this info' : 'Show more info'
     });

     // // Select and loop the container element of the elements you want to equalise
     // $('section').each(function(){
     //
     //      // Cache the highest
     //      var highestBox = 0;
     //
     //      // Select and loop the elements you want to equalise
     //      $('.content-container[data-view-info="1"]', this).each(function(){
     //
     //           // If this box is higher than the cached highest then store it
     //           if($(this).height() > highestBox) {
     //                highestBox = $(this).height();
     //           }
     //
     //      });
     //
     //      // Set the height of all those children to whichever was highest
     //      $('.content-container',this).height(highestBox);
     //
     // });

     if ($(this).data('more-info') == 1) {
          $('#compare-component').find('.content-container[data-view-info="1"]').toggleClass('open');
     }
     if ($(this).data('more-info') == 2) {
          $('#compare-component').find('.content-container[data-view-info="2"]').toggleClass('open');
     }
     if ($(this).data('more-info') == 3) {
          $('#compare-component').find('.content-container[data-view-info="3"]').toggleClass('open');
     }
});

$(document).ready(function () {
     // var counter = 0;
     // $(document).ready(function() {
     //      $("#addMe").click(function(){
     //           counter++;
     //           $("#theCount").text(counter);
     //      });
     // });

     var basketNumber = parseInt($('header .button.basket .number').text());
     // var basketNumber = 0;
     /*
          $('.checkboxes__item.save-label .checkboxes__input').on('change',function(e) {
               var itemTitle = $(this).closest('.search-result').find('.heading-m a').text();

               var checked = $(this).is(':checked');
               var lbl = $(this).next();

               if (checked) {
                    basketNumber++;
                    $("header .button.basket .number").text(basketNumber);
                    $('#confirmation-message-panel').find('.apprenticeship-title').text(itemTitle);
                    $('#confirmation-message-panel').show();
               } else {
                    basketNumber--;
                    $("header .button.basket .number").text(basketNumber);
                    $('#confirmation-message-panel').hide();
               }

               lbl.text(function() {
                    return checked ? 'Remove' : 'Favourite';
               });

               if (basketNumber == 0) {
                    $('header .button.basket').removeClass('full');
               } else if (basketNumber >= 1) {
                    $('header .button.basket').addClass('full');
               }

          });

          $('.hero .checkboxes__item.save-label .checkboxes__input').on('change',function(e) {
               var itemTitle = $(this).closest('.hero').find('.heading-xl').text();

               var checked = $(this).is(':checked');
               var lbl = $(this).next();

               if (checked) {
                    basketNumber++;
                    $("header .button.basket .number").text(basketNumber);
                    $('#confirmation-message-panel').find('.apprenticeship-title').text(itemTitle);
                    $('#confirmation-message-panel').show();
               } else {
                    basketNumber--;
                    $("header .button.basket .number").text(basketNumber);
                    $('#confirmation-message-panel').hide();
               }

               lbl.text(function() {
                    return checked ? 'Remove' : 'Favourite';
               });

               if (basketNumber == 0) {
                    $('header .button.basket').removeClass('full');
               } else if (basketNumber >= 1) {
                    $('header .button.basket').addClass('full');
               }

          });
     */

     function countChecked() {
          return $("input[name='compare-feature']:checked").length;
     }

     function getCheckedTitles() {
          var chckdTitles = [];
          var chckdComp = $("input[name='compare-feature']:checked");
          chckdComp.each(function() {
               var itemTitle = $(this).closest('.search-result').find('.heading-m a').text();
               chckdTitles.push(itemTitle);
          })
          return(chckdTitles);
     }

     $("input[name='compare-feature']").on('change', function () {
          if (countChecked() <= 1 ) {
               $('#compare-message-panel').slideUp();
          } else if (countChecked() >= 2) {
               $('#compare-message-panel').slideDown();
          }
          var itemTitle = $(this).closest('.search-result').find('.heading-m a').text();
          $('#compare-message-panel .comparison-item-title').append('<span>' + itemTitle +'</span>');
          $('#compare-message-panel .comparison-item-title').append('<span>' + itemTitle +'</span>');
     });

     $("#compare-selected-items").on('click', function (e) {

          var titles = getCheckedTitles();

          var compareSections = $('#compare-apprenticeships section');

          compareSections.removeClass('populated');

          compareSections.each(function(index) {
               if (titles[index] !== undefined) {
                    $(this).addClass('populated');
                    $(this).find('.content h1').text(titles[index]);
               }
          });


          e.preventDefault();
          $('#compare-message-panel').hide();
          $('#compare-component').show();
     });

     $(".close-compare, .open-list").on('click', function (e) {
          e.preventDefault();
          $('#compare-message-panel').hide();
          $('#compare-component').hide();
     });

     $(".remove-item").on('click', function (e) {
          e.preventDefault();
          $(this).closest('section').removeClass('populated');
     });

});
////////////////////////////// COMPARE COMPONENT - END //////////////////////////////

////////////////////////////// POPULATED BASKET - START //////////////////////////////
$(document).ready(function () {
     $('input[name="compare-apprenticeship-feature"]').on('change',function(e) {
          var checkedApprenticeships = $(this).is(':checked');
          var itemApprenticeshipTitle = $(this).closest('h2.heading-l').find('a.apprenticeship-title').text();

          if (checkedApprenticeships) {
               $('#your-selected-items .right-content').css('opacity', '0.1');
               $('input[name="compare-training-provider-feature"]').attr("disabled", true);
               $('a.remove-training-provider').removeAttr('href');
               $('#compare-message-panel .comparison-item-title').append('<span>' + itemApprenticeshipTitle +'</span>');
          } else if (countCheckedApprenticeship() === 0) {
               $('#your-selected-items .right-content').css('opacity', '1');
               $('input[name="compare-training-provider-feature"]').removeAttr("disabled");
               $('a.remove-training-provider').attr('href', '#');
               $('#compare-message-panel .comparison-item-title').remove('<span>' + itemApprenticeshipTitle +'</span>');
          }

          function countCheckedApprenticeship() {
               return $("input[name='compare-apprenticeship-feature']:checked").length;
          }

          if (countCheckedApprenticeship() <= 1 ) {
               $('#compare-message-panel').slideUp();
          } else if (countCheckedApprenticeship() >= 2) {
               $('#compare-message-panel').slideDown();
          }

     });

     $('input[name="compare-training-provider-feature"]').on('change',function(e) {
          var checkedTrainingProvider = $(this).is(':checked');

          if (checkedTrainingProvider) {
               $('input[name="compare-apprenticeship-feature"]').attr("disabled", true);
               $('input[name="compare-apprenticeship-feature"]').parent().parent().css('opacity', '0.1');
          } else if (countCheckedTrainingProvider() === 0) {
               $('input[name="compare-apprenticeship-feature"]').removeAttr("disabled");
               $('input[name="compare-apprenticeship-feature"]').parent().parent().css('opacity', '1');
          }

          function countCheckedTrainingProvider() {
               return $("input[name='compare-training-provider-feature']:checked").length;
          }

          if (countCheckedTrainingProvider() <= 1 ) {
               $('#compare-message-panel').slideUp();
          } else if (countCheckedTrainingProvider() >= 2) {
               $('#compare-message-panel').slideDown();
          }
          var itemProviderTitle = $(this).closest('li').find('a.trainging-providers-list').text();
          $('#compare-message-panel .comparison-item-title').append('<span>' + itemProviderTitle +'</span>');

     });

     $('a.remove-training-provider').on('click',function(e) {
          e.preventDefault();
          $(this).closest('li').remove();
     });

});
////////////////////////////// POPULATED BASKET - START //////////////////////////////

// $(document).ready(function () {
//      var myInput = document.getElementById("fat-search-keyword");
//      $("#link-FAT-search").click(function(){
//           if (myInput.value == "Business Administrator") {
//                window.location.href = 'job-profiles/1-credit.html';
//                return false;
//           }
//      });
// });

////////////////////////////// COMPARE COMPONENT - END //////////////////////////////

////////////////////////////// PAGINATION COMPONENT - START //////////////////////////////
$(document).ready(function () {
     if ($('#main-content').hasClass('pagination-page-1')) {
          $('a.show-page-1-content').addClass('selected');
          $('a.show-page-2-content, a.show-page-3-content').removeClass('selected');
     } else if ($('#main-content').hasClass('pagination-page-2')) {
          $('a.show-page-2-content').addClass('selected');
          $('a.show-page-1-content, a.show-page-3-content').removeClass('selected');
     } else if ($('#main-content').hasClass('pagination-page-3')) {
          $('a.show-page-3-content').addClass('selected');
          $('a.show-page-1-content, a.show-page-2-content').removeClass('selected');
     }
});

// $(document).ready(function () {
//      $(".hide-content").click(function(){
//           if ($(this).hasClass('show-page-1-content')) {
//                $('.page-1-content').show();
//                $('.page-2-content, .page-3-content').hide();
//                $(this).parent().find('a').removeClass('selected')
//                $(this).addClass('selected');
//                $('a.pagination__link--previous').data('page-id', 1).hide();
//                $('a.pagination__link--next').data('page-id', 2).show().html(`Next<br><span>2 of 3</span>`);
//           } else if ($(this).hasClass('show-page-2-content')) {
//                $('.page-2-content').show();
//                $('.page-1-content, .page-3-content').hide();
//                $(this).parent().find('a').removeClass('selected')
//                $(this).addClass('selected');
//                $('a.pagination__link--previous').data('page-id', 1).show().html(`Previous<br><span>1 of 3</span>`);
//                $('a.pagination__link--next').data('page-id', 2).show().html(`Next<br><span>3 of 3</span>`);
//           } else if ($(this).hasClass('show-page-3-content')) {
//                $('.page-3-content').show();
//                $('.page-1-content, .page-2-content').hide();
//                $(this).parent().find('a').removeClass('selected')
//                $(this).addClass('selected');
//                $('a.pagination__link--previous').data('page-id', 1).show().html(`Previous<br><span>2 of 3</span>`);
//                $('a.pagination__link--next').data('page-id', 2).hide();
//           }
//      });
// });
////////////////////////////// PAGINATION COMPONENT - END //////////////////////////////


////////////////////////////// SHOW HIDE LIST COMPONENT - START //////////////////////////////
$(document).ready(function () {
     $('.default-hidden').hide();
     $('a.showmore').on('click',function(e) {
          e.preventDefault();
          $('.default-hidden').toggle();
     });
});


////////////////////////////// SHOW HIDE LIST COMPONENT - END //////////////////////////////
