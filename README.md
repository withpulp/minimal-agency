# Minimal Agency Webapp

A mobile-first website for an agency / startup built with Meteor.

<!-- toc -->

* [Roadmap](#roadmap)
  * [Features](#features)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
  * [SEO and other concerns](#seo-and-other-concerns)
  * [Adding allow rules for external URLs](#adding-allow-rules-for-external-urls)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

<!-- toc stop -->

## Roadmap

### Features
* Views
	* Landing
	* Portfolio view
	* Case study view
	* Blog
  * About
  * Menu

* Modules
	* Admin account to insert/update/delete content
	* Email capture
	* Random quote on page load
	* Twitter streaming
  * Dynamic page transitions

### Views


### MVP
* Views
  * ~~Landing~~
  * About
  * Blog
  * Menu
* Modules
  * ~~Email capture~~
  * ~~Random quote on page load~~
  * Posts CRUD - User Account with 2 admin users and 1 superadmin


## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:withpulp/minimal-agency.git
cd minimal-agency
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

There are other ways to deploy to your server besides Meteor Up. Here is a [step by step guide from Digital Ocean](http://devo.ps/blog/deploy-your-meteor-apps-on-digital-ocean-in-5-minutes/).

### SEO and other concerns

> Meteor cannot do SEO

This statement is only partially true, since there is a package called [ms-seo](https://github.com/DerMambo/ms-seo), which
has a lot of neat little tricks to help web crawlers notice your app the way you want them to. Use constants under
__client/lib/constants.js__ for the app. Change SEO settings inside the routes like that.

```javascript
Router.route('/about', function () {
  this.render('about');
  // Using the app constants
  SEO.set({ title: 'About -' + Meteor.App.NAME, og: {...} });
});
```

## Structure

### Packages used

* Meteor Core
  * [meteor-platform](https://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Routing
  * [iron:router](https://github.com/EventedMind/iron-router)
* Collections
 * [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/)
* Accounts
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
  * [useraccounts:unstyled](https://github.com/meteor-useraccounts/unstyled/)
* UI and UX
  * [fastclick](https://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [miro:mailchimp](https://github.com/MiroHibler/meteor-mailchimp)
  * [fortawesome:fontawesome](https://github.com/MeteorPackaging/Font-Awesome)
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css)
* SEO
  * [manuelschoebel:ms-seo](https://github.com/DerMambo/ms-seo)
* Development
  * [lauricio:less-autoprefixer](https://github.com/Lauricio/less-autoprefixer)
  * [momentjs:moment](https://github.com/moment/moment/)
  * [msavin:mongol](https://github.com/msavin/Mongol)

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/             # Client folder
  compatibility/      # Libraries which create a global variable
  config/             # Configuration files (on the client)
  lib/                # Library files that get executed first
  startup/            # Javascript files on Meteor.startup()
  stylesheets         # LESS files
  templates/          # Contains all templates
    layouts/            # Router layouts
    views/              # All the views
    modules/            # UI elements and components (i.e. forms, actions, etc...)
     common/              # Common components (i.e. header, footer)
     elements/            # Re-usable components
models/             # Model files, for each Meteor.Collection
private/            # Private files
public/             # Public files
router/             # All routes
server/             # Server folder
  fixtures/           # Meteor.Collection fixtures defined
  lib/                # Server side library folder
  publications/       # Collection publications
  startup/            # On server startup
tests/              # All tests
  client/             # client tests
    integration/        # integration tests
    unit/               # unit tests
  server/             # server tests
    integration/        # integration tests
    unit/               # unit tests
```

## License
This project has an MIT License, see the LICENSE.txt for more information.
