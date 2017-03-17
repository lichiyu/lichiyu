var myApp=angular.module("myApp",["moviecatJsonpApp","ngRoute"]);
//地址栏路由
myApp.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/carousel",{
		controller:"carouselController",//推荐
		templateUrl:"carousel.html"
	}).when("/rankinglist",{
		controller:"rankinglistController",//排行榜
		templateUrl:"rankinglist.html"
	}).when("/rankinglist/:id",{
		controller:"categorylistController",//排行榜内容
		templateUrl:"categorylist.html"
	}).when("/songplay/:song",{
		controller:"songController",//歌曲内容
		templateUrl:"song.html"
	}).when("/search",{
		controller:"searchController",//搜索
		templateUrl:"search.html"
	}).when("/singer",{
		controller:"singerController",//歌手分类
		templateUrl:"singer.html"
	}).when("/singer/:all",{
		controller:"singerRankingController",//歌手100
		templateUrl:"singerRanking.html"
	}).when("/singer/:all/:maid",{
		controller:"singerDetailedController",//歌手详情、、底部添加
		templateUrl:"singerDetailed.html"
	}).when("/carousel/:npem",{
		controller:"hotlistController",//热门榜单
		templateUrl:"hotlist.html"
	}).otherwise({
		redirectTo:"/carousel",//默认设置
	})
}]);
//主页  推荐
myApp.controller("carouselController",["$scope","jsonpService","$http","$interval","$location",function($scope,jsonpService,$http,$interval,$location){
	$scope.ngIf=true;
	jsonpService.jsonp("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=938407465&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1487567432353",{jsonpCallback:""},function(data){
		$scope.data=data.data;
		console.log($scope.data);
		$scope.ngIf=false;
		$scope.$apply();
	});
	$scope.$on('$destroy',function(){
	   $interval.cancel(silb);
	})
//	轮播图
	
	var banner=document.getElementById("banner");
	var bannerUl=document.getElementById("banner_ul");
	var dotsSpan=document.getElementsByClassName("ui_dots")[0].getElementsByTagName("span");
		var bx=0;
		var le=0;
		var sd=0;
		var page=0;
		var bs;
		var silb;
		banner.addEventListener("touchstart",function(e){
			sd=0;
			banner_ul.style.transition="all 0s";
			$interval.cancel(silb);
			clearTimeout(bs);
			bx=e.changedTouches[0].clientX;
			
		});
		banner.addEventListener("touchmove",function(e){
			sd=e.changedTouches[0].clientX-bx;
			banner_ul.style.transform="translateX("+-((page*banner.offsetWidth)+-sd)+"px)";
			
		});
		banner.addEventListener("touchend",function(e){
			banner_ul.style.transition="all 1s";
			if(sd>100&&page>-1){
				page--;
			}else if(sd<-100&&page<5){
				page++;
			}
			banner_ul.style.transform="translateX("+-(page*banner.offsetWidth)+"px)";
			for(var i=0;i<dotsSpan.length;i++){
				dotsSpan[i].className="";
			}
			if(page==5){
				page=0;
				dotsSpan[page].className="ui_active";
			}else if(page==-1){
				page=4;
				dotsSpan[page].className="ui_active";
				setTimeout(function(){
					banner_ul.style.transition="all 0s";
					banner_ul.style.transform="translateX("+-(page*banner.offsetWidth)+"px)";
				},1000)
			}else{
				banner_ul.style.transition="all 1s";
				dotsSpan[page].className="ui_active";
			}
			lunbo();
		});
	lunbo();
	function lunbo(){
		$interval.cancel(silb);
		silb= $interval(function(){
			for(var i=0;i<dotsSpan.length;i++){
				dotsSpan[i].className="";
			}
			page++;
			banner_ul.style.transition="all 1s";
			banner_ul.style.transform="translateX("+-(page*banner.offsetWidth)+"px)";
			if(page==5){
				dotsSpan[0].className="ui_active";
			}else{
				dotsSpan[page].className="ui_active";
			}
			if(page==5){
				setTimeout(function(){
					page=0;
					banner_ul.style.transition="all 0s";
					banner_ul.style.transform="translateX(0px)";
					dotsSpan[page].className="ui_active";
				},1000)
			}else{
				banner_ul.style.transition="all 1s";
			}
		},3000)
	}
	document.getElementById("banner_l").style.left=-banner.offsetWidth+"px";
	document.getElementById("banner_r").style.right=-banner.offsetWidth+"px";
	//轮播图结束
}]);


