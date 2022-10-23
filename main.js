const header = document.querySelector('.header')
const bodyAndFooter = document.querySelector('.body-and-footer')
const scrollArrow = document.querySelector('.scroll-arrow')
const closeButtons = document.querySelectorAll('.close-button')
const timeLabel = document.querySelector('.time-label')
const dateLabel = document.querySelector('.date-label')
const scrollUpArrow = document.querySelector('.scroll-up')

scrollArrow.onclick = () => {
    bodyAndFooter.scrollIntoView({behavior: "smooth"})
};

scrollUpArrow.onclick = () => {
    header.scrollIntoView({behavior: "smooth"})
};

closeButtons.forEach((element) => {
    element.onclick = (e) => {
        e.target.closest('.notif-window').style.display = 'none'
    };
});

function updateTime()
{
    let dateTime = new Date(), hours = dateTime.getHours(), minutes = dateTime.getMinutes()
    timeLabel.innerHTML = `${(hours>9 ? '' : '0')}${hours}:${(minutes>9 ? '' : '0')}${minutes}`
    dateLabel.innerHTML = dateTime.toDateString()
}

setInterval(() => {
    updateTime()
    }, 1000);

updateTime()