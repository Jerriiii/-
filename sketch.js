let img; // 宣告變數來儲存圖片

function preload() {
  img = loadImage("自拍.JPG"); // 載入圖片，替換為你的圖片檔案名稱
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER); // 設定文字水平與垂直置中
  textSize(30); // 設定文字大小
}

function draw() {
  background("#fdf0d5");
  fill("#6c584c"); // 設定文字顏色為深棕色
  textStyle(BOLD); // 設定文字為粗體
  stroke("#6c584c"); // 設定文字邊框顏色
  strokeWeight(1); // 設定文字邊框粗細

  // 設定圖片與文字的座標
  let textX = width / 2 - 150; // 文字的 X 座標，向左偏移更多
  let textY = height / 2; // 文字的 Y 座標，與圖片中心對齊
  let imgX = width / 2 + 150; // 圖片的 X 座標，向右偏移更多
  let imgY = height / 2; // 圖片的 Y 座標

  // 設定第一個相框的座標與大小
  let frameX = width / 2 - 300; // 相框左上角的 X 座標
  let frameY = height / 2 - 175; // 相框左上角的 Y 座標
  let frameWidth = 600; // 相框的寬度
  let frameHeight = 350; // 相框的高度

  // 繪製第一個相框
  noFill(); // 設定相框為透明內部
  stroke("#6c584c"); // 設定相框顏色
  strokeWeight(2); // 設定相框線條粗細
  rect(frameX, frameY, frameWidth, frameHeight); // 繪製矩形相框

  // 設定第二個相框的座標與大小（更大）
  let outerFrameX = width / 2 - 350; // 外框左上角的 X 座標
  let outerFrameY = height / 2 - 225; // 外框左上角的 Y 座標
  let outerFrameWidth = 700; // 外框的寬度
  let outerFrameHeight = 450; // 外框的高度

  // 繪製第二個相框
  stroke("#a98467"); // 設定外框顏色為較淺的棕色
  strokeWeight(4); // 設定外框線條粗細
  rect(outerFrameX, outerFrameY, outerFrameWidth, outerFrameHeight); // 繪製較大的矩形相框

  // 繪製文字
  fill("#6c584c"); // 恢復文字顏色
  text("姓名: 王偲芸\n學號: 413730234\n系級: 教科一A\nmbti: intj\n喜歡吃草莓巧克力", textX, textY);

  // 繪製圖片
  imageMode(CENTER);
  image(img, imgX, imgY, 150, 250); // 指定寬度和高度為 150x250
}
