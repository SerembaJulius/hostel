import React, { useState }  from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';
import Card from './Card';
import './hostels.css';
import "./Search.css";

const Hostels = () => {
  const hostelList = [
    { name: "apex", rating: 4 },
    { name: "olympia", rating: 3 },
    { name: "mish", rating: 5 },
    { name: "kare", rating: 4 },
    { name: "clibas", rating: 3 },
    { name: "aryan", rating: 5 },
    { name: "khan", rating: 4 },
    { name: "julian", rating: 3 },
  ];

  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const history = useHistory();

  const filterBySearch = debounce((event) => {
    const query = event.target.value.toLowerCase();
    const updatedList = hostelList.filter(
      (hostel) =>
        hostel.name.toLowerCase().indexOf(query) !== -1 ||
        hostel.rating.toString().indexOf(query) !== -1
    );

    setFilteredList(updatedList);
    setSearchQuery(query);

    if (event.key === 'Enter' && updatedList.length === 1) {
      const hostelFolder = updatedList[0].name.toLowerCase();
      history.push(`/Hostel/${hostelFolder}`);
    }
  }, 300);

  const cards = Array.from({ length: 10 }, (_, index) => index + 1);
  const [showAll, setShowAll] = useState(false);
  const kikoniCardData = [
    {
      title: 'Olympia Hostel',
      ratings: 4,
      text: 'gshyfghgytfgbhxvcbxvgvdhtysfghggvcxvgcbh.',
      link1: '/olympia',
      link2: '#2',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 2 Title',
      ratings: 4,
      text: 'Content for card 2.',
      link1: '#3',
      link2: '#4',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    
  ];

  const kikumikikumiCardData = [
    {
      title: 'Olympia Hostel',
      ratings: 4,
      text: 'gshyfghgytfgbhxvcbxvgvdhtysfghggvcxvgcbh.',
      link1: '#1',
      link2: '#2',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 2 Title',
      ratings: 4,
      text: 'Content for card 2.',
      link1: '#3',
      link2: '#4',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    
  ];

  const wandegeyaCardData = [
    {
      title: 'Olympia Hostel',
      ratings: 4,
      text: 'gshyfghgytfgbhxvcbxvgvdhtysfghggvcxvgcbh.',
      link1: '#1',
      link2: '#2',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 2 Title',
      ratings: 4,
      text: 'Content for card 2.',
      link1: '#3',
      link2: '#4',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    {
      title: 'Card 3 Title',
      ratings: 4,
      text: 'Content for card 3.',
      link1: '#5',
      link2: '#6',
      imgSrc: 'https://i.imgur.com/ZTkt4I5.jpg',
    },
    
  ];

  const [showAllKikoni, setShowAllKikoni] = useState(false);
  const [showAllKikumikikumi, setShowAllKikumikikumi] = useState(false);
  const [showAllWandegeya, setShowAllWandegeya] = useState(false);

  // Functions to handle "View More" and "View Less" for each section
  const handleViewMoreKikoni = () => {
    setShowAllKikoni(!showAllKikoni);
  };

  const handleViewMoreKikumikikumi = () => {
    setShowAllKikumikikumi(!showAllKikumikikumi);
  };

  const handleViewMoreWandegeya = () => {
    setShowAllWandegeya(!showAllWandegeya);
  };

  // Select the displayed cards based on the showAll state
  const displayedKikoniCards = showAllKikoni ? kikoniCardData : kikoniCardData.slice(0, 3);
  const displayedKikumikikumiCards = showAllKikumikikumi ? kikumikikumiCardData : kikumikikumiCardData.slice(0, 3);
  const displayedWandegeyaCards = showAllWandegeya ? wandegeyaCardData : wandegeyaCardData.slice(0, 3);

  return (
     
    <div>
       {/*  search functionality... */}
    <div className="App">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      {searchQuery && (
        <div id="item-list">
          <h3>Hostels:</h3>
          <ul>
            {filteredList.map((hostel) => (
            <li key={hostel.name}>
            <a
              onClick={(event) => {
                event.preventDefault();
                history.push(`/Hostel/${hostel.name.toLowerCase()}`);
              }}
            >
              {hostel.name} ({hostel.rating})
            </a>
          </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    {/* // <div>
    // <div>
    //   <div>
    //     <input
    //       type="text"
    //       value={searchQuery}
    //       onChange={(event) => filterBySearch(event)}
    //       placeholder="Search by hostel name "
    //     />
    //     <ul>
    //       {filteredList.map((hostel) => (
    //         <li key={hostel.name}>
    //           <a
    //             onClick={(event) => {
    //               event.preventDefault();
    //               history.push(`/Hostel/${hostel.name.toLowerCase()}`);
    //             }}
    //           >
    //             {hostel.name} ({hostel.rating})
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div> */}

    <div className="container">
      {/* Kikoni Section */}
      <section className="kikoni">
        <h1>Kikoni</h1>
        <div className="container mx-auto mt-4">
          <div className="row">
            {displayedKikoniCards.map((card, index) => (
              <div key={index} className="col-md-4">
                <Card {...card} />
              </div>
            ))}
          </div>
          <button className="btn btn-primary mt-3" onClick={handleViewMoreKikoni}>
            {showAllKikoni ? 'View Less' : 'View More'}
          </button>
        </div>
      </section>

        {/* Kikumikikumi Section */}
        <section className="kikoni">
          <h1>Kikumikikumi</h1>
          <div className="container mx-auto mt-4">
            <div className="row">
              {displayedKikumikikumiCards.map((card, index) => (
                <div key={index} className="col-md-4">
                  <Card {...card} />
                </div>
              ))}
            </div>
            <button className="btn btn-primary mt-3" onClick={handleViewMoreKikumikikumi}>
              {showAllKikumikikumi ? 'View Less' : 'View More'}
            </button>
          </div>
        </section>

        {/* Wandegeya Section */}
        <section className="kikoni">
          <h1>Wandegeya</h1>
          <div className="container mx-auto mt-4">
            <div className="row">
              {displayedWandegeyaCards.map((card, index) => (
                <div key={index} className="col-md-4">
                  <Card {...card} />
                </div>
              ))}
            </div>
            <button className="btn btn-primary mt-3" onClick={handleViewMoreWandegeya}>
              {showAllWandegeya ? 'View Less' : 'View More'}
            </button>
          </div>
        </section>
      </div>
    
    </div>
  );

              };
export default Hostels;