const templeData = [  
    {
        "areaid":"tashi",
        "templeName":"三層福安宮",
        "area":"大溪區",
        "activeDate":"113.4.27-113.5.3",
        "activeContent":"慶讚天上聖母壽誕慶典暨宣揚媽祖救濟人社會教化活動",
        'image_url':"assets/temple/大溪-三層福安宮.jpg",
    },
    {
        "areaid":"newhouse",
        "templeName":"財團法人桃園新屋天后宮",
        "area":"新屋區",
        "activeDate":"農曆1130323",
        "activeContent":"媽祖誕辰(祝壽香客來進香)",
        'image_url':"assets/temple/新屋-天后宮.jpg",
    },
    {
        "areaid":"zhongli",
        "templeName":"財團法人中壢仁海宮",
        "area":"中壢區",
        "activeDate":"113.4.26~28(農曆3/18~20)",
        "activeContent":"天上聖母聖誕慶典法會",
        'image_url':"assets/temple/中壢-仁海宮.jpg",
    },
    {
        "areaid":"taoyuan",
        "templeName":"桃園慈護宮",
        "area":"桃園區",
        "activeDate":"1113.5.1 (農曆3/23)",
        "activeContent":"媽祖聖誕活動",
        'image_url':"assets/temple/桃園-慈護宮.jpg",
    },
    {
        "areaid":"taoyuanbig",
        "templeName":"桃園大樹林天后宮",
        "area":"桃園區",
        "activeDate":"113.4.27-5.1(農曆3/23)",
        "activeContent":"媽祖聖誕活動",
        'image_url':"assets/temple/桃園-大樹林天后宮.jpg",
    },
    
];
const lotcontent = [
    {
        "lotName":"第一籤",
        "lotNumber":"第一籤",
        "lotCotentOne":"曉日瞳瞳萬象融",
        "lotCotentTwo":"河清海晏慶年豐",
        "lotCotentThree":"生逢盛世真歡樂",
        "lotCotentFour":"好把心田作化工",
        "lotContentExplain":"此籤表示要得籤者凡事稱心如意，把握此次良機，勇往直前，去實現目標，可以拭目以待，成功歡樂的到來。",
    },
    {
        "lotName":"第二籤",
        "lotNumber":"第二籤",
        "lotCotentOne":"臣報君恩子報親",
        "lotCotentTwo":"五倫無愧感神明",
        "lotCotentThree":"一帆順境憑君去",
        "lotCotentFour":"災難消除福祿生",
        "lotContentExplain":"此籤表示停滯已久的運勢已轉好，如果現在有計劃或籌謀，不必猶豫不決，可以勇往直前了，如有好好把握，成功必屬於你。",
    },
    {
        "lotName":"第三籤",
        "lotNumber":"第三籤",
        "lotCotentOne":"前生結下好姻緣",
        "lotCotentTwo":"今日相逢赤線牽",
        "lotCotentThree":"多福多男並多壽",
        "lotCotentFour":"一門喜慶此為先",
        "lotContentExplain":"此籤表示時運已到，凡事均唾手可得，這都是多年來努力積德行善的成果，喜事連連，應好好珍惜。",
    },
    {
        "lotName":"第四籤",
        "lotNumber":"第四籤",
        "lotCotentOne":"喜逢春令雨沾濡",
        "lotCotentTwo":"草木萌芽正及時",
        "lotCotentThree":"志士經商皆得意",
        "lotCotentFour":"農夫多黍女多絲",
        "lotContentExplain":"此籤表示得籤者多年的努力已在今年奏效了，過去不如意已成往事，現在已走上順遂的路，但不能因此而自傲或自滿，更應該感謝上天的恩賜，廣植善果，這樣才能持久下去。",
    },
    {
        "lotName":"第五籤",
        "lotNumber":"第五籤",
        "lotCotentOne":"却喜東風一夜催",
        "lotCotentTwo":"萬花萬卉各爭開",
        "lotCotentThree":"黃金台上逢知己",
        "lotCotentFour":"酌酒看花意氣恢",
        "lotContentExplain":"此籤提醒得籤者，所求的事要成功順利，是需要集眾人之力才能完成，不要獨斷獨行，不聽勸告而錯失機會。",
    },
    {
        "lotName":"第六籤",
        "lotNumber":"第六籤",
        "lotCotentOne":"造物由來總好生",
        "lotCotentTwo":"君今求我說分明",
        "lotCotentThree":"西風凜冽東風煖",
        "lotCotentFour":"自把存心仔細評",
        "lotContentExplain":"此籤告誡得籤者，要走光明大道，取之有義、光明磊落，更不宜有求非份之財的妄想，如果違背天理道義，後果是不堪設想的。",
    },
    {
        "lotName":"第七籤",
        "lotNumber":"第七籤",
        "lotCotentOne":"滿目風雲咫尺迷",
        "lotCotentTwo":"胡為惘惘欲何之",
        "lotCotentThree":"不如急把船頭轉",
        "lotCotentFour":"省得狂波破膽時",
        "lotContentExplain":"此籤表示凡事不利，現在如果有任何的計劃最好暫時擱住，不宜往前，現在不可多做妄想，凡事宜保守，並多作作善積德。",
    },
    {
        "lotName":"第八籤",
        "lotNumber":"第八籤",
        "lotCotentOne":"積德如君幾十年",
        "lotCotentTwo":"何須禮拜問神仙",
        "lotCotentThree":"一帆順境誰能及",
        "lotCotentFour":"利有攸往涉大川",
        "lotContentExplain":"此籤表示得籤者所求之事都能稱心順利，若現在有遇到困境，不要放棄，繼續去做就有會有如意的結果。",
    },
    {
        "lotName":"第九籤",
        "lotNumber":"第九籤",
        "lotCotentOne":"世事怎能獲萬全",
        "lotCotentTwo":"總憑一點好心田",
        "lotCotentThree":"吉凶禍福惟人召",
        "lotCotentFour":"我本無私亦不偏",
        "lotContentExplain":"此籤表示心態會影響結果，有因必有果，有果必有因，心存良善的心，自然會造就好的運氣。",
    },
    {
        "lotName":"第十籤",
        "lotNumber":"第十籤",
        "lotCotentOne":"泰極否來汝不知",
        "lotCotentTwo":"尋環往復道無私",
        "lotCotentThree":"回思昔日風光好",
        "lotCotentFour":"却悔今朝禱告遲",
        "lotContentExplain":"此籤表示事情發展到一定程度，就會轉化到它的對立面，好事會變壞事，這也是自然的規律，也可以說是命運。此時只要好好覺悟，多多反省，並向所膜拜的神明禱告，懺悔，或許有轉變的時候。",
    },
    {
        "lotName":"第十一籤",
        "lotNumber":"第十一籤",
        "lotCotentOne":"驚風駭浪失西東",
        "lotCotentTwo":"一盞神燈照碧空",
        "lotCotentThree":"急向前途求解脫",
        "lotCotentFour":"上靝憫惻是愚蒙",
        "lotContentExplain":"此籤表示得籤者目前需等待時機，時候到了自然就會有機會和兆頭出現，或許可獲得貴人得幫助，也勸勉得籤者要懂得自我反省和檢討。",
    },
    {
        "lotName":"第十二籤",
        "lotNumber":"第十二籤",
        "lotCotentOne":"汝曹遂未泛重洋",
        "lotCotentTwo":"順意遊行自主張",
        "lotCotentThree":"得利須知尋退步",
        "lotCotentFour":"免數失足悔難當",
        "lotContentExplain":"此籤勸誡得籤者，做任何事或是為人處世要求得平順，心安理得，除了反省檢討，這樣求神庇佑，並作福積陰德向善，才可以有光明前途。",
    },
    {
        "lotName":"第十三籤",
        "lotNumber":"第十三籤",
        "lotCotentOne":"靝生富貴洵堪誇",
        "lotCotentTwo":"畢竟相承積善家",
        "lotCotentThree":"告汝要言無別事",
        "lotCotentFour":"再能培植慶無涯",
        "lotContentExplain":"此籤表示得籤者，謀事求財均大吉大利，做什麼事都非常順遂，要持續的積德行善，才讓此福份綿延下去。",
    },
    {
        "lotName":"第十四籤",
        "lotNumber":"第十四籤",
        "lotCotentOne":"十年窗下苦操修",
        "lotCotentTwo":"今日彈冠事壯遊",
        "lotCotentThree":"萬里長風欣得意",
        "lotCotentFour":"直登彼岸不須愁",
        "lotContentExplain":"此籤表示得籤者功成名就、一帆風順的命運即將來臨，可達到理想的目標。",
    },
    {
        "lotName":"第十五籤",
        "lotNumber":"第十五籤",
        "lotCotentOne":"種稻高原逢旱歲",
        "lotCotentTwo":"插苗低畝逢霖年",
        "lotCotentThree":"欲晴不晴雨不雨",
        "lotCotentFour":"天不絕人人絕天",
        "lotContentExplain":"此籤表示諸事不宜，應該思考如何面對環境，自己本身也是要努力改變，重新出發。",
    },
    {
        "lotName":"第十六籤",
        "lotNumber":"第十六籤",
        "lotCotentOne":"若看靈旗忽轉東",
        "lotCotentTwo":"定知好事與從容",
        "lotCotentThree":"神僊庇祐需恩報",
        "lotCotentFour":"一柱心香帝座通",
        "lotContentExplain":"此籤表示得籤者功成名就的機會來了，要好好把握，順風而行，不可以改變心意。要勇往直前，要珍惜這一份得來不易的福報並且飲水思源。",
    },
    {
        "lotName":"第十七籤",
        "lotNumber":"第十七籤",
        "lotCotentOne":"求名從此是亨衢",
        "lotCotentTwo":"求利剛逢是利區",
        "lotCotentThree":"但許一心求一事",
        "lotCotentFour":"不容兩念並馳驅",
        "lotContentExplain":"此籤表示現在是得籤者財星高照之時，只要專心一致，專心一意做一項工作，奮發圖強，一定會成功的。",
    },
    {
        "lotName":"第十八籤",
        "lotNumber":"第十八籤",
        "lotCotentOne":"汝是懸崖一樹梅",
        "lotCotentTwo":"一塵不染向春開",
        "lotCotentThree":"待看綠葉成蔭後",
        "lotCotentFour":"結子滿枝調鼎來",
        "lotContentExplain":"此籤其免得籤者籤能有所堅持和忍耐，雖然歷盡風霜，但終能逢凶化吉。",
    },
    {
        "lotName":"第十九籤",
        "lotNumber":"第十九籤",
        "lotCotentOne":"渭川頭白一漁翁",
        "lotCotentTwo":"遇合來時便不同",
        "lotCotentThree":"莫道蹉跎心便冷",
        "lotCotentFour":"須將忍耐付窮通",
        "lotContentExplain":"此籤告訴得籤者，只宜待時，早期凡事應忍耐，多充實自我，辛苦過後有貴人來幫忙，一切問題獲得解決，只要忍耐到最後結果是好的。",
    },
    {
        "lotName":"第二十籤",
        "lotNumber":"第二十籤",
        "lotCotentOne":"制虎降龍靜煉丹",
        "lotCotentTwo":"從今縱躍出玄關",
        "lotCotentThree":"前途一片風光好",
        "lotCotentFour":"不到蓬萊只等閒",
        "lotContentExplain":"此籤表示得籤者時來運轉，可以脫離不如意的事，現在可以專心從事你的事業，從此霉運遠離，前途一切光明。",
    },
    {
        "lotName":"籤王",
        "lotNumber":"籤王",
        "lotCotentOne":"恭喜恭喜恭喜你",
        "lotCotentTwo":"恭喜恭喜恭喜你",
        "lotCotentThree":"獲得籤王真開心",
        "lotCotentFour":"獲得籤王真開心",
        "lotContentExplain":"恭喜獲得籤王，抽到籤王的人會運勢飛漲喔。",
    },
];

