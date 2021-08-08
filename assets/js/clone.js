$('#add-more').cloneData({
    // container to hold the dulicated form fields
    mainContainerId: 'main-container',
    // Which you want to clone
    cloneContainer: 'container-item',
    // CSS lcass of remove button
    removeButtonClass: 'remove-item'
});

// exclude 
// $('#add-more').cloneData({

//     excludeHTML: ".exclude"
  
//   });

min and max
$('#add-more').cloneData({

    // 0 = unlimited
    maxLimit: 0, 
  
    // 0 = unlimited
    minLimit: 1
  
});

// show alert
$('#add-more').cloneData({

    removeConfirm: true, 
    removeConfirmMessage: 'Are you sure want to delete?'
  
});

// clear input values after duplicating
$('#add-more').cloneData({

    clearInputs: true
  
});

// increment
$('#add-more').cloneData({

    counterIndex: 0,
    regexID: /^(.+?)([-\d-]{1,})(.+)$/i,
    regexName: /(^.+?)([\[\d{1,}\]]{1,})(\[.+\]$)/i,
  
});