//排行榜
myApp.controller("rankinglistController",["$scope","jsonpService","$http","$interval",function($scope,jsonpService,$http,$interval){
	$scope.ngIf=true;
	jsonpService.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp",{jsonpCallback:""},function(data){
		$scope.data=data.data;
		console.log($scope.data);
		$scope.ngIf=false;
		$scope.$apply();
	});
}]);

//排行榜内容
myApp.controller("categorylistController",["$scope","jsonpService","$http","$interval","$routeParams",function($scope,jsonpService,$http,$interval,$routeParams){
	$scope.ngIf=true;
	$scope.id=$routeParams.id;
	jsonpService.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?format=json&topid="+$routeParams.id,{jsonpCallback:""},function(data){
		$scope.data=data;
		console.log($scope.data);
		$scope.ngIf=false;
		$scope.$apply();
	});
}]);

//歌曲内容
myApp.controller("songController",["$scope","jsonpService","$http","$interval","$routeParams","$sce",function($scope,jsonpService,$http,$interval,$routeParams,$sce){
	$scope.trustSrc = function(url){
		console.log(url)
		return $sce.trustAsResourceUrl(url);
	}
	$scope.ngIf=true;
	jsonpService.jsonp("http://i.y.qq.com/v8/fcg-bin/fcg_get_song_detail.fcg?songid="+$routeParams.song,{jsonpCallback:"jsonp"},function(data){
		$scope.ngIf=false;
		$scope.data=data;
		$scope.daurl="http://ws.stream.qqmusic.qq.com/"+data.data.songinfo.songid+".m4a?fromtag=38";
		console.log($scope.daurl)
		console.log($scope.data);
		$scope.lyrics=$scope.data.data.info[$scope.data.data.info.length-1].content.value.split('\n');
		var it=0;
		var locetex=[];
		for(var i=0;i<$scope.lyrics.length;i++){
			if($scope.lyrics[i].split(']')[1].length>0){
				locetex[it]=$scope.lyrics[i].split(']')[1];
				it++;
			}
		}
		$scope.locetex=locetex;
		$scope.$apply();
		var videoId=document.getElementById("videoId");
		var lyricTxt=document.getElementById("lyric_txt");
		videoId.ontimeupdate=function(){
//			console.log(Math.ceil(videoId.currentTime)/Math.ceil(videoId.duration))
//			console.log(lyricTxt.offsetHeight)
			lyricTxt.style.transition="all .5s linear";
			lyricTxt.style.transform="translateY("+-(lyricTxt.offsetHeight*(Math.ceil(videoId.currentTime)/Math.ceil(videoId.duration)))+"px)";
		}
		$scope.iconPlay=function(){ 
	        if (!videoId.paused) {
	            videoId.pause();
	            videoId.paused = true;
	            document.getElementById("playP").style.backgroundPosition="0 -180px"
	        }else{
	            videoId.play();
	            videoId.paused = false;
	            document.getElementById("playP").style.backgroundPosition="0 -150px"
	        }      
	    };
	});
}]);

//搜索
myApp.controller("searchController",["$scope","jsonpService","$http","$interval","$routeParams",function($scope,jsonpService,$http,$interval,$routeParams){
	$scope.ngIf=true;
	jsonpService.jsonp("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?jsonpCallback=hotSearch",{jsonpCallback:"jsonp"},function(data){
		console.log(data)
		$scope.dbg=data
		$scope.dp=data.data.hotkey;
		$scope.ngIf=false;
		$scope.$apply();
	});
	$scope.midfun=function(e){
		$scope.mid=e;
		$scope.sear($scope.mid);
		$scope.sehInpif=true;
	}
	$scope.resultif=false;
	$scope.sehInpif=false;
	$scope.ngif=false;
	$scope.sear=function(id){
		console.log(id);
		jsonpService.jsonp("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?perpage=20&catZhida=1&w="+id,{jsonpCallback:""},function(data){
			$scope.data=data;
			console.log($scope.data);
			$scope.ngif=true;
			$scope.resultif=true;
			if(data.data.zhida.singername==undefined){
				$scope.ngif=false;
			}
			$scope.$apply();
		});
	}
	$scope.sehInp=function(){
		$scope.sehInpif=true;
	}
	$scope.cancelIf=function(){
		$scope.mid="";
		$scope.sehInpif=!$scope.sehInpif;
		$scope.resultif=false;
	}
}]);

