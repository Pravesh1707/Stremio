
import './App.css';
// import MoviePage from './User/components/Pages/MoviePage';
import MovieCard from './User/components/Cards/MovieCard';
import LeftSide from './User/components/Main/LeftSide';
import RightSide from './User/components/Main/RightSide';


function App() {
  return (
    <div className="App">
      {/* <MoviePage/> */}
      {/* <MovieCard/> */}
      <LeftSide/>
      <RightSide />
    </div>
  );
}

export default App;
