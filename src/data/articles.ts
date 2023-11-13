interface Article {
  title?: string;
  body?: string;
  imgURL?: string;
}

const articles: Array<Article> = [
  {
    title: "Members",
    body: "This section features the different membership categories, premium payment, data amendment and other procedures that each type of member must know. We have custom-fit the information to ensure that we address the specific concerns of each of our member types.",
    imgURL: "https://www.philhealth.gov.ph/images/home_mbr.jpg",
  },
  {
    title: "Online Services",
    body: "Considered the newest addition to our menu of electronic services, this section features the different access points that our stakeholders can tap to transact with us online. It includes registration, premium payment and reporting and even locating our offices nationwide.",
    imgURL: "https://www.philhealth.gov.ph/images/home_services.jpg",
  },
  {
    title: "Benefits",
    body: "This section features a variety of comprehensive health care services -from basic primary care to catastrophic packages to provide members and their families with the information they need on benefits and benefits availment. It includes eligibility requirements, coverage, general guidelines for specific diseases and selections criteria among others.",
    imgURL: "https://www.philhealth.gov.ph/images/home_benefits.jpg",
  },
  {
    title: "Our Partners",
    body: "We forge partnerships with only the best in the industry to fulfill our mandate of providing all Filipinos with accessible, available, acceptable and affordable health care services that will lead to better health outcomes and improved quality of life",
    imgURL: "https://www.philhealth.gov.ph/images/home_partners.jpg",
  },
];

export default articles;
