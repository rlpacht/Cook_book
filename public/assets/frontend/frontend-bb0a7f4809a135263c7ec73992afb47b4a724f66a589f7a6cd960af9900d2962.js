"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'frontend/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('frontend/application/adapter', ['exports', 'ember-data', 'active-model-adapter'], function (exports, DS, ActiveModelAdapter) {

  'use strict';

  var ApplicationAdapter = ActiveModelAdapter['default'].extend({
    headers: {
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
    },
    namespace: "api",
    coalesceFindRequests: true
  });

  exports['default'] = ApplicationAdapter;

});
define('frontend/application/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var ApplicationController = Ember['default'].Controller.extend({});

	exports['default'] = ApplicationController;

});
define('frontend/application/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var ApplicationRoute = Ember['default'].Route.extend({});

	exports['default'] = ApplicationRoute;

});
define('frontend/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 13,
              "column": 8
            }
          },
          "moduleName": "frontend/application/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          Search Recipes\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 9
            },
            "end": {
              "line": 19,
              "column": 9
            }
          },
          "moduleName": "frontend/application/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("           Faves\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 10
          }
        },
        "moduleName": "frontend/application/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","header page-header");
        dom.setAttribute(el1,"role","navigation");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","nav-buttons-list");
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"class","btn");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        dom.setAttribute(el4,"class","app-name");
        var el5 = dom.createTextNode("\n          Cook.bk\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"class","nav-search-recipes btn");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"class","nav-show-faves btn");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","link-to",["recipes"],[],0,null,["loc",[null,[11,8],[13,20]]]],
        ["block","link-to",["favorites"],[],1,null,["loc",[null,[17,9],[19,21]]]],
        ["content","outlet",["loc",[null,[28,0],[28,10]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'frontend/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('frontend/components/note-item/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var NoteItemComponent = Ember['default'].Component.extend({
    note: null,

    isEditing: false,

    actions: {
      saveChanges: function saveChanges() {
        this.get('note').save();
        this.set("isEditing", false);
      },

      editNote: function editNote() {
        this.set("isEditing", true);
      },

      deleteNote: function deleteNote() {
        this.get("note").destroyRecord();
      }
    }
  });

  exports['default'] = NoteItemComponent;

});
define('frontend/components/note-item/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "frontend/components/note-item/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","textarea",[],["value",["subexpr","@mut",[["get","note.text",["loc",[null,[4,12],[4,21]]]]],[],[]],"focus-out","saveChanges","action","saveChanges"],["loc",[null,[3,4],[7,6]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 19,
              "column": 2
            }
          },
          "moduleName": "frontend/components/note-item/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","note");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","note-text");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","close");
          dom.setAttribute(el2,"aria-label","Close");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"aria-hidden","true");
          var el4 = dom.createTextNode("\n          ×\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"class","edit-note glyphicon glyphicon-pencil");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element0, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [
          ["content","note.text",["loc",[null,[10,30],[10,43]]]],
          ["element","action",["deleteNote"],[],["loc",[null,[11,61],[11,84]]]],
          ["element","action",["editNote"],[],["loc",[null,[16,59],[16,80]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 6
          }
        },
        "moduleName": "frontend/components/note-item/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","note-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        return morphs;
      },
      statements: [
        ["block","if",[["get","isEditing",["loc",[null,[2,8],[2,17]]]]],[],0,1,["loc",[null,[2,2],[19,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('frontend/components/page-item', ['exports', 'ember', 'pagination-pager/components/page-item'], function (exports, Ember, PageItem) {

	'use strict';

	exports['default'] = PageItem['default'];

});
define('frontend/components/pagination-pager', ['exports', 'ember', 'pagination-pager/components/pagination-pager'], function (exports, Ember, PaginationPager) {

	'use strict';

	exports['default'] = PaginationPager['default'];

});
define('frontend/components/range-slider', ['exports', 'ui-slider/components/range-slider'], function (exports, range_slider) {

	'use strict';



	exports['default'] = range_slider['default'];

});
define('frontend/components/recipe-tile/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RecipeTileComponent = Ember['default'].Component.extend({
    classNames: ['recipe-result', 'thumbnail'],

    classNameBindings: ['favoritesPage:fave-tile:search-tile'],

    recipe: null,

    faves: null,

    favoritesPage: null,

    isFavorite: Ember['default'].computed('recipe', 'faves.[]', function () {
      var faves = this.get('faves');
      var recipe = this.get('recipe');
      return faves.contains(recipe);
    }),

    actions: {

      addToFavorites: function addToFavorites() {
        this.sendAction('addToFavorites', this.get('recipe'));
      },

      removeFromFavorites: function removeFromFavorites() {
        this.sendAction('removeFromFavorites', this.get('recipe'));
      }
    }
  });
  exports['default'] = RecipeTileComponent;

});
define('frontend/components/recipe-tile/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "frontend/components/recipe-tile/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"class","recipe-thumbnail-image");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element2, 'src');
          return morphs;
        },
        statements: [
          ["attribute","src",["get","recipe.smallImgUrl",["loc",[null,[3,10],[3,28]]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "frontend/components/recipe-tile/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","fave-button btn btn-default");
          var el2 = dom.createTextNode("\n    Unfave\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["element","action",["removeFromFavorites"],[],["loc",[null,[11,4],[11,36]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "frontend/components/recipe-tile/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","fave-button btn btn-default");
          var el2 = dom.createTextNode("\n    Fave\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["addToFavorites"],[],["loc",[null,[17,4],[17,31]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "frontend/components/recipe-tile/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","recipe-name");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","link-to",["recipe",["get","recipe",["loc",[null,[1,21],[1,27]]]]],[],0,null,["loc",[null,[1,0],[6,12]]]],
        ["block","if",[["get","isFavorite",["loc",[null,[8,6],[8,16]]]]],[],1,2,["loc",[null,[8,0],[20,7]]]],
        ["inline","link-to",[["get","recipe.name",["loc",[null,[23,12],[23,23]]]],"recipe",["get","recipe",["loc",[null,[23,33],[23,39]]]]],[],["loc",[null,[23,2],[23,41]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('frontend/components/ui-slider', ['exports', 'ui-slider/components/ui-slider'], function (exports, ui_slider) {

	'use strict';



	exports['default'] = ui_slider['default'];

});
define('frontend/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('frontend/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('frontend/favorites/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var FavoritesController = Ember['default'].Controller.extend({

    userFavorites: Ember['default'].computed.alias('model'),

    // favoritedRecipes is an up to date list of the favorited recipes
    // It is used to let each recipe tile know whether to show the
    // 'Fave' or 'Unfave' button
    favoritedRecipes: Ember['default'].computed.mapBy('userFavorites', 'recipe'),

    // initialFavoritedRecipes is set in setupController and does not change
    // This ensures that recipes don't disappear from the page when they are
    // unfavorited
    initialFavoritedRecipes: null,

    isFavoritesEmpty: Ember['default'].computed.empty('initialFavoritedRecipes'),

    actions: {
      addToFavorites: function addToFavorites(recipe) {
        var newFave = this.store.createRecord('userFavorite', { recipe: recipe });
        newFave.save();
      },

      removeFromFavorites: function removeFromFavorites(recipe) {
        var unFaved = this.store.peekAll('userFavorite').findBy('recipe', recipe);
        unFaved.destroyRecord();
      }
    }

  });

  exports['default'] = FavoritesController;

});
define('frontend/favorites/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var FavoritesRoute = Ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('userFavorite');
    },

    setupController: function setupController(controller, userFavorites) {
      this._super(controller, userFavorites);
      var favoritedRecipes = userFavorites.mapBy('recipe');
      controller.set('initialFavoritedRecipes', favoritedRecipes);
    }
  });

  exports['default'] = FavoritesRoute;

});
define('frontend/favorites/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend/favorites/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          dom.setAttribute(el1,"class","no-results");
          var el2 = dom.createTextNode("\n    It looks like you have no Faves!\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 15,
                "column": 4
              }
            },
            "moduleName": "frontend/favorites/template.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","recipe-tile",[],["addToFavorites","addToFavorites","removeFromFavorites","removeFromFavorites","recipe",["subexpr","@mut",[["get","recipe",["loc",[null,[11,15],[11,21]]]]],[],[]],"faves",["subexpr","@mut",[["get","favoritedRecipes",["loc",[null,[12,14],[12,30]]]]],[],[]],"favoritesPage",true],["loc",[null,[8,6],[14,8]]]]
          ],
          locals: ["recipe"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "frontend/favorites/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","recipes-container");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","each",[["get","initialFavoritedRecipes",["loc",[null,[7,12],[7,35]]]]],[],0,null,["loc",[null,[7,4],[15,13]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 7
          }
        },
        "moduleName": "frontend/favorites/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","isFavoritesEmpty",["loc",[null,[1,6],[1,22]]]]],[],0,1,["loc",[null,[1,0],[17,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('frontend/index/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      this.transitionTo('recipes');
    }
  });

});
define('frontend/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "frontend/index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/initializers/active-model-adapter', ['exports', 'active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, ActiveModelAdapter, ActiveModelSerializer) {

  'use strict';

  exports['default'] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', ActiveModelAdapter['default']);
      application.register('serializer:-active-model', ActiveModelSerializer['default']);
    }
  };

});
define('frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'frontend/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('frontend/initializers/export-application-global', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('frontend/instance-initializers/active-model-adapter', ['exports', 'active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, ActiveModelAdapter, ActiveModelSerializer) {

  'use strict';

  exports['default'] = {
    name: 'active-model-adapter',
    initialize: function initialize(applicationOrRegistry) {
      var registry;
      if (applicationOrRegistry.registry) {
        // initializeStoreService was registered with an
        // instanceInitializer. The first argument is the application
        // instance.
        registry = applicationOrRegistry.registry;
      } else {
        // initializeStoreService was called by an initializer instead of
        // an instanceInitializer. The first argument is a registy. This
        // case allows ED to support Ember pre 1.12
        registry = applicationOrRegistry;
      }

      registry.register('adapter:-active-model', ActiveModelAdapter['default']);
      registry.register('serializer:-active-model', ActiveModelSerializer['default']);
    }
  };

});
define('frontend/note/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var NoteModel = DS['default'].Model.extend({
    text: DS['default'].attr("string"),
    recipe: DS['default'].belongsTo("recipe", { async: true })
  });

  exports['default'] = NoteModel;

});
define('frontend/recipe/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RecipeController = Ember['default'].Controller.extend({
    recipe: Ember['default'].computed.alias("model"),

    notes: Ember['default'].computed.alias("recipe.notes"),

    isWritingNote: false,

    newNoteText: null,

    displayTime: Ember['default'].computed("recipe.time", function () {
      var seconds = this.get("recipe.time");
      var hours = Math.floor(seconds / 3600);
      seconds = seconds % 3600;
      var minutes = Math.floor(seconds / 60);
      if (hours === 0) {
        return minutes + " minutes";
      } else if (hours === 1) {
        return hours + " hour and " + minutes + " minutes";
      } else {
        return hours + " hours and " + minutes + " minutes";
      }
    }),

    ingredientsArray: Ember['default'].computed("recipe.ingredients", function () {
      var ingredients = this.get("recipe.ingredients");
      return JSON.parse(ingredients);
    }),

    actions: {
      addNewNote: function addNewNote() {
        this.set("isWritingNote", true);
      },

      createNote: function createNote() {
        this.set("isWritingNote", false);
        var newNote = this.store.createRecord("note", {
          text: this.get("newNoteText"),
          recipe: this.get("recipe")
        });
        newNote.save();
        this.set("newNoteText", "");
      }
    }
  });

  exports['default'] = RecipeController;

});
define('frontend/recipe/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var RecipeModel = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    yummlyId: DS['default'].attr('string'),
    time: DS['default'].attr('number'),
    sourceUrl: DS['default'].attr('string'),
    numberOfServings: DS['default'].attr('number'),
    smallImgUrl: DS['default'].attr('string'),
    largeImgUrl: DS['default'].attr('string'),
    mediumImgUrl: DS['default'].attr('string'),
    ingredients: DS['default'].attr('string'),
    notes: DS['default'].hasMany('note', { async: true }),
    isDataComplete: DS['default'].attr('boolean', { defaultValue: false })
  });

  exports['default'] = RecipeModel;

});
define('frontend/recipe/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RecipeRoute = Ember['default'].Route.extend({

    model: function model(params) {
      var id = params.id;
      return this.store.findRecord('recipe', id);
    },

    afterModel: function afterModel(recipeModel) {
      if (!recipeModel.get('isDataComplete')) {
        recipeModel.save();
      }
    }
  });

  exports['default'] = RecipeRoute;

});
define('frontend/recipe/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 8
            },
            "end": {
              "line": 31,
              "column": 8
            }
          },
          "moduleName": "frontend/recipe/template.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","recipe-ingredients");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","ingredient",["loc",[null,[30,41],[30,55]]]]
        ],
        locals: ["ingredient"],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 8
            },
            "end": {
              "line": 51,
              "column": 8
            }
          },
          "moduleName": "frontend/recipe/template.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","note-item",[],["note",["subexpr","@mut",[["get","note",["loc",[null,[49,17],[49,21]]]]],[],[]]],["loc",[null,[48,10],[50,12]]]]
        ],
        locals: ["note"],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 53,
              "column": 8
            },
            "end": {
              "line": 62,
              "column": 8
            }
          },
          "moduleName": "frontend/recipe/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","save-note-button btn btn-success");
          var el2 = dom.createTextNode("\n            Save\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["inline","textarea",[],["value",["subexpr","@mut",[["get","newNoteText",["loc",[null,[55,18],[55,29]]]]],[],[]],"action","createNote"],["loc",[null,[54,10],[57,12]]]],
          ["element","action",["createNote"],[],["loc",[null,[59,12],[59,35]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 62,
              "column": 8
            },
            "end": {
              "line": 67,
              "column": 8
            }
          },
          "moduleName": "frontend/recipe/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","add-note-button btn btn-primary");
          var el2 = dom.createTextNode("\n            Add new Note\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["addNewNote"],[],["loc",[null,[64,12],[64,35]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 71,
            "column": 6
          }
        },
        "moduleName": "frontend/recipe/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","recipe-header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode("\n    Recipe source and directions:\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"class","name-of-recipe");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","recipe-source");
        dom.setAttribute(el4,"target","_blank");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","recipe-holder");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","recipe-time panel-body");
        var el4 = dom.createTextNode("\n      Ready in ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ingredients-container col-md-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","ingredients-span");
        var el7 = dom.createTextNode("\n            Ingredients\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","recipe-picture col-md-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"class","recipe-img");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","recipe-notes-container col-md-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","notes-span");
        var el7 = dom.createTextNode("\n            Notes\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0, 1, 1, 1]);
        var element3 = dom.childAt(fragment, [2, 1]);
        var element4 = dom.childAt(element3, [5, 1]);
        var element5 = dom.childAt(element3, [7, 1]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element2, 'href');
        morphs[1] = dom.createMorphAt(element2,1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [3, 1]),5,5);
        morphs[4] = dom.createAttrMorph(element4, 'src');
        morphs[5] = dom.createMorphAt(element5,5,5);
        morphs[6] = dom.createMorphAt(element5,7,7);
        return morphs;
      },
      statements: [
        ["attribute","href",["get","recipe.sourceUrl",["loc",[null,[7,13],[7,29]]]]],
        ["content","recipe.name",["loc",[null,[9,6],[9,21]]]],
        ["content","displayTime",["loc",[null,[18,15],[18,30]]]],
        ["block","each",[["get","ingredientsArray",["loc",[null,[29,16],[29,32]]]]],[],0,null,["loc",[null,[29,8],[31,17]]]],
        ["attribute","src",["get","recipe.largeImgUrl",["loc",[null,[36,36],[36,54]]]]],
        ["block","each",[["get","notes",["loc",[null,[47,16],[47,21]]]]],[],1,null,["loc",[null,[47,8],[51,17]]]],
        ["block","if",[["get","isWritingNote",["loc",[null,[53,14],[53,27]]]]],[],2,3,["loc",[null,[53,8],[67,15]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('frontend/recipes/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RecipesController = Ember['default'].Controller.extend({
    queryParams: ['searchText', 'currentPage', 'maxRecipeTime'],

    searchText: null,

    isLoading: true,

    isRecipesEmpty: Ember['default'].computed.empty('recipes'),

    recipes: [],

    userFavorites: [],

    favoritedRecipes: Ember['default'].computed.mapBy('userFavorites', 'recipe'),

    currentPage: 1,

    timeSliderValue: 10,

    // Map from equally spaced slider increments to non-equally spaced
    // number of minutes
    timeValueToMinutesHash: {
      1: 5,
      2: 10,
      3: 20,
      4: 30,
      5: 45,
      6: 60,
      7: 120,
      8: 240,
      9: 360,
      10: 480
    },

    minutesToTimeValueHash: {
      5: 1,
      10: 2,
      20: 3,
      30: 4,
      45: 5,
      60: 6,
      120: 7,
      240: 8,
      360: 9,
      480: 10
    },

    maxRecipeTime: Ember['default'].computed('timeSliderValue', 'timeValueToMinutesHash', function (key, value) {
      if (arguments.length > 1) {
        // setter
        var minutesToTimeValueHash = this.get('minutesToTimeValueHash');
        this.set('timeSliderValue', minutesToTimeValueHash[value]);
        return value;
      } else {
        // getter
        var valueToMinutesHash = this.get('timeValueToMinutesHash');
        var timeSliderValue = this.get('timeSliderValue');
        return valueToMinutesHash[timeSliderValue];
      }
    }),

    formattedMaxRecipeTime: Ember['default'].computed('maxRecipeTime', function () {
      var minutesSelected = this.get('maxRecipeTime');
      if (minutesSelected < 60) {
        return minutesSelected + ' minutes or less';
      } else if (minutesSelected >= 480) {
        return "Any Time";
      } else {
        var numHours = Math.floor(minutesSelected / 60);
        var hourOrHours = numHours === 1 ? 'hour' : 'hours';
        return numHours + ' ' + hourOrHours + ' or less';
      }
    }),

    numPages: Ember['default'].computed('totalMatches', 'resultsPerPage', function () {
      return Math.floor(this.get('totalMatches') / this.get('resultsPerPage')) + 1;
    }),

    _searchHelper: function _searchHelper() {
      var _this = this;

      this.set('isLoading', true);
      var query = {
        search: this.get('searchText'),
        currentPage: this.get('currentPage'),
        maxRecipeTime: this.get('maxRecipeTime')
      };
      this.store.findQuery('recipe', { query: query }).then(function (searchedRecipeModels) {
        _this.set('recipes', searchedRecipeModels);
        var metadata = _this.store.metadataFor('recipe');
        _this.set('totalMatches', metadata.total_matches);
        _this.set('resultsPerPage', metadata.results_per_page);
        _this.set('isLoading', false);
      });
    },

    actions: {
      searchRecipes: function searchRecipes() {
        this.set('currentPage', 1);
        // Reset maxRecipeTime to the max, which signifies the "Any Time" state
        this.set('maxRecipeTime', 480);
        this._searchHelper();
      },

      pageNumChanged: function pageNumChanged() {
        this._searchHelper();
      },

      addToFavorites: function addToFavorites(recipe) {
        var newFave = this.store.createRecord('userFavorite', { recipe: recipe });
        newFave.save();
      },

      removeFromFavorites: function removeFromFavorites(recipe) {
        var unFaved = this.store.peekAll('userFavorite').findBy('recipe', recipe);
        unFaved.destroyRecord();
      },

      maxTimeChanged: function maxTimeChanged(newTime) {
        this.set('currentPage', 1);
        this._searchHelper();
      }
    }
  });

  exports['default'] = RecipesController;

});
define('frontend/recipes/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RecipesRoute = Ember['default'].Route.extend({

    model: function model(params) {
      var searchText = params.searchText;
      var currentPage = params.currentPage || 1;
      var maxRecipeTime = params.maxRecipeTime;
      var query = { search: searchText, currentPage: currentPage, maxRecipeTime: maxRecipeTime };
      var recipes = this.store.findQuery('recipe', { query: query });

      var hash = {
        recipes: recipes,
        userFavorites: this.store.findAll('userFavorite')
      };

      return Ember['default'].RSVP.hash(hash);
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('recipes', model.recipes);
      controller.set('userFavorites', model.userFavorites);
      var metadata = this.store.metadataFor('recipe');
      controller.set('totalMatches', metadata.total_matches);
      controller.set('resultsPerPage', metadata.results_per_page);
      controller.set('isLoading', false);
    }
  });

  exports['default'] = RecipesRoute;

});
define('frontend/recipes/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 0
            },
            "end": {
              "line": 36,
              "column": 0
            }
          },
          "moduleName": "frontend/recipes/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","spinkit-spinner",["loc",[null,[34,7],[34,26]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 2
              },
              "end": {
                "line": 42,
                "column": 2
              }
            },
            "moduleName": "frontend/recipes/template.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h1");
            dom.setAttribute(el1,"class","no-results");
            var el2 = dom.createTextNode("\n      No recipes found\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 44,
                  "column": 6
                },
                "end": {
                  "line": 52,
                  "column": 6
                }
              },
              "moduleName": "frontend/recipes/template.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","recipe-tile",[],["addToFavorites","addToFavorites","removeFromFavorites","removeFromFavorites","recipe",["subexpr","@mut",[["get","recipe",["loc",[null,[48,17],[48,23]]]]],[],[]],"faves",["subexpr","@mut",[["get","favoritedRecipes",["loc",[null,[49,16],[49,32]]]]],[],[]],"favoritesPage",false],["loc",[null,[45,8],[51,10]]]]
            ],
            locals: ["recipe"],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 42,
                "column": 2
              },
              "end": {
                "line": 63,
                "column": 2
              }
            },
            "moduleName": "frontend/recipes/template.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","recipes-container row");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","pager-container row");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
            return morphs;
          },
          statements: [
            ["block","each",[["get","recipes",["loc",[null,[44,14],[44,21]]]]],[],0,null,["loc",[null,[44,6],[52,15]]]],
            ["inline","pagination-pager",[],["current",["subexpr","@mut",[["get","currentPage",["loc",[null,[57,16],[57,27]]]]],[],[]],"count",["subexpr","@mut",[["get","numPages",["loc",[null,[58,14],[58,22]]]]],[],[]],"change","pageNumChanged"],["loc",[null,[56,6],[60,8]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 0
            },
            "end": {
              "line": 65,
              "column": 0
            }
          },
          "moduleName": "frontend/recipes/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["block","if",[["get","isRecipesEmpty",["loc",[null,[38,8],[38,22]]]]],[],0,1,["loc",[null,[38,2],[63,9]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 65,
            "column": 7
          }
        },
        "moduleName": "frontend/recipes/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","input-group input-group-lg search-form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","submit-search btn btn-default");
        var el3 = dom.createTextNode("\n    Search!\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","recipe-time-chooser-container");
        var el3 = dom.createTextNode("\n    Maximum preparation and cooking time\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","formatted-recipe-time");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(element2,1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
        morphs[4] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","input",[],["class","search form-control","value",["subexpr","@mut",[["get","searchText",["loc",[null,[4,10],[4,20]]]]],[],[]],"autofocus","autofocus","placeholder","Search for Recipes","enter","searchRecipes"],["loc",[null,[2,2],[8,4]]]],
        ["element","action",["searchRecipes"],[],["loc",[null,[10,3],[10,29]]]],
        ["inline","ui-slider",[],["value",["subexpr","@mut",[["get","timeSliderValue",["loc",[null,[16,12],[16,27]]]]],[],[]],"min",1,"max",10,"step",1,"tooltip","hide","immediateResponse",true,"changed","maxTimeChanged"],["loc",[null,[15,4],[23,6]]]],
        ["content","formattedMaxRecipeTime",["loc",[null,[26,6],[26,32]]]],
        ["block","if",[["get","isLoading",["loc",[null,[32,6],[32,15]]]]],[],0,1,["loc",[null,[32,0],[65,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('recipes', function () {});
    this.route('recipe', { path: "recipe/:id" });
    this.route('favorites', function () {});
  });

  exports['default'] = Router;

});
define('frontend/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/templates/components/page-item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/page-item.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","page",["loc",[null,[2,5],[2,13]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/page-item.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","href",["get","url",["loc",[null,[4,22],[4,25]]]]],
          ["element","action",["setCurrent"],[],["loc",[null,[4,28],[4,51]]]],
          ["content","page",["loc",[null,[4,52],[4,60]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/page-item.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","isDots",["loc",[null,[1,6],[1,12]]]]],[],0,1,["loc",[null,[1,0],[5,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('frontend/templates/components/pagination-pager', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/components/pagination-pager.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","page-item",[],["page",["subexpr","@mut",[["get","page",["loc",[null,[7,21],[7,25]]]]],[],[]],"selected",["subexpr","@mut",[["get","current",["loc",[null,[7,35],[7,42]]]]],[],[]],"seperator",["subexpr","@mut",[["get","seperator",["loc",[null,[7,53],[7,62]]]]],[],[]],"urlTemplate",["subexpr","@mut",[["get","urlTemplate",["loc",[null,[7,75],[7,86]]]]],[],[]],"pageSet","pageChanged"],["loc",[null,[7,4],[7,110]]]]
          ],
          locals: ["page"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/pagination-pager.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var element5 = dom.childAt(element4, [1]);
          var element6 = dom.childAt(fragment, [5]);
          var element7 = dom.childAt(element6, [1]);
          var morphs = new Array(9);
          morphs[0] = dom.createAttrMorph(element4, 'class');
          morphs[1] = dom.createAttrMorph(element5, 'href');
          morphs[2] = dom.createElementMorph(element5);
          morphs[3] = dom.createMorphAt(element5,0,0);
          morphs[4] = dom.createMorphAt(fragment,3,3,contextualElement);
          morphs[5] = dom.createAttrMorph(element6, 'class');
          morphs[6] = dom.createAttrMorph(element7, 'href');
          morphs[7] = dom.createElementMorph(element7);
          morphs[8] = dom.createMorphAt(element7,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["previous"," ",["subexpr","if",[["get","isFirst",[]],"disabled",""],[],[]]]]],
          ["attribute","href",["get","previousUrl",["loc",[null,[3,24],[3,35]]]]],
          ["element","action",["previous"],[],["loc",[null,[3,38],[3,59]]]],
          ["content","paginationPrevious",["loc",[null,[3,60],[3,82]]]],
          ["block","each",[["get","pages",["loc",[null,[6,18],[6,23]]]]],[],0,null,["loc",[null,[6,2],[8,11]]]],
          ["attribute","class",["concat",["next"," ",["subexpr","if",[["get","isLast",[]],"disabled",""],[],[]]]]],
          ["attribute","href",["get","nextUrl",["loc",[null,[11,24],[11,31]]]]],
          ["element","action",["next"],[],["loc",[null,[11,34],[11,51]]]],
          ["content","paginationNext",["loc",[null,[11,52],[11,70]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/pagination-pager.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var element3 = dom.childAt(element2, [1]);
          var morphs = new Array(8);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'href');
          morphs[2] = dom.createElementMorph(element1);
          morphs[3] = dom.createMorphAt(element1,0,0);
          morphs[4] = dom.createAttrMorph(element2, 'class');
          morphs[5] = dom.createAttrMorph(element3, 'href');
          morphs[6] = dom.createElementMorph(element3);
          morphs[7] = dom.createMorphAt(element3,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["subexpr","if",[["get","pagerSpread",[]],"previous",""],[],[]]," ",["subexpr","if",[["get","isFirst",[]],"disabled",""],[],[]]]]],
          ["attribute","href",["get","previousUrl",["loc",[null,[15,24],[15,35]]]]],
          ["element","action",["previous"],[],["loc",[null,[15,38],[15,59]]]],
          ["content","pagerPrevious",["loc",[null,[15,60],[15,77]]]],
          ["attribute","class",["concat",[["subexpr","if",[["get","pagerSpread",[]],"next",""],[],[]]," ",["subexpr","if",[["get","isLast",[]],"disabled",""],[],[]]]]],
          ["attribute","href",["get","nextUrl",["loc",[null,[19,24],[19,31]]]]],
          ["element","action",["next"],[],["loc",[null,[19,34],[19,51]]]],
          ["content","pagerNext",["loc",[null,[19,52],[19,65]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/pagination-pager.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","unless",[["get","pager",["loc",[null,[1,10],[1,15]]]]],[],0,1,["loc",[null,[1,0],[21,11]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('frontend/templates/components/spinkit-spinner', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 2
          }
        },
        "moduleName": "frontend/templates/components/spinkit-spinner.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","spinner");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","dot1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","dot2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('frontend/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('frontend/tests/application/adapter.jshint', function () {

  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/adapter.js should pass jshint', function(assert) { 
    assert.ok(false, 'application/adapter.js should pass jshint.\napplication/adapter.js: line 6, col 21, \'$\' is not defined.\napplication/adapter.js: line 1, col 8, \'DS\' is defined but never used.\n\n2 errors'); 
  });

});
define('frontend/tests/application/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/controller.js should pass jshint', function(assert) { 
    assert.ok(true, 'application/controller.js should pass jshint.'); 
  });

});
define('frontend/tests/application/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'application/route.js should pass jshint.'); 
  });

});
define('frontend/tests/components/note-item/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/note-item');
  QUnit.test('components/note-item/component.js should pass jshint', function(assert) { 
    assert.ok(false, 'components/note-item/component.js should pass jshint.\ncomponents/note-item/component.js: line 11, col 35, Missing semicolon.\n\n1 error'); 
  });

});
define('frontend/tests/components/recipe-tile/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/recipe-tile');
  QUnit.test('components/recipe-tile/component.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/recipe-tile/component.js should pass jshint.'); 
  });

});
define('frontend/tests/favorites/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - favorites');
  QUnit.test('favorites/controller.js should pass jshint', function(assert) { 
    assert.ok(true, 'favorites/controller.js should pass jshint.'); 
  });

});
define('frontend/tests/favorites/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - favorites');
  QUnit.test('favorites/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'favorites/route.js should pass jshint.'); 
  });

});
define('frontend/tests/helpers/resolver', ['exports', 'ember/resolver', 'frontend/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('frontend/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('frontend/tests/helpers/start-app', ['exports', 'ember', 'frontend/app', 'frontend/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('frontend/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('frontend/tests/index/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - index');
  QUnit.test('index/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'index/route.js should pass jshint.'); 
  });

});
define('frontend/tests/integration/components/note-item/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('note-item', 'Integration | Component | note item', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'note-item', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'note-item', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('frontend/tests/integration/components/note-item/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components/note-item');
  QUnit.test('integration/components/note-item/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/note-item/component-test.js should pass jshint.'); 
  });

});
define('frontend/tests/integration/components/recipe-tile/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('recipe-tile', 'Integration | Component | recipe tile', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'recipe-tile', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'recipe-tile', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('frontend/tests/integration/components/recipe-tile/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components/recipe-tile');
  QUnit.test('integration/components/recipe-tile/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/recipe-tile/component-test.js should pass jshint.'); 
  });

});
define('frontend/tests/note/model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - note');
  QUnit.test('note/model.js should pass jshint', function(assert) { 
    assert.ok(true, 'note/model.js should pass jshint.'); 
  });

});
define('frontend/tests/recipe/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - recipe');
  QUnit.test('recipe/controller.js should pass jshint', function(assert) { 
    assert.ok(true, 'recipe/controller.js should pass jshint.'); 
  });

});
define('frontend/tests/recipe/model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - recipe');
  QUnit.test('recipe/model.js should pass jshint', function(assert) { 
    assert.ok(true, 'recipe/model.js should pass jshint.'); 
  });

});
define('frontend/tests/recipe/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - recipe');
  QUnit.test('recipe/route.js should pass jshint', function(assert) { 
    assert.ok(false, 'recipe/route.js should pass jshint.\nrecipe/route.js: line 12, col 25, Missing semicolon.\n\n1 error'); 
  });

});
define('frontend/tests/recipes/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - recipes');
  QUnit.test('recipes/controller.js should pass jshint', function(assert) { 
    assert.ok(false, 'recipes/controller.js should pass jshint.\nrecipes/controller.js: line 121, col 20, \'newTime\' is defined but never used.\n\n1 error'); 
  });

});
define('frontend/tests/recipes/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - recipes');
  QUnit.test('recipes/route.js should pass jshint', function(assert) { 
    assert.ok(false, 'recipes/route.js should pass jshint.\nrecipes/route.js: line 15, col 6, Missing semicolon.\n\n1 error'); 
  });

});
define('frontend/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('frontend/tests/test-helper', ['frontend/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('frontend/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/application/adapter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('frontend/tests/unit/application/adapter-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/adapter-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/application/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('frontend/tests/unit/application/controller-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/controller-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/application/controller-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/application/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('frontend/tests/unit/application/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/application/route-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/favorites/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:favorites', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('frontend/tests/unit/favorites/controller-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/favorites');
  QUnit.test('unit/favorites/controller-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/favorites/controller-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/favorites/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:favorites', 'Unit | Route | favorites', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('frontend/tests/unit/favorites/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/favorites');
  QUnit.test('unit/favorites/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/favorites/route-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/index/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('frontend/tests/unit/index/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/index');
  QUnit.test('unit/index/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/index/route-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/note/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('note', 'Unit | Model | note', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('frontend/tests/unit/note/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/note');
  QUnit.test('unit/note/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/note/model-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/recipe/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:recipe', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('frontend/tests/unit/recipe/controller-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/recipe');
  QUnit.test('unit/recipe/controller-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/recipe/controller-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/recipe/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('recipe', 'Unit | Model | recipe', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('frontend/tests/unit/recipe/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/recipe');
  QUnit.test('unit/recipe/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/recipe/model-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/recipes/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:recipes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('frontend/tests/unit/recipes/controller-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/recipes');
  QUnit.test('unit/recipes/controller-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/recipes/controller-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/recipes/recipe/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:recipes/recipe', 'Unit | Route | recipes/recipe', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('frontend/tests/unit/recipes/recipe/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/recipes/recipe');
  QUnit.test('unit/recipes/recipe/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/recipes/recipe/route-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/recipes/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:recipes', 'Unit | Route | recipes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('frontend/tests/unit/recipes/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/recipes');
  QUnit.test('unit/recipes/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/recipes/route-test.js should pass jshint.'); 
  });

});
define('frontend/tests/unit/user-favorite/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('user-favorite', 'Unit | Model | user favorite', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('frontend/tests/unit/user-favorite/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/user-favorite');
  QUnit.test('unit/user-favorite/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/user-favorite/model-test.js should pass jshint.'); 
  });

});
define('frontend/tests/user-favorite/model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - user-favorite');
  QUnit.test('user-favorite/model.js should pass jshint', function(assert) { 
    assert.ok(true, 'user-favorite/model.js should pass jshint.'); 
  });

});
define('frontend/user-favorite/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var UserFavorite = DS['default'].Model.extend({
    recipe: DS['default'].belongsTo('recipe', { async: false })
  });

  exports['default'] = UserFavorite;

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('frontend/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"frontend","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"frontend","version":"0.0.0+fde102cc"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","contentSecurityPolicy":{"default-src":"'none'","script-src":"'self' 'unsafe-eval'","font-src":"'self'","connect-src":"'self'","img-src":"'self'","style-src":"'self'","media-src":"'self'"},"exportApplicationGlobal":true}};
});

if (runningTests) {
  require("frontend/tests/test-helper");
} else {
  require("frontend/app")["default"].create({"name":"frontend","version":"0.0.0+fde102cc"});
}

/* jshint ignore:end */
//# sourceMappingURL=frontend.map
