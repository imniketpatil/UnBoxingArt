import React, { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  const accordionData = [
    {
      question: "What is Poetry House Party?",
      answer:
        "Poetry House Party or PHP is an intimate community gathering where like-minded people come together to share ideas, recite poetries, enjoy games, and make new friends. PHP has reached more than 10 cities in India with more than 30 successful parties. Now, we are planning to cover as many cities as possible.",
    },
    {
      question: "Can only poets join this house party?",
      answer:
        "Poets or no poets – Poetry house party is open for all. It’s a community where we welcome everyone who loves art, music, and meeting new people.",
    },
    {
      question: "Why is the location a secret?",
      answer:
        "No one loves party crashers, including us. And that’s why, the location is shared only with those who have registered.",
    },
    {
      question: "When will the location be revealed?",
      answer:
        "We love the countdowns and that’s why share the location one day before the event. In case you don’t know the directions, we will help you find the venue. So, don’t worry. Just be ready with your party outfit! ",
    },
    {
      question: "How long does the PHP last?",
      answer:
        "It depends on the number of performers and varies from city to city. However, we usually wrap up around 10:00pm.",
    },
    {
      question: "Are there specific slots open?",
      answer:
        "Yes, we have a specific number of slots for every house party. And there’s no on-the-spot booking available. So, click.",
    },
    {
      question: "Is there any dress code?",
      answer:
        "No, there is no dress code. You can wear anything you're most comfortable in.",
    },
    {
      question: "How to arrange a PHP in my city?",
      answer:
        "Get in contact with us at <a href='mailto:getintouch@darkroompoets.com'>getintouch@darkroompoets.com</a>. We are already planning to reach more cities and get more people in our community. Just take one step and we’ll catch up with you.",
    },
    {
      question: "Are there any house rules?",
      answer:
        "Absolutely but don’t worry, they are quite basic and are meant to make the party more pleasant and comfortable for everyone. <br/><strong>The rules include:</strong> <br/>&nbsp;&nbsp;• Be respectful to all the guests and property <br/>&nbsp;&nbsp;• Be on time <br/>&nbsp;&nbsp;• Participate and engage <br/>&nbsp;&nbsp;• No smoking and drinking <br/><br/>And since Covid is still here, you also have to: <br/>&nbsp;&nbsp;• Wear mask<br/>&nbsp;&nbsp;• Sanitize hands regularly",
    },
    {
      question: "What are the cancellation and refund policies?",
      answer:
        "We believe in Salman Khan’s famous dialogue – <strong>'Ek baar jo maine commitment ka di, uske baad to main khud ki bhi nahin sunta'</strong>. In short, there is no refund or cancellation of the tickets. But… we do believe in sharing happiness. So, you can share the tickets with someone else and let them enjoy an evening with us provided it is for the same event. The ticket from one house party is not shareable for any other house party.",
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <FAQ className="faq_area section_padding_130" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div
              className="section_heading text-center wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <h3>
                <span>Frequently </span> Asked Questions
              </h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div id="questions" className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="accordion faq-accordian" id="faqAccordion">
              {accordionData.map((item, index) => (
                <div
                  className="card border-0 wow fadeInUp"
                  data-wow-delay={`0.${index + 2}s`}
                  key={index}
                >
                  <div
                    className="question card-header"
                    id={`heading${index}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4
                      className={`mb-0 ${
                        activeAccordion === index ? "" : "collapsed"
                      }`}
                      aria-expanded={
                        activeAccordion === index ? "true" : "false"
                      }
                      aria-controls={`collapse${index}`}
                    >
                      {item.question}
                      <span className="lni-chevron-up"></span>
                    </h4>
                  </div>
                  <div
                    className={`collapse ${
                      activeAccordion === index ? "show" : ""
                    }`}
                    id={`collapse${index}`}
                    aria-labelledby={`heading${index}`}
                    data-parent="#faqAccordion"
                  >
                    <div
                      id="answer"
                      className="card-body"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <i className="lni-emoji-sad"></i>
              <p className="mb-0 px-2">Can't find your answers?</p>
              <a href="#"> Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </FAQ>
  );
};

const FAQ = styled.div`
  background-image: url("./images/heroSection-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  h3 {
    font-weight: 700;
  }
  #questions {
    margin: 3rem 0 0 0;
  }
  #answer {
    border: 1px solid #3f43fd;
    border-radius: 5px;
    font-size: large;
    font-weight: 500;
  }
  margin: 5rem 0 5rem;
  #answer {
    border: 1px solid #3f43fd;
    border-radius: 5px;
  }
  body {
    margin-top: 20px;
  }
  .section_padding_130 {
    padding-top: 130px;
    padding-bottom: 130px;
  }
  .faq_area {
    position: relative;
    z-index: 1;
    background-color: #f5f5ff;
  }

  .faq-accordian {
    position: relative;
    z-index: 1;
  }
  .faq-accordian .card {
    position: relative;
    z-index: 1;
    margin-bottom: 1.5rem;
  }
  .faq-accordian .card:last-child {
    margin-bottom: 0;
  }
  .faq-accordian .card .card-header {
    background-color: #ffffff;
    padding: 0;
    border-bottom-color: #ebebeb;
  }
  .faq-accordian .card .card-header h4 {
    cursor: pointer;
    padding: 1.75rem 2rem;
    color: #3f43fd;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-grid-row-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .faq-accordian .card .card-header h6 span {
    font-size: 1.5rem;
  }
  .faq-accordian .card .card-header h6.collapsed {
    color: #070a57;
  }
  .faq-accordian .card .card-header h6.collapsed span {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
  .faq-accordian .card .card-body {
    padding: 1.75rem 2rem;
  }
  .faq-accordian .card .card-body p:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 575px) {
    .support-button p {
      font-size: 14px;
    }
  }

  .support-button i {
    color: #3f43fd;
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 575px) {
    .support-button i {
      font-size: 1rem;
    }
  }

  .support-button a {
    text-transform: capitalize;
    color: #2ecc71;
  }
  @media only screen and (max-width: 575px) {
    .support-button a {
      font-size: 13px;
    }
  }
`;

export default FAQSection;
