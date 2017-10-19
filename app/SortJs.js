/**
 * Created by JetBrains WebStorm.
 * User: wb-ghb226150@alibaba-inc.com
 * Date: 2017-10-17 15:41
 * Describe:
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import styles from './sort.css';
// let a=[3,9,4,7,2,5,8,6];
// for(let i=0;i<a.length;i++){
//     // let ele=document.createElement("div");
//     // ele.className="number";
//     // ele.id="number"+a[i];
//     ele.style.height=a[i]*10+"px";
//     ele.style.left=(ele.posi=i*100)+"px";
//     // document.getElementById("content").appendChild(ele);
// }
// let step=0;
// for(let i=0;i<a.length-1;i++){
//     for(let j=0;j<=a.length-1-i;j++){
//         if(a[j]>a[j+1]){
//             let temp=a[j];
//
//             (function(n1,n2){
//                 let ele1=document.getElementById("number"+n1);
//                 let ele2=document.getElementById("number"+n2);
//
//                 // window.setTimeout(function(){
//                 //     animate(ele1,{left:ele2.posi},700);
//                 //     animate(ele2,{left:ele1.posi},700);
//                 //     let temp=ele2.posi;
//                 //     ele2.posi=ele1.posi;
//                 //     ele1.posi=temp;
//                 //
//                 // },step*2000);
//
//             })(a[j],a[j+1]);
//
//             a[j]=a[j+1];
//             a[j+1]=temp;
//             step++;
//
//         }
//     }
// }

import './sort.css';

import $ from 'expose-loader?$!jquery';
// import 'jquery-ui' //插件可用
class SortJs extends Component{
    componentDidMount(){
        let $children = $(ReactDOM.findDOMNode(this)).children();
        let arr = [];

        $children.each(function (index,item) {
            return arr.push(item.innerText)
        });
        let p = "<p class='banner'>冒泡排序动画演示</p>";
        $children.parent().append(p);
        let step=0;
        for(let i=0;i<arr.length-1;i++){
            for(let j=0;j<=arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j];
                    ((n1,n2)=>{
                        let ele1=$("#number"+n1);
                        let ele2=$("#number"+n2);
                        window.setTimeout(()=>{
                            ele1.animate({left:ele2.data('posi')+'px'},700);
                            ele2.animate({left:ele1.data('posi')+'px'},700);

                            let temp=ele2.data('posi');
                            ele2.data('posi',ele1.data('posi'));
                            ele1.data('posi',temp);
                        },step*2000);
                    })(temp,arr[j+1]);

                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    step++;
                }
            }
        }
    }
    render(){
        let arr=[3,9,4,7,2,5,8,6];
        return (
            <div>
                {arr.map((val,index) => {
                    let divStyle = {
                        height : val*10 + 'px',
                        left : index*100 + 'px'
                        // color: 'white',
                        // backgroundImage: 'url(' + imgUrl + ')',
                        // WebkitTransition: 'all', // 注意这里的首字母'W'是大写
                        // msTransition: 'all' // 'ms'是唯一一个首字母需要小写的浏览器前缀
                    };
                    //style={{marginBottom:"5px"}}
                    return <div className='number' id={'number'+val} key={index} style={divStyle} data-posi={index*100}>{val}</div>
                })}
            </div>
        )
    }
}

export default SortJs;