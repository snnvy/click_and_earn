const sellPageBtn = document.getElementById('sellpage-button');
const homePageBtn = document.getElementById('homepage-button');
const factoryPageBtn = document.getElementById('factorypage-button');

const homePage = document.getElementById('home-page');
const factoryPage = document.getElementById('factory-page');
const sellPage = document.getElementById('sell-page');

const mainBtnClick = document.getElementById('click-button');
const upgradeBtnClick = document.getElementById('upgrade-auto-click');

factoryPageBtn.addEventListener('click', function(){
 homePage.style.display = "none";
 factoryPage.style.display = "grid";

})

homePageBtn.addEventListener('click', function(){
    if(homePage.style.display != "flex"){
        factoryPage.style.display = "none";
        homePage.style.display = "flex";
        // sellPage.style.display = "none"
    } else{
        document.getElementById('home-suka').play();
    }
})

mainBtnClick.addEventListener('click', function(){
    document.getElementById('click-audio').play();
})

let timesClicked = 0;

function btnClick() {
    if (timesClicked < 9999){
		timesClicked ++;
    } else{
		window.location.reload()
	}
    if(timesClicked >= 150){
        document.getElementById('auto-click-button-banner').style.display = "none";
        document.getElementById('upgrade-auto-click').classList.add('upgrade-active');
    }
  document.getElementById('total-amount').innerHTML = timesClicked;	
  return true 
}

// function autoClickBtn(){
//     console.log("fgdgd")
//     if(timesClicked >= 150){       
//          timesClicked -= 150;
//     }
    
// }

upgradeBtnClick.addEventListener('click', function(){
    if(timesClicked >= 150){       
        timesClicked -= 150;
   }
   document.getElementById('total-amount').innerHTML = timesClicked;
   if(timesClicked < 150){
    document.getElementById('auto-click-button-banner').style.display = "block";
    document.getElementById('upgrade-auto-click').classList.remove('upgrade-active');
}
})

mainBtnClick.onclick = function (){btnClick()}
// setInterval(() => {btnClick();}, 5000);

