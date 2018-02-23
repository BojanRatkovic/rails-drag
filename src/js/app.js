(function($){

  let positions = [];
  
  function showTrashCan(speed){
    $('.trash-can').fadeIn(speed);
  }

  function hideTrashCan(speed){
    $('.trash-can').fadeOut(speed);
  }

  // INIT COMB DRAGGABLE FROM CATALOG
  function makeCombDraggable(){
    return {
      revert: 'invalid',
      snap: ".rail-comb",
      snapMode: "inner",
      snapTolerance: 40,
      helper: 'clone',
      appendTo: 'body',
      revertDuration: 200,
      scroll: true,
      start: function(event, ui) {
        // Hide sidebar on start
        $('.open-nav').sideNav('hide');
        // Show trash can
        showTrashCan(500);
      },
      stop: function(event, ui) {
  
      }
    }
  }

  // INIT COMB DRAGGABLE AFTER THE DROP BUT WITHOUT CLONE
  function makeCombDraggableWithoutClone(){
    return {
      revert: 'invalid',
      snap: ".rail-comb",
      snapMode: "inner",
      snapTolerance: 40,
      appendTo: 'body',
      revertDuration: 200,
      scroll: true,
      start: function(event, ui) {
        // Show trash can.
        showTrashCan(500);
      },
      stop: function(event, ui) {
        // Hide trash can on drag stop.
        hideTrashCan(500);
      }
    }
  }

  // INIT DRAGGABLE FROM CATALOG
  function makeDraggable(){
    return {
      revert: 'invalid',
      snap: ".rail",
      snapTolerance: 40,
      snapMode: "inner",
      helper: 'clone',
      appendTo: 'body',
      scroll: true,
      revertDuration: 200,
      start: function(event, ui) {
        // Hide sidebar on start
        $('.open-nav').sideNav('hide');
        // Show trash can
        showTrashCan(500);
      },
      stop: function(event, ui) {
      },
      drag: function(event, ui) {
  
      },
    }
  }

  // INIT NEW DRAGGABLE AFTER DROP BUT WITHOUT CLONE
  function makeDraggableWithoutClone(){
    return {
      revert: 'invalid',
      snap: ".rail",
      snapTolerance: 40,
      snapMode: "inner",
      //appendTo: 'body',
      scroll: true,
      revertDuration: 200,
      start: function(event, ui) {
        // Show trash can
        showTrashCan(500);
      },
      stop: function(event, ui) {
        // Hide trash can on drag stop.
        hideTrashCan(500);
      },
      drag: function(event, ui) {
  
      },
    }
  }

  // INIT TRASH DROP COMPONENT
  $(".trash-can").droppable({
    accept: '.draggable',
    activeClass: 'ui-state-active-trash',
    hoverClass: 'ui-state-hover-trash',
    over: function(event, ui) {
    
    },
    out: function(event, ui) {},
    drop: function(event, ui) {
      let $item = ui.helper.clone();
      $item.remove();
      // hiding trash can after delete
      hideTrashCan(500);
      Materialize.toast('Component successfully deleted.', 3000, 'green');
    }
  });

  // INIT RAIL DROP
  $(".rail").droppable({
    accept: '.draggable-component',
    activeClass: 'ui-state-hover-component',
    hoverClass: 'ui-state-active',
    over: function(event, ui) {
      
    },
    out: function(event, ui) {},
    drop: function(event, ui) {
      let $item = ui.helper.clone();

      let draggableDocumentOffset = ui.helper.offset();
      let droppableDocumentOffset = $(this).offset();
      let left = draggableDocumentOffset.left - droppableDocumentOffset.left;
      let top = draggableDocumentOffset.top - droppableDocumentOffset.top;

      $item.css({
        'position': 'absolute',
        'top': top + 'px',
        'left': left + 'px',
      });

      // Appending to .rail
      $(this).append($item);

      let row = $item[0].parentElement.attributes[0].nodeValue;

      $item.addClass('dropped-component');

      $item.attr('row', row);
      $item.attr('data-dropped', 'true');
      $item.attr('y', top);
      $item.attr('x', left);
      $item.attr('type', 'component');

      // hide trash can
      hideTrashCan(500);

      // Pushing to positions array
      positions.push(
        {
         "id": $item.attr('data-id'),
         "y": top,
         "x": left,
         "row": row,
         "type": "component"
        }
      );
      //console.log(positions);

      // Removing appended helper from body.
      ui.helper.remove();

      // Make Draggable again.
      $item.draggable(makeDraggableWithoutClone());

      // Notification.
      Materialize.toast('Component successfully added.', 3000, 'green');

      console.log(`COMPONENT WITH ID ${$item.attr('data-id')} DROPPED ON RAIL: ${$item[0].parentElement.attributes[0].nodeValue} ON POSITION: LEFT: ${left} TOP: ${top}`);
    }
  });

  // INIT RAIL COMB DROP
  $(".rail-comb").droppable({
    accept: '.draggable-comb',
    activeClass: 'ui-state-hover-comb',
    hoverClass: 'ui-state-active',
    over: function(event, ui) {

    },
    out: function(event, ui) {

    },
    drop: function(event, ui) {
      let $item = ui.helper.clone();

      let draggableDocumentOffset = ui.helper.offset();
      let droppableDocumentOffset = $(this).offset();
      let left = draggableDocumentOffset.left - droppableDocumentOffset.left;
      let top = draggableDocumentOffset.top - droppableDocumentOffset.top;

      $item.css({
        'top': top + 'px',
        'left': left + 'px'
      });

      // Appending to .rail
      $(this).append($item);

      let row = $item[0].parentElement.attributes[0].nodeValue;
      $item.attr('row', row);
      $item.attr('data-dropped', 'true');
      $item.attr('y', top);
      $item.attr('x', left);
      $item.attr('type', 'comb');

      // hide trash can
      hideTrashCan(500);

      // Removing appended helper from body.
      ui.helper.remove();

      positions.push(
        {
         "id": $item.attr('data-id'),
         "y": top,
         "x": left,
         "row": row,
         "type": "comb"
        }
      );
      //console.log(positions);

      // Make Draggable again.
      $item.draggable(makeCombDraggableWithoutClone());

      // Notification.
      Materialize.toast('Comb successfully added.', 3000, 'green');

      console.log(`COMB WITH ID ${$item.attr('data-id')} DROPPED ON RAIL: ${$item[0].parentElement.attributes[0].nodeValue} ON POSITION: LEFT: ${left} TOP: ${top}`);
    }
  });

  // MAKE DRAGGABLE COMPONENT DRAGGABLE
  $(".components .draggable-component").draggable(makeDraggable());

  // MAKE DRAGGABLE COMB DRAGGABLE
  $(".components .draggable-comb").draggable(makeCombDraggable());

})(jQuery);

