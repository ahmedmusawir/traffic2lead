import React, { useState } from 'react';
import millify from 'millify';
import Audio from 'react-loader-spinner';
import {
  sendEmail,
  validateDomainName,
  validateMonthlyVisits,
} from '../utils/getUtils';
import http from '../utils/httpService';

const Header = ({
  totalVisits,
  generatedLeads,
  setApiData,
  setIsNumber,
  rapidApiKey,
  emailPublicKey,
  emailServiceKey,
  emailTemplateKey,
}) => {
  const [domainName, setDomainName] = useState('');
  const [error, setError] = useState('');
  const [totalVisitsByUser, setTotalVisitsByUser] = useState(null);
  const [generatedLeadsByUsers, setGeneratedLeadsByUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHeaderReset, setIsHeaderReset] = useState(false);

  const validateData = async (e) => {
    setIsLoading(true);

    if (domainName) {
      //CHECKING FOR TEXT DATA
      if (isNaN(domainName)) {
        //THIS MAKES API BASED DATA TO SHOW UP
        setIsNumber(false);

        //REMOVING MANUAL NUMBER VIEW
        setTotalVisitsByUser(null);

        // VALIDATING DOMAIN NAME STRING
        const domainVal = validateDomainName(domainName);

        if (domainVal) {
          setIsHeaderReset(true);
          return setError(domainVal);
        }

        //MAKING API CALL TO SIMILAR WEB RAPID API
        // console.log('Rapid Api key from header:', rapidApiKey);
        const options = {
          url: 'https://similar-web.p.rapidapi.com/get-analysis',
          params: { domain: domainName.toLowerCase() },
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'similar-web.p.rapidapi.com',
          },
        };

        try {
          const data = await http.get(options.url, {
            params: options.params,
            headers: options.headers,
          });
          // console.log('Raw API data:', data.data?.Engagments?.Visits);

          // VALIDATE MONTHLY VISITS WHEN VISITOR LESS THAN 5000
          const apiTotalVisits = data.data?.Engagments?.Visits;
          const monthlyVisits = validateMonthlyVisits(apiTotalVisits);

          if (monthlyVisits) {
            setIsNumber(true);
            setIsHeaderReset(true);

            return setError(monthlyVisits);
          }
          // WHEN MONTHLY VISITOR NUMBER MORE THAN 5000
          setIsHeaderReset(false);

          setApiData(data.data);
          setIsLoading(false);
          setError('');
        } catch (error) {
          const errorMessage =
            error.response.data.message +
            ' Check & Update SimilarWeb API Key at WP Admin Backend... ';

          setError(errorMessage);
        }

        //SENDING EMAIL TO TARGET EMAIL ADDRESS
        sendEmail(
          domainName,
          emailPublicKey,
          emailServiceKey,
          emailTemplateKey
        );
      }
      //CHECKING FOR NUMBER DATA
      else {
        //THIS MAKES API DATA DISAPPEAR AND ONLY NUMER DATA TO SHOW UP
        setIsNumber(true);
        setIsHeaderReset(false);

        //THIS DISABLES THE LOADING WHEN NUMBER IS INSERTED
        setIsLoading(false);
        setTotalVisitsByUser(domainName);
        setGeneratedLeadsByUsers(domainName * 0.02);
        setError('');
      }
    } else {
      setIsLoading(false);
      setIsHeaderReset(false);

      setError('Input is Required!');
    }
  };

  return (
    <div className='row'>
      <section className='col-sm-12 col-md-9 mx-auto'>
        <div className='row header-top-section mx-auto'>
          <div className='col-sm-8 header-inputs'>
            <input
              type='text'
              className='form-control get-estimate-input'
              placeholder='Enter your domain URL or traffic count'
              onChange={(e) => setDomainName(e.target.value)}
            />
          </div>
          <div className='col-sm-4 header-inputs'>
            <button
              className='btn btn-block btn-info get-estimate-btn'
              onClick={validateData}
            >
              Get Estimate
            </button>
          </div>
        </div>
        <div className='row header-bottom-section mt-5'>
          {!isHeaderReset && !totalVisitsByUser && (
            <>
              <div className='col-sm-6'>
                <article className='left-blue-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>{millify(totalVisits)}</h2>
                  <h5>Unique Visitors</h5>
                </article>
              </div>
              <div className='col-sm-6'>
                <article className='right-orange-box estimate-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>{millify(generatedLeads)}</h2>
                  <h5>Lead Gaurantee</h5>
                </article>
              </div>
            </>
          )}

          {!isHeaderReset && totalVisitsByUser && (
            <>
              <div className='col-sm-6'>
                <article className='left-blue-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>{millify(totalVisitsByUser)}</h2>
                  <h5>Unique Visitors</h5>
                </article>
              </div>
              <div className='col-sm-6'>
                <article className='right-orange-box estimate-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>{millify(generatedLeadsByUsers)}</h2>
                  <h5>Lead Gaurantee</h5>
                </article>
              </div>
            </>
          )}

          {isHeaderReset && (
            <>
              <div className='col-sm-6'>
                <article className='left-blue-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>0</h2>
                  <h5>Unique Visitors</h5>
                </article>
              </div>
              <div className='col-sm-6'>
                <article className='right-orange-box estimate-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>0</h2>
                  <h5>Lead Gaurantee</h5>
                </article>
              </div>
            </>
          )}

          {isLoading && (
            <div className='pt-5 d-flex w-100 justify-content-center'>
              <Audio
                height='80'
                width='80'
                radius='9'
                color='dodgerblue'
                ariaLabel='loading'
                className='mx-auto'
              />
            </div>
          )}

          {error && (
            <div className='text-center mx-auto text-warning'>
              <h4 className='text-warning pt-5'>{error}</h4>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Header;
