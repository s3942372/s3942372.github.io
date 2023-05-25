function filterCategory(filterBy, buttonClicked){
  let itemsToFilter = Array.from(document.getElementsByClassName("ProductBox"));
  for(let listItem of itemsToFilter){
    if(listItem.classList.contains(filterBy)){
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  }

  let filterButtonsArray = Array.from(document.getElementsByClassName("FilterButton"));
  for(let filterButton of filterButtonsArray){
    if(filterButton === buttonClicked){
      filterButton.classList.add("SelectedFilter");
    } else {
      filterButton.classList.remove("SelectedFilter");
    }
  }

  const popup = document.querySelector('.popup')
            const close = document.querySelector('.close')

            window.onload = function(){
                setTimeout(function(){
                    popup.style.display="block"
                },20000)
            }
        
            close.addEventListener('click', () => {
                popup.style.display="none"
            })

}