/*籤筒*/ 
var lots = document.querySelectorAll('.lot');
if(lots){
    lots.forEach(element => {
        element.addEventListener("click", (event) => {
            lotclick();
          });
    });
}
// 鼠标悬停时更换图片的函数
function changeImageOnHover(lotElement, enter) {
const img = lotElement.querySelector('img');

if (enter) {
    img.dataset.originalSrc = img.src; // 保存原始图片
    img.src = img.dataset.hover; // 更换为悬停图片
} else {
    img.src = img.dataset.originalSrc; // 恢复原始图片
}
}

// 给每个.lot元素添加悬停事件监听器
document.querySelectorAll('.lot').forEach(lot => {
var lotshinne = document.querySelector('.lotshinne');//光芒
lot.addEventListener('mouseenter', function() { changeImageOnHover(this, true); lotshinne.classList.add('show');});
lot.addEventListener('mouseleave', function() { changeImageOnHover(this, false); lotshinne.classList.remove('show'); });

});

// 点击事件的处理函数
function lotclick(lotElement) {
    var lotshinne = document.querySelector('.lotshinne');
   
    setTimeout(()=>{
        if(confirm('確定選擇這支籤嗎?')){
            // window.location.href="/draw.html";
            lotshinne.classList.remove('show');
            removeLotCanAndShowLot();
            getLots();
            showlot();
        }else{
            lotshinne.classList.remove('show');
        }
    },500);
// 可以在这里添加更多的点击后应执行的逻辑
}

