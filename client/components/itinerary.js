angular.module('whatsGood')
  .component('itinerary', {
    bindings: {
      isValidUser: '<',
      getAllUserItineraries: '&',
      currentItinerary: '<',
      allItineraries: '<',
      handleItineraryItemClick: '&',
      currentItem: '<'
    },
    controller: function() {
      //remove after bindings so not overwritten
      this.itinerary = {};
      this.itinerary.imagePath = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/santa-monica-pier-kinga-szymczyk.jpg';
      this.itinerary.itineraryName = 'SM Trip with the boys';

      this.$onInit = () => {
        if (this.isValidUser) {
          this.getAllUserItineraries();
        }
      };

    },
    template: `
      <div layout="row">
       <!-- <div flex="35" layout="column" class="boxWithHeight" layout-padding>
          
          <section flex="80">
            <md-content class="md-padding" layout-xs="column" layout="row">
              <div flex-xs flex-gt-xs="95" layout="column">
                <md-card style="min-height:75%;">
                  <div style="position:relative;">
                    <img flex="100" ng-src="{{$ctrl.itinerary.imagePath}}" class="md-card-image">
                    <div style="position:absolute; bottom:0px; left:0px; height:auto; width:100%; text-align:center; font-size:1.5em; padding: 10px 0px; background-color:rgba(0,0,0,0.6)">
                      {{$ctrl.itinerary.itineraryName}}
                    </div>
                  </div>
                  <md-card-content>
                    <p>
                      List Item 1
                    </p>
                    <p>
                      List Item 2
                    </p>
                    <p>
                      List Item 3
                    </p>
                    <p>
                      List Item 4
                    </p>
                    <p>
                      List Item 5
                    </p>
                  </md-card-content>
                  <span flex></span>
                  <md-card-actions layout="row" layout-align="end center">
                    <md-button>Action 1</md-button>
                    <md-button>Action 2</md-button>
                  </md-card-actions>
                </md-card>
              </div>
            </md-content>
          </section>

          <section flex></section>
        </div> -->

        <div flex layout="column" class="boxWithHeight" layout-padding>

          <section flex>
            
            <itinerary-card 
            current-itinerary="$ctrl.currentItinerary"
            handle-itinerary-item-click= "$ctrl.handleItineraryItemClick"
            current-item="$ctrl.currentItem"
            />
         
            </section>
          <section flex ></section>
        </div>
      </div>
`
  });
