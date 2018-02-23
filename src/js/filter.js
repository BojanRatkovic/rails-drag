(function($) {

  // Toggle expert mode.
  $('#expert').on('click', function() {
    $("[data-disabled*='true']").toggleClass('disabled');
  });

  const mobileSelect1 = new MobileSelect({
    trigger: '#filter1',
    title: 'Categories Filter',
    wheels: [{
        data: [{
            id: '1',
            value: 'All'
          },
          {
            id: '2',
            value: 'LS Optimiert'
          },
          {
            id: '3',
            value: 'LS Standard'
          },
          {
            id: '4',
            value: 'FI-LS Optimiert'
          },
          {
            id: '5',
            value: 'FI-LS Standard'
          },
          {
            id: '6',
            value: 'FI Standard'
          },
          {
            id: '7',
            value: 'FI Optimiert'
          },
          {
            id: '8',
            value: 'Schalter'
          },
          {
            id: '9',
            value: 'Divers'
          },
          {
            id: '10',
            value: 'Relais'
          },
          {
            id: '11',
            value: 'Sperrschütze'
          },
          {
            id: '12',
            value: 'Klemmen'
          },
          {
            id: '13',
            value: 'Einspeismodule'
          },
          {
            id: '14',
            value: 'Kämme'
          }
        ]
      },
      {
        data: [{
            id: '1',
            value: 'All'
          },
          {
            id: '2',
            value: '2 pol LN'
          },
          {
            id: '3',
            value: '4 pol 3LN'
          },
        ]
      },
      {
        data: [{
            id: '1',
            value: 'All'
          },
          {
            id: '2',
            value: 'Charakteristik C'
          },
          {
            id: '3',
            value: 'Charakteristik B'
          },
        ]
      },
      {
        data: [{
            id: '1',
            value: 'All'
          },
          {
            id: '2',
            value: '6A'
          },
          {
            id: '3',
            value: '10A'
          },
          {
            id: '4',
            value: '13A'
          },
          {
            id: '5',
            value: '16A'
          },
          {
            id: '6',
            value: '20A'
          },
          {
            id: '7',
            value: '25A'
          },
          {
            id: '8',
            value: '32A'
          },
          {
            id: '9',
            value: '40A'
          },
          {
            id: '10',
            value: '63A'
          },
          {
            id: '11',
            value: '13A'
          },
          {
            id: '12',
            value: '16A'
          },
          {
            id: '13',
            value: '20A'
          },
          {
            id: '14',
            value: '25A'
          },
          {
            id: '15',
            value: '32A'
          },
          {
            id: '16',
            value: '10A B'
          },
          {
            id: '17',
            value: '13A B'
          },
          {
            id: '18',
            value: '16A B'
          },
          {
            id: '19',
            value: '20A B'
          },
          {
            id: '20',
            value: '16A B'
          },
          {
            id: '21',
            value: '13A N>'
          },
          {
            id: '22',
            value: '16A N>'
          },
          {
            id: '23',
            value: '13A B N>'
          },
          {
            id: '24',
            value: '16A B N>'
          },
        ]
      }
    ],
    position: [0],
    callback: function(indexArr, data) {

      // Caching the DOM elements
      let components = $('.draggable');
      // Getting the components length for further use.
      let componentsCount = components.length;
      // Preparing the array for hidden elements.
      let componentsHiddenCount = [];

      let filters = {
        "category1": data[0].value,
        "category2": data[1].value,
        "category3": data[2].value,
        "category4": data[3].value,
      }

      components.each(function(item, i) {
        let obj = {
          "category1": $(this).attr("category1"),
          "category2": $(this).attr("category2"),
          "category3": $(this).attr("category3"),
          "category4": $(this).attr("category4"),
        }

        const checkCategory = (category, filter) => {
          return ((filter == 'All' ? filter : category) === filter)
        };

        if (
          checkCategory(obj.category1, filters.category1) &&
          checkCategory(obj.category2, filters.category2) &&
          checkCategory(obj.category3, filters.category3) &&
          checkCategory(obj.category4, filters.category4) 
        ) {
          $(this).parent().parent().removeClass('hide');
          componentsHiddenCount = [];
        } else {
          $(this).parent().parent().addClass('hide');
          componentsHiddenCount.push($(this));
        }
      });

      if (componentsHiddenCount.length === componentsCount) {
        Materialize.toast('There is no components with selected criteria.', 4000, 'red');
      }
    }
  });
  
  /* const mobileSelect2 = new MobileSelect({
    trigger: '#filter2',
    title: 'Category 1 Filter',
    wheels: [
            {data:[
              {id:'1',value:'All'},
              {id:'2',value:'LS Optimiert'},
              {id:'3',value:'LS Standard'},
              {id:'4',value:'FI-LS Optimiert'},
              {id:'5',value:'FI-LS Standard'},
              {id:'6',value:'FI Standard'},
              {id:'7',value:'FI Optimiert'},
              {id:'8',value:'Schalter'},
              {id:'9',value:'Divers'},
              {id:'10',value:'Relais'},
              {id:'11',value:'Sperrschütze'},
              {id:'12',value:'Klemmen'},
              {id:'13',value:'Einspeismodule'},
              {id:'14',value:'Kämme'}
            ]},
            ],
    position:[0],
    callback:function(indexArr, data){
      
    }
  });

  const mobileSelect3 = new MobileSelect({
    trigger: '#filter3',
    title: 'Category 2 Filter',
    wheels: [
            {data:[
              {id:'1',value:'All'},
              {id:'2',value:'2 pol LN'},
              {id:'3',value:'4 pol 3LN'},
            ]},
            ],
    position:[0],
    callback:function(indexArr, data){
      
    }
  });

  const mobileSelect4 = new MobileSelect({
    trigger: '#filter4',
    title: 'Category 3 Filter',
    wheels: [
            {data:[
              {id:'1',value:'All'},
              {id:'2',value:'Charakteristik C'},
              {id:'3',value:'Charakteristik B'},
            ]},
            ],
    position:[0],
    callback:function(indexArr, data){
      
    }
  });

  const mobileSelect5 = new MobileSelect({
    trigger: '#filter5',
    title: 'Category 4 Filter',
    wheels: [
            {data:[
              {id:'1',value:'All'},
              {id:'2',value:'6A'},
              {id:'3',value:'10A'},
              {id:'4',value:'13A'},
              {id:'5',value:'16A'},
              {id:'6',value:'20A'},
              {id:'7',value:'25A'},
              {id:'8',value:'32A'},
              {id:'9',value:'40A'},
              {id:'10',value:'63A'},
              {id:'11',value:'13A'},
              {id:'12',value:'16A'},
              {id:'13',value:'20A'},
              {id:'14',value:'25A'},
              {id:'15',value:'32A'},
              {id:'16',value:'10A B'},
              {id:'17',value:'13A B'},
              {id:'18',value:'16A B'},
              {id:'19',value:'20A B'},
              {id:'20',value:'16A B'},
              {id:'21',value:'13A N>'},
              {id:'22',value:'16A N>'},
              {id:'23',value:'13A B N>'},
              {id:'24',value:'16A B N>'},
            ]} 
            ],
    position:[0],
    callback:function(indexArr, data){
      
    }
  }); */

  /* function singleCategoryFilter(data){
    let filterValue = data[0].value;
    let draggable = $('.draggable').parent().parent();
    
    if (filterValue === 'All') {
      draggable.removeClass('hide');
      return;
    }
    draggable.addClass('hide');
    $('.draggable['+category+'="'+filterValue+'"][]').parent().parent().removeClass('hide');
  } */


})(jQuery);