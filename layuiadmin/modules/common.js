/**

 @Name：layuiAdmin 公共业务
 @Author：贤心
 @Site：http://www.layui.com/admin/
 @License：LPPL
    
 */
 
layui.define(function(exports){
  var $ = layui.$
  ,layer = layui.layer
  ,laytpl = layui.laytpl
  ,setter = layui.setter
  ,view = layui.view
  ,admin = layui.admin
  
  //公共业务的逻辑处理可以写在此处，切换任何页面都会执行
  //……
  
  //退出
  admin.events.logout = function(){

    console.log("---退出---------");
    return;
    //执行退出接口
    admin.req({
      url: layui.setter.base + 'json/user/logout.js'
      ,type: 'get'
      ,data: {}
      ,done: function(res){ //这里要说明一下：done 是只有 response 的 code 正常才会执行。而 succese 则是只要 http 为 200 就会执行
        
        //清空本地记录的 token，并跳转到登入页
        admin.exit(function(){
          location.href = 'user/login.html';
        });
      }
    });
  };
  /*
      $.ajax({
        url:obj.url || '',
        type:'post',
        dataType:'json',
        contentType: 'application/json; charset=utf-8',
        data:obj.data,
       // timeout:2000,
        success:function(res){
          switch (res.code) {
            case 200:
                parent.layui.table.reload(obj.parentIF); //重载表格
                parent.layer.close(obj.thisIF);
                parent.layer.open({
                  content: res.message || '提交成功！'
                  ,time:2000
                });
                break;
            default:
              layer.msg( res.message || "提交有误，请检查各项参数！",{icon: 2,time:5000})
          }
        },
        error:function () {
          layer.msg("请求失败，请稍后再试！",{icon: 5,time:5000})
        }
      });
  */
  
  //对外暴露的接口
  exports('common', {});
});