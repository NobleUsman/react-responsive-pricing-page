import { useState } from "react";
import "./styles.css";
import pricingColData from "../src/config/pricing-col-config";
import { MdOutlineArrowBack } from "react-icons/md";
import { TbCircleChevronRight } from "react-icons/tb";

export function PricingCol({ data, selectedTab, onTabChange }) {
  return (
    <div
      className={`pricing-col ${selectedTab === data.id ? "selected-col" : ""}`}
      onClick={() => onTabChange(data.id)}
    >
      <div className={`${selectedTab === data.id ? "dark-bg white bold" : ""}`}>
        {data.type}
      </div>
      <div className={`${selectedTab === data.id ? "light-bg" : ""}`}>
        {data.perDayPricing}
      </div>
      <div className={`${selectedTab === data.id ? "light-bg" : ""}`}>
        {data.totalSavings}
      </div>
      <div className={`${selectedTab === data.id ? "light-bg bold" : ""}`}>
        {data.totalAmount}
      </div>
    </div>
  );
}

export function PricingType({ data, selectedTab, onTabChange }) {
  return (
    <div
      className={`pricing-type-box bold ${
        selectedTab === data.id ? "selected-col light-bg dark-font" : ""
      }`}
      onClick={() => onTabChange(data.id)}
    >
      {data.type}
    </div>
  );
}

export default function App() {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabChangeHandler = (selectedId) => {
    setSelectedTab(selectedId);
  };

  return (
    <div className="App">
      <div className="page-header">
        <div className="icon-container">
          <MdOutlineArrowBack size={18} />
        </div>
        <div className="bold">Payment</div>
        <div></div>
      </div>

      <div className="page-content">
        <div className="pricing-container">
          <div className="row-desc">
            <div>Per Day Price</div>
            <div>Total Savings</div>
            <div className="bold">Total Amount</div>
          </div>

          {pricingColData.map((pricingCol) => (
            <PricingCol
              key={pricingCol.id}
              data={pricingCol}
              selectedTab={selectedTab}
              onTabChange={tabChangeHandler}
            />
          ))}
        </div>

        <div className={`pricing-type-container`}>
          {pricingColData.map((pricingCol) => (
            <PricingType
              key={pricingCol.id}
              data={pricingCol}
              selectedTab={selectedTab}
              onTabChange={tabChangeHandler}
            />
          ))}
        </div>

        <div className="payment-btns">
          <button className="payment-upi">
            <div className="bold">Pay with UPI</div>
            <div className="icon-container">
              <TbCircleChevronRight size={24} />
            </div>
          </button>

          <div className="payment-separator">OR</div>

          <button className="payment-other">
            <div className="bold">Pay with other option</div>
            <div className="icon-container">
              <TbCircleChevronRight size={24} />
            </div>
          </button>
        </div>

        <div className="tnc">* Terms and Conditions Applied</div>
      </div>
    </div>
  );
}
