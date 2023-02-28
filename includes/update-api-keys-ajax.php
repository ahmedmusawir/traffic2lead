<?php
add_action('wp_ajax_nopriv_update_api_keys_ajax', 'update_api_keys_ajax');
add_action('wp_ajax_update_api_keys_ajax', 'update_api_keys_ajax');

function update_api_keys_ajax()
{

 $rapid_api_key = $_POST['rapidApiKey'];

 // INSERTING KEYS
 $rapid_api_success = update_option('rapid_api_key', $rapid_api_key);

 $response = [
  'rapidApiSuccess' => $rapid_api_success,
  'rapidApiKey'     => $rapid_api_key
 ];

 wp_send_json_success($response);

 wp_die();
}
