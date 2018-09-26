var ul=document.querySelector('.item ul');
var  span=document.querySelectorAll('.item span');
var inp=document.querySelector('input');
console.log(inp)
new Vue({
    el:'#app',
    data:{
        title:'待办事项',
        del:'删除'
    },
    methods:{
       btn:function(){
//           if((inp.value== ''){
//               console.log('123')
//           }else{
//               console.log('456')
//           }
           console.log(inp.innerHTML)
       },
        dele:function(){
            console.log(this)   
        }
    }
})