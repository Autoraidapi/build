define(['backboneLocalforage', 'assets/js/models/model'], function (Sync, Model) {

    var Base = Backbone.Collection.extend({
        setDriver: function () {
            //''.toUpperCase();
        },
        drop: function () {
            while (this.length) {
                this.models[0].destroy();
            }
        },
        import: function (json) {
            var self = this;
            _.each(json, function (obj, idx, json) {
                return self.create(obj);
            });
        },
        export: function () {
            var self = this;
            self.anchor = document.createElement("a");
            self.anchor.download = "export-" + Date.now() + ".json";
            self.anchor.href = window.URL.createObjectURL(
                new Blob(
                    [JSON.stringify(self.toJSON(), null, 2)], {
                        type: "application/json"
                    }
                )
            );
            self.anchor.click();
            delete self.anchor;
            window.URL.revokeObjectURL(self.url);
        }
    });

    var Repos = Base.extend({
        initialize: function () {
            this.fetch();
        },
        url: "https://api.github.com/users/autoraidapi/repos"
    });

    var Collection = Base.extend({
        model: Model,
        sync: Backbone.localforage.sync('graph-collection'),
        activated: function () {
            return this.where({
                active: true
            });
        },
        deactivated: function () {
            return this.where({
                active: false
            });
        },
        nextOrder: function () {
            return this.length ? this.last().get('order') + 1 : 1;
        },
        comparator: 'order',
        clear: function () {
            while (this.models.length) {
                this.models[0].cancel();
                this.models[0].destroy();
            }
        }
    });

    return Collection;

});