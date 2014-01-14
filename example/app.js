// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// open a single window
var bt = require('com.bluetooth.xp');
var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	layout : 'vertical'
});
var btn = Ti.UI.createButton({
	title : "Connect"
});
var listen = Ti.UI.createButton({
	title : "discover"
});
var getResult = Ti.UI.createButton({title:'results'});
btn.addEventListener('click', function() {
	bt.run();
});
var data = [];
listen.addEventListener('click', function(e) {
	bt.discovery();
	data = [];
	tbl.setData([]);
});
getResult.addEventListener('click',function(e){
	alert(JSON.stringify(data));
});
bt.getResult(function(e) {
	Ti.API.info("Outside =" + e.resultString);
	data.push(e.resultString);
	var row = Ti.UI.createTableViewRow({
		layout: 'vertical',
		id : e.resultString.address,
		className: 'devices'
	});
	var lblName = Ti.UI.createLabel({text: e.resultString.name});
	var lblAddress = Ti.UI.createLabel({text: e.resultString.address});
	row.add(lblName);
	row.add(lblAddress);
	tbl.appendRow(row);
});
var tbl = Ti.UI.createTableView({
	data: [],
	height: '400px',
	width:'100%'
});

win.add(btn);
win.add(listen);
win.add(getResult);
win.add(tbl);
win.open(); 