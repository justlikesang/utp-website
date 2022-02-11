import React from 'react';

const Home = () => {
  return (
    <section className="section home">
      <div className="section-title home-title">
        <h2>welcome to KORUS partners</h2>
      </div>
      <div className="section-center home-center">
        <aritcle className="home-img">
          <img
            src="./images/photo1-gg1.jpg"
            className="home-photo"
            alt="about"
          />
          <h4>we unite opportunities across the pacific</h4>
        </aritcle>
        <article className="home-info">
          <h3>We’re a Bay Area based compact boutique Investment Bank</h3>
          <p>
            Providing a Financial and Strategic Advisory Services to privately
            held Technology and Healthcare companies.
          </p>
          <p>
            Uniting our clients across The Pacific and farther with excellent
            Capitals and Partners and together building lasting opportunities.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Home;
