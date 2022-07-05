// ///creating///////

// {// banner-container///}
// inputs-container
var inputDeparture = document.querySelector('.inputs-container .inputDeparture');
var inputArrival = document.querySelector('.inputs-container .inputArrival');
var inputDateOne = document.querySelector('.inputs-container .inputDateOne');
var inputDateTwo = document.querySelector('.inputs-container .inputDateTwo');
var inputNumber = document.querySelector('.inputs-container .inputNumber');
var btnSearch = document.querySelector('.btnSearch');

// create function////
function loadPage() {
    if (inputDeparture.value == 'TLV' && inputArrival.value == 'NYC') {

        // Main Container //

        var mainContainer = document.createElement('div');


        // BOX ONE
        var body = document.body;
        var mainDivContainer = document.createElement('div');
        var mainBoxOne = document.createElement('div');
        var mainImg = document.createElement('img');
        var mainTitleAirline = document.createElement('p');
        var mainTitleDeparture = document.createElement('p');
        var mainTitleArrival = document.createElement('p');

        // BOX TWO
        var mainDivContainerTwo = document.createElement('div');
        var mainBoxTwo = document.createElement('div');
        var mainImgTwo = document.createElement('img');
        var mainTitleAirlineTwo = document.createElement('p');
        var mainTitleDepartureTwo = document.createElement('p');
        var mainTitleArrivalTwo = document.createElement('p');

        // BOX THREE
        var mainDivContainerThree = document.createElement('div');
        var mainBoxThree = document.createElement('div');
        var mainImgThree = document.createElement('img');
        var mainTitleAirlineThree = document.createElement('p');
        var mainTitleDepartureThree = document.createElement('p');
        var mainTitleArrivalThree = document.createElement('p');

        ///// modification/////

// Main Div Container - תחימה ראשית //
        body.append(mainContainer);

        // BOX ONE
        mainContainer.append(mainDivContainer);
        mainDivContainer.append(mainBoxOne);
        mainBoxOne.append(mainImg);
        mainBoxOne.append(mainTitleAirline);
        mainBoxOne.append(mainTitleDeparture);
        mainBoxOne.append(mainTitleArrival);
             
        // Main Div Container Styles //
        mainContainer.style.cssText ='height: 346px; margin-top: 491px;';

        //text//
        mainImg.src = "https://i.pinimg.com/originals/55/68/c6/5568c68c7c2fae96e3d4455cae9039b8.png";
        mainTitleAirline.innerHTML = '<strong> Airline company: Turkish airlines <br> Flight number: 183';
        mainTitleDeparture.innerHTML = '<strong> 02:50 AM <br> TLV <br> 2022-02-20';
        mainTitleArrival.innerHTML = '<strong> 12:50 AM <br> NYC <br> 2022-02-21';
        // style////
        mainDivContainer.style.cssText = 'margin-top: 48px; display:flex; justify-content:center;';
        mainBoxOne.style.cssText = 'border: solid; width: 939px; height: 100px; display: flex; justify-content: space-between;';
        mainImg.style.width = '193px';
        mainImg.style.height = '100%';
        mainImg.style.backgroundColor = '#a9a9a926';
        

        mainTitleAirline.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleDeparture.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleArrival.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';

        // setAttribute IN MEDIA QUERY +SCSS//
        mainContainer.setAttribute('class', 'flights-container');
        mainDivContainer.setAttribute('class', 'main-container');
        mainBoxOne.setAttribute('class', 'rowOne-container');
        // mainImg.setAttribute('class', 'logo-container');
        // console.log(mainImg);

        // BOX TWO
        mainContainer.append(mainDivContainerTwo);
        mainDivContainerTwo.append(mainBoxTwo);
        mainBoxTwo.append(mainImgTwo);
        mainBoxTwo.append(mainTitleAirlineTwo);
        mainBoxTwo.append(mainTitleDepartureTwo);
        mainBoxTwo.append(mainTitleArrivalTwo);


        //text//
        mainImgTwo.src = "https://www.pngkit.com/png/full/398-3986367_air-france-logo-logok-air-france-logo-png.png"
        mainTitleAirlineTwo.innerHTML = '<strong> Airline company: AirFrance airlines <br> Flight number: 2434';
        mainTitleDepartureTwo.innerHTML = '<strong> 05:50 AM <br> TLV <br> 2022-02-22';
        mainTitleArrivalTwo.innerHTML = '<strong> 14:50 AM <br> NYC <br> 2022-02-23';

        // style////
        mainDivContainerTwo.style.cssText = 'margin-top: -3px; display:flex; justify-content:center;';
        mainBoxTwo.style.cssText = 'border: solid; width: 939px; height: 100px; display: flex; justify-content: space-between;';
        mainImgTwo.style.width = '193px';
        mainImgTwo.style.height = '94px';
        mainImgTwo.style.backgroundColor = '#a9a9a926';

        mainTitleAirlineTwo.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleDepartureTwo.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleArrivalTwo.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';

        // setAttribute IN MEDIA QUERY +SCSS//

        mainDivContainerTwo.setAttribute('class', 'mainTwo-container');
        mainBoxTwo.setAttribute('class', 'rowTwo-container');

        // BOX THREE
        mainContainer.append(mainDivContainerThree);
        mainDivContainerThree.append(mainBoxThree);
        mainBoxThree.append(mainImgThree);
        mainBoxThree.append(mainTitleAirlineThree);
        mainBoxThree.append(mainTitleDepartureThree);
        mainBoxThree.append(mainTitleArrivalThree);


        //text//
        mainImgThree.src = "https://logodownload.org/wp-content/uploads/2019/10/klm-logo-0.png"
        mainTitleAirlineThree.innerHTML = '<strong> Airline company: KLM airlines <br> Flight number: 4545';
        mainTitleDepartureThree.innerHTML = '<strong> 06:50 AM <br> TLV <br> 2022-02-23';
        mainTitleArrivalThree.innerHTML = '<strong> 17:50 AM <br> NYC <br> 2022-02-24';

        // style////
        mainDivContainerThree.style.cssText = 'margin-top: -3px;; display:flex; justify-content:center;';
        mainBoxThree.style.cssText = 'border: solid; width: 939px; height: 100px; display: flex; justify-content: space-between;';
        mainImgThree.style.width = '193px';
        mainImgThree.style.height = '94px';
        mainImgThree.style.backgroundColor = '#a9a9a926';

        mainTitleAirlineThree.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleDepartureThree.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleArrivalThree.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';

        // setAttribute IN MEDIA QUERY +SCSS//
        mainDivContainerThree.setAttribute('class', 'mainThree-container');
        mainBoxThree.setAttribute('class', 'rowThree-container');
        

    } else {
        // creating/////

         // Main Container //

         var mainContainer = document.createElement('div');

        // BOX ONE
        var body = document.body;
        var mainDivContainer = document.createElement('div');
        var mainBoxOne = document.createElement('div');
        var mainImg = document.createElement('img');
        var mainTitleAirline = document.createElement('p');
        var mainTitleDeparture = document.createElement('p');
        var mainTitleArrival = document.createElement('p');

        // BOX TWO
        var mainDivContainerTwo = document.createElement('div');
        var mainBoxTwo = document.createElement('div');
        var mainImgTwo = document.createElement('img');
        var mainTitleAirlineTwo = document.createElement('p');
        var mainTitleDepartureTwo = document.createElement('p');
        var mainTitleArrivalTwo = document.createElement('p');

        // BOX THREE
        var mainDivContainerThree = document.createElement('div');
        var mainBoxThree = document.createElement('div');
        var mainImgThree = document.createElement('img');
        var mainTitleAirlineThree = document.createElement('p');
        var mainTitleDepartureThree = document.createElement('p');
        var mainTitleArrivalThree = document.createElement('p');

        // modification/////
        // Main Div Container - תחימה ראשית //
        body.append(mainContainer);
        // BOX ONE
        mainContainer.append(mainDivContainer);
        mainDivContainer.append(mainBoxOne);
        mainBoxOne.append(mainImg);
        mainBoxOne.append(mainTitleAirline);
        mainBoxOne.append(mainTitleDeparture);
        mainBoxOne.append(mainTitleArrival);

        // Main Div Container Styles //
        mainContainer.style.cssText ='height: 346px; margin-top: 491px;';
        //text//
        mainImg.src = "https://i.pinimg.com/originals/55/68/c6/5568c68c7c2fae96e3d4455cae9039b8.png";
        mainTitleAirline.innerHTML = '<strong> Airline company: Turkish airlines <br> Flight number: 2434';
        mainTitleDeparture.innerHTML = '<strong> 05:50 AM <br> TLV <br> 2022-02-21';
        mainTitleArrival.innerHTML = '<strong> 14:50 AM <br> LAX <br> 2022-02-22';

        // style////
        mainDivContainer.style.cssText = 'margin-top: 48px; display:flex; justify-content:center;';
        mainBoxOne.style.cssText = 'border: solid; width: 939px; height: 100px; display: flex; justify-content: space-between;';
        mainImg.style.width = '193px';
        mainImg.style.height = '100%';
        mainImg.style.backgroundColor = '#a9a9a926';
        

        mainTitleAirline.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleDeparture.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleArrival.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';

    
        // setAttribute IN MEDIA QUERY +SCSS//
        mainContainer.setAttribute('class', 'flights-container');
        mainDivContainer.setAttribute('class', 'main-container');
        mainBoxOne.setAttribute('class', 'rowOne-container');


        // BOX TWO
        mainContainer.append(mainDivContainerTwo);
        mainDivContainerTwo.append(mainBoxTwo);
        mainBoxTwo.append(mainImgTwo);
        mainBoxTwo.append(mainTitleAirlineTwo);
        mainBoxTwo.append(mainTitleDepartureTwo);
        mainBoxTwo.append(mainTitleArrivalTwo);

        //text//
        mainImgTwo.src = "https://www.pngkit.com/png/full/398-3986367_air-france-logo-logok-air-france-logo-png.png"
        mainTitleAirlineTwo.innerHTML = '<strong> Airline company: AirFrance airlines <br> Flight number: 5656';
        mainTitleDepartureTwo.innerHTML = '<strong> 05:50 AM <br> TLV <br> 2022-02-22';
        mainTitleArrivalTwo.innerHTML = '<strong> 14:50 AM <br> LAX <br> 2022-02-23';

        // style////
        mainDivContainerTwo.style.cssText = 'margin-top: -3px; display:flex; justify-content:center;';
        mainBoxTwo.style.cssText = 'border: solid; width: 939px; height: 100px; display: flex; justify-content: space-between;';
        mainImgTwo.style.width = '193px';
        mainImgTwo.style.height = '94px';
        mainImgTwo.style.backgroundColor = '#a9a9a926';

        mainTitleAirlineTwo.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleDepartureTwo.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleArrivalTwo.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        // setAttribute IN MEDIA QUERY +SCSS//
        mainDivContainerTwo.setAttribute('class', 'mainTwo-container');
        mainBoxTwo.setAttribute('class', 'rowTwo-container');

        // BOX THREE
        mainContainer.append(mainDivContainerThree);
        mainDivContainerThree.append(mainBoxThree);
        mainBoxThree.append(mainImgThree);
        mainBoxThree.append(mainTitleAirlineThree);
        mainBoxThree.append(mainTitleDepartureThree);
        mainBoxThree.append(mainTitleArrivalThree);


        //text//
        mainImgThree.src = "https://logodownload.org/wp-content/uploads/2019/10/klm-logo-0.png"
        mainTitleAirlineThree.innerHTML = '<strong> Airline company: KLM airlines <br> Flight number: 4545';
        mainTitleDepartureThree.innerHTML = '<strong> 06:50 AM <br> TLV <br> 2022-02-23';
        mainTitleArrivalThree.innerHTML = '<strong> 17:50 AM <br> LAX <br> 2022-02-24';

        // style////
        mainDivContainerThree.style.cssText = 'margin-top: -3px; display:flex; justify-content:center;';
        mainBoxThree.style.cssText = 'border: solid; width: 939px; height: 100px; display: flex; justify-content: space-between;';
        mainImgThree.style.width = '193px';
        mainImgThree.style.height = '94px';
        mainImgThree.style.backgroundColor = '#a9a9a926';

        mainTitleAirlineThree.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleDepartureThree.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';
        mainTitleArrivalThree.style.cssText = 'font-family: Arial, Helvetica, sans-serif; font-size: 12px;';

        // setAttribute IN MEDIA QUERY +SCSS//
        mainDivContainerThree.setAttribute('class', 'mainThree-container');
        mainBoxThree.setAttribute('class', 'rowThree-container');
    }
}

btnSearch.addEventListener('click', loadPage)