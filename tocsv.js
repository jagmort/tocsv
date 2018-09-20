var csv = "";
var next = true;
var i = 0;

var all = $('[id^=objectItem]');
var title = $(all[0]).find('div.objectsItemHeader').find("a").text();
var addr = $(all[0]).find('div.objectsItemInfoAddress:contains("Адрес объекта")').find("p").text();
var builder = $(all[0]).find('div.objectsItemActivityOwner:contains("Генподрядчик")').find("a").text();
var contactB = $(all[0]).find('div.objectsItemInfoAddress:contains("Контакты генподрядчика")').find("p").text();
var url = $(all[0]).find('div.objectsItemActivityOwner:contains("Генподрядчик")').find('a').attr('href');
var email = '';
var win = window.open(url, '_blank'); setTimeout(function() {
	email = win.$('div.companyInfoContactEmail').find('a').text();
	win.close();
}, 5000);
var sum = $(all[0]).find('div.objectsItemInfoTotal').find("b").text();
var date = $(all[0]).find('div.objectsItemInfoUpdate').text();

csv += '"' + title.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
csv += '"' + addr.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'').replace(/\s+/g,' ') + '",';
csv += '"' + builder.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
csv += '"' + contactB.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
csv += '"' + email.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
csv += '"' + sum.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
csv += '"' + date.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'').replace(/\s+/g,' ') + '"\n';

for (index = 1; index < all.length; index++) {
	title = $(all[index]).find('div.objectsItemHeader').find("a").text();
	addr = $(all[index]).find('div.objectsItemInfoAddress:contains("Адрес объекта")').find("p").text();
	builder = $(all[index]).find('div.objectsItemActivityOwner:contains("Генподрядчик")').find("a").text();
	contactB = $(all[index]).find('div.objectsItemInfoAddress:contains("Контакты генподрядчика")').find("p").text();
	url = $(all[index]).find('div.objectsItemActivityOwner:contains("Генподрядчик")').find('a').attr('href');
	win = window.open(url, '_blank'); setTimeout(function() {
		email = win.$('div.companyInfoContactEmail').find('a').text();
		win.close();
	}, 5000);
	sum = $(all[index]).find('div.objectsItemInfoTotal').find("b").text();
	date = $(all[index]).find('div.objectsItemInfoUpdate').text();

	csv += '"' + title.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
	csv += '"' + addr.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'').replace(/\s+/g,' ') + '",';
	csv += '"' + builder.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
	csv += '"' + contactB.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
    	csv += '"' + email.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
	csv += '"' + sum.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'') + '",';
	csv += '"' + date.replace(/"/g,'”').replace(/\n/g,' ').replace(/^\s+/g,'').replace(/\s+/g,' ') + '"\n';
}

var date = new Date();
var curr_date = date.getDate();
var curr_month = date.getMonth() + 1;
var curr_year = date.getFullYear();
var str_date = curr_year + "-" + ("0" + curr_month).slice(-2) + "-" + ("0" + curr_date).slice(-2);

var item = localStorage.csv = csv;
var ary = localStorage.getItem( "csv" );
var csvData = new Blob([ary], {type: 'text/csv;charset=utf-8;'});

var link = document.createElement('a');
link.href = window.URL.createObjectURL(csvData);
link.setAttribute('download', location.hostname + "-" + str_date + '.csv');
document.body.appendChild(link);    
link.click();
document.body.removeChild(link);
