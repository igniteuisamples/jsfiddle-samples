$(function () {
//Logic to sort by first letter
            function byFirstLetter(val1, val2) {
                if (val1 === null && val2 === null)
                    return true;
                if (val1 === null || val2 === null)
                    return false;
                return typeof val1 === "string" &&
            typeof val2 === "string" &&
            val1.toUpperCase().charCodeAt(0) === val2.toUpperCase().charCodeAt(0);
            }

            //Logic determines group names
            function returnFirstLetter(val) {
                if (!val || val.length === 0)
                    return "Empty";
                return val.toUpperCase()[0];
            }
});