function removeLotCanAndShowLot(){
    var lotpage = document.querySelector('.lots');
    var lotcan =document.querySelector('.lot-can');
    var lots = document.querySelector('.lot-group');
    var picklot = document.querySelector('.picklot');
    var eyes = document.querySelector('.eyes');
    var ear = document.querySelector('.ear');
    if(window.innerWidth>768){
        lotpage.setAttribute('style','background-image:url("assets/draw/P4-背景.jpg");');

    }else{
        // lotpage.setAttribute('style','background-image:url("assets/lot/425x800-求籤畫面.jpg");');
    }
    eyes.setAttribute('style','display:none');
    ear.setAttribute('style','display:none');
    picklot.setAttribute('style','display:none');
    lotcan.setAttribute('style','display:none');
    lots.setAttribute('style','display:none !important');
}
function showlot(){

    var lotName = document.querySelector('.lotcontent .bodyleft p');
    var lotNumber = document.querySelector('.lotcontent .bodyright p');
    var lotCotent_one =document.getElementById('lineOne');
    var lotCotent_two =document.getElementById('lineTwo');
    var lotCotent_three =document.getElementById('lineThree');
    var lotCotent_four =document.getElementById('lineFour');
    lotNumber.textContent = localStorage.getItem('lotNumber');
    lotName.textContent = localStorage.getItem('lotName');
    lotCotent_one.textContent = localStorage.getItem('lotContentOne');
    lotCotent_two.textContent = localStorage.getItem('lotContentTwo');
    lotCotent_three.textContent = localStorage.getItem('lotContentThree');
    lotCotent_four.textContent = localStorage.getItem('lotContentFour');

    var showlot = document.querySelector('.lotcontent');
    showlot.classList.add('active');
}

