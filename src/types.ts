export type dataType = {
  _id: string;
  index: number;
  guid: string;
  fullName: string;
  email: string;
  bvn: number;
  isActive: boolean;
  phone: string;
  status: string;
  balance: string;
  gender: string;
  dateJoined: string;
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    employmentDuration: string;
    officeEmail: string;
    monthlyIncome: number;
    loanRepayment: number;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}[];
