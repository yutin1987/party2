<<<<<<< HEAD
var PlayerCtrl;

angular.module('myApp', ['ngCookies']);

PlayerCtrl = function($scope, $cookieStore) {
  $scope.boys = $cookieStore.get('boys') || [];
  $scope.girls = $cookieStore.get('girls') || [];
  $scope.addBoy = function() {
    $scope.boys.push({
      name: $scope.playerName
    });
    $cookieStore.put('boys', $scope.boys);
    return $scope.playerName = '';
  };
  $scope.addGirl = function() {
    $scope.girls.push({
      name: $scope.playerName
    });
    $cookieStore.put('girls', $scope.girls);
    return $scope.playerName = '';
  };
  $scope.delBoy = function() {
    var boys;

    boys = $scope.boys;
    $scope.boys = [];
    angular.forEach(boys, function(boy) {
      if (!boy.check) {
        return $scope.boys.push(boy);
      }
    });
    $cookieStore.put('boys', $scope.boys);
    return $scope.playerName = '';
  };
  return $scope.delGirl = function() {
    var girls;

    girls = $scope.girls;
    $scope.girls = [];
    angular.forEach(girls, function(girl) {
      if (!girl.check) {
        return $scope.girls.push(girl);
      }
    });
    return $cookieStore.put('girls', $scope.girls);
  };
=======
var Q, QTemp, i, _i, _ref;

Q = ['對party中任何一位異性告白（或Andy指定）', '自己脫一件內衣褲or衣服（不可穿回去）', '找任何一位幫你脫去外衣（不可穿回去）', '對party中任何一位異性公主抱10秒（或Andy指定）', 'KISS派對中任何一位異性的臉頰', 'KISS派對中任何一位異性的肚臍', '找任何一位異性互吸手指頭10秒', 'Andy在你的耳邊吹氣10秒', '找一位異性一起合吃掉一個零時', '找兩位異性用拖鞋打腳掌', '熊抱一位異性10秒', '學『變態假面』內褲套頭，並做出標準POSE', '找一位異性火車便當姿勢繞場一圈', '在一位異性身上翻滾10秒', '用屁股寫出你最喜歡的人的名字', '仰臥起坐吃餅乾三次（與異性一起）', '對異性撒嬌直到他願意掏出100元給你', '找一位異背著繞場一圈', '找兩位異性甜手臂從手掌到肩膀', '找位異性當鋼管跳豔舞20秒', '性感的起立蹲下重複3次', '與任何一位異性十指相扣深情款款10秒', '扶立挺身吃餅乾三次（與異性一起）', '與Andy喝交杯酒', '拉開褲子倒入冰塊', '拉開上衣倒入冰塊', 'Funnel喝酒一次', '貼心小服務，幫一位異性按摩肩膀10秒', '找一位異性拿皮帶打你屁股三次', '對大家擠胸5秒，然後問說我帥/美嗎？', '和一位異性在棉被裡交換一件衣物（限時30秒）', '找一位異性趴在胯下跳江南style 10秒', '找一位異性協助老漢推車爬一圈', '找一位異性把酒瓶放在下面餵你酒', '找一位異性互相甜光對方身上的三個刮鬍泡', '學『蠟筆小新』跳高叉舞10次', '背對大家露出1/2屁股，並扭屁股大喊：大象屁股圓又圓', '內褲外穿舉起雙手，大喊我是Superman我要拯救地球', '找兩位異性親你的奶頭or大腿', '在肚臍上畫一顆愛心（由Andy執行）', '把頭埋在另外一位異性的胸口轉動5秒', '找一位異性從背後熊抱餵你喝酒', '用浴巾遮住男脫褲女脫上衣脫好後倒數5秒（穿回去）', '和一位異性臉對臉夾住氣球繞一圈', '畫出你的人魚線/事業線（由Andy執行）', '把Andy壓到牆角，深情款款的KISS臉頰，並說我愛你', '找兩位異性一起甜你的耳朵', '找兩位異性一起甜你的脖子', '找一位異性幫你在棉被裡，脫掉褲子給大家看後再穿回去', '找一位異性互相摩鼻子10秒', '找一位異性被多他扭屁股10秒（要貼到他的前面）', '讓Andy幫你從頭上到一杯水', '貼心小服務，幫一位異性按摩大腿10秒', '和一位異性肚子對肚子夾住氣球繞一圈', '找兩位異性一起彈你耳多2下', '找一位異性躺在他的大腿上讓他餵你喝酒', '找一位異性火車便當抱10秒', '找一位異性幫他的手指頭戴保險套'];

Array.prototype.rand = function() {
  var num;

  num = Math.floor(Math.random() * this.length);
  return this.splice(num, 1)[0];
>>>>>>> parent of 920772e... Update
};

$(function() {
  return $('.navi.navi-player').on('click', function() {
    return $('body').toggleClass('display-player');
  });
});