/* 擲杯部分*/ 
let clickCount = 0; // 跟踪按鈕被點擊的次數
let intervalId = null; // 用於存儲 setInterval 的 ID
const throbae = document.getElementById('baemove');
if(throbae){
    throbae.addEventListener('click',function(e){
        baechange();
        playdrawmusic();
    });
}

// 此函數用於隨機選擇一個元素
function getRandomElement(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}

// 此函數負責切換圖片
function baechange() {
  const baecards = document.querySelectorAll('.baecard img');
  // 清除之前的 interval，防止多個 interval 同時運行
  if (intervalId) {
    clearInterval(intervalId);
  }
  
  // 增加點擊次數，每3次一循環
  clickCount = (clickCount + 1) % 3;

  // 隱藏所有圖片
  function hideAllCards() {
    baecards.forEach(card => {
      card.classList.remove('show');
    });
  }

  if (clickCount !== 0) {
    // 隨機顯示圖片
    intervalId = setInterval(() => {
      hideAllCards(); // 隱藏所有圖片
      const randomCard = getRandomElement(baecards);
      randomCard.classList.add('show'); // 隨機顯示一張圖片
    }, 500); // 每100毫秒切換一次

    // 設定三秒後停止切換
    setTimeout(() => {
      clearInterval(intervalId);
      hideAllCards();
      // 隨機顯示最後一張圖片
      var temprandom = getRandomElement(baecards);
      var buashow = document.querySelector('.buashow');
      var showshinne = document.querySelector('.shinne');
      var baestyle = document.querySelector('.baestyle');
      var smile = baestyle.querySelector('.baestyle .smile');//笑杯
      var sant = baestyle.querySelector('.baestyle .sant');//聖杯
      var nono = baestyle.querySelector('.baestyle .nono')//陰杯
      
      getRandomElement(baecards).classList.add('show');
      changedrawbackground();//變更畫面顯示
      //判斷杯型
      if(temprandom.classList.contains('smile')){
        var buashow = document.querySelector('.buashow');
        var showshinne = document.querySelector('.shinne');
        var baestyle = document.querySelector('.baestyle');
        var draweye = document.querySelector('.eyes');
        var drawear = document.querySelector('.ear');
        draweye.setAttribute('style','display:none')
        drawear.setAttribute('style','display:none')
        baestyle.classList.add('show');
        var smile = baestyle.querySelector('.baestyle .smile');//笑杯
        var sant = baestyle.querySelector('.baestyle .sant');//聖杯
        var nono = baestyle.querySelector('.baestyle .nono')//陰杯
        buashow.classList.add('show');
        showshinne.classList.add('show');
        smile.classList.add('show');
        buashow.appendChild(reDrawbuttonObject('請重新擲筊'));
      }else if(temprandom.classList.contains('sant')){
        
        var buashow = document.querySelector('.buashow');
        var showshinne = document.querySelector('.shinne');
        var baestyle = document.querySelector('.baestyle');
        var draweye = document.querySelector('.eyes');
        var drawear = document.querySelector('.ear');
        draweye.setAttribute('style','display:none')
        drawear.setAttribute('style','display:none')

        var smile = baestyle.querySelector('.baestyle .smile');//笑杯
        var sant = baestyle.querySelector('.baestyle .sant');//聖杯
        var nono = baestyle.querySelector('.baestyle .nono')//陰杯
        buashow.classList.add('show');
        baestyle.classList.add('show');
        sant.classList.add('show');      
        buashow.appendChild( reDrawbuttonObject('查看籤詩釋解'));
        localStorage.setItem('sant', 'true');
      }else{
        var buashow = document.querySelector('.buashow');
        var showshinne = document.querySelector('.shinne');
        var baestyle = document.querySelector('.baestyle');
        baestyle.classList.add('show');
        var draweye = document.querySelector('.eyes');
        var drawear = document.querySelector('.ear');
        draweye.setAttribute('style','display:none')
        drawear.setAttribute('style','display:none')
        var smile = baestyle.querySelector('.baestyle .smile');//笑杯
        var sant = baestyle.querySelector('.baestyle .sant');//聖杯
        var nono = baestyle.querySelector('.baestyle .nono')//陰杯
        buashow.classList.add('show');
        nono.classList.add('show');
        buashow.appendChild(reDrawbuttonObject('重新抽籤詩'));
      }
        // showdraw();
    }, 5000);
  } else {
    intervalId = setInterval(() => {
        hideAllCards(); // 隱藏所有圖片
        const randomCard = getRandomElement(baecards);
        randomCard.classList.add('show'); // 隨機顯示一張圖片
      }, 200); // 每100毫秒切換一次

    setTimeout(() => {
        // clearInterval(intervalId);
        hideAllCards();
                // 第三次點擊時固定顯示特定圖s片
        hideAllCards(); // 隱藏所有圖片
        changedrawbackground();
        const specificCard = baecards[1]; // 假設我們固定顯示第一張圖片
        specificCard.classList.add('show');
        var buashow = document.querySelector('.buashow');
        var showshinne = document.querySelector('.shinne');
        var baestyle = document.querySelector('.baestyle');
        var sant = baestyle.querySelector('.sant');//聖杯
        buashow.appendChild( reDrawbuttonObject('查看籤詩釋解'));
        buashow.classList.add('show');
        showshinne.classList.add('show');
        baestyle.classList.add('show');
        sant.classList.add('show');
        localStorage.setItem('sant', 'true');
        localStorage.setItem('lot','');
        var draweye = document.querySelector('.eyes');
        var drawear = document.querySelector('.ear');
        draweye.setAttribute('style','display:none')
        drawear.setAttribute('style','display:none')
    }, 3000);

  }
}

