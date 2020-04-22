import React from "react";
import "./CompaniesPage.css";

const dummyData = [
  {
    CompanyID: 1,
    company_name: "Talis",
    Description: "Supplies education software and solutions",
    Logo: "talis.jpg",
    Address: "Jewellery Quarter, Birmingham",
    Postcode: "B72 6PM",
    Website: "www.talis.com",
    Twitter: "www.twitter.com/talis",
    LinkedIn: "www.linkedin.com/talis",
  },
  {
    CompanyID: 2,
    company_name: "Mcdonalds HQ",
    Description: "Giving the nation tasty burgers",
    Logo: "dons.jpg",
    Address: "Camden Market, London",
    Postcode: "W1 BAA",
    Website: "www.mcdonalds.com",
    Twitter: "www.twitter.com/mcdonalds",
    LinkedIn: "www.linkedin.com/mcdonalds",
  },
  {
    CompanyID: 3,
    company_name: "Purple Bricks",
    Description: "Sorting out top gafs",
    Logo: "purplebricks.png",
    Address: "Solihull, Birmingham",
    Postcode: "B12 3SY",
    Website: "www.purplebricks.com",
    Twitter: "www.twitter.com/purplebricks",
    LinkedIn: "www.linkedin.com/purplebricks",
  },
];

function CompaniesPage() {
  return (
    <>
      <div className="header">
        <h2> Companies </h2>
        <small>
          Our bootcampers have gone on to work at these tech companies. Click
          the company to find out more.{" "}
        </small>
      </div>
      <div className="bigContainer">
        {dummyData.map((item) => {
          return (
            <div className="companyContainer">
              <img
                src={require(`../../images/${item.Logo}`)}
                alt="company logo"
                className="companyLogo"
              />
              <h3> {item.company_name} </h3>
              <p> {item.Address}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CompaniesPage;
