import React, { Component } from 'react'
import "./index.css"

export default class Footer extends Component {
    state = {longTime: 0}
    runtime() {
        var oldTime = new Date('2021/06/01 00:00:00');
        var longTime
        setInterval(() => {
          var nowTime = new Date();
          var longTime = nowTime - oldTime;
          var days = parseInt(longTime / 1000 / 60 / 60 / 24, 10);
          var hours = parseInt(longTime / 1000 / 60 / 60 % 24, 10);
          var minutes = parseInt(longTime / 1000 / 60 % 60, 10);
          var seconds = parseInt(longTime / 1000 % 60, 10);
          longTime = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
          this.setState({longTime: longTime})
        }, 1000)
      }
      componentDidMount() {
          this.runtime()
      }
    render() {
        return (
            <footer>
    <p>
      博客已萌萌哒运行 {this.state.longTime}
    </p>
    <p>
      © 2021<a href="#">X. Tian</a>. 由 <a href="https://reactjs.org/" target="_blank">Vue</a> 强力驱动. Theme By <a href="http://weiqi.icu/" target="_blank">wieqi.icu</a>. 京ICP备17071595号-1.
    </p>
            </footer>
        )
    }
}
