/*
<div class="info-header">
					<div class="info-header-tab">Лечение</div>
					<div class="info-header-tab">Отдых</div>
					<div class="info-header-tab">Природа</div>
					<div class="info-header-tab">Йога</div>
				</div>
				<div class="info-tabcontent fade">
					<div class="description">
						<div class="description-title">Здоровый позвоночник</div>
						<div class="description-text">Йога, массажи и плавание в море - помогут уставшей спине! Индийские йоги считали, что здоровье человека можно определить по тому, насколько здоров и гибок у него позвоночник.<br> Интересно, что бы древние йоги сказали, глядя на современного человека, который уже со школьного возраста мучается болями в спине, работает подолгу в неудобных сидячих позах и не умеет расслабляться, имеет искривление, которое в итоге приведет к болезням других органов? Йоги сказали бы – займись собой и срочно!
						</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/massage.jpg" alt="Massage">
					</div>
				</div>*/


/*let tab = document.querySelectorAll(".info-header-tab"), //tabs class btn
    info = document.querySelector('.info-header'), //tab block
    tabContent = document.querySelectorAll(".info-tabcontent"); //content block*/

function createTab (tab,info,tabContent){


    window.addEventListener('DOMContentLoaded', function() {
    
        
    
        function hideTabContent (a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);
    
        function showTabContent (b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show'); 
            }
        }
    
        info.addEventListener("click", function(event) {
            let target = event.target;
            if (target && target.classList.contains("info-header-tab")) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
        
    
    });


}