//歌手
myApp.controller("singerController",["$scope","jsonpService","$http","$interval","$routeParams",function($scope,jsonpService,$http,$interval,$routeParams){
	$scope.lists=[
	{"all":"all_all_all",name:"全部"},
	{"all":"cn_man_all",name:"华语男"},
	{"all":"cn_woman_all",name:"华语女"},
	{"all":"cn_team_all",name:"华语组合"},
	{"all":"k_man_all",name:"韩国男"},
	{"all":"k_woman_all",name:"韩国女"},
	{"all":"k_team_all",name:"韩国组合"},
	{"all":"j_man_all",name:"日本男"},
	{"all":"j_woman_all",name:"日本女"},
	{"all":"j_team_all",name:"日本组合"},
	{"all":"eu_man_all",name:"日本组合"},
	{"all":"eu_woman_all",name:"欧美女"},
	{"all":"eu_team_all",name:"欧美组合"},
	{"all":"c_orchestra_all",name:"乐团"},
	{"all":"c_performer_all",name:"演奏家"},
	{"all":"c_composer_all",name:"作曲家"},
	{"all":"c_cantor_all",name:"指挥家"},
	{"all":"other_other_all",name:"其他"},
	];
	$scope.ngIf=false;
}]);

//歌手100
myApp.controller("singerRankingController",["$scope","jsonpService","$http","$interval","$routeParams",function($scope,jsonpService,$http,$interval,$routeParams){
	$scope.all=$routeParams.all
	console.log($routeParams.all);
	$scope.ngIf=true;
	jsonpService.jsonp("https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&pagesize=100&pagenum=1&format=jsonp&key="+$routeParams.all,{jsonpCallback:"jsonp"},function(data){
		$scope.data=data;
		console.log($scope.data);
		$scope.ngIf=false;
		$scope.$apply();
	});
	
}]);

//歌手详情
myApp.controller("singerDetailedController",["$scope","jsonpService","$http","$interval","$routeParams","$window","$timeout",function($scope,jsonpService,$http,$interval,$routeParams,$window,$timeout){
	console.log($routeParams.maid);
	$scope.$on("$destroy", function() {
		DetailedJsp=null;		//清除配置,不然scroll会重复请求
	})
	$scope.nnm=30;
	$scope.ngIf=true;
	DetailedJsp();
	var detailed_bd=document.getElementById("detailed_bd");
	$scope.hiaaIf=true;
	function DetailedJsp(){
		jsonpService.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?order=listen&singermid="+$routeParams.maid+"&num="+$scope.nnm,{jsonpCallback:"jsonp"},function(data){
			$scope.ngIf=false;
			$scope.data=data;
			console.log($scope.data);
			$scope.nup=0;
			$scope.$apply();
			var tota=0;
			var oppp=0;
			$window.onscroll=function(){
				if(document.body.scrollTop+document.body.offsetHeight>detailed_bd.offsetHeight-50){
					if($scope.nnm<$scope.data.data.total&&tota==0){
						tota=9;
							$scope.nnm+=30;
							DetailedJsp();
						$scope.hiaaIf=true;
						$timeout(function(){
							tota=0;
						},500)
					}else if($scope.nnm<$scope.data.data.total&&tota==9){
						$scope.hiaaIf=true;
						$scope.hintIf=false;
					}else{
						$scope.hiaaIf=false;
						$scope.hintIf=true;
						console.log($scope.nnm+"对比"+$scope.data.data.total);
					}
				}
			}
		});
	}
	
	
	
	
}]);

//热门歌单hotlist
myApp.controller("hotlistController",["$scope","jsonpService","$http","$interval","$routeParams",function($scope,jsonpService,$http,$interval,$routeParams){
	$scope.ngIf=true;
	console.log($routeParams.npem)
	jsonpService.jsonp("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?platform=h5&new_format=1&pic=500&type=1&disstid="+$routeParams.npem,{jsonpCallback:"jsonp"},function(data){
		$scope.da=data.cdlist[0].songlist;
		$scope.data=data;
		$scope.songids=data.cdlist[0].songids.split(',');
		console.log($scope.songids)
		console.log($scope.da);
		console.log($scope.data);
		$scope.ngIf=false;
		$scope.$apply();
	});
	
}]);









