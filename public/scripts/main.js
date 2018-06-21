'use strict';

var body = document.body;
var html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

document.getElementById('sidebar').style.height = height + 'px';