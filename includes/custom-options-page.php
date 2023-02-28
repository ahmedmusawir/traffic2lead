<?php
 // Register the settings
 function custom_settings_page()
 {
  add_menu_page(
   'Traffic2Lead',
   'Traffic2Lead',
   'manage_options',
   'custom-settings',
   'custom_settings_page_html',
   null,
   99
  );

  add_action('admin_init', 'custom_settings_init');
 }

 add_action('admin_menu', 'custom_settings_page');

 // Custom html page
 function custom_settings_page_html()
 {
  // Double check user capabilities
  if (!current_user_can('manage_options')) {
   return;
  }
 ?>
<div class="wrap">
    <h1 style='color: dodgerblue; font-weight: bold'><?php esc_html_e(get_admin_page_title());?><small
            style='font-size: .8rem'>
            (<a href="https://cyberizegroup.com/" target='_blank'>by Cyberize Group Inc.</a>)
        </small></h1>
    <p style='color: gray;'>
        <?php esc_html_e('This plugin calculates leads out of given number of website traffic. This also gets data from SimilarWeb API based on a given domain name, displays analysis of that data with charts and calculates leads out of monthly total visits to that domain collected from API data', 'wpplugin');?>
    </p>
    <div id="REACT-CONTENT"></div>
</div>
<?php
 }

 // Create Custom Global Settings
 function custom_settings_init()
{}