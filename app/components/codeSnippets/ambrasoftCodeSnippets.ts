export const ambrasoftGregoryMemorySnippet: string =
`function gregoryPickSecondCard() {
                        
    var oSecondCard = null,
        fMemoryPickBias = oRoundProps[iCurrentRoundNumber].fGregCheckFromMemoryBias,
        bAttemptPickFromMemory = getBiasedBoolean(fMemoryPickBias);

    if (bAttemptPickFromMemory) {
        // Search for match in greg's memory
        oSecondCard = getMatchingCardFromGregsMemory(oGregsFirstCard);
    }

    if (!oSecondCard) {
        // Get random second card
        // Exclude first card
        var oaCardsToExclude = [oGregsFirstCard];
        if (bAttemptPickFromMemory) {
            // Match not found in gregory's memory, exclude memory cards
            oaCardsToExclude.concat(oaGregorysCardMemory);
        }
        oSecondCard = getRandomTableCard(oaCardsToExclude);
    }

    // Play card animation
    playGregoryPointAnimation(oSecondCard);
}`;

export const ambrasoftBrickDonkBrickFillDrawSnippet: string =
`function drawMultipleFillColoursIntoBrick(oFill, aoaColours) {
			
    var oFillContainer = oFill,
        iNumRows = aoaColours.length,
        iNumColumns = aoaColours[0].length,
        iMaxIndexX = iNumColumns - 1,
        iMaxIndexY = iNumRows - 1;
    
    for (var i = 0; i < aoaColours.length; i++) {
        for (var k = 0; k < aoaColours[i].length; k++) {
            
            // Gather props
            var sColour = getRGBAString(aoaColours[i][k]),
                iRadTL = (i === 0 && k === 0) ? BRICK_CORNER_RAD:0,
                iRadTR = (i === 0 && k === iMaxIndexX) ? BRICK_CORNER_RAD:0,
                iRadBR = (i === iMaxIndexY && k === iMaxIndexX) ? BRICK_CORNER_RAD:0,
                iRadBL = (i === iMaxIndexY && k === 0) ? BRICK_CORNER_RAD:0;
            
            // Draw new fill
            var oFillShape = new createjs.Shape();
            oFillShape.graphics.beginFill(sColour);
            oFillShape.graphics.drawRoundRectComplex(0, 0, BRICK_HUB_SIZE, BRICK_HUB_SIZE, iRadTL, iRadTR, iRadBR, iRadBL);
            oFillShape.graphics.endFill();
            
            // Position
            oFillShape.x = k * BRICK_HUB_SIZE;
            oFillShape.y = i * BRICK_HUB_SIZE;
            
            // Add fill to container
            oFillContainer.addChild(oFillShape);
            
        }
    }
}`;

export const ambrasoftWordsearchSnippet: string =
`function getAttemptedString() {
			
    var sResult = "",
        iXDiff = oHighlightIndices.oStart.x - oHighlightIndices.oEnd.x,
        iYDiff = oHighlightIndices.oStart.y - oHighlightIndices.oEnd.y;
    
    if (iXDiff != 0 && iYDiff != 0 && forcePositive(iXDiff) != forcePositive(iYDiff)) {
        // invalid
    } else {
        
        var iWordLength = Math.max(forcePositive(iXDiff), forcePositive(iYDiff)) + 1,
            iXIndex = oHighlightIndices.oStart.x,
            iYIndex = oHighlightIndices.oStart.y,
            iXDir = getDirectionFromDifference(iXDiff),
            iYDir = getDirectionFromDifference(iYDiff);
        
        for (var i = 0; i < iWordLength; i++) {
            sResult += aoaGrid[iXIndex][iYIndex];
            iXIndex += iXDir;
            iYIndex += iYDir;
        }
    }
    
    return sResult;
}`;


