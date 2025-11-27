import React from 'react';
import './Policy.css'; // optional for shared styling

const Terms = () => {
  return (
    <div className="policy-container">
      <h1>Terms of Use</h1>
      
      <section>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing this platform, you agree to comply with our Terms of Use and all applicable laws and regulations. 
          If you do not agree with these terms, you must not use the platform.
        </p>
      </section>

      <section>
        <h2>Platform Use</h2>
        <p>
          This platform is designed to provide information on job openings, training programs, and career resources for persons with disabilities. 
          Users must use the platform responsibly and must not misuse any content or data.
        </p>
      </section>

      <section>
        <h2>User Accounts</h2>
        <p>
          Users may create profiles to access personalized features. 
          You are responsible for maintaining the confidentiality of your account information and password.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All content on this platform, including text, graphics, logos, and software, is the property of Team Hexacoders and protected by copyright laws. 
          Unauthorized use is strictly prohibited.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          The platform provides information to the best of our ability. 
          Team Hexacoders is not liable for any direct or indirect damages arising from the use of this platform.
        </p>
      </section>

      <section>
        <h2>Changes to Terms</h2>
        <p>
          We may update these Terms of Use at any time. Users are encouraged to review them periodically for any changes.
        </p>
      </section>
    </div>
  );
}

export default Terms;