function changedrawbackground(){
    var drawback = document.querySelector('#draw');
    var mazu = document.querySelector('.mazu');
    var draw = document.querySelector('.draw');
    console.log(drawback);
    if(window.innerWidth>1440){
        drawback.setAttribute('style','background-image:url("/assets/draw/1920x1080.jpg")');
    }
    if(window.innerWidth<=1440){
        drawback.setAttribute('style','background-image:url("/assets/temple/1440x1080-選廟地圖.jpg")');
    }
    if(window.innerWidth<=1024){
        drawback.setAttribute('style','background-image:url("/assets/temple/1024x1080-選廟地圖.jpg")');
    }
    if(window.innerWidth<768){
        drawback.setAttribute('style','background-image:url("/assets/temple/768x1080-求籤畫面V2.jpg")');
    }
    if(window.innerWidth<480){
        drawback.setAttribute('style','background-image:url("/assets/temple/425x800-選廟地圖.jpg")');
    }
    // mazu.setAttribute('style','display:none;');
    draw.setAttribute('style','display:none;');
}

function resetbackground(){
    var drawback = document.querySelector('#draw');
    var mazu = document.querySelector('.mazu');
    var draw = document.querySelector('.draw');
    var buashow = document.querySelector('.buashow');
    var shinne = buashow.querySelector('.shinne');
    var buastyle = document.querySelector('.baestyle');
    buashow.classList.remove('show');
    shinne.classList.remove('show');
    buastyle.classList.remove('show');
    buashow.removeChild(buashow.lastChild);
    if(window.innerWidth>=1440){
        drawback.setAttribute('style','background-image:url("/assets/draw/1440x1080-求籤畫面.jpg")');
    }else if(window.innerWidth >768){
        drawback.setAttribute('style','background-image:url("/assets/draw/768x1080-求籤畫面.jpg")');
    }else{
        drawback.setAttribute('style','background-image:url("/assets/lot/425x800-求籤畫面.jpg")');
    }
    // mazu.setAttribute('style','display:block;');
    draw.setAttribute('style','display:block;');
}

