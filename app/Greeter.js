/**
 * Created by JetBrains WebStorm.
 * User: wb-ghb226150@alibaba-inc.com
 * Date: 2017-09-29 16:53
 * Describe:
 */
// var config = require('./config.json');
// module.exports = function () {
//     var greet = document.createElement('div');
//     // greet.textContent = 'Hello my name is Jeawon~~~';
//     greet.textContent = config.greetText;
//     return greet;
// }
//转化成jsx
import React,{Component} from 'react';
import config from './config.json';

//导入Greeter.css的.root样式
import styles from './Greeter.css';

class Greeter extends Component{
    render(){
        return(
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter;