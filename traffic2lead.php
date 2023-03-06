<?php
/*
Plugin Name: Traffic2Lead
Plugin URI: https://cyberizegroup.com/
Description: This plugin will help you plan how to convert your website traffic into profitable leads.
Version: 1.1.0
Author: Cyberize Group Inc.
Author URI: https://linkedin.com/ahmedmusawir
License: GPLv2 or later
Text Domain: cyberizeframework
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
 die;
}

// THE FOLLOWING VARIABLE NEEDS TO BE CHANGED TO SOMETHIGN UNIQUE FOR EACH PLUGIN
define('TRAFFIC2LEAD_PLUGIN_URL', plugin_dir_url(__FILE__));

// PLUGIN UPDATE CHECKER
require 'plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$myUpdateChecker = PucFactory::buildUpdateChecker(
 'https://github.com/ahmedmusawir/traffic2lead',
 __FILE__,
 'traffic2lead'
);

//Set the branch that contains the stable release.
$myUpdateChecker->setBranch('main');

//Optional: If you're using a private repository, specify the access token like this:
// $myUpdateChecker->setAuthentication('your-token-here');

/*
 * ALL CSS AND JS SCRIPTS
 */
// Enqueue Plugin CSS
include plugin_dir_path(__FILE__) . 'includes/cyberize-styles.php';

// Enqueue Plugin JavaScript
include plugin_dir_path(__FILE__) . 'includes/cyberize-scripts.php';

/*
 * THE CALCULATOR CODE
 */

// Removing & Replacing Default Welcome Widgets
include plugin_dir_path(__FILE__) . 'includes/react-app-shortcode.php';
include plugin_dir_path(__FILE__) . 'includes/custom-options-page.php';
include plugin_dir_path(__FILE__) . 'includes/get-api-keys-ajax.php';
include plugin_dir_path(__FILE__) . 'includes/update-api-keys-ajax.php';
include plugin_dir_path(__FILE__) . 'includes/get-email-keys-ajax.php';
include plugin_dir_path(__FILE__) . 'includes/update-email-keys-ajax.php';