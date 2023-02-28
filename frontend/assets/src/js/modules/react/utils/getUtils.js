import moment from 'moment';
import emailjs from '@emailjs/browser';

const sendEmail = (
  domainName,
  emailPublicKey,
  emailServiceKey,
  emailTemplateKey
) => {
  const templateParams = {
    message: domainName,
  };

  // console.log('from sendmail', { domainName });
  // console.log({ emailPublicKey });
  // console.log({ emailServiceKey });
  // console.log({ emailTemplateKey });

  emailjs
    .send(
      emailServiceKey, // SERVICE ID
      emailTemplateKey, // TEMPLATE ID
      templateParams,
      emailPublicKey // PUBLIC KEY
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log('message sent');
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const getMonths = (obj) => {
  const dates = Object.keys(obj);
  let monthLabels = [];

  dates.map((dt) => {
    let m = moment(dt).format('MMM');
    monthLabels.push(m);
  });

  return monthLabels;
};

const getPercentage = (changeBy, lastMonthVisits) => {
  return (changeBy / lastMonthVisits) * 100;
};

const getMonthlyChange = (numberData) => {
  const lastMonthVisits = numberData[1];
  const thisMonthVisits = numberData[2];

  let monthlyChange = lastMonthVisits - thisMonthVisits;
  // console.log('last month:', lastMonthVisits);
  // console.log('this month:', thisMonthVisits);
  // console.log('Change:', monthlyChange);

  let changeBy = 0;
  let changePercentage = 0;
  let isPositive = true;

  if (monthlyChange >= 0) {
    // console.log('Decreased by', millify(Math.abs(monthlyChange)));
    changeBy = Math.abs(monthlyChange);
    changePercentage = getPercentage(changeBy, lastMonthVisits);
    isPositive = false;
  } else {
    // console.log('Increased by', millify(Math.abs(monthlyChange)));
    changeBy = Math.abs(monthlyChange);
    changePercentage = getPercentage(changeBy, lastMonthVisits);
  }

  // console.log('Change Percentage:', changePercentage.toFixed(2));
  // console.log('Change Percentage:', Math.ceil(changePercentage));

  return {
    monthlyChangePercentage: changePercentage.toFixed(2),
    isPositive,
  };
};

const validateDomainName = (domainName) => {
  // Create a regular expression to validate the domain name
  const dn =
    /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9\-]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0–9\-]{2,30}\.[a–zA–Z]{2,3})$/;

  if (dn.test(domainName)) {
    return null;
  } else {
    return 'A valid Domain Name or a Number is requied!';
  }
};

export { getMonths, getMonthlyChange, sendEmail, validateDomainName };
