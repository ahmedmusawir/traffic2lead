<?php
add_action('wp_ajax_nopriv_update_email_keys_ajax', 'update_email_keys_ajax');
add_action('wp_ajax_update_email_keys_ajax', 'update_email_keys_ajax');

function update_email_keys_ajax()
{

 $target_email         = $_POST['targetEmailAddress'];
 $emailjs_template_key = $_POST['emailTemplateKey'];
 $emailjs_public_key   = $_POST['emailPublicKey'];
 $emailjs_service_key  = $_POST['emailServiceKey'];

 // INSERTING KEYS
 $target_email_success = update_option('target_email', $target_email);
 $template_success     = update_option('emailjs_template_key', $emailjs_template_key);
 $public_key_success   = update_option('emailjs_public_key', $emailjs_public_key);
 $service_key_success  = update_option('emailjs_service_key', $emailjs_service_key);

 $response = [
  'targetEmailSuccess' => $target_email_success,
  'templateSuccess'    => $template_success,
  'publicKeySuccess'   => $public_key_success,
  'serviceKeySuccess'  => $service_key_success,
  'targetEmail'        => $target_email,
  'templateKey'        => $emailjs_template_key,
  'publicKey'          => $emailjs_public_key,
  'serviceKey'         => $emailjs_service_key
 ];

 wp_send_json_success($response);

 wp_die();
}
