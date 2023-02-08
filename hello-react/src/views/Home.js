function Home() {
  return (
    <div className="app-home">
      <h1>Home</h1>
      <br></br>
      <button onClick={test}>클릭 이벤트</button>
    </div>
  );
}

function test() {
  console.log('Event Fired!');
}

export default Home;
