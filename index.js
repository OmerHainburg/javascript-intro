var a = 5;
var b = 3;

function getErrors()
{
    try {
        if (a < b) {
            console.log("Right Answer");            
        }
        else {
            throw ("Wrong Answer");
        }
    } catch (e) {
        console.log("Error: " + e);
    }
}

getErrors();