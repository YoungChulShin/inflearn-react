import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import React from 'react';

function App() {

  let name = "테스트 사용자";

  const func = () => {
    return "func";
  }

  const number = 5;

  return (
    // 최상위 태그
    <div className="App">
      <MyHeader />
      <h2>안녕 리액트 {name}</h2>
      <b id="bold_text">
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
    </div>

    // React.Fargment로 나눌 수 있다
    // <React.Fragment>
    // </React.Fragment>
  );
}

export default App;
