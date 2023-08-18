import React from "react";

const New = () => {
  return (
    <div>
      <div>
        <div class="preloader">
          <img
            src="assets/images/preloader.png"
            class="preloader__image"
            alt=""
          />
        </div>
        {/* <!-- /.preloader --> */}
        <div class="page-wrapper">
          <div class="topbar-one">
            <div class="container">
              <div class="topbar-one__left">
                <a href="#">Customer Support</a>
                <a href="#">Login</a>
                <a href="#">Register</a>
              </div>
              {/* <!-- /.topbar-one__left --> */}
              <div class="topbar-one__social">
                <a href="#">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              {/* <!-- /.topbar-one__social --> */}
            </div>
            {/* <!-- /.container --> */}
          </div>
          {/* <!-- /.topbar-one --> */}

          <nav class="main-nav-one stricky">
            <div class="container">
              <div class="main-nav-one__infos">
                <a class="main-nav-one__infos-phone" href="tel:666-888-0000">
                  <i class="fa fa-phone-alt"></i>666 888 0000
                </a>
                <a
                  class="main-nav-one__infos-email"
                  href="mailto:needhelp@example.com"
                >
                  <i class="fa fa-envelope"></i>needhelp@example.com
                </a>
              </div>
              {/* <!-- /.main-nav-one__infos --> */}
              <div class="inner-container">
                <div class="logo-box">
                  <a href="index.html">
                    <img src="assets/images/logo-1-1.png" alt="" width="143" />
                  </a>
                  <a href="#" className="side-menu__toggler">
                    <i class="fa fa-bars"></i>
                  </a>
                </div>
                {/* <!-- /.logo-box --> */}
                <div class="main-nav__main-navigation">
                  <ul class="main-nav__navigation-box">
                    <li class="dropdown">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home 01</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 02</a>
                        </li>
                        <li>
                          <a href="index-rtl.html">Home RTL</a>
                        </li>
                        <li class="dropdown">
                          <a href="#">Header Styles</a>
                          <ul>
                            <li>
                              <a href="index.html">Header 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Header 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li class="dropdown">
                      <a href="courses.html">Courses</a>
                      <ul>
                        <li>
                          <a href="courses.html">Courses</a>
                        </li>
                        <li>
                          <a href="course-details.html">Course Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="news.html">Latest News</a>
                      <ul>
                        <li>
                          <a href="news.html">News Page</a>
                        </li>
                        <li>
                          <a href="news-details.html">News Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  {/* <!-- /.main-nav__navigation-box --> */}
                </div>
                {/* <!-- /.main-nav__main-navigation --> */}
              </div>
              {/* <!-- /.inner-container --> */}
            </div>
            {/* <!-- /.container --> */}
          </nav>
          {/* <!-- /.main-nav-one --> */}

          <div class="slider-one__wrapper">
            <div class="slider-one">
              <div
                class="slider-one__carousel thm__owl-dot-1 owl-carousel owl-theme thm__owl-carousel"
                data-carousel-prev-btn=".slider-one__nav-right"
                data-carousel-next-btn=".slider-one__nav-left"
                data-options='{"loop": true, "items": 1, "margin": 0, "dots": true, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
              >
                <div
                  class="item slider-one__slide-1"
                  style={{
                    backgroundImage:
                      "url(assets/images/background/slide-bg-1-1.jpg)",
                  }}
                >
                  <div class="container">
                    <div class="slider-one__content text-center">
                      <p class="anim-elm">Discover Scuba Diving in New York</p>
                      <h3 class="anim-elm">
                        a new discovery <br /> awaits
                      </h3>
                      <a href="courses.html" class="thm-btn anim-elm">
                        View all courses
                      </a>
                      {/* <!-- /.thm-btn --> */}
                    </div>
                    {/* <!-- /.slider-one__content text-center --> */}
                  </div>
                  {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.item --> */}
                <div
                  class="item slider-one__slide-2"
                  style={{
                    backgroundImage:
                      'url("assets/images/background/slide-bg-1-2.jpg")',
                  }}
                >
                  <div class="container">
                    <div class="slider-one__content text-center">
                      <p class="anim-elm">Discover Scuba Diving in New York</p>
                      <h3 class="anim-elm">
                        TAKE YOUR DIVE <br /> TO THE NEXT LEVEL
                      </h3>
                      <a href="courses.html" class="thm-btn anim-elm">
                        View all courses
                      </a>
                      {/* <!-- /.thm-btn --> */}
                    </div>
                    {/* <!-- /.slider-one__content text-center --> */}
                  </div>
                  {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.item --> */}
                <div
                  class="item slider-one__slide-1"
                  style={{
                    backgroundImage: `url("assets/images/background/slide-bg-1-1.jpg")`,
                  }}
                >
                  <div class="container">
                    <div class="slider-one__content text-center">
                      <p class="anim-elm">Discover Scuba Diving in New York</p>
                      <h3 class="anim-elm">
                        a new discovery <br /> awaits
                      </h3>
                      <a href="courses.html" class="thm-btn anim-elm">
                        View all courses
                      </a>
                      {/* <!-- /.thm-btn --> */}
                    </div>
                    {/* <!-- /.slider-one__content text-center --> */}
                  </div>
                  {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.item --> */}
              </div>
              {/* <!-- /.slider-one__carousel --> */}
              <div class="slider-one__nav">
                <a href="#" class="slider-one__nav-left">
                  <i class="fa fa-angle-right"></i>
                </a>
                {/* <!-- /.slider-one__nav-left --> */}
                <a href="#" class="slider-one__nav-right">
                  <i class="fa fa-angle-left"></i>
                </a>
                {/* <!-- /.slider-one__nav-right --> */}
              </div>
              {/* <!-- /.slider-one__nav --> */}
            </div>
            {/* <!-- /.slider-one --> */}
          </div>
          {/* <!-- /.slider-one__wrapper --> */}

          <section class="cta-two">
            <div
              class="cta-two__bg"
              style={{
                backgroundImage:
                  'url("assets/images/background/footer-bg-1-1.jpg")',
              }}
            ></div>
            {/* <!-- /.cta-two__bg --> */}
            <div class="container">
              <img
                src="assets/images/shapes/slide-ribbon-1-1.png"
                alt=""
                class="cta-two__moc"
              />
              <h3>
                WE PROVIDE AN EXCELLENT SERVICE WITH SAFETY AND <br />
                AN OUTSTANDING <span>DIVING EDUCATION</span>
              </h3>
              <div class="cta-two__btn-block">
                <a href="contact.html" class="thm-btn cta-two__btn">
                  Start with us now
                </a>
                {/* <!-- /.thm-btn cta-two__btn --> */}
              </div>
              {/* <!-- /.cta-two__btn-block --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.cta-two --> */}

          <section class="service-one">
            <img
              src="assets/images/shapes/swimmer-contact-1.png"
              class="contact-one__swimmer"
              alt=""
            />

            {/* <!-- footer fishes --> */}
            <img
              src="assets/images/shapes/fish-service-1.png"
              alt=""
              class="site-footer__fish-1"
            />
            <img
              src="assets/images/shapes/fish-service-2.png"
              alt=""
              class="site-footer__fish-3"
            />

            {/* <!-- footer trees --> */}
            <img
              src="assets/images/shapes/tree-service-1.png"
              class="site-footer__tree-2"
              alt=""
            />

            <div class="service-one__floated-text">services</div>
            {/* <!-- /.service-one__floated-text --> */}
            <div class="container">
              <div class="block-title text-center">
                <img src="assets/images/shapes/sec-line-1.png" alt="" />
                <p class="text-uppercase">our services</p>
                <h3 class="text-uppercase">What we offer</h3>
              </div>
              {/* <!-- /.block-title --> */}
              <div class="row">
                <div class="col-xl-3 col-md-6 col-sm-12">
                  <div class="service-one__single">
                    <i class="scubo-icon-scuba-diving"></i>
                    <h3>
                      <a href="courses.html">
                        Scuba <br /> Diving
                      </a>
                    </h3>
                    <p>
                      To scuba diving There are many variatin of passages of
                      lorem ipsum available, but the majority have if alteration
                      in some formd bisc humour.
                    </p>
                  </div>
                  {/* <!-- /.service-one__single --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
                <div class="col-xl-3 col-md-6 col-sm-12">
                  <div class="service-one__single">
                    <i class="scubo-icon-aqualung"></i>
                    <h3>
                      <a href="courses.html">
                        Snorkeling <br />
                        Dive
                      </a>
                    </h3>
                    <p>
                      To scuba diving There are many variatin of passages of
                      lorem ipsum available, but the majority have if alteration
                      in some formd bisc humour.
                    </p>
                  </div>
                  {/* <!-- /.service-one__single --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
                <div class="col-xl-3 col-md-6 col-sm-12">
                  <div class="service-one__single">
                    <i class="scubo-icon-swimming"></i>
                    <h3>
                      <a href="courses.html">
                        Learn <br /> Swimming
                      </a>
                    </h3>
                    <p>
                      To scuba diving There are many variatin of passages of
                      lorem ipsum available, but the majority have if alteration
                      in some formd bisc humour.
                    </p>
                  </div>
                  {/* <!-- /.service-one__single --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
                <div class="col-xl-3 col-md-6 col-sm-12">
                  <div class="service-one__single">
                    <i class="scubo-icon-snorkel"></i>
                    <h3>
                      <a href="courses.html">
                        Free <br /> Diving
                      </a>
                    </h3>
                    <p>
                      To scuba diving There are many variatin of passages of
                      lorem ipsum available, but the majority have if alteration
                      in some formd bisc humour.
                    </p>
                  </div>
                  {/* <!-- /.service-one__single --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.service-one --> */}

          <section class="funfact-one funfact-one__home-one">
            <div class="container">
              <div class="funfact-one__title">Fun facts</div>
              {/* <!-- /.funfact-one__title --> */}
              <div class="inner-container">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <div class="funfact-one__single">
                      <div class="funfact-one__count counter">3070</div>
                      {/* <!-- /.funfact-one__count --> */}
                      <div class="funfact-one__content">
                        <h3>
                          trained <br /> Swimmers
                        </h3>
                      </div>
                      {/* <!-- /.funfact-one__content --> */}
                    </div>
                    {/* <!-- /.funfact-one__single --> */}
                  </div>
                  {/* <!-- /.col-lg-3 col-md-6 --> */}
                  <div class="col-lg-3 col-md-6">
                    <div class="funfact-one__single">
                      <div class="funfact-one__count counter">8620</div>
                      {/* <!-- /.funfact-one__count --> */}
                      <div class="funfact-one__content">
                        <h3>
                          satisfied <br />
                          customers
                        </h3>
                      </div>
                      {/* <!-- /.funfact-one__content --> */}
                    </div>
                    {/* <!-- /.funfact-one__single --> */}
                  </div>
                  {/* <!-- /.col-lg-3 col-md-6 --> */}
                  <div class="col-lg-3 col-md-6">
                    <div class="funfact-one__single">
                      <div class="funfact-one__count counter">7700</div>
                      {/* <!-- /.funfact-one__count --> */}
                      <div class="funfact-one__content">
                        <h3>
                          Professional <br /> trainers
                        </h3>
                      </div>
                      {/* <!-- /.funfact-one__content --> */}
                    </div>
                    {/* <!-- /.funfact-one__single --> */}
                  </div>
                  {/* <!-- /.col-lg-3 col-md-6 --> */}
                  <div class="col-lg-3 col-md-6">
                    <div class="funfact-one__single">
                      <div class="funfact-one__count counter">3610</div>
                      {/* <!-- /.funfact-one__count --> */}
                      <div class="funfact-one__content">
                        <h3>
                          trained <br /> diver
                        </h3>
                      </div>
                      {/* <!-- /.funfact-one__content --> */}
                    </div>
                    {/* <!-- /.funfact-one__single --> */}
                  </div>
                  {/* <!-- /.col-lg-3 col-md-6 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.inner-container --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.funfact-one --> */}

          <section class="course-one__title">
            <div
              class="course-one__bg"
              style={{
                backgroundImage:
                  'url("assets/images/shapes/water-wave-bg.png")',
              }}
            ></div>
            {/* <!-- /.course-one__bg --> */}
            <div class="container ">
              <div class="block-title text-left">
                <img src="assets/images/shapes/sec-line-1.png" alt="" />
                <p class="text-uppercase">All Courses list</p>
                <h3 class="text-uppercase">
                  Checkout our <br /> Popular courses
                </h3>
              </div>
              {/* <!-- /.block-title --> */}
              <div class="text-block">
                <p class="m-0">
                  There are many variations of passages of available but the
                  majority have suffered <br />
                  alteration in some form, by injected or randomised words which
                  don look even <br /> slightly believable.
                </p>
              </div>
              {/* <!-- /.text-block --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.course-one__title --> */}

          <div class="course-one course-one__carousel-wrapper">
            {/* <!-- footer fishes --> */}
            <img
              src="assets/images/shapes/fish-1-1.png"
              alt=""
              class="site-footer__fish-1"
            />

            {/* <!-- footer trees --> */}
            <img
              src="assets/images/shapes/tree-1-1.png"
              class="site-footer__tree-1"
              alt=""
            />
            <div class="container">
              <div
                class="course-one__carousel thm__owl-carousel owl-carousel owl-theme"
                data-options='{"loop": true,"items": 3, "margin":30, "smartSpeed": 700, "autoplay": true, "autoplayTimeout": 5000, "autoplayHoverPause": true, "nav": false, "dots": false, "responsive": { "0": {"items": 1}, "767": {"items": 2}, "991": {"items": 2}, "1199": { "items": 3} }}'
                data-carousel-prev-btn=".course-one__carousel-btn-left"
                data-carousel-next-btn=".course-one__carousel-btn-right"
              >
                <div class="item">
                  <div class="course-one__single">
                    <div class="course-one__image">
                      <a href="course-details.html" class="course-one__cat">
                        advanced
                      </a>
                      <div class="course-one__image-inner">
                        <img
                          src="assets/images/courses/course-1-1.jpg"
                          alt=""
                        />
                        <a href="course-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.course-one__image-inner --> */}
                    </div>
                    {/* <!-- /.course-one__image --> */}
                    <div class="course-one__content hvr-sweep-to-bottom">
                      <h3>
                        <a href="course-details.html">Scuba diving</a>
                      </h3>
                      <p>
                        There are many variatin of passages of lorem ipsum
                        available, but the majority have.
                      </p>
                    </div>
                    {/* <!-- /.course-one__content --> */}
                    <a href="contact.html" class="course-one__book-link">
                      Book this course
                    </a>
                  </div>
                  {/* <!-- /.course-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="course-one__single">
                    <div class="course-one__image">
                      <a href="course-details.html" class="course-one__cat">
                        beginner
                      </a>
                      <div class="course-one__image-inner">
                        <img
                          src="assets/images/courses/course-1-2.jpg"
                          alt=""
                        />
                        <a href="course-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.course-one__image-inner --> */}
                    </div>
                    {/* <!-- /.course-one__image --> */}
                    <div class="course-one__content hvr-sweep-to-bottom">
                      <h3>
                        <a href="course-details.html">Extended range</a>
                      </h3>
                      <p>
                        There are many variatin of passages of lorem ipsum
                        available, but the majority have.
                      </p>
                    </div>
                    {/* <!-- /.course-one__content --> */}
                    <a href="contact.html" class="course-one__book-link">
                      Book this course
                    </a>
                  </div>
                  {/* <!-- /.course-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="course-one__single">
                    <div class="course-one__image">
                      <a href="course-details.html" class="course-one__cat">
                        Professional
                      </a>
                      <div class="course-one__image-inner">
                        <img
                          src="assets/images/courses/course-1-3.jpg"
                          alt=""
                        />
                        <a href="course-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.course-one__image-inner --> */}
                    </div>
                    {/* <!-- /.course-one__image --> */}
                    <div class="course-one__content hvr-sweep-to-bottom">
                      <h3>
                        <a href="course-details.html">free diving</a>
                      </h3>
                      <p>
                        There are many variatin of passages of lorem ipsum
                        available, but the majority have.
                      </p>
                    </div>
                    {/* <!-- /.course-one__content --> */}
                    <a href="contact.html" class="course-one__book-link">
                      Book this course
                    </a>
                  </div>
                  {/* <!-- /.course-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="course-one__single">
                    <div class="course-one__image">
                      <a href="course-details.html" class="course-one__cat">
                        advanced
                      </a>
                      <div class="course-one__image-inner">
                        <img
                          src="assets/images/courses/course-1-4.jpg"
                          alt=""
                        />
                        <a href="course-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.course-one__image-inner --> */}
                    </div>
                    {/* <!-- /.course-one__image --> */}
                    <div class="course-one__content hvr-sweep-to-bottom">
                      <h3>
                        <a href="course-details.html">Rebreather</a>
                      </h3>
                      <p>
                        There are many variatin of passages of lorem ipsum
                        available, but the majority have.
                      </p>
                    </div>
                    {/* <!-- /.course-one__content --> */}
                    <a href="contact.html" class="course-one__book-link">
                      Book this course
                    </a>
                  </div>
                  {/* <!-- /.course-one__single --> */}
                </div>
                /{/* <!-- /.item --> */}
                <div class="item">
                  <div class="course-one__single">
                    <div class="course-one__image">
                      <a href="course-details.html" class="course-one__cat">
                        advanced
                      </a>
                      <div class="course-one__image-inner">
                        <img
                          src="assets/images/courses/course-1-5.jpg"
                          alt=""
                        />
                        <a href="course-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.course-one__image-inner --> */}
                    </div>
                    {/* <!-- /.course-one__image --> */}
                    <div class="course-one__content hvr-sweep-to-bottom">
                      <h3>
                        <a href="course-details.html">Swimming</a>
                      </h3>
                      <p>
                        There are many variatin of passages of lorem ipsum
                        available, but the majority have.
                      </p>
                    </div>
                    {/* <!-- /.course-one__content --> */}
                    <a href="contact.html" class="course-one__book-link">
                      Book this course
                    </a>
                  </div>
                  {/* <!-- /.course-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="course-one__single">
                    <div class="course-one__image">
                      <a href="course-details.html" class="course-one__cat">
                        Professional
                      </a>
                      <div class="course-one__image-inner">
                        <img
                          src="assets/images/courses/course-1-6.jpg"
                          alt=""
                        />
                        <a href="course-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.course-one__image-inner --> */}
                    </div>
                    {/* <!-- /.course-one__image --> */}
                    <div class="course-one__content hvr-sweep-to-bottom">
                      <h3>
                        <a href="course-details.html">Snorkeling</a>
                      </h3>
                      <p>
                        There are many variatin of passages of lorem ipsum
                        available, but the majority have.
                      </p>
                    </div>
                    {/* <!-- /.course-one__content --> */}
                    <a href="contact.html" class="course-one__book-link">
                      Book this course
                    </a>
                  </div>
                  {/* <!-- /.course-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
              </div>
              {/* <!-- /.course-one__carousel thm__owl-carousel owl-carousel owl-theme --> */}

              <div class="course-one__carousel-btn__wrapper">
                <a class="course-one__carousel-btn-left" href="#">
                  <i class="fa fa-angle-left"></i>
                </a>
                <a class="course-one__carousel-btn-right" href="#">
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
              {/* <!-- /.course-one__carousel-btn__wrapper --> */}
            </div>
            {/* <!-- /.container --> */}
          </div>
          {/* <!-- /.course-one__carousel-wrapper --> */}

          <section
            class="video-two"
            style={{
              backgroundImage: 'url("assets/images/shapes/video-2-bg.png")',
            }}
          >
            <img
              src="assets/images/shapes/swimmer-1-1.png"
              class="video-two__swimmer"
              alt=""
            />
            <div class="container">
              <div
                class="video-two__box wow fadeInRight"
                data-wow-duration="1500ms"
              >
                <img src="assets/images/resources/video-1-1.jpg" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=7rQe_Q4FkaY"
                  class="video-popup"
                >
                  <i class="fa fa-play"></i>
                </a>
                {/* <!-- /.video-popup --> */}
              </div>
              /{/* <!-- /.video-two__box --> */}
              <div class="row">
                <div class="col-xl-6">
                  <div class="video-two__content">
                    <div class="block-title">
                      <img src="assets/images/shapes/sec-line-1.png" alt="" />
                      <p class="text-uppercase">learn with us</p>
                      <h3 class="text-uppercase">How to dive?</h3>
                    </div>
                    {/* <!-- /.block-title --> */}
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                    <a href="contact.html" class="thm-btn video-two__btn">
                      Contact us
                    </a>
                    {/* <!-- /.thm-btn video-two__btn --> */}
                  </div>
                  {/* <!-- /.video-two__content --> */}
                </div>
                {/* <!-- /.col-lg-6 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.video-two --> */}

          <section class="testimonials-one__title testimonials-one__title__home-one">
            <div
              class="testimonials-one__bg"
              style={{
                backgroundImage:
                  'url("assets/images/shapes/water-wave-bg.png")',
              }}
            ></div>
            {/* <!-- /.testimonials-one__bg --> */}
            <div class="container">
              <div class="block-title text-center">
                <img src="assets/images/shapes/sec-line-1.png" alt="" />
                <p class="text-uppercase">Testimonials</p>
                <h3 class="text-uppercase">What they say</h3>
              </div>
              {/* <!-- /.block-title --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.testimonials-one__title --> */}

          <section class="testimonials-one__carousel-wrapper testimonials-one__carousel-wrapper__home-one">
            <div class="container wow fadeIn" data-wow-duration="2000ms">
              <div
                class="testimonials-one__carousel owl-carousel owl-theme thm__owl-carousel thm__owl-dot-2"
                data-options='{"items": 3, "margin": 30, "loop": true, "autoplay": true, "autoplayTimeout": 5000, "autoplayHoverPause": true, "smartSpeed": 700, "responsive": {"0": {"items": 1, "dots": false, "nav": true}, "480": {"items": 1, "dots": false, "nav": true}, "767": {"items": 1, "dots": false, "nav": true}, "991": {"items": 2}, "1199": {"items": 3, "margin": 30}}}'
              >
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          I don’t know what else to say, this is something you
                          have never seen before.
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-1.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Edwin Walsh</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get new such a personal touch.{" "}
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-2.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Joel Moore</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          I don’t know what else to say, this is something you
                          have never seen before.
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-3.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Pauline Cross</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          I was very impresed by the Scubo diving service, lorem
                          ipsum is simply free text used by copytyping.
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-4.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Alex Maldonado</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get new such a personal touch.
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-1.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Marion Price</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          I was very impresed by the Scubo diving service, lorem
                          ipsum is simply free text used by copytyping.
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-2.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Lou Morrison</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get new such a personal touch.
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-3.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Hunter Marsh</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          I was very impresed by the Scubo diving service, lorem
                          ipsum is simply free text used by copytyping.
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-4.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Jesse Buchanan</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <div class="testimonials-one__single">
                    <div class="testimonials-one__content">
                      <div class="testimonials-one__content-inner">
                        <div class="testimonials-one__qoute"></div>
                        {/* <!-- /.testimonials-one__qoute --> */}
                        <p>
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get new such a personal touch.
                        </p>
                        <div class="testimonials-one__infos">
                          <div class="testimonials-one__image">
                            <div class="testimonials-one__image-inner">
                              <img
                                src="assets/images/resources/testi-1-1.jpg"
                                alt=""
                              />
                            </div>
                            {/* <!-- /.testimonials-one__image-inner --> */}
                          </div>
                          {/* <!-- /.testimonials-one__image --> */}
                          <div class="testimonials-one__infos-content">
                            <h3>Helena Dawson</h3>
                            <span>Swimmer</span>
                          </div>
                          {/* <!-- /.testimonials-one__infos-content --> */}
                        </div>
                        {/* <!-- /.testimonials-one__infos --> */}
                      </div>
                      {/* <!-- /.testimonials-one__content-inner --> */}
                    </div>
                    {/* <!-- /.testimonials-one__content --> */}
                  </div>
                  {/* <!-- /.testimonials-one__single --> */}
                </div>
                {/* <!-- /.item --> */}
              </div>
              {/* <!-- /.testimonials-one__carousel owl-carousel owl-theme thm__owl-carousel --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.testimonials-one__carousel-wrapper --> */}

          <section class="cta-three">
            <img
              src="assets/images/resources/cta-1-1.png"
              class="cta-three__moc wow fadeInRight"
              data-wow-duration="1500ms"
              alt=""
            />
            <div class="container">
              <div class="cta-three__title">Ready to learn diving?</div>
              {/* <!-- /.cta-three__title --> */}
              <div class="cta-three__content">
                <div class="cta-three__content-inner">
                  <div class="block-title">
                    <p class="text-uppercase">Learn diving with us</p>
                    <h3 class="text-uppercase">Discover new world</h3>
                  </div>
                  {/* <!-- /.block-title --> */}
                  <p>
                    There are many variatin of passages of lorem ipsum simply
                    free available, but the <br /> majority have if alteration
                    in some formd bisc humour.
                  </p>
                  <a href="contact.html" class="thm-btn cta-three__btn">
                    Join us now
                  </a>
                  {/* <!-- /.thm-btn cta-three__btn --> */}
                </div>
                {/* <!-- /.cta-three__content-inner --> */}
              </div>
              {/* <!-- /.cta-three__content --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.cta-three --> */}

          <div class="cta-three__feature">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="cta-three__feature-box">
                    <div class="cta-three__feature-box-icon">
                      <i class="scubo-icon-checked"></i>
                    </div>
                    {/* <!-- /.cta-three__feature-box-icon --> */}
                    <h3>
                      endless opportunities <br /> for underwater discovery
                    </h3>
                  </div>
                  {/* <!-- /.cta-three__feature-box --> */}
                </div>
                {/* <!-- /.col-lg-4 --> */}
                <div class="col-lg-4">
                  <div class="cta-three__feature-box">
                    <div class="cta-three__feature-box-icon">
                      <i class="scubo-icon-checked"></i>
                    </div>
                    {/* <!-- /.cta-three__feature-box-icon --> */}
                    <h3>
                      Uniting the World's <br /> largest tribe of divers
                    </h3>
                  </div>
                  {/* <!-- /.cta-three__feature-box --> */}
                </div>
                {/* <!-- /.col-lg-4 --> */}
                <div class="col-lg-4">
                  <div class="cta-three__feature-box">
                    <div class="cta-three__feature-box-icon">
                      <i class="scubo-icon-checked"></i>
                    </div>
                    {/* <!-- /.cta-three__feature-box-icon --> */}
                    <h3>
                      Improving the health of <br /> our ocean planet
                    </h3>
                  </div>
                  {/* <!-- /.cta-three__feature-box --> */}
                </div>
                {/* <!-- /.col-lg-4 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
          </div>
          {/* <!-- /.cta-three__feature --> */}

          <section class="cta-four">
            <div class="container">
              <div class="row">
                <div class="col-xl-6">
                  <div
                    class="cta-four__image wow fadeInLeft"
                    data-wow-duration="1500ms"
                  >
                    <img src="assets/images/resources/cta-2-1.jpg" alt="" />
                    <div class="cta-four__image-content">
                      <i class="scubo-icon-scuba-diving"></i>
                      <p>36</p>
                      <h3>
                        years of <br />
                        experience
                      </h3>
                    </div>
                    {/* <!-- /.cta-four__image-content --> */}
                  </div>
                  {/* <!-- /.cta-four__image --> */}
                </div>
                {/* <!-- /.col-lg-6 --> */}
                <div class="col-xl-6">
                  <div class="cta-four__content">
                    <div class="block-title text-left">
                      <img src="assets/images/shapes/sec-line-1.png" alt="" />
                      <p class="text-uppercase">About scubo center</p>
                      <h3 class="text-uppercase">
                        Setting the highest <br />
                        standards for diver <br />
                        training
                      </h3>
                    </div>
                    {/* <!-- /.block-title --> */}
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything.
                    </p>
                    <a href="about.html" class="thm-btn cta-four__btn">
                      Discover more
                    </a>
                    {/* <!-- /.thm-btn cta-four__btn --> */}
                  </div>
                  {/* <!-- /.cta-four__content --> */}
                </div>
                {/* <!-- /.col-lg-6 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.cta-four --> */}

          <section class="cta-five">
            <div
              class="cta-five__bg"
              style={{
                backgroundImage:
                  'url("assets/images/background/cta-5-1-bg.jpg")',
              }}
            ></div>
            {/* <!-- /.cta-five__bg --> */}
            <div class="container">
              <div
                class="cta-five__box-wrap wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div class="cta-five__box">
                  <i class="scubo-icon-aqualung"></i>
                  <h3>
                    <a href="#">
                      Discover a <br /> whole new world
                    </a>
                  </h3>
                </div>
                {/* <!-- /.cta-five__box --> */}
                <div class="cta-five__box">
                  <i class="scubo-icon-scuba"></i>
                  <h3>
                    <a href="#">
                      Begin underwater <br /> adventure
                    </a>
                  </h3>
                </div>
                {/* <!-- /.cta-five__box --> */}
                <div class="cta-five__box">
                  <i class="scubo-icon-snorkel"></i>
                  <h3>
                    <a href="#">
                      TAKE YOUR DIVE TO <br /> THE NEXT LEVEL
                    </a>
                  </h3>
                </div>
                {/* <!-- /.cta-five__box --> */}
              </div>
              {/* <!-- /.cta-five__box-wrap --> */}
              <div class="cta-five__content">
                <div class="block-title text-left">
                  <img src="assets/images/shapes/sec-line-1.png" alt="" />
                  <p class="text-uppercase">Join And get some benefits</p>
                  <h3 class="text-uppercase">
                    We seek adventure where <br /> others only dream
                  </h3>
                </div>
                {/* <!-- /.block-title --> */}
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the <br /> majority have suffered alteration in
                  some form, by injected humour, or <br /> randomised words
                  which don't look even slightly believable.
                </p>
                <a href="pricing.html" class="thm-btn cta-five__btn">
                  Start with us now
                </a>
                {/* <!-- /.thm-btn --> */}
              </div>
              {/* <!-- /.cta-five__content --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.cta-five --> */}

          <section
            class="blog-one blog-one__home-one"
            style={{
              backgroundImage:
                'url("assets/images/shapes/about-brand-team-bg.png")',
            }}
          >
            <div class="container">
              <div class="block-title text-center">
                <img src="assets/images/shapes/sec-line-1.png" alt="" />
                <p class="text-uppercase">from the blog </p>
                <h3 class="text-uppercase">News & Articles</h3>
              </div>
              {/* <!-- /.block-title --> */}
              <div class="row">
                <div class="col-lg-4 col-md-12">
                  <div class="blog-one__single">
                    <div class="blog-one__image">
                      <a href="news-details.html" class="blog-one__date">
                        02 Jan, 2020
                      </a>
                      <div class="blog-one__image-inner">
                        <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                        <a href="news-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.blog-one__image-inner --> */}
                    </div>
                    {/* <!-- /.blog-one__image --> */}
                    <div class="blog-one__content">
                      <h3>
                        <a href="news-details.html">
                          Learn how to do Scuba diving in Island
                        </a>
                      </h3>
                      <p>
                        Pellentesque auctor tristique orna Ut porta ut magna in
                        cursus.
                      </p>
                      <div class="blog-one__meta">
                        <a href="news-details.html">
                          <i class="far fa-user-circle"></i> Admin
                        </a>
                        <a href="news-details.html">
                          <i class="far fa-comments"></i> 2 Comments
                        </a>
                      </div>
                      {/* <!-- /.blog-one__meta --> */}
                    </div>
                    {/* <!-- /.blog-one__content --> */}
                  </div>
                  {/* <!-- /.blog-one__single --> */}
                </div>
                {/* <!-- /.col-lg-4 col-md-12 --> */}
                <div class="col-lg-4 col-md-12">
                  <div class="blog-one__single">
                    <div class="blog-one__image">
                      <a href="news-details.html" class="blog-one__date">
                        02 Jan, 2020
                      </a>
                      <div class="blog-one__image-inner">
                        <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                        <a href="news-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.blog-one__image-inner --> */}
                    </div>
                    {/* <!-- /.blog-one__image --> */}
                    <div class="blog-one__content">
                      <h3>
                        <a href="news-details.html">
                          Bring to the table win-win survival
                        </a>
                      </h3>
                      <p>
                        Pellentesque auctor tristique orna Ut porta ut magna in
                        cursus.
                      </p>
                      <div class="blog-one__meta">
                        <a href="news-details.html">
                          <i class="far fa-user-circle"></i> Admin
                        </a>
                        <a href="news-details.html">
                          <i class="far fa-comments"></i> 2 Comments
                        </a>
                      </div>
                      {/* <!-- /.blog-one__meta --> */}
                    </div>
                    {/* <!-- /.blog-one__content --> */}
                  </div>
                  {/* <!-- /.blog-one__single --> */}
                </div>
                {/* <!-- /.col-lg-4 col-md-12 --> */}
                <div class="col-lg-4 col-md-12">
                  <div class="blog-one__single">
                    <div class="blog-one__image">
                      <a href="news-details.html" class="blog-one__date">
                        02 Jan, 2020
                      </a>
                      <div class="blog-one__image-inner">
                        <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                        <a href="news-details.html">
                          <i class="scubo-icon-plus-symbol"></i>
                        </a>
                      </div>
                      {/* <!-- /.blog-one__image-inner --> */}
                    </div>
                    {/* <!-- /.blog-one__image --> */}
                    <div class="blog-one__content">
                      <h3>
                        <a href="news-details.html">
                          At the end of the day, going forward
                        </a>
                      </h3>
                      <p>
                        Pellentesque auctor tristique orna Ut porta ut magna in
                        cursus.
                      </p>
                      <div class="blog-one__meta">
                        <a href="news-details.html">
                          <i class="far fa-user-circle"></i> Admin
                        </a>
                        <a href="news-details.html">
                          <i class="far fa-comments"></i> 2 Comments
                        </a>
                      </div>
                      {/* <!-- /.blog-one__meta --> */}
                    </div>
                    {/* <!-- /.blog-one__content --> */}
                  </div>
                  {/* <!-- /.blog-one__single --> */}
                </div>
                {/* <!-- /.col-lg-4 col-md-12 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.blog-one --> */}

          <section class="brand-one brand-one__home-one">
            <div class="container">
              <div
                class="brand-one__carousel owl-carousel thm__owl-carousel owl-theme"
                data-options='{"loop": true, "autoplay": true, "autoplayHoverPause": true, "autoplayTimeout": 5000, "items": 5, "dots": false, "nav": false, "margin": 100, "smartSpeed": 700, "responsive": { "0": {"items": 2, "margin": 30}, "480": {"items": 3, "margin": 30}, "991": {"items": 4, "margin": 50}, "1199": {"items": 5, "margin": 100}}}'
              >
                <div class="item">
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-5.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-6.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-5.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
                <div class="item">
                  <img src="assets/images/brand/brand-1-6.png" alt="" />
                </div>
                {/* <!-- /.item --> */}
              </div>
              {/* <!-- /.brand-one__carousel owl-carousel thm__owl-carousel owl-theme --> */}
            </div>
            {/* <!-- /.container --> */}
          </section>
          {/* <!-- /.brand-one --> */}

          <footer class="site-footer-one">
            <div
              class="site-footer-one__bg"
              style={{
                backgroundImage:
                  'url("assets/images/background/footer-bg-1-1.jpg")',
              }}
            ></div>
            {/* <!-- /.site-footer-one__bg --> */}

            {/* <!-- footer fishes --> */}
            <img
              src="assets/images/shapes/fish-f-1.png"
              alt=""
              class="site-footer__fish-1"
            />
            <img
              src="assets/images/shapes/fish-f-2.png"
              alt=""
              class="site-footer__fish-2"
            />
            <img
              src="assets/images/shapes/fish-f-3.png"
              alt=""
              class="site-footer__fish-3"
            />

            {/* <!-- footer trees --> */}
            <img
              src="assets/images/shapes/tree-f-1.png"
              class="site-footer__tree-1"
              alt=""
            />
            <img
              src="assets/images/shapes/tree-f-2.png"
              class="site-footer__tree-2"
              alt=""
            />

            <div class="site-footer-one__upper">
              <div class="container">
                <div class="footer-widget-row">
                  <div class="footer-widget footer-widget__about">
                    <div class="footer-widget__inner">
                      <a href="index.html">
                        <img
                          src="assets/images/logo-2-1.png"
                          alt=""
                          width="143"
                        />
                      </a>
                      <p>
                        &copy; Copyright 2020 by <br />
                        Scubo Template
                      </p>
                    </div>
                    {/* <!-- /.footer-widget__inner --> */}
                  </div>
                  {/* <!-- /.footer-widget --> */}

                  <div class="footer-widget footer-widget__links__widget-1">
                    <div class="footer-widget__inner">
                      <h3 class="footer-widget__title">Company</h3>
                      {/* <!-- /.footer-widget__title --> */}
                      <ul class="footer-widget__links-list list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Our History</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                      {/* <!-- /.footer-widget__links-list --> */}
                    </div>
                    {/* <!-- /.footer-widget__inner --> */}
                  </div>
                  {/* <!-- /.footer-widget --> */}
                  <div class="footer-widget footer-widget__links__widget-2">
                    <div class="footer-widget__inner">
                      <h3 class="footer-widget__title">Explore</h3>
                      {/* <!-- /.footer-widget__title --> */}
                      <ul class="footer-widget__links-list list-unstyled">
                        <li>
                          <a href="#">Popular Courses</a>
                        </li>
                        <li>
                          <a href="#">How It Works</a>
                        </li>
                        <li>
                          <a href="#">Help Center</a>
                        </li>
                      </ul>
                      {/* <!-- /.footer-widget__links-list --> */}
                    </div>
                    {/* <!-- /.footer-widget__inner --> */}
                  </div>
                  {/* <!-- /.footer-widget --> */}
                  <div class="footer-widget footer-widget__links__widget-3">
                    <div class="footer-widget__inner">
                      <h3 class="footer-widget__title">Links</h3>
                      {/* <!-- /.footer-widget__title --> */}
                      <ul class="footer-widget__links-list list-unstyled">
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                      </ul>
                      {/* <!-- /.footer-widget__links-list --> */}
                    </div>
                    {/* <!-- /.footer-widget__inner --> */}
                  </div>
                  {/* <!-- /.footer-widget --> */}
                  <div class="footer-widget footer-widget__social__widget">
                    <div class="footer-widget__inner">
                      <h3 class="footer-widget__title">Follow</h3>
                      {/* <!-- /.footer-widget__title --> */}
                      <div class="footer-widget__social">
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-facebook-square"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </div>
                      {/* <!-- /.footer-widget__social --> */}
                    </div>
                    {/* <!-- /.footer-widget__inner --> */}
                  </div>
                  {/* <!-- /.footer-widget --> */}
                </div>
                {/* <!-- /.footer-widget-row --> */}
              </div>
              {/* <!-- /.container --> */}
            </div>
            {/* <!-- /.site-footer-one__upper --> */}
            <div class="site-footer__bottom">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <a href="tel:666-888-0000">
                      <i class="fa fa-phone-alt"></i>666 888 0000
                    </a>
                  </div>
                  {/* <!-- /.col-lg-4 --> */}
                  <div class="col-lg-4">
                    <a href="mailto:needhelp@example.com">
                      <i class="fa fa-envelope"></i>needhelp@example.com
                    </a>
                  </div>
                  {/* <!-- /.col-lg-4 --> */}
                  <div class="col-lg-4">
                    <a href="contact.html">
                      <i class="fa fa-map"></i>22 Broklyn Street, USA
                    </a>
                  </div>
                  {/* <!-- /.col-lg-4 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.container --> */}
            </div>
            {/* <!-- /.site-footer__bottom --> */}
          </footer>
          {/* <!-- /.site-footer-one --> */}
        </div>
        {/* <!-- /.page-wrapper --> */}

        <div class="side-menu__block">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <i class="fa fa-times"></i>

            {/* <!-- /.fa fa-close --> */}
          </a>

          <div class="side-menu__block-overlay custom-cursor__overlay">
            <div class="cursor"></div>
            <div class="cursor-follower"></div>
          </div>
          {/* <!-- /.side-menu__block-overlay --> */}
          <div class="side-menu__block-inner ">
            <a href="index.html" class="side-menu__logo">
              <img src="assets/images/logo-3-1.png" alt="" width="143" />
            </a>
            <nav class="mobile-nav__container">
              {/* <!-- content is loading via js --> */}
            </nav>
            <p class="side-menu__block__copy">
              (c) 2020 <a href="#">SCUBO</a> - All rights reserved.
            </p>
            <div class="side-menu__social">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          {/* <!-- /.side-menu__block-inner --> */}
        </div>
        {/* <!-- /.side-menu__block --> */}

        <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
          <i class="fa fa-angle-up"></i>
        </a>

        {/* <!-- Template JS --> */}
        {/* <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/bootstrap-datepicker.min.js"></script>
        <script src="assets/js/bootstrap-select.min.js"></script>
        <script src="assets/js/isotope.js"></script>
        <script src="assets/js/jquery.ajaxchimp.min.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="assets/js/jquery.validate.min.js"></script>
        <script src="assets/js/owl.carousel.min.js"></script>
        <script src="assets/js/TweenMax.min.js"></script>
        <script src="assets/js/waypoints.min.js"></script>
        <script src="assets/js/wow.min.js"></script> */}

        {/* <!-- Custom Scripts --> */}
        {/* <script src="assets/js/theme.js"></script> */}
      </div>
    </div>
  );
};

export default New;