//热门歌单
//https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?platform=h5&new_format=1&pic=500&disstid=2043041547&type=1



//https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&disstid=2040362185&type=1&json=1&utf8=1&onlysong=0&nosign=1&_=1487822445633&jsonpCallback=taogeDataCallback
//https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&disstid=2043041547&type=1&json=1&utf8=1&onlysong=0&nosign=1&_=1487822423004&jsonpCallback=taogeDataCallback








//https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?


//https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?order=listen&num=30&singermid=002J4UUk29y8BY

//channel引导=singer歌手
//&key=cn_man_all
//https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=cn_man_all&pagesize=100&pagenum=1&jsonpCallback=GetSingerListCallback&format=jsonp
//https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=cn_man_all&pagesize=100&pagenum=1&g_tk=5381&jsonpCallback=GetSingerListCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0








//开始搜索
//myApp.controller("startsearchController",["$scope","jsonpService","$http","$interval","$routeParams",function($scope,jsonpService,$http,$interval,$routeParams){
//	jsonpService.jsonp("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?w=%E7%A8%BB%E8%8A%B1%E9%A6%99&perpage=20&jsonpCallback=jsonp4"+$routeParams.na,{jsonpCallback:""},function(data){
//		$scope.data=data;
//		console.log($scope.data);
//		$scope.$apply();
//	});
//}]);






//https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=938407465&w=%E7%A8%BB%E8%8A%B1%E9%A6%99&perpage=20














//
//myApp.controller("songController",["$scope","jsonpService","$http","$interval","$routeParams","$sce",function($scope,jsonpService,$http,$interval,$routeParams,$sce){
//	$scope.trustSrc = function(url){
//		console.log(url)
//		return $sce.trustAsResourceUrl(url);
//	}
//	jsonpService.jsonp("http://i.y.qq.com/v8/fcg-bin/fcg_get_song_detail.fcg?songid="+$routeParams.song,{jsonpCallback:"jsonp"},function(data){
//		$scope.data=data;
//		console.log($scope.data);
//		funh($scope.data.data.songinfo.albummid,$scope.data.data.songinfo.songid)
//		$scope.$apply();
//		
//	});
//	funh=function(e,f){
//		jsonpService.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&albummid="+e,{jsonpCallback:"jsonp"},function(data){
//			console.log(data)
//			$scope.mid=data.mid;
//			$scope.$apply();
//			fundimg(f,data.data.mid)
//		});
//	}
//	fundimg=function(a,b){
//		console.log(b)
//		jsonpService.jsonp("https://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg?json=3&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq&needNewCode=0&guid="+b,{jsonpCallback:"jsonp"},function(data){
//				console.log(data)
//				console.log(data.key)
//				$scope.$apply();
//				$scope.daurl="http://dl.stream.qqmusic.qq.com/C400"+b+".m4a?fromtag=38&vkey="+data.key+"&guid="+a;
//				console.log($scope.daurl)
//			});
//	}
//	
//	
//}]);
//http://thirdparty.gtimg.com/C40000490m3j0Bc6Xy.m4a?vkey=7C9FBDCD1873057BE9C23DC13E71BE5A17F7452325E3C00D01C9720D397348AE1F7459E3B111BD4404D94FE7D9C5496C036AD7D645DF0334&guid=2750983350&uin=0&fromtag=30
//http://dl.stream.qqmusic.qq.com/C200003eIfnb2U2var.m4a?vkey=27A3DC93478A957FF995617D63146A557D143BC4DEBB72808CCA587A69C30777A0F646298FA252D3C19AE7AA




//http://dl.stream.qqmusic.qq.com/C400001RVEND30IZvY.m4a?fromtag=38&vkey=B24B41BDC1275B03E8FEEF6ED2D01EEFDBE8C828B2C0519126E836D5FE7D308A4AD623609B9E008A0972BD0A28B87FD92D23ED7014B636A6&guid=2750983350
//http://dl.stream.qqmusic.qq.com/C400003RMaRI1iFoYd.m4a?vkey=CFABED2A29106DF2B6ACAC4358E8A66046948EE9170A4B775BFEF2BE739C6FD2A67F74F1A55F52ED449456D078F70A0DAD45E7176C3F0BFB&uin=0&fromtag=30




//https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1487733838918&jsonpCallback=toplistDataCallback
//https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=26&_=1487733859554&jsonpCallback=toplistDataCallback
