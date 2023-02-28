import $ from 'jquery';

//GETTING RAPID API KEY
const getRapidKey = (ajaxUrl, ajaxFunction, setRapidApiKey) => {
  $.ajax({
    url: ajaxUrl,
    type: 'get',
    data: {
      action: ajaxFunction,
    },
  })
    .done((res) => {
      // console.log(res);
      setRapidApiKey(res.data.rapidApiKey);
      console.log('Ajax with WP Ajax PHP function Success!');
    })
    .fail((res) => {
      console.log('Ajax Failed');
      console.log(res);
    });
};

//GETTING EMAILJS KEY
const getEmailKeys = (
  ajaxUrl,
  ajaxFunction,
  setEmailPublicKey,
  setEmailServiceKey,
  setEmailTemplateKey
) => {
  $.ajax({
    url: ajaxUrl,
    type: 'get',
    data: {
      action: ajaxFunction,
    },
  })
    .done((res) => {
      // console.log(res);
      setEmailPublicKey(res.data.emailjsPublicKey);
      setEmailServiceKey(res.data.emailjsServiceKey);
      setEmailTemplateKey(res.data.emailjsTemplateKey);
      console.log('Ajax with WP Ajax PHP function Success!');
    })
    .fail((res) => {
      console.log('Ajax Failed');
      console.log(res);
    });
};

export { getRapidKey, getEmailKeys };