function showdraw(){
    var buashow = document.querySelector('.buashow');
    var shinne = buashow.querySelector('.shinne');
    shinne.classList.add('show')
    var buastyle = document.querySelector('.baestyle');
    buastyle.classList.add('show');
    var buaimage = document.createElement('img');
}
function reDrawbuttonObject(textContent){
    var checkmessageBtn = document.createElement('button');
    checkmessageBtn.textContent = textContent;
    checkmessageBtn.setAttribute('class','checkDraw');
    checkmessageBtn.addEventListener('click',function(e){
        if(textContent==='請重新擲筊'){
            resetbackground();
            resetDrawShow();
            var draweye = document.querySelector('.eyes');
            var drawear = document.querySelector('.ear');
            draweye.setAttribute('style','display:block')
            drawear.setAttribute('style','display:block')
        }else if(textContent==='重新抽籤詩'){
            window.location.href="/lots.html";
        }else{
            window.location.href="/showmessage.html"
        }
    });
    return checkmessageBtn;
}
function resetDrawShow(){
    var baestyle_reset = document.querySelector('.baestyle');
    var smile = baestyle_reset.querySelector('.smile');
    var sant = baestyle_reset.querySelector('.sant');
    var nono = baestyle_reset.querySelector('.nono');
    smile.classList.remove('show');
    sant.classList.remove('show');
    nono.classList.remove('show');
}
function getmessage(){

}
/* 地圖 */
//desktop
const tashi = document.querySelector('.tashi');
const newhouse = document.querySelector('.newhouse');
const zhongli = document.querySelector('.zhongli');
const taoyuan = document.querySelector('.taoyuan');
const taoyuanbig = document.querySelector('.taoyuanbig');
if(tashi){
    tashi.addEventListener('mouseenter',function(e){
        var tashiimg = tashi.querySelector('img');
        tashiimg.classList.add('show');
        showtemplelist('tashi');
        
    });
    tashi.addEventListener('mouseleave',function(e){
        var tashiimg = tashi.querySelector('img');
        tashiimg.classList.remove('show');
    });
    tashi.addEventListener('click',function(e){
        var tashiimg = tashi.querySelector('img');
        tashiimg.classList.add('show');
        showtemplelist('tashi');
    });
}
if(newhouse){
    newhouse.addEventListener('mouseenter',function(e){
        var newhouseimg = newhouse.querySelector('img');
        newhouseimg.classList.add('show');
        showtemplelist('newhouse');
    });
    newhouse.addEventListener('mouseleave',function(e){
        var newhouseimg = newhouse.querySelector('img');
        newhouseimg.classList.remove('show');
    });
    newhouse.addEventListener('click',function(e){
        var newhouseimg = newhouse.querySelector('img');
        newhouseimg.classList.add('show');
        showtemplelist('newhouse');
    });
}
if(zhongli){
    zhongli.addEventListener('mouseenter',function(e){
        var zhongliimg = zhongli.querySelector('img');
        zhongliimg.classList.add('show');
        showtemplelist('zhongli');
    });
    zhongli.addEventListener('mouseleave',function(e){
        var zhongliimg = zhongli.querySelector('img');
        zhongliimg.classList.remove('show');
    });
    zhongli.addEventListener('click',function(e){
        var zhongliimg = zhongli.querySelector('img');
        zhongliimg.classList.add('show');
        showtemplelist('zhongli');
    });
}
if(taoyuan){
    taoyuan.addEventListener('mouseenter',function(e){
        var taoyuanimg = taoyuan.querySelector('img');
        taoyuanimg.classList.add('show');
        showtemplelist('taoyuan');
    });
    taoyuan.addEventListener('mouseleave',function(e){
        var taoyuanimg = taoyuan.querySelector('img');
        taoyuanimg.classList.remove('show');
    });
    taoyuan.addEventListener('click',function(e){
        var taoyuanimg = taoyuan.querySelector('img');
        taoyuanimg.classList.add('show');
        showtemplelist('taoyuan');
    });
}
if(taoyuanbig){
    taoyuanbig.addEventListener('mouseenter',function(e){
        var taoyuanimg = taoyuan.querySelector('img');
        taoyuanimg.classList.add('show');
        showtemplelist('taoyuanbig');
    });
    taoyuanbig.addEventListener('mouseleave',function(e){
        var taoyuanimg = taoyuan.querySelector('img');
        taoyuanimg.classList.remove('show');
    });
    taoyuanbig.addEventListener('click',function(e){
        var taoyuanimg = taoyuanbig.querySelector('img');
        taoyuanimg.classList.add('show');
        showtemplelist('taoyuanbig');
    });
}

