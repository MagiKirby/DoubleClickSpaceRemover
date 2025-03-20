document.addEventListener("mousedown", (event) => {
    if (event.detail === 2) { // Detect double-click

        // Retrieve all relevant variables at once
        chrome.storage.local.get([
            'var1_Exclude_Space',
            'var2_Include_Space',
            'var3_Exclude_Punctuation',
            'var4_Include_Punctuation',
            'var5_Exclude_SpecialChar',
            'var6_Include_SpecialChar'
        ], function(result) {


            // NOTHING CHECKED ON
            if (!result.var1_Exclude_Space && !result.var2_Include_Space && !result.var3_Exclude_Punctuation && !result.var4_Include_Punctuation && !result.var5_Exclude_SpecialChar && !result.var6_Include_SpecialChar) {
                console.log('Nothing Checked aka Turn Extension on as ExcludeSpace');
                document.addEventListener("mouseup", adjustSelection_RemoveSpace, { once: true });
                return;
            } else {
                console.log('something turned on because not reached ===>  Nothing Checked aka Turn Extension on as ExcludeSpace');
            }


            
            
            
            
            // var1 var3 var5
            if (result.var1_Exclude_Space && result.var3_Exclude_Punctuation && result.var5_Exclude_SpecialChar) {
                console.log('var1 var3 var5 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_ExcludeSpace_ExcludeSpecialChars__ExcludePunctuation, { once: true });
                return;
            } else {
                console.log('var1 var3 var5 is false, double-click behavior is disabled');
            }
            // var2 var3 var6
            if (result.var2_Include_Space && result.var3_Exclude_Punctuation && result.var6_Include_SpecialChar) {
                console.log('var2 var3 var6 are true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludeSpace__ExcludePunctuation_IncludeSpecialChars, { once: true });
                return;
            } else {
                console.log('var2 var3 var6 is false, double-click behavior is disabled');
            }
            // var1 var3 var6
            if (result.var1_Exclude_Space && result.var3_Exclude_Punctuation && result.var6_Include_SpecialChar) {
                console.log('var1 var3 var6 are true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_ExcludeSpace__ExcludePunctuation_IncludeSpecialChars, { once: true });
                return;
            } else {
                console.log('var1 var3 var6 is false, double-click behavior is disabled');
            }
            // var1 var4 var6
            if (result.var1_Exclude_Space && result.var4_Include_Punctuation && result.var6_Include_SpecialChar) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_ExcludeSpace_IncludeSpecialChar, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }
            // var2 var3 var5
            if (result.var2_Include_Space && result.var3_Exclude_Punctuation && result.var5_Exclude_SpecialChar) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludeSpace_ExcludeSpecialChars__ExcludePunctuation, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }
            // var2 var4 var6
            if (result.var2_Include_Space && result.var4_Include_Punctuation && result.var6_Include_SpecialChar) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludeSpace__IncludePunctuation__IncludeSpecialChars, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }





















            // // var1 var3 var5
            // if (result.var1_Exclude_Space && result.var3_Exclude_Punctuation && result.var5_Exclude_SpecialChar) {
            //     console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
            //     document.addEventListener("mouseup", adjustSelection_ExcludeSpace_ExcludeSpecialChars__ExcludePunctuation, { once: true });
            //     return;
            // } else {
            //     console.log('Var1 is false, double-click behavior is disabled');
            // }
            // var1 var5
            if (result.var1_Exclude_Space && result.var5_Exclude_SpecialChar) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_ExcludeSpace_ExcludeSpecialChars__ExcludePunctuation, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }
            // var1 var3
            if (result.var1_Exclude_Space && result.var3_Exclude_Punctuation) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_ExcludeSpace_ExcludePunctuation, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }



            
            
            
            // // var1 var4 var6
            // if (result.var1_Exclude_Space && result.var4_Include_Punctuation && result.var6_Include_SpecialChar) {
            //     console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
            //     document.addEventListener("mouseup", adjustSelection_ExcludeSpace_IncludeSpecialChar, { once: true });
            //     return;
            // } else {
            //     console.log('Var1 is false, double-click behavior is disabled');
            // }
            // var1 var6
            if (result.var1_Exclude_Space && result.var6_Include_SpecialChar) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_ExcludeSpace_IncludeSpecialChar, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }
            // var1 var4
            if (result.var1_Exclude_Space && result.var4_Include_Punctuation) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_ExcludeSpace_IncludePunctuation, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }
            
            
            







            // // var2 var3 var5
            // if (result.var2_Include_Space && result.var3_Exclude_Punctuation && result.var5_Exclude_SpecialChar) {
            //     console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
            //     document.addEventListener("mouseup", adjustSelection_IncludeSpace_ExcludeSpecialChars__ExcludePunctuation, { once: true });
            //     return;
            // } else {
            //     console.log('Var1 is false, double-click behavior is disabled');
            // }
            // var2 var5
            if (result.var2_Include_Space && result.var5_Exclude_SpecialChar) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludeSpace_ExcludeSpecialChars__ExcludePunctuation, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }
            // var2 var3
            if (result.var2_Include_Space && result.var3_Exclude_Punctuation) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludeSpace_ExcludePunctuation, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }










            // // var2 var4 var6
            // if (result.var2_Include_Space && result.var4_Include_Punctuation && result.var6_Include_SpecialChar) {
            //     console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
            //     document.addEventListener("mouseup", adjustSelection_IncludeSpace__IncludePunctuation__IncludeSpecialChars, { once: true });
            //     return;
            // } else {
            //     console.log('Var1 is false, double-click behavior is disabled');
            // }
            // var2 var5
            if (result.var2_Include_Space && result.var6_Include_SpecialChar) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludeSpace__IncludePunctuation__IncludeSpecialChars, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }
            // var2 var3
            if (result.var2_Include_Space && result.var4_Include_Punctuation) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludeSpace__IncludePunctuation, { once: true });
                return;
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }






















            // Handle var1_Exclude_Space
            if (result.var1_Exclude_Space) {
                console.log('Var1 is true, enabling Double-Click RemoveSpace Behavior');
                document.addEventListener("mouseup", adjustSelection_RemoveSpace, { once: true });
            } else {
                console.log('Var1 is false, double-click behavior is disabled');
            }

            // Handle var2_Include_Space
            if (result.var2_Include_Space) {
                console.log('Var2 is true, enabling Double-Click Include Space Behavior');
                // document.addEventListener("mouseup", adjustSelection_IncludeSpace, { once: true });
            } else {
                console.log('Var2 is false, behavior is disabled');
            }

            // Handle var3_Exclude_Punctuation
            if (result.var3_Exclude_Punctuation) {
                console.log('Var3 is true, enabling Double-Click Exclude Punctuation Behavior');
                 document.addEventListener("mouseup", adjustSelection_ExcludePunctuation, { once: true });
            } else {
                console.log('Var3 is false, behavior is disabled');
            }

            // Handle var4_Include_Punctuation
            if (result.var4_Include_Punctuation) {
                console.log('Var4 is true, enabling Double-Click Include Punctuation Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludePunctuation_Multiple_IncludeSPACEatEnd_DONOTHINGIFNOpunctuationFOUND, { once: true });
            } else {
                console.log('Var4 is false, behavior is disabled');
            }

            // Handle var5_Exclude_SpecialChar
            if (result.var5_Exclude_SpecialChar) {
                console.log('Var5 is true, enabling Double-Click Exclude Special Characters Behavior');
                document.addEventListener("mouseup", adjustSelection_ExcludeSpecialChars, { once: true });
            } else {
                console.log('Var5 is false, behavior is disabled');
            }

            // Handle var6_Include_SpecialChar
            if (result.var6_Include_SpecialChar) {
                console.log('Var6 is true, enabling Double-Click Include Special Characters Behavior');
                document.addEventListener("mouseup", adjustSelection_IncludeSpecialChars, { once: true });
            } else {
                console.log('Var6 is false, behavior is disabled');
            }

        });
    }
});

















