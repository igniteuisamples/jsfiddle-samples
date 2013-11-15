$(function () {
//  http://www.imdb.com/find?q=Ivan+Ivanov&s=nm
        var model = [
                { name: "Adam Sandler", id: "nm0001191" },
                { name: "Brooke Shields", id: "nm0000222" },
                { name: "Charles Chaplin", id: "nm0000122" },
                { name: "Charlize Theron", id: "nm0000234" },
                { name: "Dustin Hoffman", id: "nm0000163" },
                { name: "Hristo Shopov", id: "nm0794885" },
                { name: "Jeremy Irons", id: "nm0000460" },
                { name: "Noomi Rapace", id: "nm0636426" },
                { name: "Nicole Kidman ", id: "nm0000173" },
                { name: "Robert De Niro", id: "nm0000134" },
                { name: "Tom Cruise", id: "nm0000129" },
                { name: "Tom Hanks", id: "nm0000158" }
        ];

        var viewModel = new ViewModel(model);
        function ViewModel(actorsList) {
            var self = this;
            this.actorsList = actorsList;

            //  The array of actor objects and a computed array of actor names 
            //  for the plain SELECT which cannot work with objects
            this.actors = ko.observableArray(self.actorsList);
            this.actorsNames = ko.computed(function () {
                var names = [];
                for (var i = 0; i < self.actors().length; i++) {
                    names.push(self.actors()[i].name);
                }
                return names;
            });

            //  The name of the currently selected actor.
            this.actorName = ko.observable(self.actors()[0].name);

            //  Members that facilicate actor list manipulations
            this.newActor = ko.observable("");
            this.addActor = function () {
                if (!self.findActorRecord(self.newActor())) {
                    self.actors.push({
                        id: "",
                        name: self.newActor()
                    });
                }
                self.actorName(self.newActor());
                self.newActor("");
            }

            this.removeActor = function () {
                self.actors.remove(function (item) {
                    return item.name === self.actorName();
                });
                self.newActor("");

                if (self.actors().length > 0) {
                    self.actorName(self.actors()[0].name);
                }
                else {
                    self.actorName("");
                }
            }

            //  Members that facilitte IMDB hyperlinks
            this.findActorRecord = function (actorName) {
                for (var i = 0; i < self.actors().length; i++) {
                    if (self.actors()[i].name === actorName) {
                        return self.actors()[i];
                    }
                }
            }

            this.imdb_url = ko.computed(function () {
                var actor = self.findActorRecord(self.actorName());
                if (actor && actor.id) {
                    return "http://www.imdb.com/name/" + actor.id + "/";
                }
                else {
                    return "http://www.imdb.com/find?q=" + encodeURIComponent(self.actorName()) + "&s=nm";
                }
            });

            this.actorName_imdb = ko.computed(function () {
                return self.actorName() + " at IMDB";
            });
        }

        $(function () {
            ko.applyBindings(viewModel);
            setListLength();
            viewModel.actors.subscribe(setListLength);
            $(".horizontal-container input[type=button]").each(function () {
                $(this).igButton({
                    labelText: $(this).val(),
                    centerLabel: true,
                    width: 80,
                    height: 26
                });
            });
        });

        function setListLength() {
            $("#listboxActors").attr("size", viewModel.actors().length);
        }
});