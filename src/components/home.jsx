import React from "react";

const HomePage = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="The perfect carry partner" />
        <meta
          name="keywords"
          content="madeproducts, made products, Made Products, paperbag"
        />
        <meta property="og:site_name" content="Madeproducts" />
        <meta property="og:site" content="www.madeproducts.in" />
        <meta property="og:title" content="Made Products" />
        <meta property="og:description" content="The perfect carry partner" />
        <meta
          property="og:image"
          content="paper bag manufacturing comapany"
        />
        <meta
          property="og:url"
          content="paperbag, madeproduts, made products"
        />
        <meta property="og:type" content="article" />
        <title>Made Products</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/fontawesome-all.css" rel="stylesheet" />
        <link href="css/swiper.css" rel="stylesheet" />
        <link href="css/magnific-popup.css" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
        <link rel="icon" href="images/Favicon.png" />
      </head>

      <body data-spy="scroll" data-target=".fixed-top">
        {/* Preloader */}
        <div className="spinner-wrapper">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <a className="navbar-brand logo-image" href="index.html">
              <img
                src="images/made_products_logo.png"
                height="5"
                width="10"
                alt="Made Products Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-awesome fas fa-bars"></span>
              <span className="navbar-toggler-awesome fas fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="./contact.html">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle page-scroll"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    MORE
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a
                      className="dropdown-item"
                      href="https://www.instagram.com/made_products"
                    >
                      Instagram
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="https://wa.me/message/IVDHZJXLXRRMH1"
                    >
                      Whatsapp
                    </a>
                  </div>
                </li>
              </ul>
              <span className="nav-item">
                <a className="btn-outline-sm page-scroll" href="tel:+918589907591">
                  Call Now
                </a>
              </span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <img
                    className="img-fluid"
                    src="images/made_cover.png"
                    height="150"
                    width="150"
                    alt="cover"
                  />
                  <h1>MADE PRODUCTS</h1>
                  <p className="p-large p-heading">"The perfect carry partner"</p>
                  <a
                    className="btn-solid-lg"
                    href="https://www.instagram.com/made_products/"
                  >
                    <i className="fab fa-instagram"></i>About Us
                  </a>
                  <a className="btn-solid-lg" href="tel:+918589907591">
                    <i className="fas fa fa-phone-alt"></i> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="deco-white-circle-1">
            <img src="images/decorative-white-circle.svg" alt="" />
          </div>
          <div className="deco-white-circle-2">
            <img src="images/decorative-white-circle.svg" alt="" />
          </div>
          <div className="deco-blue-circle">
            <img src="images/decorative-blue-circle.svg" alt="" />
          </div>
          <div className="deco-yellow-circle">
            <img src="images/decorative-yellow-circle.svg" alt="" />
          </div>
          <div className="deco-green-diamond">
            <img src="images/decorative-green-diamond.svg" alt="" />
          </div>
        </header>
      </body>
    </>
  );
};

export default HomePage;