function adjustSelection_RemoveSpace() {
   console.log("______________Zzzzzzzz!!!!!!!!__~!_!_-----ZZZZZ");

	const selection = window.getSelection();
	if (selection.rangeCount > 0) {
		const range = selection.getRangeAt(0);
		const text = selection.toString();

		// Ensure trailing space is never selected
		if (text.endsWith(" ")) {
			const trimmedEndOffset = range.endOffset - 1;
			range.setEnd(range.endContainer, trimmedEndOffset);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
}




function adjustSelection_IncludePunctuation_Multiple_IncludeSPACEatEnd_DONOTHINGIFNOpunctuationFOUND() {
    console.log("_____INCLUDE PUNCTUATION WITH DOUBLE CLICK SELECT +++++++++ THIS WILL SELECT MULTIPLE PUNCTUATION AFTER A WORD LIKE hello...");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const text = selection.toString();
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const punctuationRegex = /[.,!?;:()"'-]+/;
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



        // Check if there is a space at the end of the selected text
        if (text[text.length - 1] === ' ') {
            console.log("Space found at the end of the selected text. No punctuation will be matched.");
            // If there's a space at the end, do nothing and just return
            return;
        }

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed text

        // If the first character after trimming is punctuation, proceed
        const punctuationMatch = trimmedText.match(punctuationRegex);

        // If punctuation is found immediately after the selected word
        if (punctuationMatch) {
            console.log("Punctuation found: " + punctuationMatch[0]); // Log the punctuation found

            // Extend the selection to include all matched punctuation
            let endOffset = range.endOffset + punctuationMatch[0].length;

            // Check if there is space after the punctuation
            const spaceMatch = trimmedText.slice(punctuationMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                // Include space characters following the punctuation
                endOffset += spaceMatch[0].length;
                console.log("Space found after punctuation, including it in selection.");
            }

            // Apply the modified range to include punctuation and space
            range.setEnd(range.endContainer, endOffset);

            // Apply the modified range to the selection
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.log("No punctuation found, selecting the word normally.");
            // If no punctuation is found, we just select the word normally
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}













// var6  var2    and var4
function adjustSelection_IncludeSpecialChars_Multiple_IncludeSPACEatEnd_DONOTHINGIFNoSpecialCharFound() {
    console.log("_____INCLUDE SPECIAL CHARACTERS WITH DOUBLE CLICK SELECT +++++++++ THIS WILL SELECT MULTIPLE SPECIAL CHARACTERS AFTER A WORD LIKE hello@world#");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const text = selection.toString();
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for special characters (one or more)
        const specialCharRegex = /[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;
        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

        // Check if there is a space at the end of the selected text
        if (text[text.length - 1] === ' ') {
            console.log("Space found at the end of the selected text. No special characters will be matched.");
            // If there's a space at the end, do nothing and just return
            return;
        }

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed text

        // If the first character after trimming is a special character, proceed
        const specialCharMatch = trimmedText.match(specialCharRegex);

        // If special characters are found immediately after the selected word
        if (specialCharMatch) {
            console.log("Special Characters found: " + specialCharMatch[0]); // Log the special characters found

            // Extend the selection to include all matched special characters
            let endOffset = range.endOffset + specialCharMatch[0].length;

            // Check if there is space after the special characters
            const spaceMatch = trimmedText.slice(specialCharMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                // Include space characters following the special characters
                endOffset += spaceMatch[0].length;
                console.log("Space found after special characters, including it in selection.");
            }

            // Apply the modified range to include special characters and space
            range.setEnd(range.endContainer, endOffset);

            // Apply the modified range to the selection
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.log("No special characters found, selecting the word normally.");
            // If no special characters are found, we just select the word normally
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}





// //       var1     ________           var3       ______________    var5   ___________
// //       var1     ________     _____________    ______________    var5   ___________
function adjustSelection_ExcludeSpace_ExcludeSpecialChars__ExcludePunctuation() {
    console.log("_____ExcludeSpace_ExcludePunctuation   !_!_!_!_!     THIS WILL EXCLUDE SPACE & PUNCTUATION AFTER A WORD LIKE hello@world#");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const specialCharRegex = /[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;
        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;

        // Trim trailing space and punctuation (if any) from the selected text
        if (text.endsWith(" ") || specialCharRegex.test(text.charAt(text.length - 1))) {
            console.log("Space or punctuation found at the end of the selected text. Trimming it out.");
            // Exclude space and punctuation from the selection
            let trimmedEndOffset = range.endOffset;

            // If the last character is a space or punctuation, trim it
            if (text.endsWith(" ")) {
                trimmedEndOffset -= 1;
            }

            // If the last character is punctuation, trim it as well
            if (specialCharRegex.test(text.charAt(trimmedEndOffset - 1))) {
                trimmedEndOffset -= 1;
            }

            // Update the range to exclude trailing space/punctuation
            range.setEnd(range.endContainer, trimmedEndOffset);
            selection.removeAllRanges();
            selection.addRange(range);
            text = text.trimEnd();  // Update the text to reflect the trimmed version
            console.log("Trimmed Text: ", text);  // Log the trimmed text

            // Exit after trimming to prevent further checks
            return;
        }

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Check if there are any punctuation characters following the selection
        const specialcharMatch = trimmedText.match(specialCharRegex);

        // If punctuation is found immediately after the selected word, exclude it
        if (specialcharMatch) {
            console.log("Punctuation found: " + specialcharMatch[0]); // Log the punctuation found

            // Adjust the range to exclude punctuation characters
            let endOffset = range.endOffset + specialcharMatch[0].length;

            // Check if there is space after the punctuation, but exclude it
            const spaceMatch = trimmedText.slice(specialcharMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                // Don't include space characters following the punctuation
                console.log("Space found after punctuation, excluding it from selection.");
                // No change to endOffset since we're excluding the space
            }

            // Apply the modified range to exclude punctuation and space
            range.setEnd(range.endContainer, range.endOffset);  // Keep the end of range as is, since we're excluding the characters
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            // If no punctuation is found after the selection, just ensure no spaces or punctuation are included
            console.log("No punctuation found, just excluding trailing space.");
            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
            if (followingTextWithoutSpace !== trimmedText) {
                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
                range.setEnd(range.endContainer, trimmedEndOffset);
            }

            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}





// //       var1     ________     var3    ______________    ___________   ___________
function adjustSelection_ExcludeSpace_ExcludePunctuation() {
    console.log("_____ExcludeSpace_ExcludePunctuation   !_!_!_!_!     THIS WILL EXCLUDE SPACE & PUNCTUATION AFTER A WORD LIKE hello@world#");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const punctuationRegex = /[.,!?;:()"'-]+/;
        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;

        // Trim trailing space and punctuation (if any) from the selected text
        if (text.endsWith(" ") || punctuationRegex.test(text.charAt(text.length - 1))) {
            console.log("Space or punctuation found at the end of the selected text. Trimming it out.");
            // Exclude space and punctuation from the selection
            let trimmedEndOffset = range.endOffset;

            // If the last character is a space or punctuation, trim it
            if (text.endsWith(" ")) {
                trimmedEndOffset -= 1;
            }

            // If the last character is punctuation, trim it as well
            if (punctuationRegex.test(text.charAt(trimmedEndOffset - 1))) {
                trimmedEndOffset -= 1;
            }

            // Update the range to exclude trailing space/punctuation
            range.setEnd(range.endContainer, trimmedEndOffset);
            selection.removeAllRanges();
            selection.addRange(range);
            text = text.trimEnd();  // Update the text to reflect the trimmed version
            console.log("Trimmed Text: ", text);  // Log the trimmed text

            // Exit after trimming to prevent further checks
            return;
        }

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Check if there are any punctuation characters following the selection
        const punctuationMatch = trimmedText.match(punctuationRegex);

        // If punctuation is found immediately after the selected word, exclude it
        if (punctuationMatch) {
            console.log("Punctuation found: " + punctuationMatch[0]); // Log the punctuation found

            // Adjust the range to exclude punctuation characters
            let endOffset = range.endOffset + punctuationMatch[0].length;

            // Check if there is space after the punctuation, but exclude it
            const spaceMatch = trimmedText.slice(punctuationMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                // Don't include space characters following the punctuation
                console.log("Space found after punctuation, excluding it from selection.");
                // No change to endOffset since we're excluding the space
            }

            // Apply the modified range to exclude punctuation and space
            range.setEnd(range.endContainer, range.endOffset);  // Keep the end of range as is, since we're excluding the characters
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            // If no punctuation is found after the selection, just ensure no spaces or punctuation are included
            console.log("No punctuation found, just excluding trailing space.");
            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
            if (followingTextWithoutSpace !== trimmedText) {
                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
                range.setEnd(range.endContainer, trimmedEndOffset);
            }

            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}











































// //       var1     ________     _________    var4  ___________   ___________
function adjustSelection_ExcludeSpace_IncludePunctuation() {
    console.log("_____ExcludeSpace_IncludePunctuation +++++++++ THIS WILL SELECT MULTIPLE PUNCTUATION AFTER A WORD LIKE hello...");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Trim trailing space (if any)
        if (text[text.length - 1] === ' ') {
            console.log("Space found at the end of the selected text. Trimming it out.");
            const trimmedEndOffset = range.endOffset - 1;
            range.setEnd(range.endContainer, trimmedEndOffset);
            selection.removeAllRanges();
            selection.addRange(range);
            text = text.trimEnd();  // Trim the trailing space and update 'text'
            console.log("Trimmed Text: ", text);  // Log the trimmed text
            return;
        }

        // At this point, 'text' has been trimmed, so use the updated 'text' in the next steps
        // Define regex for punctuation characters (one or more)
        const punctuationRegex = /[.,!?;:()"'-]+/;
        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Now use the updated 'text' to check for punctuation or spaces
        const punctuationMatch = trimmedText.match(punctuationRegex);

        if (punctuationMatch) {
            console.log("Punctuation found: " + punctuationMatch[0]); // Log the punctuation found

            let endOffset = range.endOffset + punctuationMatch[0].length;

            // Check if there is space after the punctuation
            const spaceMatch = trimmedText.slice(punctuationMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                console.log("Space found after punctuation, excluding it from selection.");
            }

            range.setEnd(range.endContainer, endOffset);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            // If no punctuation, exclude the trailing space if it exists
            console.log("No punctuation found, excluding trailing space.");
            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
            if (followingTextWithoutSpace !== trimmedText) {
                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
                range.setEnd(range.endContainer, trimmedEndOffset);
            }

            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}







// //       var1     ________     _________       var4      ___________   var6
// //       var1     ________     _________    ___________  ___________   var6
function adjustSelection_ExcludeSpace_IncludeSpecialChar() {
    console.log("_____ExcludeSpace_IncludeSpecialChar +++++++++ THIS WILL SELECT MULTIPLE SPECIAL AFTER A WORD LIKE hello...");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Trim trailing space (if any)
        if (text[text.length - 1] === ' ') {
            console.log("Space found at the end of the selected text. Trimming it out.");
            const trimmedEndOffset = range.endOffset - 1;
            range.setEnd(range.endContainer, trimmedEndOffset);
            selection.removeAllRanges();
            selection.addRange(range);
            text = text.trimEnd();  // Trim the trailing space and update 'text'
            console.log("Trimmed Text: ", text);  // Log the trimmed text
            return;
        }

        // At this point, 'text' has been trimmed, so use the updated 'text' in the next steps
        // Define regex for Special characters (one or more)
        const specialCharRegex = /[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;
        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Now use the updated 'text' to check for special or spaces
        const specialcharMatch = trimmedText.match(specialCharRegex);

        if (specialcharMatch) {
            console.log("SpecialChar found: " + specialcharMatch[0]); // Log the specialchar found

            let endOffset = range.endOffset + specialcharMatch[0].length;

            // Check if there is space after the specialcharMatch
            const spaceMatch = trimmedText.slice(specialcharMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                console.log("Space found after specialchar, excluding it from selection.");
            }

            range.setEnd(range.endContainer, endOffset);
            selection.removeAllRanges();    
            selection.addRange(range);
        } else {
            // If no specialchar, exclude the trailing space if it exists
            console.log("No specialchar found, excluding trailing space.");
            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
            if (followingTextWithoutSpace !== trimmedText) {
                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
                range.setEnd(range.endContainer, trimmedEndOffset);
            }

            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}




































































































// //       ___________     var2     var3    ______________    var5   ___________
function adjustSelection_IncludeSpace_ExcludeSpecialChars__ExcludePunctuation() {
    console.log("_____IncludeSpace_ExcludePunctuation   !_!_!_!_!     THIS WILL EXCLUDE SPACE & PUNCTUATION AFTER A WORD LIKE hello@world#");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const specialCharRegex = /[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;
        // Define regex for spaces (one or more)
//        const spaceRegex = /^\s+/;

        // Trim trailing space and punctuation (if any) from the selected text
//        if (text.endsWith(" ") || specialCharRegex.test(text.charAt(text.length - 1))) {
//            console.log("Space or punctuation found at the end of the selected text. Trimming it out.");
//            // Exclude space and punctuation from the selection
//            let trimmedEndOffset = range.endOffset;
//
//            // If the last character is a space or punctuation, trim it
//            if (text.endsWith(" ")) {
//                trimmedEndOffset -= 1;
//            }
//
//            // If the last character is punctuation, trim it as well
//            if (specialCharRegex.test(text.charAt(trimmedEndOffset - 1))) {
//                trimmedEndOffset -= 1;
//            }
//
//            // Update the range to exclude trailing space/punctuation
//            range.setEnd(range.endContainer, trimmedEndOffset);
//            selection.removeAllRanges();
//            selection.addRange(range);
//            text = text.trimEnd();  // Update the text to reflect the trimmed version
//            console.log("Trimmed Text: ", text);  // Log the trimmed text
//
//            // Exit after trimming to prevent further checks
//            return;
//        }

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

//        // Trim leading whitespace (spaces, newlines, etc.) from the following text
//        let trimmedText = followingText.trimStart();
//        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Check if there are any punctuation characters following the selection
//        const specialcharMatch = trimmedText.match(specialCharRegex);
        const specialcharMatch = text.match(specialCharRegex);

        // If punctuation is found immediately after the selected word, exclude it
        if (specialcharMatch) {
            console.log("Punctuation found: " + specialcharMatch[0]); // Log the punctuation found

            // Adjust the range to exclude punctuation characters
            let endOffset = range.endOffset + specialcharMatch[0].length;

//            // Check if there is space after the punctuation, but exclude it
//            const spaceMatch = trimmedText.slice(specialcharMatch[0].length).match(spaceRegex);
//            if (spaceMatch) {
//                // Don't include space characters following the punctuation
//                console.log("Space found after punctuation, excluding it from selection.");
//                // No change to endOffset since we're excluding the space
//            }

            // Apply the modified range to exclude punctuation and space
            range.setEnd(range.endContainer, range.endOffset);  // Keep the end of range as is, since we're excluding the characters
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
//            // If no punctuation is found after the selection, just ensure no spaces or punctuation are included
//            console.log("No punctuation found, just excluding trailing space.");
//            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
//            if (followingTextWithoutSpace !== trimmedText) {
//                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
//                range.setEnd(range.endContainer, trimmedEndOffset);
//            }
//
//            selection.removeAllRanges();
//            selection.addRange(range);
        }
    }
}

// //       ___________     var2     var3    ______________    ___________   ___________
function adjustSelection_IncludeSpace_ExcludePunctuation() {
    console.log("_____IncludeSpace_ExcludePunctuation   !_!_!_!_!     THIS WILL EXCLUDE SPACE & PUNCTUATION AFTER A WORD LIKE hello@world#");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const specialCharRegex = /[.,!?;:()"'-]+/;
        // Define regex for spaces (one or more)
//        const spaceRegex = /^\s+/;

        // Trim trailing space and punctuation (if any) from the selected text
//        if (text.endsWith(" ") || specialCharRegex.test(text.charAt(text.length - 1))) {
//            console.log("Space or punctuation found at the end of the selected text. Trimming it out.");
//            // Exclude space and punctuation from the selection
//            let trimmedEndOffset = range.endOffset;
//
//            // If the last character is a space or punctuation, trim it
//            if (text.endsWith(" ")) {
//                trimmedEndOffset -= 1;
//            }
//
//            // If the last character is punctuation, trim it as well
//            if (specialCharRegex.test(text.charAt(trimmedEndOffset - 1))) {
//                trimmedEndOffset -= 1;
//            }
//
//            // Update the range to exclude trailing space/punctuation
//            range.setEnd(range.endContainer, trimmedEndOffset);
//            selection.removeAllRanges();
//            selection.addRange(range);
//            text = text.trimEnd();  // Update the text to reflect the trimmed version
//            console.log("Trimmed Text: ", text);  // Log the trimmed text
//
//            // Exit after trimming to prevent further checks
//            return;
//        }

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

//        // Trim leading whitespace (spaces, newlines, etc.) from the following text
//        let trimmedText = followingText.trimStart();
//        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Check if there are any punctuation characters following the selection
//        const specialcharMatch = trimmedText.match(specialCharRegex);
        const specialcharMatch = text.match(specialCharRegex);

        // If punctuation is found immediately after the selected word, exclude it
        if (specialcharMatch) {
            console.log("Punctuation found: " + specialcharMatch[0]); // Log the punctuation found

            // Adjust the range to exclude punctuation characters
            let endOffset = range.endOffset + specialcharMatch[0].length;

//            // Check if there is space after the punctuation, but exclude it
//            const spaceMatch = trimmedText.slice(specialcharMatch[0].length).match(spaceRegex);
//            if (spaceMatch) {
//                // Don't include space characters following the punctuation
//                console.log("Space found after punctuation, excluding it from selection.");
//                // No change to endOffset since we're excluding the space
//            }

            // Apply the modified range to exclude punctuation and space
            range.setEnd(range.endContainer, range.endOffset);  // Keep the end of range as is, since we're excluding the characters
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
//            // If no punctuation is found after the selection, just ensure no spaces or punctuation are included
//            console.log("No punctuation found, just excluding trailing space.");
//            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
//            if (followingTextWithoutSpace !== trimmedText) {
//                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
//                range.setEnd(range.endContainer, trimmedEndOffset);
//            }
//
//            selection.removeAllRanges();
//            selection.addRange(range);
        }
    }
}









































// //       ________     var2     _________       var4      ___________   var6
// //       ________     var2     _________    ___________  ___________   var6
function adjustSelection_IncludeSpace__IncludePunctuation__IncludeSpecialChars() {
    console.log("_____INCLUDE PUNCTUATION WITH DOUBLE CLICK SELECT +++++++++ THIS WILL SELECT MULTIPLE PUNCTUATION AFTER A WORD LIKE hello...");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const text = selection.toString();
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const punctuationRegex = /[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;
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



        // Check if there is a space at the end of the selected text
        if (text[text.length - 1] === ' ') {
            console.log("Space found at the end of the selected text. No punctuation will be matched.");
            // If there's a space at the end, do nothing and just return
            return;
        }

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed text

        // If the first character after trimming is punctuation, proceed
        const punctuationMatch = trimmedText.match(punctuationRegex);

        // If punctuation is found immediately after the selected word
        if (punctuationMatch) {
            console.log("Punctuation found: " + punctuationMatch[0]); // Log the punctuation found

            // Extend the selection to include all matched punctuation
            let endOffset = range.endOffset + punctuationMatch[0].length;

            // Check if there is space after the punctuation
            const spaceMatch = trimmedText.slice(punctuationMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                // Include space characters following the punctuation
                endOffset += spaceMatch[0].length;
                console.log("Space found after punctuation, including it in selection.");
            }

            // Apply the modified range to include punctuation and space
            range.setEnd(range.endContainer, endOffset);

            // Apply the modified range to the selection
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.log("No punctuation found, selecting the word normally.");
            // If no punctuation is found, we just select the word normally
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}





// //       ________     var2     _________    var4  ___________   ____________
function adjustSelection_IncludeSpace__IncludePunctuation() {
    console.log("_____INCLUDE PUNCTUATION WITH DOUBLE CLICK SELECT +++++++++ THIS WILL SELECT MULTIPLE PUNCTUATION AFTER A WORD LIKE hello...");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const text = selection.toString();
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const punctuationRegex = /[.,!?;:()"'-]+/;
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



//        // Check if there is a space at the end of the selected text
//        if (text[text.length - 1] === ' ') {
//            console.log("Space found at the end of the selected text. No punctuation will be matched.");
//            // If there's a space at the end, do nothing and just return
//            return;
//        }

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed text

        // If the first character after trimming is punctuation, proceed
        const punctuationMatch = trimmedText.match(punctuationRegex);

        // If punctuation is found immediately after the selected word
        if (punctuationMatch) {
            console.log("Punctuation found: " + punctuationMatch[0]); // Log the punctuation found

            // Extend the selection to include all matched punctuation
            let endOffset = range.endOffset + punctuationMatch[0].length;

            // Check if there is space after the punctuation
            const spaceMatch = trimmedText.slice(punctuationMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                // Include space characters following the punctuation
                endOffset += spaceMatch[0].length;
                console.log("Space found after punctuation, including it in selection.");
            }

            // Apply the modified range to include punctuation and space
            range.setEnd(range.endContainer, endOffset);

            // Apply the modified range to the selection
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.log("No punctuation found, selecting the word normally.");
            // If no punctuation is found, we just select the word normally
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}






























// //       ___________     __________     ________    ______________    ___________   var6
function adjustSelection_IncludeSpecialChars() {
    console.log("__var6___IncludeSpace_ExcludePunctuation   !_!_!_!_!     THIS WILL EXCLUDE SPACE & PUNCTUATION AFTER A WORD LIKE hello@world#");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const specialCharRegex = /[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;
        // Define regex for spaces (one or more)
//        const spaceRegex = /^\s+/;

        // Trim trailing space and punctuation (if any) from the selected text
//        if (text.endsWith(" ") || specialCharRegex.test(text.charAt(text.length - 1))) {
//            console.log("Space or punctuation found at the end of the selected text. Trimming it out.");
//            // Exclude space and punctuation from the selection
//            let trimmedEndOffset = range.endOffset;
//
//            // If the last character is a space or punctuation, trim it
//            if (text.endsWith(" ")) {
//                trimmedEndOffset -= 1;
//            }
//
//            // If the last character is punctuation, trim it as well
//            if (specialCharRegex.test(text.charAt(trimmedEndOffset - 1))) {
//                trimmedEndOffset -= 1;
//            }
//
//            // Update the range to exclude trailing space/punctuation
//            range.setEnd(range.endContainer, trimmedEndOffset);
//            selection.removeAllRanges();
//            selection.addRange(range);
//            text = text.trimEnd();  // Update the text to reflect the trimmed version
//            console.log("Trimmed Text: ", text);  // Log the trimmed text
//
//            // Exit after trimming to prevent further checks
//            return;
//        }

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

//        // Trim leading whitespace (spaces, newlines, etc.) from the following text
//        let trimmedText = followingText.trimStart();
//        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Check if there are any punctuation characters following the selection
//        const specialcharMatch = trimmedText.match(specialCharRegex);
        const specialcharMatch = text.match(specialCharRegex);

        // If punctuation is found immediately after the selected word, exclude it
        if (specialcharMatch) {
            console.log("Punctuation found: " + specialcharMatch[0]); // Log the punctuation found

            // Adjust the range to exclude punctuation characters
            let endOffset = range.endOffset + specialcharMatch[0].length;

//            // Check if there is space after the punctuation, but exclude it
//            const spaceMatch = trimmedText.slice(specialcharMatch[0].length).match(spaceRegex);
//            if (spaceMatch) {
//                // Don't include space characters following the punctuation
//                console.log("Space found after punctuation, excluding it from selection.");
//                // No change to endOffset since we're excluding the space
//            }

            // Apply the modified range to exclude punctuation and space
            range.setEnd(range.endContainer, range.endOffset);  // Keep the end of range as is, since we're excluding the characters
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
//            // If no punctuation is found after the selection, just ensure no spaces or punctuation are included
//            console.log("No punctuation found, just excluding trailing space.");
//            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
//            if (followingTextWithoutSpace !== trimmedText) {
//                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
//                range.setEnd(range.endContainer, trimmedEndOffset);
//            }
//
//            selection.removeAllRanges();
//            selection.addRange(range);
        }
    }
}






// //       _________     ________     _____________    ______________    var5   ___________
function adjustSelection_ExcludeSpecialChars() {
    console.log("__var5___ExcludePunctuation   !_!_!_!_!     THIS WILL EXCLUDE SPACE & PUNCTUATION AFTER A WORD LIKE hello@world#");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const specialCharRegex = /[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]+/;
        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;

//        // Trim trailing space and punctuation (if any) from the selected text
//        if (text.endsWith(" ") || specialCharRegex.test(text.charAt(text.length - 1))) {
//            console.log("Space or punctuation found at the end of the selected text. Trimming it out.");
//            // Exclude space and punctuation from the selection
//            let trimmedEndOffset = range.endOffset;
//
//            // If the last character is a space or punctuation, trim it
//            if (text.endsWith(" ")) {
//                trimmedEndOffset -= 1;
//            }
//
//            // If the last character is punctuation, trim it as well
//            if (specialCharRegex.test(text.charAt(trimmedEndOffset - 1))) {
//                trimmedEndOffset -= 1;
//            }
//
//            // Update the range to exclude trailing space/punctuation
//            range.setEnd(range.endContainer, trimmedEndOffset);
//            selection.removeAllRanges();
//            selection.addRange(range);
//            text = text.trimEnd();  // Update the text to reflect the trimmed version
//            console.log("Trimmed Text: ", text);  // Log the trimmed text
//
//            // Exit after trimming to prevent further checks
//            return;
//        }

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Check if there are any punctuation characters following the selection
//        const specialcharMatch = trimmedText.match(specialCharRegex);
        const specialcharMatch = text.match(specialCharRegex);

        // If punctuation is found immediately after the selected word, exclude it
        if (specialcharMatch) {
            console.log("Punctuation found: " + specialcharMatch[0]); // Log the punctuation found

            // Adjust the range to exclude punctuation characters
            let endOffset = range.endOffset + specialcharMatch[0].length;

//            // Check if there is space after the punctuation, but exclude it
//            const spaceMatch = trimmedText.slice(specialcharMatch[0].length).match(spaceRegex);
//            if (spaceMatch) {
//                // Don't include space characters following the punctuation
//                console.log("Space found after punctuation, excluding it from selection.");
//                // No change to endOffset since we're excluding the space
//            }

            // Apply the modified range to exclude punctuation and space
            range.setEnd(range.endContainer, range.endOffset);  // Keep the end of range as is, since we're excluding the characters
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
//            // If no punctuation is found after the selection, just ensure no spaces or punctuation are included
//            console.log("No punctuation found, just excluding trailing space.");
//            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
//            if (followingTextWithoutSpace !== trimmedText) {
//                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
//                range.setEnd(range.endContainer, trimmedEndOffset);
//            }
//
//            selection.removeAllRanges();
//            selection.addRange(range);
        }
    }
}














// //       _________     ________     var3    ______________    _______   ___________
function adjustSelection_ExcludePunctuation() {
    console.log("__var5___ExcludePunctuation   !_!_!_!_!     THIS WILL EXCLUDE SPACE & PUNCTUATION AFTER A WORD LIKE hello@world#");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const specialCharRegex = /[.,!?;:()"'-]+/;
        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;

//        // Trim trailing space and punctuation (if any) from the selected text
//        if (text.endsWith(" ") || specialCharRegex.test(text.charAt(text.length - 1))) {
//            console.log("Space or punctuation found at the end of the selected text. Trimming it out.");
//            // Exclude space and punctuation from the selection
//            let trimmedEndOffset = range.endOffset;
//
//            // If the last character is a space or punctuation, trim it
//            if (text.endsWith(" ")) {
//                trimmedEndOffset -= 1;
//            }
//
//            // If the last character is punctuation, trim it as well
//            if (specialCharRegex.test(text.charAt(trimmedEndOffset - 1))) {
//                trimmedEndOffset -= 1;
//            }
//
//            // Update the range to exclude trailing space/punctuation
//            range.setEnd(range.endContainer, trimmedEndOffset);
//            selection.removeAllRanges();
//            selection.addRange(range);
//            text = text.trimEnd();  // Update the text to reflect the trimmed version
//            console.log("Trimmed Text: ", text);  // Log the trimmed text
//
//            // Exit after trimming to prevent further checks
//            return;
//        }

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Check if there are any punctuation characters following the selection
//        const specialcharMatch = trimmedText.match(specialCharRegex);
        const specialcharMatch = text.match(specialCharRegex);

        // If punctuation is found immediately after the selected word, exclude it
        if (specialcharMatch) {
            console.log("Punctuation found: " + specialcharMatch[0]); // Log the punctuation found

            // Adjust the range to exclude punctuation characters
            let endOffset = range.endOffset + specialcharMatch[0].length;

//            // Check if there is space after the punctuation, but exclude it
//            const spaceMatch = trimmedText.slice(specialcharMatch[0].length).match(spaceRegex);
//            if (spaceMatch) {
//                // Don't include space characters following the punctuation
//                console.log("Space found after punctuation, excluding it from selection.");
//                // No change to endOffset since we're excluding the space
//            }

            // Apply the modified range to exclude punctuation and space
            range.setEnd(range.endContainer, range.endOffset);  // Keep the end of range as is, since we're excluding the characters
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
//            // If no punctuation is found after the selection, just ensure no spaces or punctuation are included
//            console.log("No punctuation found, just excluding trailing space.");
//            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
//            if (followingTextWithoutSpace !== trimmedText) {
//                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
//                range.setEnd(range.endContainer, trimmedEndOffset);
//            }
//
//            selection.removeAllRanges();
//            selection.addRange(range);
        }
    }
}













// //       ________     var2     var3    ___________       ___________   var6
function adjustSelection_IncludeSpace__ExcludePunctuation_IncludeSpecialChars() {
    console.log("_____INCLUDE only special characters                    WITH DOUBLE CLICK SELECT +++++++++ THIS WILL SELECT MULTIPLE PUNCTUATION AFTER A WORD LIKE hello...");

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const text = selection.toString();
        console.log("Selected Text: ", text); // Log the selected text

        // Define regex for punctuation characters (one or more)
        const punctuationRegex = /[@#$%^&*()_+={}<>\\|~§∞∑÷≈≠⇒←→·♪◆★●♥♦]+/;//This Regex is ONLY Special Characters
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



//        // Check if there is a space at the end of the selected text
//        if (text[text.length - 1] === ' ') {
//            console.log("Space found at the end of the selected text. No punctuation will be matched.");
//            // If there's a space at the end, do nothing and just return
//            return;
//        }

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed text

        // If the first character after trimming is punctuation, proceed
        const punctuationMatch = trimmedText.match(punctuationRegex);

        // If punctuation is found immediately after the selected word
        if (punctuationMatch) {
            console.log("Punctuation found: " + punctuationMatch[0]); // Log the punctuation found

            // Extend the selection to include all matched punctuation
            let endOffset = range.endOffset + punctuationMatch[0].length;

            // Check if there is space after the punctuation
            const spaceMatch = trimmedText.slice(punctuationMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                // Include space characters following the punctuation
                endOffset += spaceMatch[0].length;
                console.log("Space found after punctuation, including it in selection.");
            }



            // Check if the punctuation found matches the regex
            if (trimmedText[0].match(punctuationRegex)) 
                {
                    console.log("The punctuation matches the regex, extending the selection.");
                    // console.log("punctuationMatch found:", punctuationMatch[0], "with length:", punctuationMatch[0].length);
                    // console.log(punctuationMatch[0]);
                    // console.log(trimmedText[0]);
                    range.setEnd(range.endContainer, endOffset);
                    selection.removeAllRanges();
                    selection.addRange(range);
                } else {
                    console.log("The punctuation does not match the regex, not changing the selection.");
                    // console.log(trimmedText[0]);
                    // console.log("vs");
                    // console.log(punctuationRegex);
                }

            // // Apply the modified range to include punctuation and space
            // range.setEnd(range.endContainer, endOffset);

            // // Apply the modified range to the selection
            // selection.removeAllRanges();
            // selection.addRange(range);
        } else {
            console.log("No punctuation found, selecting the word normally.");
            // If no punctuation is found, we just select the word normally
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}







// //       var1     ________     var3    ___________  ___________   var6
function adjustSelection_ExcludeSpace__ExcludePunctuation_IncludeSpecialChars() {
    console.log("_____ExcludeSpace_IncludeSpecialChar +++++++++ THIS WILL SELECT MULTIPLE SPECIAL AFTER A WORD LIKE hello...");


    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let text = selection.toString();  // Get the selected text
        console.log("Selected Text: ", text); // Log the selected text

        // Trim trailing space (if any)
        if (text[text.length - 1] === ' ') {
            console.log("Space found at the end of the selected text. Trimming it out.");
            const trimmedEndOffset = range.endOffset - 1;
            range.setEnd(range.endContainer, trimmedEndOffset);
            selection.removeAllRanges();
            selection.addRange(range);
            text = text.trimEnd();  // Trim the trailing space and update 'text'
            console.log("Trimmed Text: ", text);  // Log the trimmed text
            return;
        }

        // At this point, 'text' has been trimmed, so use the updated 'text' in the next steps
        // Define regex for punctuation characters (one or more)
        // const punctuationRegex = /[.,!?;:()"'-]+/;
        const punctuationRegex = /[@#$%^&*()_+={}<>\\|~§∞∑÷≈≠⇒←→·♪◆★●♥♦]+/;//This Regex is ONLY Special Characters
        // Define regex for spaces (one or more)
        const spaceRegex = /^\s+/;

        // Get the part of the text following the current selection
        const followingText = range.endContainer.textContent.slice(range.endOffset);
        console.log("Text Following Selection: ", followingText); // Log the text following the selection

        // Trim leading whitespace (spaces, newlines, etc.) from the following text
        let trimmedText = followingText.trimStart();
        console.log("Trimmed Text Following Selection: ", trimmedText); // Log the trimmed following text

        // Now use the updated 'text' to check for punctuation or spaces
        const punctuationMatch = trimmedText.match(punctuationRegex);

        if (punctuationMatch) {
            console.log("Punctuation found: " + punctuationMatch[0]); // Log the punctuation found

            let endOffset = range.endOffset + punctuationMatch[0].length;

            // Check if there is space after the punctuation
            const spaceMatch = trimmedText.slice(punctuationMatch[0].length).match(spaceRegex);
            if (spaceMatch) {
                console.log("Space found after punctuation, excluding it from selection.");
            }


            // Check if the punctuation found matches the regex
            if (trimmedText[0].match(punctuationRegex)) 
            {
                console.log("The punctuation matches the regex, extending the selection.");
                // console.log("punctuationMatch found:", punctuationMatch[0], "with length:", punctuationMatch[0].length);
                // console.log(punctuationMatch[0]);
                // console.log(trimmedText[0]);
                range.setEnd(range.endContainer, endOffset);
                selection.removeAllRanges();
                selection.addRange(range);
            } else {
                console.log("The punctuation does not match the regex, not changing the selection.");
                // console.log(trimmedText[0]);
                // console.log("vs");
                // console.log(punctuationRegex);
            }

            // range.setEnd(range.endContainer, endOffset);
            // selection.removeAllRanges();
            // selection.addRange(range);
        } else {
            // If no punctuation, exclude the trailing space if it exists
            console.log("No punctuation found, excluding trailing space.");
            const followingTextWithoutSpace = trimmedText.trimStart(); // Remove leading spaces after the selection
            if (followingTextWithoutSpace !== trimmedText) {
                const trimmedEndOffset = range.endOffset + (trimmedText.length - followingTextWithoutSpace.length);
                range.setEnd(range.endContainer, trimmedEndOffset);
            }

            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}
