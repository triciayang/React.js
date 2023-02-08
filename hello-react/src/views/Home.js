import React, {useState, useEffect} from 'react';

function Home() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function test() {
    setCount(count + 1);
    console.log('Event Fired!', count);
  }
  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    console.log('4444', count);
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="app-home">
      <h1>Home</h1>
      <br></br>
      <button onClick={test}>클릭 이벤트</button>
    </div>
  );
}

export default Home;
