import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types';

export class News extends Component {

    /* Method 1 using array */

 /* articles = [{ // creating array of name articles
    "source": {
        "id": "cnn",
        "name": "CNN"
    },
    "author": "Issy Ronald",
    "title": "Prince Harry and Meghan share rare photo of their children on Christmas card - CNN",
    "description": "Prince Harry and Meghan, Duchess of Sussex have shared a rare photo of their children on their Christmas card this year.",
    "url": "https://www.cnn.com/2024/12/17/uk/harry-meghan-christmas-card-children-intl-scli/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-14482526db.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-12-17T12:26:00Z",
    "content": "Prince Harry and Meghan, Duchess of Sussex have shared a rare photo of their children on their Christmas card this year.\r\nReleased on Monday, the card features a collage of images taken throughout th… [+1484 chars]"
},
{
    "source": {
        "id": null,
        "name": "CNBC"
    },
    "author": "Gabrielle Fonrouge",
    "title": "Walmart employees are now wearing body cameras in some stores - CNBC",
    "description": "Walmart store associates are now using body cameras in some locations as retailers look to deter theft and make employees safer.",
    "url": "https://www.cnbc.com/2024/12/17/walmart-employees-wearing-body-cameras.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108064301-1731935488675-gettyimages-2184732367-PWeaver-241117-08.jpeg?v=1734363857&w=1920&h=1080",
    "publishedAt": "2024-12-17T12:00:01Z",
    "content": "Walmart has started giving store-level associates body cameras to wear as part of a pilot program at some of its U.S. locations, CNBC has learned. \r\nIt's not clear how many of Walmart's stores have t… [+7600 chars]"
},
{
    "source": {
        "id": null,
        "name": "Hindustan Times"
    },
    "author": "HT News Desk",
    "title": "Horoscope Today LIVE Updates on December 17, 2024 : Chinese horoscope for December 2024: Here's why these zodiac signs will attract financial luck by the end of 2024 - Hindustan Times",
    "description": "Horoscope Today Live: Find out how the stars are aligning for you today! Get your daily horoscope for insights on relationships, career, and more.",
    "url": "https://www.hindustantimes.com/astrology/horoscope/horoscope-today-live-updates-december-17-2024-101734377404649.html",
    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/12/17/550x309/ge3f0e3696a0923e347e05c0d454f961357bd77f2d8a09c5ed_1734431619579_1734431619869.jpg",
    "publishedAt": "2024-12-17T10:35:10Z",
    "content": "Horoscope Today Live: Your horoscope today reveals insights into love, career, and health, guiding you toward a fulfilling day. Find out how the stars align for you, offering gentle reminders and hel… [+4910 chars]"
},
{
    "source": {
        "id": null,
        "name": "NBCSports.com"
    },
    "author": "Michael David Smith",
    "title": "NFL Playoff Picture 2024: Updated AFC and NFC Standings, bracket, tiebreakers for Week 16 - NBC Sports",
    "description": "The Bills, Texans and Chiefs have clinched their divisions, the Lions, Steelers, Vikings and Eagles have clinched playoff berths, and eight more playoff spots are up for grabs.",
    "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/nfl-playoff-picture-2024-updated-afc-and-nfc-standings-bracket-tiebreakers-for-week-16",
    "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/d2c7c5b/2147483647/strip/true/crop/7662x4310+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa8%2F8f%2F2ac6df104cd58742a752e2ae3bf3%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2190321157",
    "publishedAt": "2024-12-17T10:28:27Z",
    "content": "The Bills, Texans and Chiefs have clinched their divisions, the Lions, Steelers, Vikings and Eagles have clinched playoff berths, and eight more playoff spots are up for grabs. Heres how the playoff … [+2556 chars]"
},
{
    "source": {
        "id": "google-news",
        "name": "Google News"
    },
    "author": "The New York Times",
    "title": "Drugmakers Paid PBMs Not to Restrict Opioid Prescriptions - The New York Times",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQSVhRQlhNd3pHOERrVkZhTnJFVUw1Nm5mZG9SUFRkTDhmUVJsemt6UlJyVVZJVVFMUDUweklsc3JRN3g1aWlYT2hkYkRBeV9kVFdFUFhkR0s1TFdsTUt1ZFRUbHBYSUc5XzRMblYyQk1laHU2cjhCZXRYSjBySmE3RlFreklmSnV4OGc?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-12-17T10:00:42Z",
    "content": null
},
{
    "source": {
        "id": "politico",
        "name": "Politico"
    },
    "author": "Daniel Payne",
    "title": "RFK Jr. has public health leaders quietly hopeful — and scared as hell - POLITICO",
    "description": "Public health officials see promise in some of Robert F. Kennedy Jr.’s plans to prevent chronic disease but despair at his vaccine conspiracy theories.",
    "url": "https://www.politico.com/news/2024/12/16/rfk-jr-public-health-leaders-worried-hopeful-00194641",
    "urlToImage": "https://static.politico.com/ab/71/82b6e5df4b23a86120310dbf3246/20241216-katsanis-rfk01.jpg",
    "publishedAt": "2024-12-17T10:00:00Z",
    "content": "This is a really, really sticky situation, said Katelyn Jetelina, an epidemiologist who has focused on improving public trust in quality health information since the pandemic. How do we push one part… [+8882 chars]"
},
{
    "source": {
        "id": "google-news",
        "name": "Google News"
    },
    "author": "ABC News",
    "title": "Wisconsin school shooting latest: Attack happened inside classroom, police say - ABC News",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNeTdCb3UycEZEREtUT3dtY2JGdWFMU2VlYzJvam5ETER5Q2kyVG5LTjZ4YWlEdmVpN1hpVXU3aFZoZmt6N2lLZ3Z5ekdiWGRYSWhBN0g3bWVyMEZqWlQwRlk5MVk2Nmd3VlVzWGZydGRpS2lTNmtCNHJid1dZZDdNUmZxRE5uZnRkTk5KemZkMkpzd2hWOXp6ajRKTzF3andvTjJkSDF4YjdkOGI4SDJj0gG0AUFVX3lxTE9XLWlpYm93LW5hMnRlNldRTWkyRGI0QVNHbm9kMXhEZG1vVmw4LUxfcEY5aVNZWlloM1lKa2c3ZGJCbHNWaWxMOWlTczNEeGQ1LXFzTURDM3Z1bTVsOThtUzh4NUd6QmJ2UlUwWkhiODRjWUdQZXNrMUs2bjUwMV9tVFgwTjVNVUdwMlppZm1LaFZkdFdLRkx3bHpUbkRmb3BGMGRTcG5RQ2U5N3FxM3JoUWlIbQ?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-12-17T09:02:42Z",
    "content": null
},
{
    "source": {
        "id": "google-news",
        "name": "Google News"
    },
    "author": "The New York Times",
    "title": "U.S. Cites ‘Indications’ North Korean Soldiers Died Fighting for Russia - The New York Times",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQNTJzVmN1THNWNWNReFg2MkM1Skc0a2dPUEI5M0hiTmt3UmpWdjh0YmowV1dySENQeUg2SkVmSjE5SjhqaHFOY05rT09jblcwVVhfQWsydC1sMFduQ2x5dFZ5MVNyMmltRmtKaEMyMDZ2c0NtZngwcEs1dzZ4OGl6ZDRReTRrejBxZHRr?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-12-17T08:34:53Z",
    "content": null
},
{
    "source": {
        "id": null,
        "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Igor Kirillov: Russian general in charge of nuclear protection forces killed in Moscow explosion - BBC.com",
    "description": "Lt Gen Igor Kirillov was charged yesterday in Ukraine for the use of chemical weapons, and was sanctioned by the UK in October.",
    "url": "https://www.bbc.com/news/live/c4gx6p347dgt",
    "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png",
    "publishedAt": "2024-12-17T08:15:00Z",
    "content": "Frank GardnerSecurity correspondent\r\nTo some in the West, Lt Gen Kirillov was a ridiculous, almost comical character, prone to spouting wild theories with no basis in fact. He reportedly claimed that… [+1017 chars]"
},
{
    "source": {
        "id": null,
        "name": "BBC News"
    },
    "author": null,
    "title": "Japanese billionaire Masayoshi Son pledges major US investment - BBC.com",
    "description": "Masayoshi Son said he would invest $100bn in the US, and others could follow during Trump's second term.",
    "url": "https://www.bbc.com/news/articles/c4gld1r9xpjo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6d86/live/2f852970-bbdc-11ef-afca-1be4bcb5233d.jpg",
    "publishedAt": "2024-12-17T08:12:00Z",
    "content": "With President-elect Donald Trump pitching the US as a great place for business, firms around the world are figuring out how to answer his call.\r\nJapanese tech billionaire Masayoshi Son, a colourful … [+3853 chars]"
},
{
    "source": {
        "id": null,
        "name": "Burlington Free Press"
    },
    "author": "Alex Abrami",
    "title": "Cardiac Cats: Vermont men's soccer win first national championship in comeback vs Marshall - Burlington Free Press",
    "description": "For the first time in program history, UVM soccer won the NCAA championship, defeating Marshall in overtime.",
    "url": "https://www.burlingtonfreepress.com/story/sports/college/vermont/2024/12/16/vermont-soccer-vs-marshall-score-ncaa-national-championship-college-cup-overtime-final-uvm/76927559007/",
    "urlToImage": "https://www.burlingtonfreepress.com/gcdn/authoring/authoring-images/2024/12/17/NPAL/77038369007-usatsi-25005315.jpg?crop=6499,3657,x0,y338&width=3200&height=1801&format=pjpg&auto=webp",
    "publishedAt": "2024-12-17T07:07:30Z",
    "content": "CARY, N.C. - How many lives do the Vermont Catamounts have? Just enough to claim a golden NCAA men's soccer national championship.\r\nFor the second straight game, Vermont forced overtime with a late e… [+4553 chars]"
},
{
    "source": {
        "id": "google-news",
        "name": "Google News"
    },
    "author": "CNN",
    "title": "How Dominique Pelicot is accused of organizing France’s worst sex crime in a generation - CNN",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPaWdGSk93M01CNGs2VDJmcFlzOERyMU4zZDRhd0VRamw4TElmZ0xwX3d0ZWVOdHp5R1dRVWkxcGtDcWZSOFpCRHoxUDAybDhXYm5TTmdCZTJrdURtSDlkODdoaFNNWEdTN1JySVZ2NkR1c25NUFN6UlJ2aFFOcjRQSmd2aG0zWF81Wnc?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-12-17T06:06:07Z",
    "content": null
},
{
    "source": {
        "id": "google-news",
        "name": "Google News"
    },
    "author": "Reuters",
    "title": "Asian shares waver, dollar firms ahead of central bank meetings - Reuters",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTFBOUzdTUGRxYnFxM3JJbXRHR2tVZ2xWcWk3Y3VFemZ2LUpCamk2QnRUSXFEejhxTi1INnpDUzJMcmR3VXFXeUVOU1pibEFwUEJHbHBveE5NTFIzUVNCRUx1TjQzaFZlUDAzbnVuNWg5YmkzN2haMGc?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-12-17T05:24:00Z",
    "content": null
},
{
    "source": {
        "id": null,
        "name": "80.lv"
    },
    "author": "Theodore McKenzie",
    "title": "Catly Developer Denies NFT & AI Accusations - 80.lv",
    "description": "At the same time, the evidence of SuperAuthenti being super shady continues to pile up.",
    "url": "https://80.lv/articles/the-catly-drama-continues-as-the-developer-denies-nft-accusations/",
    "urlToImage": "https://cdn.80.lv/api/upload/meta/38597/images/6761091a8130d/contain_1200x630.jpg",
    "publishedAt": "2024-12-17T05:20:19Z",
    "content": "Lastly, and most intriguingly, a connection emerged between SuperAuthenti and The Game Awards, which could explain how a game like Catly managed to worm its way into the most prestigious gaming award… [+1364 chars]"
},
{
    "source": {
        "id": null,
        "name": "Forbes"
    },
    "author": "Stephen Pastis, Siladitya Ray",
    "title": "Mystery Drones Saga: Federal Agencies Say Sightings Are Mix Of Legal Drones, Aircraft And Stars (Updated) - Forbes",
    "description": "Officials sound alarm over reports of the strange sights—seen over New Jersey, New York, Maryland and Pennsylvania—with one asking for a “limited state of emergency.”",
    "url": "https://www.forbes.com/sites/stephenpastis/2024/12/17/mystery-drones-saga-federal-agencies-say-sightings-are-mix-of-legal-drones-aircraft-and-stars-updated/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/67602969e2df9f8dc3cb6a5a/0x0.jpg?format=jpg&crop=2000,1125,x0,y102,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-12-17T05:18:00Z",
    "content": "A group of federal agencies on Monday night said the weeks-long citings of low-flying drone-like objects in the night skies of New Jersey and other nearby states are likely a mix of legally flown air… [+15242 chars]"
},
{
    "source": {
        "id": "abc-news",
        "name": "ABC News"
    },
    "author": "CHARLOTTE GRAHAM-MCLAY Associated Press",
    "title": "Magnitude 7.3 earthquake hits Pacific island nation of Vanuatu - ABC News",
    "description": "A powerful magnitude 7.3 earthquake has struck just off the coast of Vanuatu, causing widespread destruction in the South Pacific island nation",
    "url": "https://abcnews.go.com/International/wireStory/magnitude-73-earthquake-hits-pacific-island-nation-vanuatu-116851766",
    "urlToImage": "https://i.abcnewsfe.com/a/f4157032-ecbb-47f4-99c3-0e2234357d14/wirestory_3e4cc1e02bc0ec62d5931b00286688ed_16x9.jpg?w=1600",
    "publishedAt": "2024-12-17T05:03:45Z",
    "content": "WELLINGTON, New Zealand -- A powerful magnitude 7.3 earthquake struck just off the coast of Vanuatu on Tuesday, causing widespread destruction in the South Pacific island nation as the injured began … [+4892 chars]"
},
{
    "source": {
        "id": null,
        "name": "CBS Sports"
    },
    "author": "",
    "title": "2025 NFL Draft order: Raiders retake No. 1 overall pick from Giants after loss to Falcons on Monday night - CBS Sports",
    "description": "A look at the current draft order",
    "url": "https://www.cbssports.com/nfl/draft/news/2025-nfl-draft-order-raiders-retake-no-1-overall-pick-from-giants-after-loss-to-falcons-on-monday-night/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/12/17/6c87c16c-d8a5-4715-9107-a1b930675c27/thumbnail/1200x675/59b85c9bcdeb3fc77b066a7636957134/raiders.jpg",
    "publishedAt": "2024-12-17T04:41:00Z",
    "content": "The New York Giants claimed the top spot in the 2025 NFL Draft after the Baltimore Ravens handed them their ninth straight defeat on Sunday, but the Las Vegas Raiders retook the torch in their \"Monda… [+5624 chars]"
},
{
    "source": {
        "id": "espn",
        "name": "ESPN"
    },
    "author": null,
    "title": "Covington: 'Unfortunate' Buckley fight was stopped - ESPN",
    "description": "Colby Covington on Monday decried the fact that his UFC bout against Joaquin Buckley was stopped in the third round due to excessive bleeding from a cut above his right eye.",
    "url": "https://www.espn.com/mma/story/_/id/43015018/colby-covington-upset-joaquin-buckley-fight-was-stopped",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1217%2Fr1428924_1296x729_16%2D9.jpg",
    "publishedAt": "2024-12-17T04:30:00Z",
    "content": "Dec 16, 2024, 11:30 PM ET\r\nColby Covington on Monday decried the fact that his UFC bout against Joaquin Buckley on Saturday in Tampa, Florida, was stopped in the third round due to excessive bleeding… [+1871 chars]"
},
{
    "source": {
        "id": null,
        "name": "Spaceflight Now"
    },
    "author": null,
    "title": "U.S. Space Force launches expedited GPS mission using Falcon 9 rocket - Spaceflight Now",
    "description": null,
    "url": "https://spaceflightnow.com/2024/12/17/u-s-space-force-launches-expedited-gps-mission-using-falcon-9-rocket/",
    "urlToImage": null,
    "publishedAt": "2024-12-17T04:08:32Z",
    "content": "The GPS 3 Space Vehicle 07 stands in a clean room at Lockheed Martin’s facilities in Littleton, Colorado. Image: Lockheed Martin\r\nThe latest third-generation Global Positioning System (GPS) satellite… [+5781 chars]"
},
{
    "source": {
        "id": null,
        "name": "BBC News"
    },
    "author": null,
    "title": "Prince Andrew will not join royals at Sandringham for Christmas - BBC.com",
    "description": "An alleged Chinese spy, linked to the royal, was named on Monday following a High Court judgement.",
    "url": "https://www.bbc.com/news/articles/ce32n0eze87o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13a8/live/60295a20-bbcc-11ef-96a6-9d05544d8e20.jpg",
    "publishedAt": "2024-12-17T03:37:01Z",
    "content": "The Duke of York will not join the rest of the Royal Family for the traditional Christmas gathering in Sandringham, royal sources have told the BBC.\r\nIt is expected that Prince Andrew will \"honourabl… [+3151 chars]"
}
]
*/

