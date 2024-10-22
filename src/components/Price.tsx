import React from 'react';
import './price.css';  // Link to the CSS file for styles

const Price: React.FC = () => {
  return (
    <div className="page">
      <h1 className="page-title">A monthly pests reminder personalized for your plants</h1>
      <p className="page-subtitle">
        We offer flexible plans to suit every grower's needs. Our subscriptions provide access to tailored pest management
        solutions and timely reminders, ensuring your plants remain healthy throughout the year.
      </p>
      <div className="plans">
        {/* Free Plan */}
        <div className="plan">
          <h2>FREE PLAN</h2>
          <ul>
            <li>Basic pest identification</li>
            <li>Access to our knowledge base</li>
            <li>Community support</li>
          </ul>
          <button className="current-plan-btn">Current Plan</button>
        </div>

        {/* Premium Plan (Monthly) */}
        <div className="plan premium">
          <h2>PREMIUM PLAN (MONTHLY)</h2>
          <ul>
            <li>Advanced pest diagnostics</li>
            <li>Priority support from plant protection experts</li>
            <li>Organic and biological treatment recommendations</li>
            <li>Detailed treatment and prevention plans for each pest type</li>
          </ul>
          <button className="price-btn">Rp225.000 / month</button>
        </div>

        {/* Premium Plan (Yearly) */}
        <div className="plan premium">
          <h2>PREMIUM PLAN (YEARLY)</h2>
          <ul>
            <li>Advanced pest diagnostics</li>
            <li>Priority support from plant protection experts</li>
            <li>Organic and biological treatment recommendations</li>
            <li>Detailed treatment and prevention plans for each pest type</li>
          </ul>
          <button className="price-btn">Rp2.400.000 / year</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
