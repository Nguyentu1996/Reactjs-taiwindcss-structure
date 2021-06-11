import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

function CCarousel() {
  return (
    <Carousel>
      <div>
        <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="PhotoInu" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="PhotoInu" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="PhotoInu" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}
export default CCarousel
