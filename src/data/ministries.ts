export interface MinistryContact {
  ministry: string;
  department?: string;
  authority: string;
  city: string;
  address: string;
  contactPerson: {
    name: string;
    title: string;
    email?: string;
  };
  phones: {
    office?: string;
    mobile?: string;
    fax?: string;
  };
  website: string;
}

export const ministryContacts: MinistryContact[] = [
  {
    ministry: "Ministry of Agriculture and Animal Resources",
    authority: "National",
    city: "Kigali",
    address: "Kacyiru B.P. 621",
    contactPerson: {
      name: "Dr. Olivier Kamana",
      title: "Permanent Secretary"
    },
    phones: {
      office: "0252 585008",
      mobile: "078 8612942",
      fax: "0252 585057"
    },
    website: "http://www.minagri.gov.rw/"
  },
  {
    ministry: "Ministry of Education",
    authority: "National",
    city: "Kigali",
    address: "Kacyiru B.P. 622",
    contactPerson: {
      name: "Charles KARAKYE",
      title: "Permanent Secretary",
      email: "ckarakye@mineduc.gov.rw"
    },
    phones: {
      office: "0252 583051",
      fax: "0252 582161"
    },
    website: "http://www.mineduc.gov.rw/"
  },
  {
    ministry: "Ministry of Health",
    authority: "National",
    city: "Kigali",
    address: "Kigali B.P. 84",
    contactPerson: {
      name: "Zachee IYAKAREMYE",
      title: "Permanent Secretary",
      email: "info@moh.gov.rw"
    },
    phones: {
      office: "577458/577910",
      fax: "576853/577458"
    },
    website: "http://www.moh.gov.rw/"
  },
  {
    ministry: "Ministry of Local Government",
    authority: "National",
    city: "Kigali",
    address: "Kacyiru B.P. 3445",
    contactPerson: {
      name: "Dusengiyumva Samuel",
      title: "Permanent Secretary",
      email: "ps@minaloc.gov.rw"
    },
    phones: {
      office: "+250-252 583595",
      fax: "582227/28"
    },
    website: "http://www.minaloc.gov.rw/"
  },
  {
    ministry: "Rwanda Revenue Authority",
    authority: "National",
    city: "Kigali",
    address: "Kimihurura Avenue du Lac Muhazi P.O. Box 3987 Kigali",
    contactPerson: {
      name: "Pascal BIZIMANA Ruganintwali",
      title: "Commissioner General RRA"
    },
    phones: {
      office: "0252578088",
      fax: "+250 578 488"
    },
    website: "http://www.rra.gov.rw"
  }
];