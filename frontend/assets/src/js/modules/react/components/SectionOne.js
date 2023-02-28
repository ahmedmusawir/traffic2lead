import React from 'react';
import millify from 'millify';
import _ from 'lodash';
import { BsGlobe } from 'react-icons/bs';

const SectionOne = ({
  siteName,
  imgUrl,
  globalRank,
  countryRank,
  categoryRank,
  category,
  totalVisits,
  bounceRate,
  pagePerVisit,
  avgVisitDuration,
}) => {
  return (
    <>
      <div className="col-md-12">
        <article className="text-center">
          <h1 className="mb-4">{siteName}</h1>
          <img className="header-img" src={imgUrl} alt="" />
        </article>
      </div>
      <section className="container mt-5">
        <article className="row section-1-row-2">
          <div className="col-md-4 text-center">
            <span className="title-box">
              <h6>
                <i className="bi bi-hurricane mr-1"></i>
                Global Rank
              </h6>
            </span>
            <div className="number-box">
              <span className="number-sign">#</span>
              <span className="number">{globalRank}</span>

              <p className="subtitle">
                <BsGlobe />
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <span className="title-box w-100">
              <h6>
                <i className="bi bi-hurricane mr-1"></i>
                Country Rank
              </h6>
            </span>
            <div className="number-box">
              <span className="number-sign">#</span>
              <span className="number">{countryRank}</span>
              <p className="subtitle">
                <small className="">United States</small>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <span className="title-box">
              <h6>
                <i className="bi bi-hurricane mr-1"></i>
                Category Rank
              </h6>
            </span>
            <div className="number-box w-100">
              <span className="number-sign">#</span>
              <span className="number">{categoryRank}</span>
              <p className="subtitle">
                <small className="category-long-text">
                  {/* {category} */}
                  {_.truncate(category, { length: 40 })}
                </small>
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="container mt-5">
        <article className="row section-1-row-3">
          <div className="col-md-3 text-center border-left border-info">
            <span className="title-box">
              <p className="title">Total Visits</p>
            </span>
            <div className="number-box">
              <span className="number">{millify(totalVisits)}</span>
            </div>
          </div>
          <div className="col-md-3 text-center border-left border-info">
            <span className="title-box">
              <p className="title">Bounce Rate</p>
            </span>
            <div className="number-box">
              <span className="number">{millify(bounceRate * 100)}%</span>
            </div>
          </div>
          <div className="col-md-3 text-center border-left border-info">
            <span className="title-box">
              <p className="title">Pages per Visit</p>
            </span>
            <div className="number-box">
              <span className="number">{millify(pagePerVisit)}</span>
            </div>
          </div>
          <div className="col-md-3 text-center border-left border-info">
            <span className="title-box">
              <p className="title">Avg Visit Duration</p>
            </span>
            <div className="number-box">
              <span className="number">
                {millify(avgVisitDuration / 60)} min
              </span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SectionOne;
