<template>
  <div class="type-box">
    <div class="setting">
      <div class="grade-box">
        你的成绩：<div class="grade">0</div> 分
      </div>
      <div class="rank">选择难度： 
        <button onclick="changeRank('simple')">简单</button>
        <button onclick="changeRank('middle')">中等</button>
        <button onclick="changeRank('hard')">困难</button>
      </div>
    </div>
    <div class="game-box">
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    let box = document.getElementsByClassName('game-box')[0]
    let gradeBox = document.getElementsByClassName('grade')[0]
    let max = 0
    let click = ''
    let style = {}
    console.log(style);
    let gameStatus = ''
    let gameGrade = 0
    let gameRank = 0
    // 游戏总定时器
    let gameSt = ''
    // 游戏初始化
    let gameInit = function(){
      max = 0
      click = ''
      style = {}
      gameStatus = ''
      gameGrade = 0
      gameRank = 0
      clearInterval(gameSt)
      gameSt = ''
      box.childNodes = []
    }
    // 产生随机数
    var randomNum = function(mul,add = 0){
      // 产生范围在 [0 +add , mul + add ） 的随机数
      return Math.floor(Math.random() * mul + add) 
    }
    // 捕捉按键
    document.onkeydown = function(e) {
      click = e.key
    }
    // 产生节点
    let startGame = function(){
      let word0 = new Word()
      console.log(word0);
      gameSt = setInterval(()=>{
        if(gameStatus === 'fail'){
          clearInterval(gameSt)
        }
        else{
          if(gameGrade > 100){
            gameRank += 1
          }
          let word1 = new Word()
          console.log(word1);
        }
      },2000- gameRank*200)
    }
    // 删除节点
    let delWord = function(obj){
      console.log(obj);
      for(var key in obj){
        delete obj[key];
      }
    }
    // 游戏产生字母节点类
    let Word = function(){
      this.y = 3
      this.x = randomNum(280,10)
      this.speed = Math.floor(Math.random()*2? 100 : 200)
      this.name =  String.fromCharCode(randomNum(26,97))
      // 初始化字母节点属性
      this.node = document.createElement('div')
      this.node.innerText = this.name
      this.node.style.position = 'absolute'
      this.node.style.left = this.x + "px"
      this.node.style.top = this.y +'px'
      this.node.style.color = 'rgb(' + randomNum(156,100)+ ',' + randomNum(156,100) +','+ randomNum(156,100) + ')'
      box.appendChild(this.node)
      this.init()
    }
    Word.prototype = {
      init(){
        // 初始化
        this.getWord()
      },
      // 节点移动属性
      move(){
        this.y += 2
        this.node.style.top = this.y +"px"
      },
      getWord(){
        // 节点开始运转
        let st = setInterval(()=>{
          this.move()
          if(this.y >= 470) {
            gameStatus = 'fail'
            alert('游戏失败')
            clearInterval(st)
            gameInit()
            delWord(this)
            return
          }
          if(this.y >=  max){
            max =  this.y
            if(this.name === click){
              // 这个判断放里面是为了确保只能点击最下面的字母
              // 放外面 可以任意点击出现的字母
              clearInterval(st)
              click = ''
              box.removeChild(this.node)
              gameGrade += 1
              if(gameGrade >= 20){
                alert('666，通关了！！！')
                gameInit()
              }
              gradeBox.innerText = gameGrade
              delWord(this)
              max = 0 //重置最大点
            }
          }
        },this.speed - gameRank*10 )
      }
    }

    // startGame()
    // 难度按钮点击触发
    let changeRank = function(type = ''){
      switch(type){
        case 'simple' :
          gameRank = 0
          break;
        case 'middle' :
          gameRank = 2
          break;
        case 'hard':
          gameRank = 6
          break
      }
    }
    console.log(changeRank,startGame);
  }
}
</script>

<style scoped>
  .type-box{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(199,237,204);
    font-size: 15px;
  }
  .game-box{
    background-color: rgba(0, 0, 0, 0.9);
    position: relative;
    width: 300px;
    height: 500px;
    border: 1px solid black;
    margin-left: 10px;
    box-shadow: 5px 5px 20px lightblue;
    font-size: 25px;
  }
  .grade-box{
    font-size: 15px;
    display: flex;
  }
  .rank{
    display: flex;
    justify-content: space-around;
  }
  .grade{
    color: red;
  }
</style>