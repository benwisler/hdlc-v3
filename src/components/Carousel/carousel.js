import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const img1 = {

}
const items = [
  {
    src: require('../Images/Electric.jpg'),
    altText: 'Slide 1',
    caption: 'Slide 1',
  },

];

class DemoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    


    return (
      <div>
                <style>
          {
            `.btn-social {
                width: 250px;
                margin: 25px;
                position: relative;
                opacity: 0.8;
                transition: 0.4s ease;
                cursor: pointer;
            }
            .logoClass {
              width: 100%
            }
            .btn-social:hover {
                opacity: 1;
                z-index: 100;
                /** default is 1, scale it to 1.5 */
                transform: scale(1.5, 1.5);
            
                /** translate 50px from left, and 40px from top */
                /** transform: translate(50px, 40px); *//
            
                /** combine both scale and translate */
                /** transform: scale(1.5, 1.5) translate(50px, 40px); */
            }`
          }
        </style>
      <img     src={ require('../Images/Electric.jpg')} className="btn-social" />
<img src={ require('../Images/Electrical.JPG')} className="btn-social" />
<img src={ require('../Images/Menuboard.jpg')} className="btn-social" /><br />
<img src={ require('../Images/Jeremy.jpg')} className="btn-social" />
<img src={ require('../Images/Mcdlights.jpg')} className="btn-social" />
<img src={ require('../Images/Warehousewall.jpg')} className="btn-social" /><br />
<img src={ require('../Images/LightsFB.jpg')} className="btn-social" />
<img src={ require('../Images/IMG_1235.JPG')} className="btn-social" />
<img src={ require('../Images/FluorescencevsLED.jpg')} className="btn-social" />




      </div>

    );
  }
}


export default DemoCarousel;