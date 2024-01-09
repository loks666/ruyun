$(function() {
	// ========== header ==========
	$(window).on("scroll", function() {
		if($(document).scrollTop() > 60) {
			$("header").css({
				"transition": ".5s ease-out",
				"-webkit-box-shadow": "0 0 9px rgba(0, 0, 0, .2)",
				"-moz-box-shadow": "0 0 9px rgba(0, 0, 0, .2)",
				"box-shadow": "0 0 9px rgba(0, 0, 0, .2)",
				"background": "rgba(36, 42, 55, 1)",
				"border-bottom": "1px solid rgba(255, 255, 255, 0)"
			})
		} else {
			$("header").css({
				"transition": ".5s ease-out",
				"-webkit-box-shadow": "0 0 9px rgba(0, 0, 0, 0)",
				"-moz-box-shadow": "0 0 9px rgba(0, 0, 0, 0)",
				"box-shadow": "0 0 9px rgba(0, 0, 0, 0)",
				"background": "rgba(36, 42, 55, 0)",
				"border-bottom": "1px solid rgba(255, 255, 255, .2)"
			})
		}
	});
	// ========== sidenav ==========
  $(".sidenav-control-left").sideNav({
    edge: "left",
    closeOnClick: false,
  });
  $(".sidenav-control-right").sideNav({
    edge: "right",
    closeOnClick: false,
  });
  $(document).on("click", ".collapsible-header",
  function(a) {
    $(this).parent().siblings().find("span i").removeClass("fa-chevron-up");
    $(this).find("span i").toggleClass("fa-chevron-up")
  });
	// ========== slide-show ==========
	$(".slide-show").owlCarousel({
		items: 1,
		navigation: true,
		slideSpeed: 1000,
		dots: true, 
		paginationSpeed: 400,
		singleItem: true,
		autoplay: true,
		loop: true
	});
	// ========== qr-code ==========
	var qrcode;
	jQuery(".social-icon ul li").hover(function(){
		var curItem = jQuery(this);
		qrcode = setTimeout(function(){//延时触发
			curItem.find(".social-icon-img").slideDown('fast');
			qrcode = null;
		});
	}, function(){
		if(qrcode!=null)clearTimeout(qr);
		jQuery(this).find(".social-icon-img").slideUp('fast');
	});
  // ========== gotoTop ==========
  $("#back-top").hide();  //首先将gotoTop隐藏
	$(window).scroll(function() {
    var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
    var documentheight = parseFloat($(document).height());
		if (documentheight - totalheight <= 1000){ //当滚动条距底部<400像素时显示，否则消失
      $("#back-top").fadeIn(1500);
    } else {
      $("#back-top").fadeOut(1500);
    }
  });
  $("#back-top").click(function() { //当点击跳转链接后，回到页面顶部位置
    $('body,html').animate({
      scrollTop: 0
    },
    1000, "easeInOutQuad");
    return false;
  });
	// ========== livechat-girl ==========
  setInterval(function() {
    if ($(".animated-circles").hasClass("animated")) {
      $(".animated-circles").removeClass("animated");
    } else {
      $(".animated-circles").addClass('animated');
    }
  },
  3000);
  var wait = setInterval(function() {
    $(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
    clearInterval(wait);
  },
  4500);
  $(".livechat-girl").hover(function() {
    clearInterval(wait);
    $(".livechat-hint").removeClass("hide_hint").addClass("show_hint");
  },
  function() {
    $(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
  }).click(function() {
    tencentqq();
  });
});
// ========== tencentqq ==========
function tencentqq() {
  if (isMobile) {
    window.location.href = 'tencent://message/?uin=907850562&Site=在线咨询&Menu=yes';
  } else {
    var oWidth = 780,
    oHeight = 680,
    top = (jQuery(window).height() / 2) - (oHeight / 2),
    left = (jQuery(window).width() / 2) - (oWidth / 2);
    window.open('tencent://message/?uin=907850562&Site=在线咨询&Menu=yes', '', 'width=' + oWidth + ',height=' + oHeight + ',scrollbars=yes,top=' + top + ',left=' + left + ',resizable=yes');
  }
}
// Copyright (C) 2019-2099 isicheng.com
document.onkeydown=function(){
	var e = window.event||arguments[0];
	if(e.keyCode==123){
		alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
		  return false;
	}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
		alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
		  return false;
	}else if((e.ctrlKey)&&(e.keyCode==85)){
		alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
		  return false;
	}else if((e.ctrlKey)&&(e.keyCode==83)){
		alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
		  return false;
	}
}
document.oncontextmenu=function(){
  alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
    return false;
}
function iEsc() {
	return false;
}
function iRec(){
	return true;
}
function DisableKeys() {
	if(event.ctrlKey || event.shiftKey || event.altKey||event.keyCode == 123) {
		window.event.returnValue=false;
		iEsc();
	}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if(typeof document.onselectstart !="undefined") {
	document.onselectstart=iEsc;
}
else {
	document.onmousedown=iEsc;
	document.onmouseup=iRec;
}
function DisableRightClick(data) {
	if(window.Event){
		if (data.which == 2 || data.which == 3) {
			iEsc();
		}
	}
	else {
		if(event.button == 2 || event.button == 3) {
			event.cancelBubble = true
			event.returnValue = false;
			iEsc();
		}
	}
}