

//adding functionality to the buttons
document.querySelector('.create').addEventListener('click', function(){ 
    document.querySelector('.new-item').style.display='block';
    });
    
    //adding a new item
    document.querySelector('.new-item button').addEventListener('click', function(){
       var itemName = document.querySelector('.new-item input').value;
       if (itemName != ''){
    
            var itemsStorage = localStorage.getItem('items');
    
            if(itemsStorage == null){
                itemsStorage = '[]';
            }
            var itemsArray = JSON.parse(itemsStorage);
            itemsArray.push({"item":itemName, "status":0});
            saveItems(itemsArray);
            receiveItems();
            document.querySelector('.new-item input').value='';
            document.querySelector('.new-item').style.display='none';
        }
        });
    
        // recalling stored items
    function receiveItems(){
    
        const itemsList =  document.querySelector('ul.items');
        itemsList.innerHTML='';
        var newItemsHTML = '';
    
        try{
            var itemsStorage = localStorage.getItem('items');
            if(itemsStorage == null){
                itemsStorage = '[]';
              }
            var itemsArray = JSON.parse(itemsStorage);
    
            for (var i = 0; i < itemsArray.length; i++) {
                var status ='';
                //setting the status
                if (itemsArray[i].status == 1){
                status = 'class="done"';
                }
        
                //adding the icons/buttons
                newItemsHTML += `<li data-itemindex="${i}" ${status}>
                <span class="item">${itemsArray[i].item}</span> 
                <div><span class="heart"> <img src="./assets/heart.png" alt= "love" width = 30px height = 30px> </span></div>
                </li>`;
            }
            itemsList.innerHTML = newItemsHTML;
    
            //functionality to the check and bin buttons
            var itemsListUL = document.querySelectorAll('ul li');
            for (var i = 0; i < itemsArray.length; i++) {
    
                itemsListUL[i].querySelector('.heart').addEventListener('click', function(){
                    var index = this.parentNode.parentNode.dataset.itemindex;
                    heart(index);
                });
            }
            } catch(e) {     
    }
    }

    //function for deleted items
    function heart(index){
        var itemsStorage = localStorage.getItem('items');
        if(itemsStorage == null){
            itemsStorage = '[]';
          }
        var itemsArray = JSON.parse(itemsStorage);
    
        itemsArray.splice(index, 1);
        saveItems(itemsArray);
        document.querySelector('ul.items li[data-itemindex="'+index+'"]').remove();
    }
    
    //function for saving items
    function saveItems(obj){
    var string = JSON.stringify(obj);
    localStorage.setItem('items', string);
    }
    
    receiveItems();
    