$(function () {
$(document).ready(function () {
            /* 
			 * Auto
			 */
            $('#textEditor').igTextEditor({
                maxLength: 2
            });

            $('#textEditor1').igTextEditor({ listItems: [1, 2, 3, 4], isLimitedToListValues: true });

            $('#textEditor2').igNumericEditor({ minValue: 0, maxValue: 2, });

            $('#spinEditor').igNumericEditor({
                dataMode: 'int',
                buttonType: 'spin',
                spinDelta: 1,
                minValue: 0,
                maxValue: 2,
                spinWrapAround: true
            });

            $('#spinEditor1').igNumericEditor({
                dataMode: 'int',
                buttonType: 'spin',
                spinDelta: 1, minValue: 0,
                maxValue: 2,
                spinWrapAround: false
            });
       });
});