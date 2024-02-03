import React from 'react';
import "../css/About.css";

const About = () => {
  return (
    <section>
      <div className='myself'>
        <div className="container box">
          <h2>About Me</h2>
          <hr />
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-5">
              <img src="me.png" alt="Kian" />
            </div>
            <div className="col-1"></div>
            <div className="col-12 mt-5 mt-lg-0 col-lg-5">
              <p className='lead'>Hello, I'm Lance Kian Flores,
                a 21-year-old residing in San Fabian City,
                Pangasinan. Passionate about web development,
                I specialize as a front-end developer, creating
                engaging and user-friendly interfaces. With a strong
                foundation in IT, I'm dedicated to staying current
                with industry trends and technologies.</p>
              <div className="icons2 a d-flex justify-content-center mt-3 mt-lg-3">
                <a href="https://www.facebook.com/lancekian12"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/lancekiaaan/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/lance-kian-fangon-flores-256800257/"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="container">
          <div className="TopSkills">
            <h2 className="text-center font-weight-bolder">Skills</h2>
          </div>
          <div className="row language mt-5 justify-content-center align-items-center">
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards">
              <div className="card">
                <img src="html5.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">HTML (Hypertext Markup Language) is a standard for creating web pages.
                    It uses tags to structure content, including text, images, and links, for browsers to
                    display.</p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards">
              <div className="card">
                <img src="csshd.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">
                    CSS (Cascading Style Sheets) is a language for styling HTML documents. It controls the
                    layout, appearance, and design, enhancing the visual presentation of web pages across
                    devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards">
              <div className="card">
                <img src="javascript.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">
                    JavaScript is a programming language used for web development. It enables interactive
                    and dynamic content on websites, enhancing user experience through client-side scripting
                    in browsers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards">
              <div className="card">
                <img src="python.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">Python is a high-level, versatile programming language emphasizing
                    readability. It's widely used in web development, data science, artificial intelligence,
                    and automation, with a large supportive community.</p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards">
              <div className="card">
                <img src="JAVA.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">
                    Java is a versatile, object-oriented programming language. Known for its platform
                    independence, it's widely used in web and enterprise applications, Android development,
                    and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards">
              <div className="card">
                <img src="c++.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">C++ is a powerful, general-purpose programming language. It supports
                    object-oriented programming and is widely used in software development for
                    performance-critical applications, systems programming, and game development.</p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards">
              <div className="card">
                <img src="php.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">PHP is a server-side scripting language designed for web development.
                    It powers dynamic websites by embedding code within HTML, enabling server communication
                    and database interactions.</p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards">
              <div className="card">
                <img src="kotlin.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">Kotlin is a modern programming language for the Java Virtual Machine (JVM) and can also
                    be used for Android development. It prioritizes conciseness, safety, and
                    interoperability.</p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-xxl-3 col-md-5 col-12 cards justify-content-center align-items-center">
              <div className="card">
                <img src="csharp.jpg" className="card-img" alt="html" />
                <div className="card-body">
                  <p className="card-info">C# (C Sharp) is a modern, object-oriented programming language
                    developed by Microsoft. It is widely used for building Windows applications, web
                    services, and game development with Unity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