    static defaultProps = {
        country:'us',
        pageSize:9,
        category:'general'
    }
     
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
      }

  constructor(){
    super();
    this.state = {

    /*array method:*/  
    // articles: this.articles  // entire contenet of array is inside articles which is before :

    // without using array method
    articles:[],
    page:1
    };
  }

  async componentDidMount(){
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3468b6a9c314118ae192341d8834f26`
    let data = await fetch(apiUrl) // fetch the apiUrl and store it in variable data
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        totalResult:parsedData.totalResults,    
        articles:parsedData.articles})
  } 
  prevPage = async ()=>{
 
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3468b6a9c314118ae192341d8834f26&page=${this.state.page -1}&pageSize=9`
    this.setState({loading:true})
    let data = await fetch(apiUrl) // fetch the apiUrl and store it in variable data
    let parsedData = await data.json();
    this.setState({
        page:this.state.page -1,
        articles:parsedData.articles,
        loading: false })
        
  }
  nextPage = async ()=>{

    if (this.state.page+1 > Math.ceil(this.state.totalResult/9)) {
        // if there are no articles left to display on next page, then making next page blank
    } else {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3468b6a9c314118ae192341d8834f26&page=${this.state.page +1}&pageSize=9`
        let data = await fetch(apiUrl) // fetch the apiUrl and store it in variable data
        let parsedData = await data.json();
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles })
    }

   
  }
  render() {
    return (
      <div>
          <div className='container my-3'>
            <h2>Headlines</h2>
            {
                this.state.loading && <Loading/>
            }
            

            <div className='row'>
              {
               !this.state.loading && this.state.articles .map((element) => {
                  return  <div className='col-md-4' key={element.url}>
                  <NewsItems title = {element.title?element.title.slice(0,50):""} description = {element.description?element.description.slice(0,50):""} imgUrl ={element.urlToImage} newsUrl = {element.url}/>
                  </div>
                })
              }
                           
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button" onClick={this.prevPage} disabled = {this.state.page<=1} className="btn btn-dark my-3">&larr;Previous</button>
            <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResult/9)} onClick={this.nextPage} className="btn btn-dark my-3">Next&rarr;</button>
            </div>



            
        </div>
      </div>
      
    )
  }
}

export default News