//mobile
const m_tashi = document.querySelector('.mapmobile .tashi');
const m_newhouse = document.querySelector('.mapmobile .newhouse');
const m_zhongli = document.querySelector('.mapmobile .zhongli');
const m_taoyuan = document.querySelector('.mapmobile .taoyuan');
const m_taoyuanbig = document.querySelector('.mapmobile .taoyuanbig');
if(m_tashi){
    m_tashi.addEventListener('click',function(e){
        canelAllSelect();
        m_tashi.classList.add('actived');
        showtemplelist('tashi');
    });
}
if(m_newhouse){
    m_newhouse.addEventListener('click',function(e){
        canelAllSelect();
        m_newhouse.classList.add('actived');
        showtemplelist('newhouse');
    });
}
if(m_zhongli){
    m_zhongli.addEventListener('click',function(e){
        canelAllSelect();
        m_zhongli.classList.add('actived');
        showtemplelist('zhongli');
    });
}
if(m_taoyuan){
    m_taoyuan.addEventListener('click',function(e){
        canelAllSelect();
        m_taoyuan.classList.add('actived');
        showtemplelist('taoyuan');
    });
}
if(m_taoyuanbig){
    m_taoyuanbig.addEventListener('click',function(e){
        canelAllSelect();
        m_taoyuanbig.classList.add('actived');
        showtemplelist('taoyuanbig');
    });
}
function showtemplelist(areaid){
    templeData.forEach(element => {
        switch(element.areaid){
            case (areaid):
                var templetitle = document.querySelector('.templeintro-wrapper h3');
                var templeimage = document.querySelector('.templeintro-wrapper .content-wrapper img');
                var templecotent = document.querySelector('.templeintro-wrapper .content-wrapper p');
                templetitle.textContent =element.templeName;
                templecotent.textContent = element.activeDate + element.activeContent;
                templeimage.setAttribute('src',element.image_url);
                localStorage.setItem('choosetemp',areaid);
                document.cookie = 'choosetemp=' + areaid;
            }
      });
}
function canelAllSelect(){
    var templeDiv = document.querySelectorAll('.mapmobile div');
    templeDiv.forEach(element=>{
        if(element.classList.contains('actived')){
            element.classList.remove('actived');
        }
    });
}
function getLots(){
    const index = Math.floor(Math.random() * lotcontent.length);
    const selectedLot = lotcontent[index];
    localStorage.clear();
    localStorage.setItem('lotName',selectedLot.lotName);
    localStorage.setItem('lotNumber',selectedLot.lotNumber);
    localStorage.setItem('lotContentOne',selectedLot.lotCotentOne);
    localStorage.setItem('lotContentTwo',selectedLot.lotCotentTwo);
    localStorage.setItem('lotContentThree',selectedLot.lotCotentThree);
    localStorage.setItem('lotContentFour',selectedLot.lotCotentFour);
    localStorage.setItem('lotContentExplain',selectedLot.lotContentExplain);
}

