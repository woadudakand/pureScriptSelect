pureScriptSearchNSelect = (selector) => {
    let selectors = document.querySelectorAll(selector);

    selectors.forEach((item, index) => {
        let virtualSelect = document.createElement('div');
        virtualSelect.classList.add('virtualSelect');
        item.append(virtualSelect);
        
        let select = item.querySelector('select'),
        sibling = item.querySelector('.virtualSelect'),            
        option = select.querySelectorAll('option');           
        let html = `<button>${option[0].text} <span class"angel">&raquo;</span></button><div class="popUp">
        <input class='pureStyle' type="text" id='value' placeholder='Filter Options....'>
        <div class="popUp2"></div>
        </div>`;
        sibling.innerHTML = html;
        let arry = [],
        arryEl = [],
        button = sibling.querySelector('button');
        el1 = '';
        
        option.forEach((el, index) => {
            arry.push(el.value);
            arryEl.push(el);
            el.style.display = 'none';
            if(el.hasAttribute('selected')){
                button.innerHTML = el.value +'<span class="angel">&raquo;</span>';
            };            
        });
        //console.log(attribute);
        var input = document.querySelector('.popUp input');
        document.body.addEventListener('click', (event) => {            
            if(event.target == button || event.target == input)             
            return;
            sibling.querySelector('.popUp').classList.remove('hasClass');
            input.value = '';
        });

        button.addEventListener('click', (e) => {
            e.preventDefault();
            sibling.querySelector('.popUp').classList.toggle('hasClass');
            var filter = arry.filter((el, index) => {
                return el;
            });
            var elem = [];
            arryEl.forEach((el, index) => {
                filter.forEach(e => {
                    if(el.value == e){
                        elem.push(el);
                        el.style.display = 'block';                
                    } 
                });     
            });
            var item = '<ul>';
            elem.forEach((el, key) => {
                var attrbute = '';
                var attrbute2 = '';
                if(el.hasAttribute('img')){
                    attrbute = el.getAttribute('img');
                }

                if(el.hasAttribute('icon')) {
                    attrbute2 = el.getAttribute('icon');
                }
                item += `<li>${el.text}<i class="item"><img src="${attrbute}" style="${attrbute == null && {display: 'none'} } " /><b class="${attrbute2}"></b></b></i></li>`;
            });
            item += '</ul>';
            var popUp = document.querySelector('.popUp2');
            popUp.innerHTML = item;
            var li = document.querySelectorAll('li');
            li.forEach((el, index) => {                               
                el.addEventListener('click', (event) => {
                    elem[index].setAttribute('selected', 'selected');
                    sibling.querySelector('.popUp').classList.remove('hasClass');
                    document.querySelector('button').innerHTML = el.innerHTML +'<span class="angel">&raquo;</span>';
                });
            }); 
        });

        var value = document.getElementById('value');                 
        value.addEventListener('keyup', (event) => {
            var itemValue = event.target.value;
            var filter = arry.filter((el, index) => {
                    return el.startsWith(itemValue);
                });        
            var elem = [];
            arryEl.forEach((el, index) => {
                filter.forEach(e => {
                    if(el.value == e){
                        elem.push(el);
                        el.style.display = 'block';                
                    } 
                });    
            });
            var item = '<ul>';
            elem.forEach((el, key) => {
                var attrbute = '';
                var attrbute2 = '';
                if(el.hasAttribute('img')){
                    attrbute = el.getAttribute('img');
                }

                if(el.hasAttribute('icon')) {
                    attrbute2 = el.getAttribute('icon');
                }
                item += `<li>${el.text}<i class="item"><img src="${attrbute}" style="${attrbute == null && {display: 'none'} } " /><b class="${attrbute2}"></b></b></i></li>`;
            });
            item += '</ul>';
            var popUp = document.querySelector('.popUp2');
            popUp.innerHTML = item;
            var li = document.querySelectorAll('li');
            li.forEach((el, index) => {
                el.addEventListener('click', (event) => {
                    elem[index].setAttribute('selected', 'selected');
                    sibling.querySelector('.popUp').classList.remove('hasClass');
                    document.querySelector('button').innerHTML = el.innerHTML +'<span class="angel">&raquo;</span>';                    
                });
            });
        });
    });  
}