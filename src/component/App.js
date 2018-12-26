import React, { Component } from 'react';
import Loader from './Loader';
import HeaderButtons from './HeaderButtons';
import Beers from './Beers';
import Modal from './Modal';

const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';

class App extends Component {

 constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      view: 'flex-25',
      sort: 'id',
      modalImage: 'https://i.imgur.com/jBj0pof.jpg',
      flavorText: "Mmmmm! Tasty!",
      show: false,
      beers: []
    };

    this.getBeers = this.getBeers.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  showModal = () => {
    this.setState({
      // ...this.state,
      show: !this.state.show
    });
  }


// General comparative sort
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

// Sort once by month, then by year. Date Format: MM/YYYY
  beerDateSort(key, slicer){
    return function(a,b){
      if (a[key].slice(slicer) < b[key].slice(slicer)) return -1;
      if (a[key].slice(slicer) > b[key].slice(slicer)) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.beers];
      //Write Handler for first_brewed
      if (key === "first_brewed"){
      arrayCopy.sort(this.beerDateSort(key, -4));
      arrayCopy.sort(this.beerDateSort(key, 3));
      this.setState({beers: arrayCopy});
    }
    else{
      arrayCopy.sort(this.compareBy(key));
      this.setState({beers: arrayCopy});
    }
  }
    
  // Get Beers from Punk API
  getBeers() {
      this.setState({isLoading: true});
      fetch(API_ENDPOINT)
      .then(results => {
        return results.json();
      }).then((jsonData) => {
          this.setState({ beers: jsonData, isLoading: false, });
    });
  }

  // Toggle between Quartered and Halved views. Mobile is always 100%.
  toggleView() {
    if(this.state.view === 'flex-25'){
      this.setState({view: 'flex-50'})
    };  
    if(this.state.view === 'flex-50'){
      this.setState({view: 'flex-25'})
    };
  }

  // update sorted list
  onChangeSort(newSort) {
        this.setState({
            sort: newSort
        })
        this.sortBy(newSort);
  }
  
  //Modal Activator and swap modal content
  onModalActivate(image, tagline){
    console.log(this.state);
      console.log(image.image_url);
      console.log(tagline.tagline);
      this.setState({
        modalImage: image.image_url,
        flavorText: tagline.tagline
      })

      // this.setState((prevState, props)=>({
      //   modalImage: 'image',
      //   flavorText: 'tagline'
      // }))

      console.log(this.state.modalImage);
      console.log(this.state.flavorText);
      this.showModal();
    }

  renderBeers() {

      const { beers, view } = this.state;

      return beers.map((beer, i) => {

        return (
          <Beers
            key = {beer.id}
            view = {view}
            index= {i}
            handlingModal = {this.onModalActivate.bind(this)}
            {...beer}
          />
        );
      });
    }

    render() {

      const { isLoading } = this.state;
      const { view } = this.props;

      const showBeers = this.renderBeers();
      
      if (isLoading) {
       return <Loader/>;
      }
      
      return (

        <div>
          <HeaderButtons 
              view = {view} 
              sort = {this.state.sort}
              initialSort = {this.state.sort}
              BeerClickHandler = {this.getBeers}
              toggleClickHandler = {this.toggleView}
              sortSelectHandler = {this.onChangeSort.bind(this)}
              />
          <div className="flex-container">
              {showBeers}
          </div>

          {/* <div className="generic-center">
              <button type="button" onClick={this.showModal}> Test: Show Modal</button>
          </div> */}
        <Modal onClose={this.showModal} show={this.state.show}>
              <img className="modal-image" src={this.state.modalImage} alt={this.state.flavorText}></img>
              <p className="modal-text">{this.state.flavorText}</p>
        </Modal>
        </div>
      );
    }
}

export default App;