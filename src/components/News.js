import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  article = [
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Guardian staff and agencies",
      "title": "Apple warns iPhone shipments will be delayed due to Covid restrictions at Foxconn plant",
      "description": "Tech company says customers will experience longer wait times as the plant in China is operating at reduced capacityApple has said it expects lower iPhone 14 Pro and iPhone Pro Max shipments than previously anticipated as Covid-19 restrictions temporarily dis…",
      "url": "https://www.theguardian.com/technology/2022/nov/07/apple-warns-iphone-shipments-will-be-delayed-due-to-covid-restrictions-at-foxconn-plant",
      "urlToImage": "https://i.guim.co.uk/img/media/8f4113299e3b2860ab1f06bd3be2402d54399197/0_293_4482_2689/master/4482.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=edee0dae65afc319995e5e5e7c95996d",
      "publishedAt": "2022-11-07T00:23:03Z",
      "content": "Apple has said it expects lower iPhone 14 Pro and iPhone Pro Max shipments than previously anticipated as Covid-19 restrictions temporarily disrupt production at an assembly facility in Zhengzhou, Ch… [+2168 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "mloh@businessinsider.com (Matthew Loh)",
      "title": "Expect fewer iPhones in your Christmas stockings: Apple just warned of fewer iPhone 14 Pro and Pro Max shipments due to supply disruptions in China",
      "description": "Customers should expect longer wait times for their phone orders, Apple said, warning of delays due to COVID curbs at a major iPhone factory in China.",
      "url": "https://www.businessinsider.com/apple-expects-longer-wait-times-iphone-14-pro-max-foxconn-2022-11",
      "urlToImage": "https://i.insider.com/63687c33c81699001894ae90?width=1200&format=jpeg",
      "publishedAt": "2022-11-07T05:25:02Z",
      "content": "Customers who ordered the iPhone 14 Pro or iPhone 14 Pro Max should expect \"longer wait times\" for their new phones, Apple warned on Sunday.\r\nThe tech giant said it's anticipating lower shipments for… [+2910 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hackaday"
      },
      "author": "Dan Maloney",
      "title": "Hackaday Links: November 6, 2022",
      "description": "Remember the chip shortage? We sure do, mainly because as far as we can tell, it’s still going on, at least judging by the fact that you can’t get a Raspberry Pi for love or money. But …",
      "url": "https://hackaday.com/2022/11/06/hackaday-links-november-6-2022/",
      "urlToImage": "https://hackaday.com/wp-content/uploads/2014/11/had-links-banner.jpg",
      "publishedAt": "2022-11-07T00:00:43Z",
      "content": "Remember the chip shortage? We sure do, mainly because as far as we can tell, it’s still going on, at least judging by the fact that you can’t get a Raspberry Pi for love or money. But that must just… [+3433 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Trevor Mogg",
      "title": "iPhone customers will have to wait longer for new handset, Apple says",
      "description": "Apple has said that customers planning to buy an iPhone 14 Pro or iPhone 14 Pro Max face longer wait times due to an issue at a key manufacturing facility.",
      "url": "https://www.digitaltrends.com/mobile/iphone-customers-face-longer-wait-for-new-handset/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/11/pixel-pals-iphone-14-pro-dynamic-island-6.jpg?p=1",
      "publishedAt": "2022-11-07T03:10:54Z",
      "content": "In an unusually upfront admission, Apple said on Sunday that customers planning to buy an iPhone 14 Pro or iPhone 14 Pro Max face longer wait times for their order due to COVID-19 restrictions impact… [+1745 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Malcolm Owen)",
      "title": "iPhone 14 Pro lead times elevated but stable, iPhone 14 demand 'modest'",
      "description": "Lead times for the iPhone 14 Pro models have stabilized after increasing due to the Zhengzhou factory's COVID issues, an availability tracker states, while demand for the iPhone 14 models are \"modest\" in comparison.iPhone 14 ProIn the ninth week of the Apple …",
      "url": "https://appleinsider.com/articles/22/11/07/iphone-14-pro-lead-times-elevated-but-stable-iphone-14-demand-modest",
      "urlToImage": "https://photos5.appleinsider.com/gallery/51248-101265-50854-100402-iphone_14_pro_max_sensor_housing-xl-xl.jpg",
      "publishedAt": "2022-11-07T00:07:10Z",
      "content": "iPhone 14 Pro\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nLead times for the iPhone 14 Pro models have stabilized after increasing due to the Zhengzho… [+2341 chars]"
    }
  ]
  constructor() {
    super();
    console.log("this is a constructor");
    this.state={
      articles:this.article,
      loading:false
    }
  }
  render() {
    return (
      <div> 
        <div className="container-fluid">
          <div className='row'>
              {this.state.articles.map((e)=>{
                return <div className="col mx-3" key={e.url}>
                  <NewsItem title={e.title.slice(0,20)} desc={e.description.slice(0,150)} imgUrl={e.urlToImage} newsUrl={e.url}  />
                </div>
              })}
          </div>
        </div>
      </div>
    )
  }
}

export default News
