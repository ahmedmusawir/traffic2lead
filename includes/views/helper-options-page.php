<?php
 /*
 MENU PAGE
  */

 // If this file is called directly, abort.
 if (!defined('WPINC')) {
  die;
 }

 function wpplugin_settings_pages()
 {

  add_submenu_page(
   'edit.php?post_type=properties',
   __('Orange Commercial Property Shortcodes', 'wpplugin'),
   __('Property Shortcode', 'wpplugin'),
   'manage_options',
   'property-shortcode',
   'wpplugin_settings_subpage_markup'
  );
 }

 add_action('admin_menu', 'wpplugin_settings_pages');

 function wpplugin_settings_page_markup()
 {
  // Double check user capabilities
  if (!current_user_can('manage_options')) {
   return;
  }
 ?>
<div class="wrap">
  <h1><?php esc_html_e(get_admin_page_title());?></h1>
  <p><?php esc_html_e('Some content.', 'wpplugin');?></p>
</div>
<?php
 }

 function wpplugin_settings_subpage_markup()
 {
  // Double check user capabilities
  if (!current_user_can('manage_options')) {
   return;
  }
 ?>
<div class="wrap">
  <h1><?php esc_html_e(get_admin_page_title());?></h1>
  <!-- <p><?php // esc_html_e( 'Some content.', 'wpplugin' ); ?></p> -->
  <h2>To List Properties</h2>

  <h4>Default:</h4>
  <code>
      [cg-property-list-cpt]
    </code>
  <p>
    This will display the property items in a grid with images and other details. By default the limit is 6.
  </p>

  <h4>Options:</h4>
  <code>
      [cg-property-list-cpt post_number=10]
    </code>
  <p>
    This will display 10 properties. A way to control the number of property items.
  </p>

  <h4>Sample View:</h4>
  <img src="/wp-content/uploads/2019/09/Screen-Shot-2019-09-02-at-6.50.33-PM.png">


  <br>
  <hr>
  <br>
  <br>

  <h2>To List Properties on a Google Map</h2>

  <h4>Default:</h4>
  <code>
      [cg-googlemap-list-cpt]
    </code>
  <p>
    This will display the property items on a Google Map with images and other details on click and direct links to the
    single Property. By default the limit is 50.
  </p>

  <h4>Options:</h4>
  <code>
      [cg-googlemap-list-cpt post_number=10]
    </code>
  <p>
    This will display 10 property pins. A way to control the number of property items.
  </p>

  <h4>Sample View:</h4>
  <img src="/wp-content/uploads/2019/09/Screen-Shot-2019-09-02-at-6.58.35-PM.png">

  <br>
  <hr>
  <br>
  <br>

  <h2>To List Properties on a Google Map with TYPE & STATUS filters</h2>

  <h4>Default:</h4>
  <code>
      [cg-googlemap-category]
    </code>
  <p>
    This will display the property items on a Google Map with images and other details on click and direct links to the
    single Property and there are filters for Property Type & Staus. By default the limit is 50.
  </p>

  <h4>Options:</h4>
  <code>
      [cg-googlemap-category post_number=10]
    </code>
  <p>
    This will display 10 property pins. A way to control the number of property items.
  </p>

  <h4>Sample View:</h4>
  <img src="/wp-content/uploads/2019/09/Screen-Shot-2019-09-02-at-7.16.18-PM.png">


  <hr>

</div>
<?php
 }

 // Add a link to your settings page in your plugin
 function wpplugin_add_settings_link($links)
 {
  $settings_link = '<a href="edit.php?post_type=properties&page=property-shortcode">' . __('Settings', 'wpplugin') . '</a>';
  array_push($links, $settings_link);
  return $links;
 }

 $filter_name = "plugin_action_links_" . plugin_basename(__FILE__);
 add_filter($filter_name, 'wpplugin_add_settings_link');

 // function wpplugin_default_sub_pages() {

 //   // Can add page as a submenu using the following:
 //   // add_dashboard_page()
 //   // add_posts_page()
 //   // add_media_page()
 //   // add_pages_page()
 //   // add_comments_page()
 //   // add_theme_page()
 //   // add_plugins_page()
 //   // add_users_page()
 //   // add_management_page()
 //   // add_options_page()

 //   add_dashboard_page(
 //     __( 'Cool Default Sub Page', 'wpplugin' ),
 //     __( 'Custom Sub Page', 'wpplugin' ),
 //     'manage_options',
 //     'wpplugin-subpage',
 //     'wpplugin_settings_page_markup'
 //   );

 // }
 // add_action( 'admin_menu', 'wpplugin_default_sub_pages' );

?>