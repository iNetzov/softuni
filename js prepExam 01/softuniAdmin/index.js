function solve() {
    let buttonElement = document.querySelector('div .form-control button');
   // console.log(buttonElement);

   let lectures ={

   };



    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let lecture = document.querySelector('input[name="lecture-name"]').value;
        let calendar = document.querySelector('input[name="lecture-date"]').value;
        calendar = formatDate(calendar);
        // console.log(calendar);
        let dropDownMenu = document.querySelector('select[name="lecture-module').value;

        if (lecture && calendar && dropDownMenu != 'Select module') {
            
            if(!lectures[dropDownMenu]){
                lectures[dropDownMenu] =[];
            }
            let currentLecture ={name:lecture,date:calendar}
            lectures[dropDownMenu].push(currentLecture);

            //console.log(lectures);
            
            createTrainings(lecture,calendar,dropDownMenu,lectures);
            //creating elements
            

        } else {
            console.log('bad')
        }
    });
    function createTrainings(lecture,calendar,dropDownMenu,lectures){

        for (const module in lectures) {
            let lectures1 =lectures[module];
            lectures1.sort((a,b)=>a.date.localeCompare(b.date)) 
        }


        let lectureElement = createLecture(lecture,calendar);
            let moduleElement = createModule(dropDownMenu,lectureElement);
            let modulesElement = document.querySelector('.modules');
            modulesElement.appendChild(moduleElement);

    }
    function createModule(value,lectureElement){
        let div = document.createElement('div');
        div.classList.add('module');
        let h3 = document.createElement('h3');
        h3.textContent = value.toUpperCase()+'-MODULE';
        let ul = document.createElement('ul');
        ul.appendChild(lectureElement);
        div.appendChild(h3);
        div.appendChild(ul);
        return div;

    }


    function createLecture(lecture,calendar) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');
        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${lecture}-${calendar}`;
        let buttonDel = document.createElement('button');
        buttonDel.classList.add('red');
        buttonDel.textContent = 'Del';
        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(buttonDel);
        return liElement;

    }
    function formatDate(dateInput) {
        //2020/09/28 - 18:00;
        //2021-06-16T14:29
        let split = dateInput.split('T');
        let date = split[0];
        let time = split[1];
        let splitDate = date.split('-');
        let year = splitDate[0];
        let m = splitDate[1];
        let day = splitDate[2];
        let finalStr = `${year}/${m}/${day} - ${time}`;
        return finalStr;

    }
};