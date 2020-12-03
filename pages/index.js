import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="screen">
    {/*HEADER*/}
      <header>
        <section className="media-nav">
          <a href="#" className="active">
            Games
          </a>
          <a href="#" className="">Media</a>
        </section>
        <section className="settings">
          <span className="icon">
            <i className="fa fa-search">

            </i>
          </span>
          <span className="icon">
            <i className="fa fa-cog">

            </i>
          </span>
          <span className="icon">
            <img className="user" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=ddcb7ec744fc63472f2d9e19362aa387"/>
          </span>

          <span className="time">4:20 PM</span>
        </section>
      </header>
      {/* BODY */}
      <div className="container">
        {/* Game Navigation */}
        <section className="game-nav">
          <div className="game active">
            <i className="fa fa-location-arrow"></i>
            <img src="" />
          </div>
          <div className="game">
            <div className="img"
            style={{
              background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              transform: "scale(1.5)",
            }}></div>
          </div>
          <div className="game">
            <div className="img"
            style={{
              background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420086cv11a.jpg;maxHeight=640;maxWidth=550')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.5)",
            }}></div>
          </div>
          <div className="game">
            <div className="img"
            style={{
              background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438717_sd.jpg;maxHeight=640;maxWidth=550')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.5)",
            }}></div>
          </div>
          <div className="game">
            <div className="img"
            style={{
              background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6442/6442231_sd.jpg;maxHeight=640;maxWidth=550')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.5)",
            }}></div>
          </div>
          <div className="game">
            <div className="img"
            style={{
              background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430152_sd.jpg;maxHeight=640;maxWidth=550')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.5)",
            }}></div>
          </div>
          <div className="game">
            <div className="img"
            style={{
              background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426004_sd.jpg;maxHeight=640;maxWidth=550')",
              backgroundSize: "cover ",
              backgroundPosition: "center",
              transform: "scale(1.5)",
            }}></div>
          </div>
          <div className="game">
            <div className="img"
            style={{
              background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427993cv11d.jpg;maxHeight=640;maxWidth=550')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.5)",
            }}></div>
          </div>
        </section>
        {/* Info */}
        <section className="info">
            <span className="sub-title">
              Official new from Playstation | 12/15/2020
            </span>
            <h1>Ready for a PS5 Adventure?</h1>
            <p>
              ASTRO'S PLAYROOM is pre-loaded and waiting for you! Explore the new capabilities of PS5 and feel the power of our innovative DualSense techno...
            </p>
        </section>
      </div>
      {/* Trailers  */}
      <section className="video-trailers">
            <div className="trailer">
              <img className="image" src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"/>
              <div className="video-info">
                <div className="circle-player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="title">Grand Theft Auto 5</span>
              </div>
            </div>
            <div className="trailer">
              <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrchRI8TlWMONswQuaxnjke18k2o2LwPXHA&usqp=CAU"/>
              <div className="video-info">
                <div className="circle-player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="title">God of War</span>
              </div>
            </div>
            <div className="trailer">
              <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqkBEhUKhohXLhs6G9wjVzqIui4pzHQnc2w&usqp=CAU"/>
              <div className="video-info">
                <div className="circle-player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="title">Genshin Impact</span>
              </div>
            </div>
            <div className="trailer">
              <img className="image" src="https://i.pinimg.com/736x/7e/62/46/7e6246028a42ea73c13b1b797d9b8d73.jpg"/>
              <div className="video-info">
                <div className="circle-player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="title">Cuphead 2</span>
              </div>
            </div>
            <div className="trailer">
              <img className="image" src="https://images.spot.im/v1/production/yakgvcypsno3wrpwqavh"/>
              <div className="video-info">
                <div className="circle-player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="title">Dragon's Dogma</span>
              </div>
            </div>
            <div className="trailer">
              <img className="image" src="https://cdn.mos.cms.futurecdn.net/pf9rXsPR6gLfArWHkr8odK.jpg"/>
              <div className="video-info">
                <div className="circle-player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="title">Yakuza: Like a Dragon</span>
              </div>
            </div>
            <div className="trailer">
              <img className="image" src="https://cdn.gamer-network.net/2020/articles/2020-09-13-12-44/godfall-will-be-available-in-three-editions-heres-what-you-get-in-each-one-1599997494896.jpg/EG11/thumbnail/1920x1076/format/jpg/quality/80"/>
              <div className="video-info">
                <div className="circle-player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="title">Godfall</span>
              </div>
            </div>
        </section>
    </div>
  )
}
