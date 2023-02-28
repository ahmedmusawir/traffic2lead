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

//UPDATING THE RAPID API KEY ON CLICK
const insertRapidKey = (ajaxUrl, ajaxFunction, rapidApiKey, setSuccess) => {
  if (!rapidApiKey) {
    alert('SimilarWeb Api Key cannot be empty!');
    return setSuccess(false);
  }

  $.ajax({
    url: ajaxUrl,
    type: 'post',
    data: {
      action: ajaxFunction,
      rapidApiKey,
    },
  })
    .done((res) => {
      console.log(res);
      setSuccess(true);
      console.log('Ajax with WP Ajax PHP function Success!');
    })
    .fail((res) => {
      console.log('Ajax Failed');
      console.log(res);
    });
};

//GETTING RAPID API KEY
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

//UPDATING THE EMAIL JS KEYS ON CLICK
const insertEmailKeys = (
  ajaxUrl,
  ajaxFunction,
  emailPublicKey,
  emailTemplateKey,
  emailServiceKey,
  setSuccessEmail
) => {
  if (!emailPublicKey || !emailTemplateKey || !emailServiceKey) {
    alert('None of the Email Keys can be empty!');
    return setSuccessEmail(false);
  }

  // if (targetEmailAddress) {
  //   let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //   let result = regex.test(targetEmailAddress); // true
  //   console.log('Email Val Result', result);
  //   if (result === false) {
  //     alert('Terget email address is not valid!', targetEmailAddress);
  //     return setSuccessEmail(false);
  //   }
  // }

  $.ajax({
    url: ajaxUrl,
    type: 'post',
    data: {
      action: ajaxFunction,
      emailPublicKey,
      emailTemplateKey,
      emailServiceKey,
    },
  })
    .done((res) => {
      console.log(res);
      setSuccessEmail(true);
      console.log('Ajax with WP Ajax PHP function Success!');
    })
    .fail((res) => {
      console.log('Ajax Failed');
      console.log(res);
    });
};

export { getRapidKey, insertRapidKey, insertEmailKeys, getEmailKeys };