function ckpage(){
    var messagepage = document.querySelector('#message');
    if(messagepage){
        
        var choosetemp = document.cookie.split(';');
        var choosecontetn = choosetemp[0].replace('choosetemp=','');
        if(!choosecontetn=== ''){
            console.log(choosecontetn);
            openDialog('taoyuanbig');
        }else{
            openDialog(choosecontetn);
        }
        console.log(choosecontetn);
        
        setMessage();
    }else{
        console.log('Not Message Page');
    }
}
function setMessage(){
    var NumberLot = document.querySelector('.rollbook h4');
    var LotExplain = document.querySelector('.rollbook p');
    NumberLot.textContent = localStorage.getItem('lotName');
    LotExplain.textContent = localStorage.getItem('lotContentExplain')
}
ckpage();
function openDialog(area){
    var tempactivedialog = document.querySelector('.tempactivedialog');
    tempactivedialog.classList.add('actived');
    resetDialog()
    var showing_area = tempactivedialog.querySelector("#" + area);
    showing_area.classList.add('actived');
}

function resetDialog(){
    var dialogContent = document.querySelectorAll('.dialog-content');
    dialogContent.forEach(element=>{
        element.classList.remove('actived');
    });
}
const dialogClose = document.querySelector('.dialogClose');
if(dialogClose){
    dialogClose.addEventListener('click',function(e){
        var tempactivedialog = document.querySelector('.tempactivedialog');
        tempactivedialog.classList.remove('actived');
    });
}




const shareBtn = document.querySelector('#shareBtn');
if(shareBtn){
    shareBtn.addEventListener('click',function(e){
        window.location.href="https://st-url.com/瘋媽祖粉專貼文連結";
    });
}
// playbackgroundmusic();
function playdrawmusic(){
    // stopplaymusic();
    const audio = document.getElementById("audio-element");
    audio.currentTime = 0;
    audio.play();
}
var musicState = false;
function playbackgroundmusic(){
    const audio2 = document.createElement("audio");
    const t = document.getElementById("audio-element2");
    if(musicState){
        console.log(musicState);
    }else{
        t.currentTime = 0;
        t.play();
        // audio2.classList.add('music');
        audio2.src = "assets/backgroundmusic.mp3";
        audio2.play();
        musicState = true;
        console.log(musicState);
    }

}

document.addEventListener("click", playbackgroundmusic);

function stopplaymusic(){
    var audio_stop = document.getElementsByTagName('audio');
    audio_stop.pause();
    audio_stop.currentTime = 0;
}