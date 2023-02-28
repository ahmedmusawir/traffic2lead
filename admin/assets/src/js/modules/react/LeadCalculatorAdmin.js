import React, { useState, useEffect } from 'react';
import Audio from 'react-loader-spinner';
import Modal from 'react-modal';
import {
  getRapidKey,
  getEmailKeys,
  insertRapidKey,
  insertEmailKeys,
} from './utils/ajaxStuff';

const customStyles = {
  content: {
    top: '50%',
    left: '55%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '50%',
    background: 'black',
  },
};

function LeadCalculatorAdmin() {
  const ajaxGetFunction = 'get_api_keys_ajax';
  const ajaxPostFunction = 'update_api_keys_ajax';
  const ajaxEmailGetFunction = 'get_email_keys_ajax';
  const ajaxEmailPostFunction = 'update_email_keys_ajax';
  const pluginImgUrl =
    leeAdminData.plugin_url +
    '/lee-goff-similarweb-react-plugin/admin/assets/imgs';
  const [rapidApiKey, setRapidApiKey] = useState('');
  const [emailPublicKey, setEmailPublicKey] = useState('');
  const [emailTemplateKey, setEmailTemplateKey] = useState('');
  const [emailServiceKey, setEmailServiceKey] = useState('');
  const [success, setSuccess] = useState(false);
  const [successEmail, setSuccessEmail] = useState(false);
  const [isRapidOpen, setIsRapidOpen] = useState(false);
  const [isServiceIdOpen, setIsServiceIdOpen] = useState(false);
  const [isTemplateIdOpen, setIsTemplateIdOpen] = useState(false);
  const [isPublicKeyOpen, setIsPublicKeyOpen] = useState(false);

  function openRapidModal() {
    setIsRapidOpen(true);
  }
  function closeRapidModal() {
    setIsRapidOpen(false);
  }
  function openServiceIdModal() {
    setIsServiceIdOpen(true);
  }
  function closeServiceIdModal() {
    setIsServiceIdOpen(false);
  }
  function openTemplateIdModal() {
    setIsTemplateIdOpen(true);
  }
  function closeTemplateIdModal() {
    setIsTemplateIdOpen(false);
  }
  function openPublicKeyModal() {
    setIsPublicKeyOpen(true);
  }
  function closePublicKeyModal() {
    setIsPublicKeyOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    //GETTING THE API KEYS AT PAGE LOAD
    getRapidKey(leeAdminData.ajax_url, ajaxGetFunction, setRapidApiKey);
    //GETTING THE EMAIL KEYS AT PAGE LOAD
    getEmailKeys(
      leeAdminData.ajax_url,
      ajaxEmailGetFunction,
      setEmailPublicKey,
      setEmailServiceKey,
      setEmailTemplateKey
    );
  }, []);

  return (
    <div className='App'>
      <section className='input-box'>
        <h1 className='text-light'>Shortcode:</h1>
        <h5 className='text-warning mb-4'>[traffic_2_lead_calculator]</h5>
      </section>
      <section className='input-box'>
        <h1 className='text-light'>
          SimilarWeb API Keys Setup (
          <a
            className='text-warning'
            href='https://rapidapi.com/apidojo/api/similar-web'
            target='_blank'
          >
            rapidapi.com
          </a>
          )
        </h1>
        <p className='text-info'>
          The data fetching from the API will not work without this key!
        </p>
        <h6 className='btn btn-sm btn-info' onClick={openRapidModal}>
          Rapid API example
        </h6>
        <Modal
          isOpen={isRapidOpen}
          onRequestClose={closeRapidModal}
          style={customStyles}
          contentLabel='Example Modal'
          ariaHideApp={false}
        >
          <button
            className='btn btn-sm btn-danger float-right mb-3'
            onClick={closeRapidModal}
          >
            close
          </button>
          <h1>Rapid API</h1>
          <img src={pluginImgUrl + '/rapidapi.png'} alt='' />
        </Modal>
        <label htmlFor='rapidapikey' className='text-warning'>
          API Key:
        </label>
        <input
          type='text'
          name='rapidapikey'
          placeholder={rapidApiKey ? rapidApiKey : 'SimilarWeb Api Key'}
          onChange={(e) => setRapidApiKey(e.target.value)}
        />

        <button
          className='btn btn-warning btn-md mt-3'
          onClick={() =>
            insertRapidKey(
              leeAdminData.ajax_url,
              ajaxPostFunction,
              rapidApiKey,
              setSuccess
            )
          }
        >
          Update Api Keys
        </button>
      </section>
      <section className='display-box'>
        {success && (
          <aside className='success-message'>
            Api Key Update Successfully!
          </aside>
        )}
      </section>
      {/* <hr /> */}
      <section className='input-box mt-2'>
        <h1 className='text-light'>
          Auto Email Setup (
          <a
            href='https://www.emailjs.com/'
            target='_blank'
            className='text-warning'
          >
            emailjs.com
          </a>
          )
        </h1>
        <p className='text-info'>
          Auto sending emails will not work without any of the following!
        </p>
        <div className='row'>
          <h6
            className='btn btn-sm btn-info mr-2 ml-3'
            onClick={openServiceIdModal}
          >
            Service ID Example
          </h6>
          <h6
            className='btn btn-sm btn-info mr-2'
            onClick={openTemplateIdModal}
          >
            Template ID Example
          </h6>
          <h6 className='btn btn-sm btn-info' onClick={openPublicKeyModal}>
            Public Key Example
          </h6>
        </div>
        <Modal
          isOpen={isServiceIdOpen}
          onRequestClose={closeServiceIdModal}
          style={customStyles}
          contentLabel='EmailJS'
          ariaHideApp={false}
        >
          <button
            className='btn btn-sm btn-danger float-right mb-3'
            onClick={closeServiceIdModal}
          >
            close
          </button>
          <h1>Email JS</h1>
          <img src={pluginImgUrl + '/emailjs-serviceid.png'} alt='' />
        </Modal>
        <Modal
          isOpen={isTemplateIdOpen}
          onRequestClose={closeTemplateIdModal}
          style={customStyles}
          contentLabel='EmailJS'
          ariaHideApp={false}
        >
          <button
            className='btn btn-sm btn-danger float-right mb-3'
            onClick={closeTemplateIdModal}
          >
            close
          </button>
          <h1>Email JS</h1>
          <img src={pluginImgUrl + '/emailjs-templateid.png'} alt='' />
        </Modal>
        <Modal
          isOpen={isPublicKeyOpen}
          onRequestClose={closePublicKeyModal}
          style={customStyles}
          contentLabel='EmailJS'
          ariaHideApp={false}
        >
          <button
            className='btn btn-sm btn-danger float-right mb-3'
            onClick={closePublicKeyModal}
          >
            close
          </button>
          <h1>Email JS</h1>
          <img src={pluginImgUrl + '/emailjs-publickey.png'} alt='' />
        </Modal>

        <label htmlFor='rapidapikey' className='text-warning'>
          EmailJS Service ID:
        </label>
        <input
          type='text'
          placeholder={emailServiceKey ? emailServiceKey : 'EmailJs Service ID'}
          onChange={(e) => setEmailServiceKey(e.target.value)}
        />
        <label htmlFor='rapidapikey' className='text-warning'>
          EmailJS Template ID:
        </label>
        <input
          type='text'
          placeholder={
            emailTemplateKey ? emailTemplateKey : 'EmailJS Template Key'
          }
          onChange={(e) => setEmailTemplateKey(e.target.value)}
        />
        <label htmlFor='rapidapikey' className='text-warning'>
          EmailJS Public Key:
        </label>
        <input
          type='text'
          placeholder={emailPublicKey ? emailPublicKey : 'EmailJS Public Key'}
          onChange={(e) => setEmailPublicKey(e.target.value)}
        />
        <button
          className='btn btn-warning btn-md mt-3'
          onClick={() =>
            insertEmailKeys(
              leeAdminData.ajax_url,
              ajaxEmailPostFunction,
              emailPublicKey,
              emailTemplateKey,
              emailServiceKey,
              setSuccessEmail
            )
          }
        >
          Update Email Keys
        </button>
      </section>
      <section className='display-box'>
        {successEmail && (
          <aside className='success-message'>
            Email Keys Update Successfully!
          </aside>
        )}
      </section>
    </div>
  );
}

export default LeadCalculatorAdmin;
