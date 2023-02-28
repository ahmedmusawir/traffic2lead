<?php

// REPLACE THE FOLLOWING CONSTANT WHEN STARTING A NEW PLUGIN
// TRAFFIC2LEAD_PLUGIN_URL
// ALSO UPDATE THE FOLLOWING PREFIX WHEN STARTING A NEW PLUGIN
$PREFIX = 'TRAFFIC2LEAD';
define('BACKEND_SCRIPT_ID', $PREFIX . '_backend');
define('FRONTEND_SCRIPT_ID', $PREFIX . '_frontend');

add_action('admin_enqueue_scripts',
// Conditionally load JS on plugin settings pages only
 function ($hook) {

  wp_register_script(
   BACKEND_SCRIPT_ID,
   TRAFFIC2LEAD_PLUGIN_URL . 'admin/assets/dist/js/admin.min.js',
   ['jquery'],
   time()
  );

  /* HOOK HERE IS THE NAME OF THE ADMIN PAGE URL. THIS WAY THE SCRIPT CAN BE LOADED WHEN
   * A SPECIFIC PAGE IS ACCESSED ON THE WP ADMIN SIDE THIS CAN BE USED TO LIMIT THE CSS ALSO
   */

  wp_localize_script(BACKEND_SCRIPT_ID, 'leeAdminData', array(
   'root_url'   => get_site_url(),
   'plugin_url' => plugins_url(),
   'ajax_url'   => admin_url('admin-ajax.php'),
   'nonce'      => wp_create_nonce('wp_rest')
  ));

  if (is_admin()) {
   wp_enqueue_script(BACKEND_SCRIPT_ID);
  }
 });

add_action('wp_enqueue_scripts',

// Conditionally load JS on single post pages
 function () {

  wp_register_script(
   FRONTEND_SCRIPT_ID,
   TRAFFIC2LEAD_PLUGIN_URL . 'frontend/assets/dist/js/frontend.min.js',
   [],
   time()
  );

  wp_localize_script(FRONTEND_SCRIPT_ID, 'leeFrontData', array(
   'root_url' => get_site_url(),
   'ajax_url' => admin_url('admin-ajax.php'),
   'nonce'    => wp_create_nonce('wp_rest')
  ));

  /* THIS SCRIPT ONLY LOADS ON WP FRONTEND FOR SINGLE BLOG POST OR CPT SINGLE ONLY */
  if (!is_single()) {
   wp_enqueue_script(FRONTEND_SCRIPT_ID);
  }
 }, 100);