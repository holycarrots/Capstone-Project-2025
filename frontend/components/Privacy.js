import React from 'react';
import './Policy.css'; // optional for shared styling

const Privacy = () => {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      
      <section>
        <h2>Who We Are</h2>
        <p>
          We are team Hexacoders. We believe in providing a better business experience for people with disabilities. 
          This platform provides information on job openings, skill development programs, and career resources for persons with disabilities.
        </p>
      </section>

      <section>
        <h2>Our Commitment</h2>
        <p>
          Your privacy is important to us. All personal information collected on this platform is securely stored and only used to improve your experience. 
          We never share your data with third parties without your consent.
        </p>
      </section>

      <section>
        <h2>Data Collection</h2>
        <p>
          We may collect information such as your name, email, profile details, and skills to personalize your experience on the platform. 
          Users can choose what information to share when creating their profiles.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We implement robust security measures to protect user data from unauthorized access. 
          However, users are encouraged to maintain strong passwords and avoid sharing sensitive information.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Users will be notified of significant changes through the platform.
        </p>
      </section>
    </div>
  );
}

export default Privacy;
