import React  from 'react';
import ImageSlider from 'react-native-image-slider';


class Slide extends React.Component {
  render() {

    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/people',
      'https://placeimg.com/640/640/animals',
      'https://placeimg.com/640/640/beer',
    ];

    
    return (<ImageSlider autoPlayWithInterval={2000} images={[
      'http://placeimg.com/640/480/any',
      'http://placeimg.com/640/480/any',
      'http://placeimg.com/640/480/any'
    ]}/>)
    
  }
}

export default Slide; // Don’t forget to use export default!