Q = [
  '指定一位異性對他深情款款的告白'
  '自己脫去一件衣服並指定一位異性穿上'
  '指定一位異性幫你脫去一件衣服'
  '指定一位異性公主抱10秒'
  'KISS一位異性的臉頰'
  'KISS一位異性的肚臍'
  '指定一位異性互吸手指頭10秒'
  '指定一位異性在你耳邊吹氣10秒'
  '指定一位異性和你一起吃掉一個零食'
  '找兩位異性用拖鞋各打一邊腳掌'
  '指定一位異性熊抱10秒'
  '學『變態假面』內褲套頭，並做出標準POSE'
  '找一位異性火車便當姿勢繞場一圈'
  '在一位異性身上翻滾10秒'
  '用屁股寫出你最喜歡的人的名字'
  '仰臥起坐吃零食三次，壓腳的異性咬著零食'
  '指定一位異背著繞場一圈'
  '指定兩位異性舔手臂從手掌到肩膀'
  '指定一位異性當鋼管並對他跳豔舞10秒'
  '性感的起立蹲下重複2次'
  '與一位異性十指交扣並深情款款看著10秒'
  '扶立挺身吃零食三次，躺著的異性咬著零食'
  '指定一位異性喝交杯酒'
  '拉開褲頭，指定一位異性幫你倒入冰塊'
  '拉開上衣，指定一位異性幫你倒入冰塊'
  '幫一位異性拉下拉鍊，限用嘴巴'
  'Funnel喝酒一次'
  '指定一位異性拿皮帶打你屁股三次'
  '對大家擠胸5秒，然後問說我帥/美嗎？'
  '指定一位異性在棉被裡交換一件衣物（限時30秒）'
  '指定一位異性趴在胯下然後跳江南style 10秒'
  '指定一位異性協助你老漢推車爬一圈'
  '指定一位異性把酒瓶/杯放在下面重點餵你喝酒'
  '指定一位異性互相甜光對方身上的三個奶油'
  '學『蠟筆小新』跳高叉舞10次'
  '背對大家露出1/2屁股並扭屁股大喊：大象屁股圓又圓'
  '內褲外穿舉起雙手大喊：我是Superman我要拯救地球'
  '指定兩位異性親你兩側的奶頭/大腿'
  '把頭埋在指定的一位異性胸口轉動10秒'
  '指定一位異性從背後熊抱餵你喝一杯酒'
  '浴巾內只穿內褲並打開給指定的異性看10秒'
  '指定一位異性臉對臉夾住氣球繞一圈'
  '把指定的異性壓到牆角並深情款款的說：我愛你'
  '指定兩位異性一起舔你的耳朵'
  '指定兩位異性一起舔你的脖子'
  '指定一位異性在棉被裡幫你脫掉內褲，並拿給大家看'
  '指定一位異性互相摩鼻子10秒'
  '把屁股翹高，並指定兩位異性每邊用手各打一下'
  '對指定的異性用淫蕩的表情吸舔手指頭10秒'
  '指定一位異性舌頭碰舌頭10秒'
  '把指定的異性壓到牆角並深情的說：我喜歡你的叫聲'
  '用屁股磨蹭指定一位異性的重點部位10秒'
  '指定兩位異性分別彈你兩邊耳朵各1下'
  '指定一位異性躺在你大腿上喂他喝酒'
  '指定一位異性火車便當抱10秒'
  '指定一位異性在他耳邊發出舒服的叫聲3次'
  '坐著讓指定的異性坐爆大腿上的氣球1次'
]

Array.prototype.rand = () ->
    num = Math.floor(Math.random() * this.length)
    return this.splice(num,1)[0]

QTemp = []
QTemp.push Q.rand() for i in [1..Q.length]
Q = QTemp

Q.sort () -> 0.5 - Math.random()

$ ->
  win = $(window)
  body = $('body')
  todo = $('todo')
  keyin = $('#keyin')
  report = $('#report td')
  
  body.on 'touchstart, mousedown, keydown', (e) ->
    e.preventDefault() #e.keyCode is 13
    if $(body).hasClass 'report'
      $('.num',keyin).text '?'
      $(body).removeClass 'report'
      location.reload() if Q.length < 1
    else
      dost = Q.rand()
      if dost
        $(report).text(dost)
      else
        $(report).text('ERROR')
      $(body).addClass 'report'