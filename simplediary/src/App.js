import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "테스트1",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "테스트2",
    content: "하이 2",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "테스트3",
    content: "하이 3",
    emotion: 3,
    created_date: new Date().getTime(),
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
