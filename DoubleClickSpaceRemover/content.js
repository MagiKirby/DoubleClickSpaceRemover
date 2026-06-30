document.addEventListener("mousedown", (event) => {
    if (event.detail === 2) { // Detect double-click

        // Retrieve all relevant variables at once
        chrome.storage.local.get([
            'var1_Exclude_Space',
            'var2_Include_Space',
            'var3_Exclude_Punctuation',
            'var4_Include_Punctuation',
            'var5_Exclude_SpecialChar',
            'var6_Include_SpecialChar',
            'var7_Exclude_TabChar',
            'var8_Include_TabChar',
            'var9_Exclude_LeadingSpaceOrTabChar',
            'var10_Include_LeadingSpaceOrTabChar'
        ], function(result) {


            // Handle var1_Exclude_Space
            if (result.var1_Exclude_Space) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }

            // Handle var2_Include_Space
            if (result.var2_Include_Space) {
                console.log('Var2 is true, enabling Double-Click Include Space Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var2 is false, behavior is disabled');
            }

            // Handle var3_Exclude_Punctuation
            if (result.var3_Exclude_Punctuation) {
                console.log('Var3 is true, enabling Double-Click Exclude Punctuation Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var3 is false, behavior is disabled');
            }

            // Handle var4_Include_Punctuation
            if (result.var4_Include_Punctuation) {
                console.log('Var4 is true, enabling Double-Click Include Punctuation Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var4 is false, behavior is disabled');
            }

            // Handle var5_Exclude_SpecialChar
            if (result.var5_Exclude_SpecialChar) {
                console.log('Var5 is true, enabling Double-Click Exclude Special Characters Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var5 is false, behavior is disabled');
            }

            // Handle var6_Include_SpecialChar
            if (result.var6_Include_SpecialChar) {
                console.log('Var6 is true, enabling Double-Click Include Special Characters Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var6 is false, behavior is disabled');
            }

            // Handle var7_Exclude_TabChar
            if (result.var7_Exclude_TabChar) {
                console.log('Var7 is true, enabling Double-Click Exclude Tab Characters Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var7 is false, behavior is disabled');
            }
            // Handle var8_Include_TabChar
            if (result.var8_Include_TabChar) {
                console.log('Var8 is true, enabling Double-Click Include Tab Characters Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var8 is false, behavior is disabled');
            }

            // Handle var9_Exclude_LeadingSpaceOrTabChar
            if (result.var9_Exclude_LeadingSpaceOrTabChar) {
                console.log('Var9 is true, enabling Double-Click Include Tab Characters Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var9 is false, behavior is disabled');
            }
            // Handle var10_Include_LeadingSpaceOrTabChar
            if (result.var10_Include_LeadingSpaceOrTabChar) {
                console.log('Var10 is true, enabling Double-Click Include Tab Characters Behavior');
                document.addEventListener("mouseup", adjustSelection_ToUsersSettings(result), { once: true });
                return;
            } else {
                console.log('Var10 is false, behavior is disabled');
            }


        });
    }
});














































































































































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                        //This will be the only function
function adjustSelection_ToUsersSettings(result)
{
    console.log("This will be only function");

    //1.) Space                           if (result.var1_Exclude_Space == true){}    if(result.var2_Include_Space == true) {}
    //2.) Punctuation
    //3.) Special Chars
    //4.) Tab Chars
    //5.) Leading Space/Tab

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const text = selection.toString();
        console.log("Selected Text: ", text); // Log the selected text

        

        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;


        const punctuationCharsRegex = /[.,!?;:()"'-]+/;


        // Define regex for special characters (one or more)
        const specialCharRegex = /^[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;


        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection


        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed text


        // If the first character after trimming is a special character, proceed
        const specialCharMatch = trimmedText.match(specialCharRegex);













        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 1         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var1_Exclude_Space);
        if (result.var1_Exclude_Space == true)
        {
            console.log("Variable 1 Exclude Space is True, Will remove the space now")
            //Remove the following space from the selected text
            console.log(text);
            if (text.endsWith(" "))
            {
                console.log("Space found at the end of the selected text. Trimming it out.");
                const trimmedEndOffset = range.endOffset - 1;
                range.setEnd(range.endContainer, trimmedEndOffset);
                selection.removeAllRanges();
                selection.addRange(range);
                trimmedText = text.trimEnd(); // Trim the trailing space and update 'text'
            }
        }
        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 3         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var3_Exclude_Punctuation);
        if (result.var3_Exclude_Punctuation == true)
        {
            if (selection.rangeCount > 0)
            {
                const range = selection.getRangeAt(0);
                let text = selection.toString(); // Get the selected text
            
                console.log("Selected Text: ", text); // Log the selected text
                // Define regex for special characters (one or more)
                const punctuationCharsRegex = /[.,!?;:()"'-]+/;
          
                if (punctuationCharsRegex.test(text))
                {
                  console.log("Punctuation character found at the end of the selected text. Trimming it out.");
                  let trimmedEndOffset = range.endOffset;
                  // If the last character is a special character, trim it
                  if (punctuationCharsRegex.test(text.charAt(trimmedEndOffset - 1))) {
                    trimmedEndOffset -= 1;
                  }
                  // Update the range to exclude trailing space/punctuation
                  range.setEnd(range.endContainer, trimmedEndOffset);
                  selection.removeAllRanges();
                  selection.addRange(range);
                }
            }
        }
        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 5         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var5_Exclude_SpecialChar);
        if (result.var5_Exclude_SpecialChar == true)
        {
            if (selection.rangeCount > 0)
            {
                const range = selection.getRangeAt(0);
                let text = selection.toString(); // Get the selected text
            
                console.log("Selected Text: ", text); // Log the selected text
                // Define regex for special characters (one or more)
                const specialCharsRegex = /^[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;
        
                if (specialCharsRegex.test(text))
                {
                    console.log("Special character found at the end of the selected text. Trimming it out.");
                    let trimmedEndOffset = range.endOffset;
                    // If the last character is a special character, trim it
                    if (specialCharsRegex.test(text.charAt(trimmedEndOffset - 1)))
                    {
                        trimmedEndOffset -= 1;
                    }
                    // Update the range to exclude trailing space/punctuation
                    range.setEnd(range.endContainer, trimmedEndOffset);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        }
        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 7         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var7_Exclude_TabChar);
        if (result.var7_Exclude_TabChar == true)
        {
            if (selection.rangeCount > 0) 
            {
                const range = selection.getRangeAt(0);
                let text = selection.toString(); // Get the selected text
                console.log("Selected Text: ", text); // Log the selected text
              
                // Define regex for punctuation characters (one or more)
                const punctuationRegex = /[.,!?;:()"'-]+/;
                // Define regex for spaces (one or more)
                const tabRegex = /^\t+/;
              
                // Trim trailing space and punctuation (if any) from the selected text
                if (text.endsWith("\t") || punctuationRegex.test(text.charAt(text.length - 1)))
                {
                    console.log("Tab or punctuation found at the end of the selected text. Trimming it out.");
                    // Exclude space and punctuation from the selection
                    let trimmedEndOffset = range.endOffset;
            
                    // If the last character is a space or punctuation, trim it
                    if (text.endsWith("\t"))
                    {
                        trimmedEndOffset -= 1;
                    }
            
                    // If the last character is punctuation, trim it as well
                    if (punctuationRegex.test(text.charAt(trimmedEndOffset - 1)))
                    {
                        trimmedEndOffset -= 1;
                    }
            
                    // Update the range to exclude trailing space/punctuation
                    range.setEnd(range.endContainer, trimmedEndOffset);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    text = text.trimEnd(); // Update the text to reflect the trimmed version
                    console.log("Trimmed Text: ", text); // Log the trimmed text
                }
            }
        }
        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 9         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var9_Exclude_LeadingSpaceOrTabChar);
        if (result.var9_Exclude_LeadingSpaceOrTabChar == true)
        {
            if (selection.rangeCount > 0)
            {
                const range = selection.getRangeAt(0);
                let text = selection.toString();  // Get the selected text
                console.log("Selected Text: ", text); // Log the selected text
            
                // Define regex for tabs OR 4+ spaces immediately before selection
                const tabOrSpacesBeforeRegex = /(\t+| {4,})$/;
            
                // Get the part of the text *before* the current selection
                const precedingText = range.startContainer.textContent.slice(0, range.startOffset);
                console.log("Text Before Selection: ", precedingText); // Log the preceding text
            
                // Check if there are tabs OR 4+ spaces immediately before the selection
                if (tabOrSpacesBeforeRegex.test(precedingText)) {
                    console.log("Tab(s) or 4+ spaces found before the selection. Adjusting start offset...");
            
                    // Match the tabs or spaces before
                    const match = precedingText.match(tabOrSpacesBeforeRegex);
                    const matchLength = match ? match[0].length : 0;
            
                    // Move the selection start *forward* to exclude those characters
                    range.setStart(range.startContainer, range.startOffset);
                    selection.removeAllRanges();
                    selection.addRange(range);
            
                    text = selection.toString();
                    console.log("Trimmed Text (tabs/spaces before excluded): ", text);
            
                }
            }   
        }









        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 2         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var2_Include_Space);
        if (result.var2_Include_Space == true)
        {
            //Do not remove the following space from the selected text
        }
        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 4         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var4_Include_Punctuation);
        if (result.var4_Include_Punctuation == true)
        {


            if (selection.rangeCount > 0)
            {
                const range = selection.getRangeAt(0);
                const text = selection.toString();
                console.log("Selected Text: ", text); // Log the selected text
        
                // Define regex for punctuation characters (one or more)
                const punctuationRegex = /^[.,!?;:()"'-]/;
                // Define regex for spaces (one or more)
                const spaceRegex = /^\s+/;
        
                // Get the part of the text following the current selection
                const followingText = range.endContainer.textContent.slice(range.endOffset);
                console.log("Text Following Selection: ", followingText); // Log the text following the selection
        
        
        
                console.log(text);
                console.log(text);
                console.log(text);
                console.log(followingText);
                console.log(followingText);
                console.log(followingText);
        
        

        
                // Trim leading whitespace (spaces, newlines, etc.) from the following text
                let trimmedText = followingText.trimStart();
                console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed text
        
                // If the first character after trimming is punctuation, proceed
                //const punctuationMatch = trimmedText.match(punctuationRegex); BROKEN
                const punctuationMatch = followingText.match(punctuationRegex);
        
                // If punctuation is found immediately after the selected word
                if (punctuationMatch) {
                    console.log("Punctuation found: " + punctuationMatch[0]); // Log the punctuation found
        
                    // Extend the selection to include all matched punctuation
                    let endOffset = range.endOffset + punctuationMatch[0].length;
        

        
                    // Apply the modified range to include punctuation and space
                    //range.setEnd(range.endContainer, endOffset);   THIS GETS MULTIPLE PUNCTUATION 
                    range.setEnd(range.endContainer, range.endOffset + 1);
        


                    // Apply the modified range to the selection
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                //else
                //{
                //    console.log("No punctuation found, selecting the word normally.");
                //    // If no punctuation is found, we just select the word normally
                //    selection.removeAllRanges();
                //    selection.addRange(range);
                //}
            }


        }
        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 6         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var6_Include_SpecialChar);
        if (result.var6_Include_SpecialChar == true)
        {
            if (selection.rangeCount > 0)
            {
                    const range = selection.getRangeAt(0);
                    const text = selection.toString();
                    console.log("Selected Text: ", text); // Log the selected text
            
                    // Define regex for punctuation characters (one or more)       
                    const specialCharRegex = /^[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/; // The ^ symbol makes the regex only check the following character and now all chracters following the selection

            
                    // Get the part of the text following the current selection
                    const followingText = range.endContainer.textContent.slice(range.endOffset);
                    console.log("Text Following Selection: ", followingText); // Log the text following the selection
            
            
            
                    // Trim leading whitespace (spaces, newlines, etc.) from the following text
                    let trimmedText = followingText.trimStart();
                    console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed text
            
                    // If the first character after trimming is punctuation, proceed
                    //const punctuationMatch = trimmedText.match(punctuationRegex); BROKEN
                    const specialMatch = followingText.match(specialCharRegex);
            
                    // If punctuation is found immediately after the selected word
                    if (specialMatch) {
                        console.log("Punctuation found: " + specialMatch[0]); // Log the punctuation found
            
                        // Extend the selection to include all matched punctuation
                        let endOffset = range.endOffset + specialMatch[0].length;
            
                        // Apply the modified range to include punctuation and space
                        //range.setEnd(range.endContainer, endOffset);   THIS GETS MULTIPLE PUNCTUATION 
                        range.setEnd(range.endContainer, range.endOffset + 1);
            
    
                        // Apply the modified range to the selection
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }
        }
        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 8         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var8_Include_TabChar);
        if (result.var8_Include_TabChar == true)
        {
            if (selection.rangeCount > 0)
                {
                    const range = selection.getRangeAt(0);
                    const text = selection.toString();
            
                    console.log("Selected Text:", text);
            
                    // Get text after the selection
                    const followingText =
                        range.endContainer.textContent.slice(range.endOffset);
            
                    console.log("Text Following Selection:", followingText);
            
                    // Check if the very next character is a tab
                    if (followingText.startsWith("\t"))
                    {
                        console.log("Tab found after selection.");
            
                        range.setEnd(
                            range.endContainer,
                            range.endOffset + 1
                        );
            
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }
        }
        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////        VARIABLE 10         ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        console.log(result.var10_Include_LeadingSpaceOrTabChar);
        if (result.var10_Include_LeadingSpaceOrTabChar == true)
        {
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                let text = selection.toString();  // Get the selected text
                console.log("Selected Text: ", text); // Log the selected text
        
                if (!text) return; // Early return if no text is selected
            
                // Define regex for tabs or 4+ spaces immediately before selection
                const tabOrSpacesBeforeRegex = /(\t+| {4,})$/;
        
                // Get the part of the text *before* the current selection
                const precedingText = range.startContainer.textContent.slice(0, range.startOffset);
                console.log("Text Before Selection: ", precedingText); // Log the preceding text
        
                // Check if there are tabs OR 4+ spaces immediately before the selection
                if (tabOrSpacesBeforeRegex.test(precedingText)) {
                    console.log("Tab(s) or 4+ spaces found before the selection. Adjusting start offset...");
        
                    // Match the tabs or spaces before
                    const match = precedingText.match(tabOrSpacesBeforeRegex);
                    const matchLength = match ? match[0].length : 0;
        
                    // Move the selection start forward (skip the tabs/spaces)
                    range.setStart(range.startContainer, range.startOffset - matchLength);
                    selection.removeAllRanges();
                    selection.addRange(range);
        
                    text = selection.toString();
                    console.log("Trimmed Text (tabs/spaces before removed): ", text);
                }
            }
        }












    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
