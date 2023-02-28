<?php
add_action('wp_ajax_nopriv_get_email_keys_ajax', 'get_email_keys_ajax');
add_action('wp_ajax_get_email_keys_ajax', 'get_email_keys_ajax');

function get_email_keys_ajax()
{

 // INSERTING DATA
 $target_email         = get_option('target_email');
 $emailjs_template_key = get_option('emailjs_template_key');
 $emailjs_public_key   = get_option('emailjs_public_key');
 $emailjs_service_key  = get_option('emailjs_service_key');

 $response = [
  'targetEmail'        => $target_email,
  'emailjsTemplateKey' => $emailjs_template_key,
  'emailjsPublicKey'   => $emailjs_public_key,
  'emailjsServiceKey'  => $emailjs_service_key
 ];

 wp_send_json_success($response);

 wp_die();
}
