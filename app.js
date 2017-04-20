var petCount = document.getElementById("petCount")
var catStatus = document.getElementById("catStatus")
var counter = 0;
var catPic = document.getElementById("catPic")
var catButton = document.getElementById("catButton")
function petCat(){
    counter++
    petCount.innerHTML = counter
    if (counter > 5)
    {
        catStatus.innerHTML = "rawrrr"
    }
    if (counter == 9)
    {
        catStatus.innerHTML = "Hissss"
    }
    if (counter == 10)
    {
        catStatus.innerHTML = "Mean Cat"
        catButton.disabled=true
        catPic.src=""
    }
}

function reset(){

counter=0
catButton.disabled = false
catStatus.innerHTML="Purrrr"
catPic.src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr05/2013/5/7/11/original-29006-1367941642-4.jpg"
petCount.innerHTML = counter
}
