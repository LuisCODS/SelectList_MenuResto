
// ======================== GLOBAL ============================

var Pain = {
    id:1,
    src: '/Img/image1.jpg',
    Prix: 6,
    Nome: 'Pain'
};

var Soupe = {
    id: 2,
    src: '/Img/image2.jpg',
    Prix: 6,
    Nome: 'Soupe'
};

var Cesar = {
    id: 3,
    src: '/Img/image3.jpg',
    Prix: 6,
    Nome: 'Cesar'
};

var tableauSalade = [Pain, Soupe, Cesar];
var image = document.getElementById('image');

// ======================== FUNCTIONS ============================

function initializeListe()
{    
    var listItem = document.getElementById('list'); 

    var i;
    for (i in tableauSalade) {
        for (i = 0; i < tableauSalade.length; i++) {
            listItem.options[i] = new Option(tableauSalade[i].Nome, tableauSalade[i].id);            
        } 
    } 
    //ToTest:
    //document.getElementById('optionValue').innerHTML = "listItem.options[0].value :" + listItem.options[0].value;
    //document.getElementById('tableauValue').innerHTML = "tableauSalade[0].id:" + tableauSalade[0].id;
    //alert(tableauSalade.length);//3
}

function GetSelectedItem(image, formName)
{
    var imagem = document.getElementById('image');//L'image
    var listItem = document.getElementById('list'); //Array de salade
    var Index = formName.list.selectedIndex; //index
    
    //listItem.options[i].value == tableauSalade[i].id
    //alert(Index);//0,1
    var i;
    for (i = 0; i < tableauSalade.length; i++) {
        //listItem.options[0].value;//vaux 1
        //tableauSalade[0].id; // vaux 1
        if (listItem.options[i].selected) {
            imagem.src = tableauSalade[i].src;
            //if (listItem.options[i].value == tableauSalade[i].id) 
                //imagem.src = "/Img/image2.jpg";          
        }
    }
    // ChangeImage(selcIndex);//Send it to change
       
}

//Change image en function de l'index choisie
//function ChangeImage(selcIndex)
//{
//    //var image = document.getElementById('im');

//    //listItem.options[0].selected;
//    switch (selcIndex)
//    {        
//        case 0:
//            image.src = 
//            document.getElementById("Prix").innerHTML = "5.95$";
//        break;
//        case 1:
//            image.src = "/Img/image2.jpg";
//        break;
//        case 2:
//            image.src = "/Img/image3.jpg";
//        break;
//        default:
//            image.src = "/Img/imgDefault.jpg";
//    }    
//}


