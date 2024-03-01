const circle = document.getElementById("circle");
const observer = new IntersectionObserver((items) => {
    const trankingInfo = items[0];
    if (trankingInfo.isIntersecting) {
        console.log("circle have visiabled");
    } else {
        console.log("circle have not visiabled");
    }
});

observer.observe(circle);
