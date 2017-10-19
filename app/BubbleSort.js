/**
 * Created by JetBrains WebStorm.
 * User: wb-ghb226150@alibaba-inc.com
 * Date: 2017-10-17 15:41
 * Describe:
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './sort.css';
import $ from 'expose-loader?$!jquery';

// import 'jquery-ui' //插件可用
class BubbleSort extends Component{
    componentDidMount(){
        let $children = $(ReactDOM.findDOMNode(this)).children();
        let arr = [];

        $children.each(function (index,item) {
            return arr.push(+item.innerText)
        });
        let p = "<p class='banner'>冒泡排序动画演示</p>";
        $children.parent().append(p);
        let step=0;
        let flag=false;
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
                        },step*1000);
                    })(temp,arr[j+1]);

                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    step++;
                }
            }
        }
    }
    render(){
        let arr=[3,9,11,19,4,7,2,5,8,6,22,17];
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
                {/*<form action="" id='form1' ref='form1'>*/}
                    {/*<input type="text" name='item0' maxLength='1'/>*/}
                    {/*<input type="text" name='item1' maxLength='1'/>*/}
                    {/*<input type="text" name='item2' maxLength='1'/>*/}
                    {/*<input type="text" name='item3' maxLength='1'/>*/}
                    {/*<input type="text" name='item4' maxLength='1'/>*/}
                    {/*<button id='start'>开始</button>*/}
                {/*</form>*/}

            </div>
        )
    }
}

export default BubbleSort;