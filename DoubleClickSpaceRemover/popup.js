document.addEventListener('DOMContentLoaded', function () {
    // Hardcode Exclude Space checkbox to be checked on by default when the extension is first installed
    // const excludeSpaceCheckbox = document.getElementById('var1_Exclude_Space');
    // excludeSpaceCheckbox.checked = true; // This will hardcode it to be checked on load
    // document.getElementById('var1_Exclude_Space').checked = true;
    // console.log('Hardcoding ExcludeSpace to True (Checked on) on Install, as Default');
    // Manually save the updated varablere states of the checkboxes to chrome.storage
    // chrome.storage.local.set({
    //     var1_Exclude_Space: var1ExcludeSpace.checked,
    //     var2_Include_Space: var2IncludeSpace.checked,
    //     var3_Exclude_Punctuation: var3ExcludePunctuation.checked,
    //     var4_Include_Punctuation: var4IncludePunctuation.checked,
    //     var5_Exclude_SpecialChar: var5ExcludeSpecialChar.checked,
    //     var6_Include_SpecialChar: var6IncludeSpecialChar.checked
    // }, function () {
    //     console.log('Hardcoding ExcludeSpace on Install (as Default)');
    //     console.log('State updated and saved to chrome.storage');
    // });
    // Check if the checkbox state is already saved in chrome.storage



















  // Load the saved values from chrome.storage and set the checkbox states

  // chrome.storage.local.get(
  //     ['var1_Exclude_Space', 'var2_Include_Space', 'var3_Exclude_Punctuation', 
  //      'var4_Include_Punctuation', 'var5_Exclude_SpecialChar', 'var6_Include_SpecialChar'], 
  //     function (result) {
  //         // document.getElementById('var1_Exclude_Space').checked = result.var1_Exclude_Space || true;//Making this true Hardcodes ExcludeSpace to True (Checked on) on Install, because there will be no storage created yet
  //         document.getElementById('var1_Exclude_Space').checked = result.var1_Exclude_Space || false;//Making this true Hardcodes ExcludeSpace to True (Checked on) on Install, because there will be no storage created yet
  //         document.getElementById('var2_Include_Space').checked = result.var2_Include_Space || false;
  //         document.getElementById('var3_Exclude_Punctuation').checked = result.var3_Exclude_Punctuation || false;
  //         document.getElementById('var4_Include_Punctuation').checked = result.var4_Include_Punctuation || false;
  //         document.getElementById('var5_Exclude_SpecialChar').checked = result.var5_Exclude_SpecialChar || false;
  //         document.getElementById('var6_Include_SpecialChar').checked = result.var6_Include_SpecialChar || false;
  //     }
  // );

// // Set defaults first if no storage data exists
// chrome.storage.local.get(
//     ['var1_Exclude_Space', 'var2_Include_Space', 'var3_Exclude_Punctuation', 
//      'var4_Include_Punctuation', 'var5_Exclude_SpecialChar', 'var6_Include_SpecialChar'], 
//     function (result) {
//         if (chrome.runtime.lastError || Object.keys(result).length === 0) {
//             result = {
//                 var1_Exclude_Space: true,
//                 var2_Include_Space: false,
//                 var3_Exclude_Punctuation: false,
//                 var4_Include_Punctuation: false,
//                 var5_Exclude_SpecialChar: false,
//                 var6_Include_SpecialChar: false
//             };
//             chrome.storage.local.set(result, function () {
//                 console.log('Default values saved to chrome.storage');
//             });
//         }
//         // Then set the checkboxes to reflect the state
//         document.getElementById('var1_Exclude_Space').checked = result.var1_Exclude_Space;
//         document.getElementById('var2_Include_Space').checked = result.var2_Include_Space;
//         document.getElementById('var3_Exclude_Punctuation').checked = result.var3_Exclude_Punctuation;
//         document.getElementById('var4_Include_Punctuation').checked = result.var4_Include_Punctuation;
//         document.getElementById('var5_Exclude_SpecialChar').checked = result.var5_Exclude_SpecialChar;
//         document.getElementById('var6_Include_SpecialChar').checked = result.var6_Include_SpecialChar;
//     }
// );

chrome.storage.local.get(
  ['var1_Exclude_Space', 'var2_Include_Space', 'var3_Exclude_Punctuation', 
   'var4_Include_Punctuation', 'var5_Exclude_SpecialChar', 'var6_Include_SpecialChar'], 
  function (result) {
      // Check if storage is empty, then set hardcoded default values
      if (chrome.runtime.lastError || Object.keys(result).length === 0) {
          console.log("No saved state found, using defaults...");
          // Set the hardcoded default values
          result = {
              var1_Exclude_Space: false, // Set the default state here
              var2_Include_Space: false,
              var3_Exclude_Punctuation: false,
              var4_Include_Punctuation: false,
              var5_Exclude_SpecialChar: false,
              var6_Include_SpecialChar: false
          };
          // Save the default state to chrome.storage for next load
          chrome.storage.local.set(result, function () {
              console.log('Default values saved to chrome.storage');
          });
      }
      // Apply the values from storage
      document.getElementById('var1_Exclude_Space').checked = result.var1_Exclude_Space;
      document.getElementById('var2_Include_Space').checked = result.var2_Include_Space;
      document.getElementById('var3_Exclude_Punctuation').checked = result.var3_Exclude_Punctuation;
      document.getElementById('var4_Include_Punctuation').checked = result.var4_Include_Punctuation;
      document.getElementById('var5_Exclude_SpecialChar').checked = result.var5_Exclude_SpecialChar;
      document.getElementById('var6_Include_SpecialChar').checked = result.var6_Include_SpecialChar;
  }
);






















    // Get all checkboxes by their IDs
    const checkboxes = [
        document.getElementById('var1_Exclude_Space'),
        document.getElementById('var2_Include_Space'),
        document.getElementById('var3_Exclude_Punctuation'),
        document.getElementById('var4_Include_Punctuation'),
        document.getElementById('var5_Exclude_SpecialChar'),
        document.getElementById('var6_Include_SpecialChar')
    ];






  // Get the buttons and checkboxes
  const excludeAllButton = document.getElementById('excludeAllButton');
  const includeAllButton = document.getElementById('includeAllButton');
  const selectNoneButton = document.getElementById('selectNoneButton');



  function excludeAll() {

    // Set Exclude checkboxes to true
    document.getElementById('var1_Exclude_Space').checked = true;
    document.getElementById('var3_Exclude_Punctuation').checked = true;
    document.getElementById('var5_Exclude_SpecialChar').checked = true;
    
    // Set Include checkboxes to false
    document.getElementById('var2_Include_Space').checked = false;
    document.getElementById('var4_Include_Punctuation').checked = false;
    document.getElementById('var6_Include_SpecialChar').checked = false;

    // Manually Save Updated variables
    const var1_Exclude_Space = document.getElementById('var1_Exclude_Space').checked;
    const var2_Include_Space = document.getElementById('var2_Include_Space').checked;
    const var3_Exclude_Punctuation = document.getElementById('var3_Exclude_Punctuation').checked;
    const var4_Include_Punctuation = document.getElementById('var4_Include_Punctuation').checked;
    const var5_Exclude_SpecialChar = document.getElementById('var5_Exclude_SpecialChar').checked;
    const var6_Include_SpecialChar = document.getElementById('var6_Include_SpecialChar').checked;

    // Save to chrome.storage
    chrome.storage.local.set({
        var1_Exclude_Space, var2_Include_Space, var3_Exclude_Punctuation,
        var4_Include_Punctuation, var5_Exclude_SpecialChar, var6_Include_SpecialChar
    }, function () {
        console.log('State updated and saved to chrome.storage');
    });

//    // Optionally, send message to background or content script
//    chrome.runtime.sendMessage({
//        action: 'updateVariables',
//        var1_Exclude_Space, var2_Include_Space, var3_Exclude_Punctuation,
//        var4_Include_Punctuation, var5_Exclude_SpecialChar, var6_Include_SpecialChar
//    });
}



  // Function to check only "Include" related checkboxes
  function includeAll() {
      document.getElementById('var2_Include_Space').checked = true;
      document.getElementById('var4_Include_Punctuation').checked = true;
      document.getElementById('var6_Include_SpecialChar').checked = true;

      document.getElementById('var1_Exclude_Space').checked = false;
      document.getElementById('var3_Exclude_Punctuation').checked = false;
      document.getElementById('var5_Exclude_SpecialChar').checked = false;

    // Manually Save Updated variables
    const var1_Exclude_Space = document.getElementById('var1_Exclude_Space').checked;
    const var2_Include_Space = document.getElementById('var2_Include_Space').checked;
    const var3_Exclude_Punctuation = document.getElementById('var3_Exclude_Punctuation').checked;
    const var4_Include_Punctuation = document.getElementById('var4_Include_Punctuation').checked;
    const var5_Exclude_SpecialChar = document.getElementById('var5_Exclude_SpecialChar').checked;
    const var6_Include_SpecialChar = document.getElementById('var6_Include_SpecialChar').checked;

    // Save to chrome.storage
    chrome.storage.local.set({
        var1_Exclude_Space, var2_Include_Space, var3_Exclude_Punctuation,
        var4_Include_Punctuation, var5_Exclude_SpecialChar, var6_Include_SpecialChar
    }, function () {
        console.log('State updated and saved to chrome.storage');
    });
  }

  
    // Function to uncheck all checkboxes
    function selectNone() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Manually Save Updated variables
        const var1_Exclude_Space = document.getElementById('var1_Exclude_Space').checked;
        const var2_Include_Space = document.getElementById('var2_Include_Space').checked;
        const var3_Exclude_Punctuation = document.getElementById('var3_Exclude_Punctuation').checked;
        const var4_Include_Punctuation = document.getElementById('var4_Include_Punctuation').checked;
        const var5_Exclude_SpecialChar = document.getElementById('var5_Exclude_SpecialChar').checked;
        const var6_Include_SpecialChar = document.getElementById('var6_Include_SpecialChar').checked;

        // Save to chrome.storage
        chrome.storage.local.set({
            var1_Exclude_Space, var2_Include_Space, var3_Exclude_Punctuation,
            var4_Include_Punctuation, var5_Exclude_SpecialChar, var6_Include_SpecialChar
        }, function () {
            console.log('State updated and saved to chrome.storage');
        });

    }





  // Add Event Listeners to the buttons
  excludeAllButton.addEventListener('click', excludeAll);
  includeAllButton.addEventListener('click', includeAll);
  selectNoneButton.addEventListener('click', selectNone);



/////////
/////////  
/////////  // Update/Save Button function
/////////  document.getElementById('updateButton').addEventListener('click', function () {
/////////      const var1_Exclude_Space = document.getElementById('var1_Exclude_Space').checked;
/////////      const var2_Include_Space = document.getElementById('var2_Include_Space').checked;
/////////      const var3_Exclude_Punctuation = document.getElementById('var3_Exclude_Punctuation').checked;
/////////      const var4_Include_Punctuation = document.getElementById('var4_Include_Punctuation').checked;
/////////      const var5_Exclude_SpecialChar = document.getElementById('var5_Exclude_SpecialChar').checked;
/////////      const var6_Include_SpecialChar = document.getElementById('var6_Include_SpecialChar').checked;
/////////
/////////      // Save to chrome.storage
/////////      chrome.storage.local.set({
/////////          var1_Exclude_Space, var2_Include_Space, var3_Exclude_Punctuation,
/////////          var4_Include_Punctuation, var5_Exclude_SpecialChar, var6_Include_SpecialChar
/////////      });
/////////
///////////      // Optionally, send message to background script or content script
///////////      chrome.runtime.sendMessage({
///////////          action: 'updateVariables',
///////////          var1_Exclude_Space, var2_Include_Space, var3_Exclude_Punctuation,
///////////          var4_Include_Punctuation, var5_Exclude_SpecialChar, var6_Include_SpecialChar
///////////      });
/////////
/////////  });
/////////
/////////




















//THIS MAKES IT SO IF ONE CHECKBOX IS CHECKED, THE OTHERS ARE UNCHECKED

// document.addEventListener('DOMContentLoaded', function () {
    // Get the checkbox elements
    const var2IncludeSpace = document.getElementById('var2_Include_Space');
    const var1ExcludeSpace = document.getElementById('var1_Exclude_Space');
    const var4IncludePunctuation = document.getElementById('var4_Include_Punctuation');
    const var3ExcludePunctuation = document.getElementById('var3_Exclude_Punctuation');
    const var6IncludeSpecialChar = document.getElementById('var6_Include_SpecialChar');
    const var5ExcludeSpecialChar = document.getElementById('var5_Exclude_SpecialChar');
  
    // Event listener for the "Include Space" checkbox
    var2IncludeSpace.addEventListener('change', function () {
      // Check the status of the corresponding Exclude Space checkbox
      console.log('Include Space is now:', var2IncludeSpace.checked);
      console.log('Exclude Space is:', var1ExcludeSpace.checked);
  
      // If Include Space is checked, you might want to uncheck Exclude Space (if you want exclusive behavior)
      if (var2IncludeSpace.checked) {
        var1ExcludeSpace.checked = false;
      }
      // Manually save the updated varablere states of the checkboxes to chrome.storage
      chrome.storage.local.set({
          var1_Exclude_Space: var1ExcludeSpace.checked,
          var2_Include_Space: var2IncludeSpace.checked,
          var3_Exclude_Punctuation: var3ExcludePunctuation.checked,
          var4_Include_Punctuation: var4IncludePunctuation.checked,
          var5_Exclude_SpecialChar: var5ExcludeSpecialChar.checked,
          var6_Include_SpecialChar: var6IncludeSpecialChar.checked
      }, function () {
          console.log('State updated and saved to chrome.storage');
      });

    
    });
  
    // Event listener for the "Exclude Space" checkbox
    var1ExcludeSpace.addEventListener('change', function () {
      // Check the status of the corresponding Include Space checkbox
      console.log('Exclude Space is now:', var1ExcludeSpace.checked);
      console.log('Include Space is:', var2IncludeSpace.checked);
  
      // If Exclude Space is checked, you might want to uncheck Include Space (if you want exclusive behavior)
      if (var1ExcludeSpace.checked) {
        var2IncludeSpace.checked = false;
      }

      // Manually save the updated varablere states of the checkboxes to chrome.storage
      chrome.storage.local.set({
          var1_Exclude_Space: var1ExcludeSpace.checked,
          var2_Include_Space: var2IncludeSpace.checked,
          var3_Exclude_Punctuation: var3ExcludePunctuation.checked,
          var4_Include_Punctuation: var4IncludePunctuation.checked,
          var5_Exclude_SpecialChar: var5ExcludeSpecialChar.checked,
          var6_Include_SpecialChar: var6IncludeSpecialChar.checked
      }, function () {
          console.log('State updated and saved to chrome.storage');
      });

      
  
    });
  
    // Event listener for the "Include Punctuation" checkbox
    var4IncludePunctuation.addEventListener('change', function () {
      console.log('Include Punctuation is now:', var4IncludePunctuation.checked);
      console.log('Exclude Punctuation is:', var3ExcludePunctuation.checked);
  
      if (var4IncludePunctuation.checked) {
        var3ExcludePunctuation.checked = false;
      }

      // Manually save the updated varablere states of the checkboxes to chrome.storage
      chrome.storage.local.set({
          var1_Exclude_Space: var1ExcludeSpace.checked,
          var2_Include_Space: var2IncludeSpace.checked,
          var3_Exclude_Punctuation: var3ExcludePunctuation.checked,
          var4_Include_Punctuation: var4IncludePunctuation.checked,
          var5_Exclude_SpecialChar: var5ExcludeSpecialChar.checked,
          var6_Include_SpecialChar: var6IncludeSpecialChar.checked
      }, function () {
          console.log('State updated and saved to chrome.storage');
      });

      
    });
  
    // Event listener for the "Exclude Punctuation" checkbox
    var3ExcludePunctuation.addEventListener('change', function () {
      console.log('Exclude Punctuation is now:', var3ExcludePunctuation.checked);
      console.log('Include Punctuation is:', var4IncludePunctuation.checked);
  
      if (var3ExcludePunctuation.checked) {
        var4IncludePunctuation.checked = false;
      }

      // Manually save the updated varablere states of the checkboxes to chrome.storage
      chrome.storage.local.set({
          var1_Exclude_Space: var1ExcludeSpace.checked,
          var2_Include_Space: var2IncludeSpace.checked,
          var3_Exclude_Punctuation: var3ExcludePunctuation.checked,
          var4_Include_Punctuation: var4IncludePunctuation.checked,
          var5_Exclude_SpecialChar: var5ExcludeSpecialChar.checked,
          var6_Include_SpecialChar: var6IncludeSpecialChar.checked
      }, function () {
          console.log('State updated and saved to chrome.storage');
      });

      
    });
  
    // Event listener for the "Include Special Character" checkbox
    var6IncludeSpecialChar.addEventListener('change', function () {
      console.log('Include Special Char is now:', var6IncludeSpecialChar.checked);
      console.log('Exclude Special Char is:', var5ExcludeSpecialChar.checked);
  
      if (var6IncludeSpecialChar.checked) {
        var5ExcludeSpecialChar.checked = false;
      }

      // Manually save the updated varablere states of the checkboxes to chrome.storage
      chrome.storage.local.set({
          var1_Exclude_Space: var1ExcludeSpace.checked,
          var2_Include_Space: var2IncludeSpace.checked,
          var3_Exclude_Punctuation: var3ExcludePunctuation.checked,
          var4_Include_Punctuation: var4IncludePunctuation.checked,
          var5_Exclude_SpecialChar: var5ExcludeSpecialChar.checked,
          var6_Include_SpecialChar: var6IncludeSpecialChar.checked
      }, function () {
          console.log('State updated and saved to chrome.storage');
      });

      
    });
  
    // Event listener for the "Exclude Special Character" checkbox
    var5ExcludeSpecialChar.addEventListener('change', function () {
      console.log('Exclude Special Char is now:', var5ExcludeSpecialChar.checked);
      console.log('Include Special Char is:', var6IncludeSpecialChar.checked);
  
      if (var5ExcludeSpecialChar.checked) {
        var6IncludeSpecialChar.checked = false;
      }


        // Manually save the updated varablere states of the checkboxes to chrome.storage
        chrome.storage.local.set({
            var1_Exclude_Space: var1ExcludeSpace.checked,
            var2_Include_Space: var2IncludeSpace.checked,
            var3_Exclude_Punctuation: var3ExcludePunctuation.checked,
            var4_Include_Punctuation: var4IncludePunctuation.checked,
            var5_Exclude_SpecialChar: var5ExcludeSpecialChar.checked,
            var6_Include_SpecialChar: var6IncludeSpecialChar.checked
        }, function () {
            console.log('State updated and saved to chrome.storage');
        });


    });

  
















  });