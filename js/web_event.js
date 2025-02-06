// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "哎嘿！复制成功🍬",
                    message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})
  
  /* 禁用F12按键并提醒 */
  document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
      event.keyCode = 0;
      event.returnValue = false;
      new Vue({
        data:function(){
          this.$notify({
            title:"不要动啊，魂淡",
            message:"怎么能随随便便这样子呢",
            position: 'top-left',
            offset: 50,
            showClose: false,
            type:"error"
          });
          return{visible:false}
        }
      })
      return false;
    }
  };