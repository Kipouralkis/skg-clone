import React from "react";
import { useParams } from "react-router-dom";
import "./landpageProp.css";
import Card from "react-bootstrap/Card";
import house from "../assets/house.jpg";


const LandpageProp = ({ data }) => {
  const { id } = useParams();
  const property = data.find((property) => property._id.toString() === id);

  return (
    <main id="main">
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">{property.category}</h1>
                <span class="color-text-a">{property.address}</span>
              </div>
            </div>
            <div class="col-md-12 col-lg-4"></div>
          </div>
        </div>
      </section>

      <section class="property-single nav-arrow-b">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div id="property-single-carousel" class="swiper">
                <div class="swiper-wrapper">
                  <div class="carousel-item-b swiper-slide">
                    {property.image && <Card.Img className="land-img" src={property.image} />}
                    {!property.image && <Card.Img className="land-img" src={house} />}!

                  </div>
                </div>
              </div>
              <div class="property-single-carousel-pagination carousel-pagination"></div>
            </div>
          </div>

          <div style={{padding:"80px"}}></div>
          <div class="row">
            <div class="col-sm-12">
              <div class="row justify-content-between">
                <div class="col-md-5 col-lg-4">
                  <div class="property-price d-flex justify-content-center foo">
                    <div class="card-header-c d-flex">
                      <div class="card-box-ico">
                        
                        <div class="card-title-c align-self-center">
                        <span class="bi bi-cash">$</span>
                        <h5 class="title-c">{property.price}</h5>
                      </div>
                      </div>
                     
                    </div>
                  </div>
                  <div class="property-summary">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="title-box-d section-t4">
                          <h3 class="title-d">Quick Summary</h3>
                        </div>
                      </div>
                    </div>
                    <div class="summary-list">
                      <ul class="list">
                        <li class="d-flex justify-content-between">
                          <strong>Property ID:</strong>
                          <span>{property._id}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Location:</strong>
                          <span>{property.address}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Property Type:</strong>
                          <span>{property.category}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Status:</strong>
                          <span>{property.for}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Area:</strong>
                          <span>
                            {property.area}m<sup>2</sup>
                          </span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Beds:</strong>
                          <span>4</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Baths:</strong>
                          <span>2</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Garage:</strong>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-lg-7 section-md-t3">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d">
                        <div style={{padding:"5%"}}></div>
                        <h3 class="title-d">Property Description</h3>
                      </div>
                    </div>
                  </div>
                  <div class="property-description">
                    <p class="description color-text-a">
                      {property.description}
                    </p>
                    <p class="description color-text-a no-margin"></p>
                  </div>
                  <div class="row section-t3">
                    <div class="col-sm-12">
                      <div class="title-box-d">
                        <h3 class="title-d">Amenities</h3>
                      </div>
                    </div>
                  </div>
                  <div class="amenities-list color-text-a">
                    <ul class="list-a no-margin">
                      <li>Balcony</li>
                      <li>Outdoor Kitchen</li>
                      <li>Cable Tv</li>
                      <li>Deck</li>
                      <li>Tennis Courts</li>
                      <li>Internet</li>
                      <li>Parking</li>
                      <li>Sun Room</li>
                      <li>Concrete Flooring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandpageProp;
