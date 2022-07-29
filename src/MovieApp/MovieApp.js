import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function MovieApp(){
  return (
    // Router에서 렌더링 -> 그안에 들어갈 것들을 넣음.
    //Switch 컴포넌트는 한 Router에 하나만 넣기 위한 것.
    //Route는 이동하는 url임,
    //Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
    //기존 html이라면 a태그를 활용해서 했을 것임.<a href="/movie"></a>
    //위 방식은 브라우저를 새로고침하여 페이지를 이동하기 때문에 느림.
  
    //여기는 모두 url만 바로보고 있는 것임. 
  <Router>
    <Switch>
      <Route path="/hello">
        <h1>Hello</h1>
      </Route>
      <Route path="/movie">
        <Detail />
      </Route>

      {/* 유저가 홈으로 가는 route */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default MovieApp;
//BrowserRouter과 HashRouter의 차이
//localhost:3000/#/ 처럼 # 이 붙으면 HashRouter임.