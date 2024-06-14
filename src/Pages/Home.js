import React from "react";
import "../App.css";
function Home(){
    return(
        <div style={{backgroundColor:'#f0f0f0'}}>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-indicators" id="Home">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={`${process.env.PUBLIC_URL}/image/gt2.JPG`}  className="d-block w-100" alt="img" height="550px"/>
    <div className="carousel-caption d-none d-md-block">
      <h3 className="text">Wedding Hall</h3>
      <h5 className="text">GETTING MARRIED SOON? THEN, YOU'RE AT RIGHT DESTINATION!</h5>
    </div>
  </div>
  <div className="carousel-item">
    <img src={`${process.env.PUBLIC_URL}/image/gt1.jpg`}  className="d-block w-100" alt="img" height="550px"/>
    <div className="carousel-caption d-none d-md-block">
      <h3 className="text">Wedding Hall</h3>
      <h5 className="text">GETTING MARRIED SOON? THEN, YOU'RE AT RIGHT DESTINATION!</h5>
    </div>
  </div>
  <div className="carousel-item ">
    <img src={`${process.env.PUBLIC_URL}/image/gt6.jpg`}  className="d-block w-100" alt="img" height="550px"/>
    <div className="carousel-caption d-none d-md-block">
      <h3 className="text">GANGAARAM FUNCTION HALL</h3>
      <h5 className="text">WE WILL MAKE YOUR DREAM WEDDING COME TRUE...</h5>
    </div>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>


<div id="Amenities">
<h4 id="amenities" className="text">Feel that Best Amenities</h4>
<h2 id="amenities1" className="text">Go for the Best Event Hall in Tirupati</h2>

<div id="grid">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col p-3 mb-5 bg-body rounded">
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/gt7.JPG`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Function Hall</h5>
        <p className="card-text">Every time Gangaaram assures you top- notch hospitality experience. Our Services are based on making your events most successful which makes us to stand together with the one of
          top Kalyana Mandapams in Tirupati.</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded">
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/gt26.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Dinning Hall</h5>
        <p className="card-text">Upto 250 Members can be served at a single time in Gangaaram function hall and maintained with cleanliness</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded">
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/gt15.JPG`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Wedding Hall</h5>
        <p className="card-text">Wedding Halls from Gangaaram function hall is available for all functions with 600 members of capacity be it Public Relations, Conferences and Business related Functions. Celebrate your Birthday functions, anniversaries, Alumni Meets and Cocktail Parties Meet</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded" >
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/gt33.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Buffet System</h5>
        <p className="card-text">In Gangaaram function hall there is seperate space for the buffet system.</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded" >
    <div className="card h-100 w-100">
      <img src={`${process.env.PUBLIC_URL}/image/gt25.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Room Availability</h5>
        <p className="card-text">In Gangaaram function hall there are upto 10 rooms for different number of guest including double bed rooms and seperate rooms for Groom and Bride.</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded" >
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/gt6.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Parking Facility</h5>
        <p className="card-text">In Gangaaram function hall there is 2 acres of parking Facility that are in a organized way. There is extra parking facility also if needed for the customers</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</div>

);
}
export default Home;