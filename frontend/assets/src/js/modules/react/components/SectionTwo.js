import React from 'react';
import millify from 'millify';
import BarChart from './BarChart';

import { getMonths, getMonthlyChange } from '../utils/getUtils';

const SectionTwo = ({
  siteName,
  direct,
  referrals,
  search,
  social,
  mail,
  totalVisits,
  bounceRate,
  pagePerVisit,
  avgVisitDuration,
  monthlyTotalVisits,
}) => {
  // console.log('monthlyTotalVisits', monthlyTotalVisits);
  const monthLabels = getMonths(monthlyTotalVisits);
  // console.log('Months', monthLabels);
  const numberData = Object.values(monthlyTotalVisits);
  // console.log('Numbers', numberData);
  const analisys = getMonthlyChange(numberData);
  // console.log('Analysis:', analisys);

  return (
    <>
      <article className="other-content container py-5">
        <h3>{siteName} Traffic and Engagement Analysis</h3>
        <p>
          <small>
            {siteName}'s traffic has changed by{' '}
            {analisys.isPositive
              ? '+ ' + analisys.monthlyChangePercentage
              : '- ' + analisys.monthlyChangePercentage}
            {'%'} compared to last month (Desktop). See below to reveal how well
            amazon.com meets visitor expectations and captures their interest.
          </small>
        </p>
      </article>
      <article className="other-content container pb-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3">
            <h6 className="text-center">Traffic & Engagement Last Month</h6>
            <aside className="px-5 rounded number-box">
              <span className="text-block mb-5">
                <small>Total Visits</small>
                <h5>{millify(totalVisits)}</h5>
              </span>
              <span className="text-block mb-5">
                <small>Last Month Change</small>
                <h5>
                  {analisys.isPositive
                    ? '+ ' + analisys.monthlyChangePercentage
                    : '- ' + analisys.monthlyChangePercentage}
                  {'%'}
                </h5>
              </span>
              <span className="text-block mb-5">
                <small>Avg Visit Duration</small>
                <h5>{millify(avgVisitDuration / 60)} min</h5>
              </span>
              <span className="text-block mb-5">
                <small>Bounce Rate</small>
                <h5>{millify(bounceRate * 100)}%</h5>
              </span>
              <span className="text-block mb-5">
                <small>Page per Visit</small>
                <h5>{millify(pagePerVisit)}</h5>
              </span>
            </aside>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 chart-box">
            <BarChart numberData={numberData} monthLabels={monthLabels} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3">
            <h6 className="text-center">Traffic Sources</h6>
            <aside className="px-5 rounded number-box">
              <span className="text-block mb-5">
                <small>Direct</small>
                <h5>{millify(direct * 100)}</h5>
              </span>
              <span className="text-block mb-5">
                <small>Referrals</small>
                <h5>{millify(referrals * 100)}</h5>
              </span>
              <span className="text-block mb-5">
                <small>Search</small>
                <h5>{millify(search * 100)}</h5>
              </span>
              <span className="text-block mb-5">
                <small>Social</small>
                <h5>{millify(social * 100)}</h5>
              </span>
              <span className="text-block mb-5">
                <small>Mail</small>
                <h5>{millify(mail * 100)}</h5>
              </span>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default SectionTwo;
