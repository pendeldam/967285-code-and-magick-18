'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
//var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, x, y, text) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(text, x, y);
};

var randomBlue = function() {
  return 'hsl(240, 100%, ' + Math.floor(Math.random() * 101) + '%)';
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP * 2, 'Список результатов:');
  ctx.fillStyle = '#000';
  
  var maxTime = getMaxElement(times);
  
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : randomBlue();
    ctx.fillText(times[i].toFixed(), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP + BAR_GAP + FONT_GAP);
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + BAR_HEIGHT + (GAP + FONT_GAP) * 3.5);
    ctx.fillRect(CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + (GAP + FONT_GAP) * 3, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};