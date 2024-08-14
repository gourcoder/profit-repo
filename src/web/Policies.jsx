import React, { useEffect } from 'react';
import './policy.css'; // Create and import a CSS file for styling
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  },[])
  return (
    <div className="page-content">
      <div className="dz-bnr-inr style-1 text-center">
        <div className="container" style={{ marginTop: 0 }}>
          <div className="dz-bnr-inr-entry">
            <h1 className="page-title">Privacy Policy</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Privacy Policy
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <img className="bg-shape1" src="images/home-banner/shape1.png" alt="" />
        <img className="bg-shape2" src="images/home-banner/shape1.png" alt="" />
        <img className="bg-shape3" src="images/home-banner/shape3.png" alt="" />
        <img className="bg-shape4" src="images/home-banner/shape3.png" alt="" />
      </div>

      <section className="cmn_q_an_block">
        <div className="container">
          <div className="col-12 col-md-10 py-3 m-auto">
            <h5 className="cmn_rld_para">
              We are committed to protecting and respecting your privacy and seek to comply with all applicable laws...
            </h5>
          </div>
          <div className="cmn_block_cards col-12 col-md-10">
            <h6 className="cmn_q_t">Information collected </h6>
            <p className="cmn_q_a">
              Our website uses forms in which you give us contact information...
            </p>
          </div>
          <div className="cmn_block_cards col-12 col-md-10">
            <h6 className="cmn_q_t">How we use your personal data </h6>
            <p className="cmn_q_a">
              Your personal information is used for creating your account...
            </p>
          </div>
          <div className="cmn_block_cards col-12 col-md-10">
            <h6 className="cmn_q_t">Your personal information and third parties </h6>
            <p className="cmn_q_a">
              We will never share your information without your permission...
            </p>
          </div>
          <div className="cmn_block_cards col-12 col-md-10">
            <h6 className="cmn_q_t">Retention &amp; Deletion of Account Information</h6>
            <p className="cmn_q_a">
              When your order of our product or service is refunded...
            </p>
          </div>
          <div className="cmn_block_cards col-12 col-md-10">
            <h6 className="cmn_q_t">Cookie Policy </h6>
            <p className="cmn_q_a">
              We may Process your Personal Data by placing or reading Cookies...
            </p>
          </div>
          <div className="cmn_block_cards col-12 col-md-10">
            <h6 className="cmn_q_t">Cancellation/Refund Policy </h6>
            <p className="cmn_q_a">
              All payments are non refundable and non transferable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
