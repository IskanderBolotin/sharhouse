"use strict";

$(document).ready(function () {
  var supportsTouch = ('ontouchstart' in document.documentElement);

  if (supportsTouch || $(window).outerWidth() <= 1024) {
    $("body").on("click touchend", "[data-catalog-point]", function (e) {
      e.preventDefault();
      var this_id = $(this).attr("data-catalog-point");
      $(this).parents("[data-catalog-main]").find("[data-catalog-point]").removeClass("__active");
      $(this).addClass("__active");
      $(this).parents("[data-catalog-main]").find(".catalogDropdown__main").addClass("__active");
      $(this).parents("[data-catalog-main]").find("[data-catalog-dd]").each(function () {
        if ($(this).attr("data-catalog-dd") == this_id) {
          $(this).addClass("__active");
        } else {
          $(this).removeClass("__active");
        }
      });
    });
    $("body").on("click", "[data-catpoint]", function () {
      if (!$(this).hasClass("__active")) {
        $(this).addClass("__active");
        var max_deep = 0;
        var menu_width = $(this).find(".catalogPoint__dm").outerWidth();
        var pos_left = $(this).find(".catalogPoint__dm").offset().left;
        $(this).find("[data-drop-list]").each(function () {
          if (+$(this).attr("data-drop-list") > max_deep) {
            max_deep = +$(this).attr("data-drop-list");
          }
        });
        var max_width = max_deep * menu_width;
        var all_width = pos_left + max_width;

        if (all_width > $("body").outerWidth()) {
          $(this).find(".catalogPoint__dm").addClass("catalogPoint__dm-left");
        } else {
          $(this).find(".catalogPoint__dm").removeClass("catalogPoint__dm-left");
        }
      } else {
        $(this).removeClass("__active");
      }
    });
  }

  if (!supportsTouch || $(window).outerWidth() > 1024) {
    $("body").on("mouseenter", "[data-catpoint]", function () {
      $(this).addClass("__active");
      var max_deep = 0;
      var menu_width = $(this).find(".catalogPoint__dm").outerWidth();
      var pos_left = $(this).find(".catalogPoint__dm").offset().left;
      $(this).find("[data-drop-list]").each(function () {
        if (+$(this).attr("data-drop-list") > max_deep) {
          max_deep = +$(this).attr("data-drop-list");
        }
      });
      var max_width = max_deep * menu_width;
      var all_width = pos_left + max_width;

      if (all_width > $("body").outerWidth()) {
        $(this).find(".catalogPoint__dm").addClass("catalogPoint__dm-left");
      } else {
        $(this).find(".catalogPoint__dm").removeClass("catalogPoint__dm-left");
      }
    });
    $("body").on("mouseleave", "[data-catpoint]", function () {
      $(this).removeClass("__active");
    });
  }

  $("body").on("mouseenter", "[data-drop-point]", function () {
    $(this).closest("[data-drop-list]").find("[data-drop-rel]").removeClass("__active");
    $(this).closest("[data-drop-list]").find("[data-drop-point]").removeClass("__active");
    $(this).addClass("__active");
    $(this).closest("[data-drop-rel]").addClass("__active");
  });
  $("body").on("mouseleave", "[data-drop-rel]", function () {
    $(this).find("[data-drop-rel]").removeClass("__active");
    $(this).find("[data-drop-point]").removeClass("__active");
    $(this).removeClass("__active");
  });
  $("body").on("focus", "[data-search-input]", function () {
    $(this).parents("[data-search-component]").addClass("__active");
  });
  $("body").on("blur", "[data-search-input]", function () {
    if ($(this).parents("[data-search-component]").find("[data-search-input]").val() == "") {
      $(this).parents("[data-search-component]").removeClass("__active");
    }
  });
  $("body").on("click", "[data-search-clear]", function () {
    $(this).parents("[data-search-component]").find("[data-search-input]").val("");
    $(this).parents("[data-search-component]").find("[data-search-input]").trigger("blur");
  });
  $("body").on("click", "[data-catalog-btn]", function () {
    if ($(this).hasClass("__active")) {
      $(this).removeClass("__active");
      $("body").removeClass("overflow-hidden");
      $(this).parents("[data-catalog-component]").removeClass("__active");
      $(this).parents("[data-catalog-component]").find(".catalogDropdown__main").removeClass("__active");
    } else {
      $(this).addClass("__active");
      $("body").addClass("overflow-hidden");
      $(this).parents("[data-catalog-component]").addClass("__active");
    }
  });
  $("body").on("click", "[data-catlog-back]", function () {
    $(this).parents("[data-catalog-component]").find(".catalogDropdown__main").removeClass("__active");
  });
  $("body").on("click", "[data-catalo-dd-close]", function () {
    $(this).parents("[data-catalog-component]").find("[data-catalog-btn]").removeClass("__active");
    $("body").removeClass("overflow-hidden");
    $(this).parents("[data-catalog-component]").removeClass("__active");
    $(this).parents("[data-catalog-component]").find(".catalogDropdown__main").removeClass("__active");
  });
  $("body").on("mouseenter", "[data-catalog-point]", function () {
    var this_id = $(this).attr("data-catalog-point");
    $(this).parents("[data-catalog-main]").find("[data-catalog-point]").removeClass("__active");
    $(this).addClass("__active");
    $(this).parents("[data-catalog-main]").find("[data-catalog-dd]").each(function () {
      if ($(this).attr("data-catalog-dd") == this_id) {
        $(this).addClass("__active");
      } else {
        $(this).removeClass("__active");
      }
    });
  });
  $("body").on("click", "[data-search-mobile-open]", function () {
    if (!$(this).hasClass("__active")) {
      $(this).addClass("__active");
      $(this).parents("[data-mobile-control]").find("[data-search-mobile]").addClass("__active");
    } else {
      $(this).removeClass("__active");
      $(this).parents("[data-mobile-control]").find("[data-search-mobile]").removeClass("__active");
    }
  });
  $("body").on("click", function (e) {
    if (!e.target.closest("[data-mobile-control]")) {
      $("[data-search-mobile-open]").removeClass("__active");
      $("[data-search-mobile]").removeClass("__active");
    }
  });
});
$(document).ready(function () {
  if ($(window).outerWidth() > 1250) {
    var movingList = $("[data-move-box]").find("[data-move-start]").find("[data-move-item]:eq(1), [data-move-item]:eq(2), [data-move-item]:eq(3)");
    $("[data-move-box]").find("[data-move-end]").append(movingList);
  }

  $(".bannerSlider-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true
  });
});
$(document).ready(function () {
  var arrow = '<svg viewBox="0 0 6 10"><path d="M6 8.8L4.9 10 0 5l4.9-5L6 1.2 2.3 5z"></path></svg>';
  $(".productSlider-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: "<button class='sliderArrow sliderArrow-prev'><span class='sliderArrow__inner'>" + arrow + "</span></button>",
    nextArrow: "<button class='sliderArrow sliderArrow-next'><span class='sliderArrow__inner'>" + arrow + "</span></button>",
    responsive: [{
      breakpoint: 1251,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 661,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
  $("body").on("click", "[data-add-to-basket]", function () {});
});
$(document).ready(function () {
  var arrow = '<svg viewBox="0 0 6 10"><path d="M6 8.8L4.9 10 0 5l4.9-5L6 1.2 2.3 5z"></path></svg>';
  $(".newsBox-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: "<button class='sliderArrow sliderArrow-prev'><span class='sliderArrow__inner'>" + arrow + "</span></button>",
    nextArrow: "<button class='sliderArrow sliderArrow-next'><span class='sliderArrow__inner'>" + arrow + "</span></button>",
    responsive: [{
      breakpoint: 1101,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 701,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $("body").on("click", "[data-modal-open]", function () {
    var this_id = $(this).attr("data-modal-open");

    if (!$(this)[0].hasAttribute("data-add-to-basket") || $(this)[0].hasAttribute("data-add-to-basket") && $(window).outerWidth() <= 576) {
      $("[data-modal]").each(function () {
        if ($(this).attr("data-modal") == this_id) {
          $(this).addClass("__active");
          $(this).find("[data-modal-inner]").addClass("__active");
        } else {
          $(this).removeClass("__active");
          $(this).find("[data-modal-inner]").removeClass("__active");
        }
      });
      $("body").addClass("overflow-hidden");
    }
  });
  $("body").on("click", "[data-modal-cls]", function () {
    $(this).parents("[data-modal]").removeClass("__active");
    $(this).parents("[data-modal]").find("[data-modal-inner]").removeClass("__active");
    $("body").removeClass("overflow-hidden");
  });
  $("body").on("mousedown", "[data-modal]", function (e) {
    if (!e.target.closest("[data-modal-inner]")) {
      $(this).removeClass("__active");
      $(this).find("[data-modal-inner]").removeClass("__active");
      $("body").removeClass("overflow-hidden");
    }

    ;
  });
  $("body").on("click", "[data-scroll-top]", function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 400);
  });
  $("body").on("click", "#open-filter", function (e) {
    $("#collapsed-filter").addClass("__active");
    $("body").addClass("overflow-hidden");
  });
  $("body").on("click", "#open-sort", function (e) {
    $("#mobile-sort").addClass("__active");
    $("body").addClass("overflow-hidden");
  });
  $("body").on("click", "[data-cls-sort]", function (e) {
    $("#mobile-sort").removeClass("__active");
    $("body").removeClass("overflow-hidden");
  });
  $("body").on("click", "[data-cls-filter]", function (e) {
    $("#collapsed-filter").removeClass("__active");
    $("body").removeClass("overflow-hidden");
  });
  $("body").on("click", "[data-toggle-btn]", function (e) {
    if (!$(this).hasClass("__active")) {
      $(this).addClass("__active");
      $(this).parents("[data-toggle-rel]").find("[data-toggle-el]").addClass("__active");
    } else {
      $(this).removeClass("__active");
      $(this).parents("[data-toggle-rel]").find("[data-toggle-el]").removeClass("__active");
    }
  });
  $("body").on("click", "[data-filter-btn]", function (e) {
    if (!$(this).hasClass("__active")) {
      $(this).addClass("__active");
      $(this).parents("[data-filter-component]").addClass("__active");
      $(this).parents("[data-filter-component]").find("[data-filter-dd]").slideDown();
    } else {
      $(this).removeClass("__active");
      $(this).parents("[data-filter-component]").removeClass("__active");
      $(this).parents("[data-filter-component]").find("[data-filter-dd]").slideUp(function () {
        $(this).removeAttr("style");
      });
    }
  });
  $(".customSelect").select2({
    minimumResultsForSearch: -1,
    width: "100%"
  });

  if ($(window).outerWidth() <= 575) {
    var head_h = $(".mainHeader").outerHeight();
    var filter_h = $("#mobile-filter").outerHeight();
    $("#mobile-filter").addClass("__sticky");
    $("#mobile-filter").css("top", head_h + "px");
    $("#mobile-filter").parents(".filterComponent__mobile").css("min-height", filter_h + "px");
    $(window).on("scroll", function (params) {
      if ($("#mobile-filter").hasClass("__sticky")) {
        if ($("#mobile-filter").offset().top <= $("#mobile-filter").parents(".filterComponent__mobile").offset().top) {
          $("#mobile-filter").removeClass("__sticky");
        }
      } else {
        if ($(".mainHeader").offset().top + head_h >= $("#mobile-filter").offset().top) {
          $("#mobile-filter").addClass("__sticky");
        }
      }
    });
  }

  $("[type='tel']").mask("+7(999) 999-9999");
  $("body").on("change", "[data-switch]", function (params) {
    var this_id = $(this).attr("data-switch");
    var area = $(this).attr("data-switch-name");
    $("[data-switch-el]").each(function (params) {
      if ($(this).attr("data-switch-name") == area) {
        if ($(this).attr("data-switch-el") == this_id) {
          $(this).addClass("__active");
        } else {
          $(this).removeClass("__active");
        }
      }
    });
  });
});