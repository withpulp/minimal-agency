# Minimal Agency Webapp

A mobile-first website for an agency / startup built with Meteor.

> Latest version is live, [check it out here](http://utool.io).

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
	* Portfolio
	* Case study
	* Blog
	* Admin
  	* About
  	* Menu
  	* Values

* Modules
	* Content Management System
	* Newsletter subscription
	* Random quote on page load
	* Article excerpts
	* Author
	* Twitter streaming
	* Instagram Feed
  	* Next-page module
  	* Next-post module

### Views


### MVP
* Views
  * ~~Landing~~
  * ~~About~~
  * Blog
  * Case study
  * Portfolio
  * Menu
  * ~~Admin~~
* Modules
  * ~~Newsletter subscription~~
  * ~~Random quote on page load~~
  * ~~Insert/Edit Post~~
  * ~~Next post module~~


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
  * [reywood:iron-router-ga](https://github.com/reywood/meteor-iron-router-ga)
* Collections
 * [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/)
 * [reywood:publish-composite](https://github.com/englue/meteor-publish-composite)
* Accounts
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
  * [useraccounts:unstyled](https://github.com/meteor-useraccounts/unstyled/)
  * [nicolaslopezj:roles](https://github.com/nicolaslopezj/roles)
* CMS
  * [orionjs:core](https://github.com/orionjs/orion)
  * [orionjs:bootstrap](https://github.com/orionjs/orion/tree/master/packages/bootstrap)
  * [orionjs:summernote](https://github.com/orionjs/orion/tree/master/packages/summernote)
  * [twbs:bootstrap](https://github.com/twbs/bootstrap)
* UI and UX
  * [fastclick](https://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [miro:mailchimp](https://github.com/MiroHibler/meteor-mailchimp)
  * [fortawesome:fontawesome](https://github.com/MeteorPackaging/Font-Awesome)
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css)
  * [chrisbutler:typed.js](https://github.com/chrisbutler/meteor-typed.js/tree/master)
* SEO
  * [manuelschoebel:ms-seo](https://github.com/DerMambo/ms-seo)
* Development
  * [flemay:less-autoprefixer](https://github.com/flemay/less-autoprefixer)
  * [momentjs:moment](https://github.com/moment/moment/)
  * [meteorhacks:npm](https://github.com/meteorhacks/npm)

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
orion/              # Orion CMS files
  dictionary/         # Orion dictionary definitions
  collections/             # Collection files, for each Meteor.Collection
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
