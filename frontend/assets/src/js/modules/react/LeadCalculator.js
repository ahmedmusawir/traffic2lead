import React, { useState, useEffect } from 'react';
import data from './data-amazon.json';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import { getRapidKey, getEmailKeys } from './utils/ajaxStuff';

function LeadCalculator() {
  const [apiData, setApiData] = useState(data);
  const [isNumber, setIsNumber] = useState(false);
  const ajaxGetFunction = 'get_api_keys_ajax';
  const ajaxEmailGetFunction = 'get_email_keys_ajax';
  const [rapidApiKey, setRapidApiKey] = useState('');
  const [emailPublicKey, setEmailPublicKey] = useState('');
  const [emailTemplateKey, setEmailTemplateKey] = useState('');
  const [emailServiceKey, setEmailServiceKey] = useState('');

  // console.log('ApiData:', apiData);

  useEffect(() => {
    //GETTING THE API KEYS AT PAGE LOAD
    getRapidKey(leeFrontData.ajax_url, ajaxGetFunction, setRapidApiKey);
    //GETTING THE EMAIL KEYS AT PAGE LOAD
    getEmailKeys(
      leeFrontData.ajax_url,
      ajaxEmailGetFunction,
      setEmailPublicKey,
      setEmailServiceKey,
      setEmailTemplateKey
    );
  }, []);

  return (
    <main className="container-fluid main-container">
      <header className="container-fluid bg-dark py-5 mb-5">
        {apiData && (
          <Header
            totalVisits={apiData?.Engagments?.Visits}
            generatedLeads={apiData?.Engagments?.Visits * 0.2}
            setApiData={setApiData}
            setIsNumber={setIsNumber}
            rapidApiKey={rapidApiKey}
            emailPublicKey={emailPublicKey}
            emailServiceKey={emailServiceKey}
            emailTemplateKey={emailTemplateKey}
          />
        )}
      </header>
      <div className="container-fluid">
        {apiData && !isNumber && (
          <div className="row section-1">
            <SectionOne
              siteName={apiData?.SiteName}
              imgUrl={apiData?.LargeScreenshot}
              globalRank={apiData?.GlobalRank?.Rank}
              countryRank={apiData?.CountryRank?.Rank}
              categoryRank={apiData?.CategoryRank?.Rank}
              category={apiData?.CategoryRank?.Category}
              totalVisits={apiData?.Engagments?.Visits}
              bounceRate={apiData?.Engagments?.BounceRate}
              pagePerVisit={apiData?.Engagments?.PagePerVisit}
              avgVisitDuration={apiData?.Engagments?.TimeOnSite}
            />
          </div>
        )}
        {apiData && !isNumber && (
          <div className="row section-2 mt-5">
            <SectionTwo
              siteName={apiData?.SiteName}
              direct={apiData?.TrafficSources?.Direct}
              referrals={apiData?.TrafficSources?.Referrals}
              search={apiData?.TrafficSources?.Search}
              social={apiData?.TrafficSources?.Social}
              mail={apiData?.TrafficSources?.Mail}
              totalVisits={apiData?.Engagments?.Visits}
              bounceRate={apiData?.Engagments?.BounceRate}
              pagePerVisit={apiData?.Engagments?.PagePerVisit}
              avgVisitDuration={apiData?.Engagments?.TimeOnSite}
              monthlyTotalVisits={apiData?.EstimatedMonthlyVisits}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default LeadCalculator;
