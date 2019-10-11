import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import MovieDetail from './components/MovieDetail';
import Catalog from './components/Catalog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: true, title: "Billions", year: 2016, img: "https://is2-ssl.mzstatic.com/image/thumb/Video123/v4/3e/5f/58/3e5f585c-d5c6-844d-b048-448c4f274ed8/mzl.vbbypgjm.lsr/268x0w.jpg", descrShort: "Emmy® and Golden Globe® winners Paul Giamatti and Damian Lewis star in a complex drama about power politics in the world of New York high finance. Shrewd, savvy U.S. Attorney Chuck Rhoades (Giamatti) and the brilliant, ambitious hedge fund king Bobby Axelrod (Lewis) are on an explosive collision course, with each using all of his considerable smarts, power and influence to outmaneuver the other. The stakes are in the billions in this timely, provocative series." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
      ]
    }
  }
  changeRentedStatus = (movieId) => {
debugger 
let updatedMovies = [...this.state.movies]
let indexMovieToUpdate = updatedMovies.findIndex(m => movieId === m.id)
let newMovieData = updatedMovies[indexMovieToUpdate]
updatedMovies[indexMovieToUpdate].isRented = ! updatedMovies[indexMovieToUpdate].isRented
updatedMovies.splice(indexMovieToUpdate, newMovieData)
this.setState({movies: updatedMovies})
  }

  
  
   
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div id ="navbar">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
              <div id = "logo">REFLIX</div>
            </div>
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/catalog" render={() => <Catalog movies={this.state.movies} changeRented = {this.changeRentedStatus} />} />
            <Route path="/catalog/:movieId" exact render={({ match }) => <MovieDetail match={match} movies= {this.state.movies} changeRented = {this.changeRented}/>} />
          </div>
        </Router>

      </div>
    );
  }

}

export default App;
