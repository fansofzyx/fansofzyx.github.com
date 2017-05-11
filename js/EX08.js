var map = new BMap.Map("myMap"); 
var point = new BMap.Point(120.149476,30.246909);
map.centerAndZoom(point, 15);   
map.enableDragging();
map.enableScrollWheelZoom();
map.addControl(new BMap.ScaleControl());   
var local = new BMap.LocalSearch(map, {
  pageCapacity: 4,
  renderOptions: {
    map: map,
    panel: "results"
  }
});
local.searchNearby("宾馆", "杭州西湖");
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "route"
  }
});
local.setMarkersSetCallback(function(pois){
     for(var i=0;i<pois.length;i++){
         pois[i].marker.addEventListener("click", function(e){
             //do something
            transit.clearResults();
             transit.search("仓前街道海曙路58号杭州师范大学-东南门",this.z.title);
         })  
     }
 });
map.addEventListener("rightclick",function(e)
{
	console.log(e.point.lng+","+e.point.lat)
})
var points = new Array();
var str = new Array();
points[0] = new BMap.Point(120.021982,30.293139); 
str[0]="阿里巴巴商学院";
points[1] = new BMap.Point(120.014252,30.294557); 
str[1]="杭师大篮球场";
points[2] = new BMap.Point(120.016232,30.294802); 
str[2]="博文苑3号楼";
points[3] = new BMap.Point(120.018639,30.295184); 
str[3]="食堂";
points[4] = new BMap.Point(120.017004,30.295402); 
str[4]="超市";
points[5] = new BMap.Point(120.013492,30.295052); 
str[5]="操场";
points[6] = new BMap.Point(120.020391,30.29573); 
str[6]="恕园2号楼";
points[7] = new BMap.Point(120.020292,30.29502); 
str[7]="恕园1号楼";
points[8] = new BMap.Point(120.020121,30.294147); 
str[8]="东南门";
points[9] = new BMap.Point(120.022232,30.298708); 
str[9]="图书馆";
points[10] = new BMap.Point(120.022205,30.29771); 
str[10]="行政楼";
points[11] = new BMap.Point(120.019219,30.296435); 
str[11]="一鸣";
var marker = new Array();
var i=0;
for(i=0;i<=11;i++)
{
	    marker[i] = new BMap.Marker(points[i])
        map.addOverlay(marker[i]);
        marker[i].address=str[i];
        marker[i].addEventListener("click",

function()
{
	var div = document.createElement("div");
	div.style.height="120px";
	div.style.width="250px";
	$(div).css('text-align', 'center');
	var img = document.createElement("img");
	$(img).css({
		'margin-top': '5px',
		'width':'240px',
		'height':'100px'
	});
	img.src='img/school.jpg';
	div.append(img);
	var H6= document.createElement("h6");
	H6.innerHTML=this.address;
	div.append(H6);
	var infoWindow = new BMap.InfoWindow(div); 
	this.openInfoWindow(infoWindow);

}
);
}