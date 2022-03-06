function resetMobileInfoOptions() {
    const allInfoSection = document.querySelectorAll('.apartment-info-section');
    if (!allInfoSection) { return }
    allInfoSection.forEach((section) => {
        section.querySelector('.info-title').classList.remove('active');
        section.classList.remove('showSection');
        const sectionIcon = section.querySelector('.info-title').querySelector('i');
        sectionIcon.classList.add('fa-plus');
        sectionIcon.classList.remove('fa-minus');
    })
}

function toggelApartmentInfo(clickedIcon) {
    const sectionInfoContainer = clickedIcon.parentElement;
    const alreadySectionShowing = sectionInfoContainer.classList.contains('showSection');
    const sectionIcon = clickedIcon.querySelector('i');
    resetMobileInfoOptions();
    clickedIcon.classList.add('active');

    if (!alreadySectionShowing) {
        sectionInfoContainer.classList.add('showSection')
        setTimeout(() => {
            sectionIcon.classList.remove('fa-plus');
            sectionIcon.classList.add('fa-minus');
        }, 100);
        return;
    };

    sectionInfoContainer.classList.remove('showSection')
    setTimeout(() => {
        sectionIcon.classList.add('fa-plus');
        sectionIcon.classList.remove('fa-minus');
    }, 100);
}


function resetWebInfoOptions() {
    const allOptions = document.querySelectorAll('.menu-option p');
    allOptions.forEach(option => {
        option.classList.remove('active')
    })
}

function makeWebClickable(clickedOption) {
    const option = clickedOption.querySelector('p');
    const optionName = option.innerText.toLowerCase()
    resetWebInfoOptions()
    option.classList.add('active')
    const resultShowingArea = document.querySelector('.apartement-info-result .result');

    if (optionName === "project overview") {
        resultShowingArea.innerHTML = `<p class="info-description">SOBHA Athena is the latest landmark of North Bengaluru. The project is the final addition to SOBHA City, our Mediterranean paradise. These luxurious homes are handcrafted for the modern-day moguls who go beyond the ordinary to build a kingdom of their own.</p>`
    } else if (optionName === "amenities") {
        resultShowingArea.innerHTML = `<div class="amenities-options-container"><div class="amenities-option">
        <i class="fas fa-dumbbell"></i>
        <p class="option-title">outdoor gym</p>
    </div>
    <div class="amenities-option">
        <i class="fas fa-water"></i>
        <p class="option-title">outdoor gym</p>
    </div>
    <div class="amenities-option">
        <i class="fas fa-child"></i>
        <p class="option-title">outdoor gym</p>
    </div>
    <div class="amenities-option">
        <i class="fas fa-building"></i>
        <p class="option-title">outdoor gym</p>
    </div>
    <div class="amenities-option">
        <i class="fas fa-walking"></i>
        <p class="option-title">outdoor gym</p>
    </div>
</div></div>`
    } else if (optionName === "rera numbers") {
        resultShowingArea.innerHTML = `<p class="rera-number"><i class="fas fa-arrow-right"></i>PRM/KA/RERA/1251/309/PR/200526/003430</p>`
    }
}

window.onload = () => {


    const allClickableOptionsMobile = document.querySelectorAll('.info-title');
    if (allClickableOptionsMobile) {
        allClickableOptionsMobile.forEach(icon => {
            icon.addEventListener('click', (e) => {
                toggelApartmentInfo(e.currentTarget)
            })
        })
    }

    const allClickableOptionsWeb = document.querySelectorAll('.menu-option');
    if (allClickableOptionsWeb) {
        allClickableOptionsWeb.forEach(option => {
            option.addEventListener('click', (e) => {
                makeWebClickable(e.currentTarget);
            })
        })
    }

    document.querySelectorAll('.info-title')[0].click();
    document.querySelectorAll('.menu-option')[0].click()
}


// disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());

