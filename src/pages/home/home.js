import React from 'react'
// import imagename from '../../resources/images/logo192.png'
import Card from '../../components/core/card/card'
import CardHeader from '../../components/core/card/card-header'
// import CardImage from '../../components/core/card/card-image'

export default function HomePage() {
  const listItem = [
    {
      title: 'Shiba Inu',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Shiba Inu',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Shiba Inu',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Shiba Inu',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Shiba Inu',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    }
  ]
  return (
    <div className="container mx-auto">
      <h1>Home Page</h1>
      {/* <p>
        <img alt="logo name" src={imagename} />
      </p> */}
      <div className="grid grid-flow-row grid-cols-1 gap-2 sm: grid-cols-3 md:gap-4 xl:grid-cols-5 ">
        {listItem.map((item, index) => (
          <Card key={index}>
            <CardHeader>{item.title}</CardHeader>
            {/* <CardImage src={item.img} /> */}
          </Card>
        ))}
      </div>
    </div>
  )
}
