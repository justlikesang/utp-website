import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="section-one home-one">
        <div className="section-title home-title">
          <h2>welcome to KORUS partners</h2>
        </div>
        <div className="section-center home-center">
          <aritcle className="home-img">
            <img
              src="./images/photo1-bm1.jpg"
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
            <p className="second-p">
              Uniting our clients across The Pacific and farther with excellent
              Capitals and Partners and together building lasting opportunities.
            </p>
          </article>
        </div>
      </section>
      <section className="section-two home-two">
        <div className="section-center home-center home-center-two">
          <aritcle className="home-img img-two">
            <img
              src="./images/home-photo2-1.jpg"
              className="home-photo home-photo-two"
              alt="about"
            />
            <h4>special services for technology & healthcare</h4>
          </aritcle>
          <article className="home-info">
            <h3>
              We provide outcomes that go beyond expectations through
              differentiated access to Capital Raise, M&A and Strategic
              Consulting
            </h3>
            <p>
              We pinpoint, dots-connect and advise to unite Healthcare and
              Technology private companies with Capitals and Partners across The
              Pacific.
            </p>
            <p className="second-p">
              Having Deep Understanding in our clients and cut Synergistic Deals
              with fitting Capitals and Partners.
            </p>
          </article>
        </div>
      </section>
      <section className="section-three home-three">
        <div className="section-center home-center">
          <aritcle className="home-img">
            <img
              src="./images/home-photo2-1.jpg"
              className="home-photo home-photo-two"
              alt="about"
            />
            <h4>special services for technology & healthcare</h4>
          </aritcle>
          <article className="home-info">
            <h3>
              We provide outcomes that go beyond expectations through
              differentiated access to Capital Raise, M&A and Strategic
              Consulting
            </h3>
            <p>
              We pinpoint, dots-connect and advise to unite Healthcare and
              Technology private companies with Capitals and Partners across The
              Pacific.
            </p>
            <p className="second-p">
              Having Deep Understanding in our clients and cut Synergistic Deals
              with fitting Capitals and Partners.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
