var csv = "";
var next = true;
var i = 0;

var all = $('[id^=objectItem]');
var builder = $(all[0]).find('div.objectsItemActivityOwner:contains("Генподрядчик")').find("a").text();
var contact = $(all[0]).find('div.objectsItemInfoAddress:contains("Контакты генподрядчика")').find("p").text();
//var email = $(all[0]).find('div.objectsItemActivityOwner:contains("Генподрядчик")').find("a").attr('href');
var title = $(all[0]).find('div.objectsItemHeader').find("a").text();
var addr = $(all[0]).find('div.objectsItemInfoAddress:contains("Адрес объекта")').find("p").text();

csv += '"' + builder.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '";';
csv += '"' + contact.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '";';
//csv += '"' + email.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
csv += '"' + title.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'');
csv += ', ' + addr.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'').replace(/\s+/g,' ') + '"\n';

for (index = 1; index < all.length; index++) {
	builder = $(all[index]).find('div.objectsItemActivityOwner:contains("Генподрядчик")').find("a").text();
	contact = $(all[index]).find('div.objectsItemInfoAddress:contains("Контакты генподрядчика")').find("p").text();
	//email = $(all[index]).find('div.objectsItemActivityOwner:contains("Генподрядчик")').find("a").attr('href');
	title = $(all[index]).find('div.objectsItemHeader').find("a").text();
	addr = $(all[index]).find('div.objectsItemInfoAddress:contains("Адрес объекта")').find("p").text();

	csv += '"' + builder.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '";';
	csv += '"' + contact.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '";';
	//csv += '"' + email.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
	csv += '"' + title.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'');
	csv += ', ' + addr.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'').replace(/\s+/g,' ') + '"\n';
}

var date = new Date();
var curr_date = date.getDate();
var curr_month = date.getMonth() + 1;
var curr_year = date.getFullYear();
var str_date = curr_year + ("0" + curr_month).slice(-2) + ("0" + curr_date).slice(-2);

var searchParams = new URLSearchParams(window.location.search);
var page = searchParams.get('page');
if (page < 2) {	page = '001'; }
else { page = ('00' + page).slice(-3); }

var item = localStorage.csv = csv;
var ary = localStorage.getItem( "csv" );
var csvData = new Blob([ary], {type: 'text/csv;charset=utf-8;'});

var link = document.createElement('a');
link.href = window.URL.createObjectURL(csvData);
link.setAttribute('download', str_date + '-page' + page + '.csv');
document.body.appendChild(link);    
link.click();
document.body.removeChild(link);    

$('li.next > a').click();
