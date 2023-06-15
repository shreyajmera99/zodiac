const input = document.getElementById('Zodiac')
// // const getsign = () => {

// // console.log(input.value)
// // }
// getsign();
const body = document.body;
const lc = document.getElementById('LuckyColorText')

const getsign = () => {
    let luckyColor = "";
    let luckyColorName = "";
  
    switch (input.value.toLowerCase()) {
       
      case "aries":
        luckyColor = "red";
        luckyColorName = "Red";
        break;
      case "taurus":
        luckyColor = "green";
        luckyColorName = "Green";
        break;
      case "gemini":
        luckyColor = "yellow";
        luckyColorName = "Yellow";
        break;
      case "cancer":
        luckyColor = "silver";
        luckyColorName = "Silver";
        break;
      case "leo":
        luckyColor = "orange";
        luckyColorName = "Orange";
        break;
      case "virgo":
        luckyColor = "brown";
        luckyColorName = "Brown";
        break;
      case "libra":
        luckyColor = "#E3168F";
        luckyColorName = "Pink";
        break;
      case "scorpio":
        luckyColor = "black";
        luckyColorName = "Black";
        break;  
      case "sagittarius":
        luckyColor = "grey";
        luckyColorName = "Grey";
        break;
      case "aquarius":
        luckyColor = "blue";
        luckyColorName = "Blue";
        break;
      case "pisces":
        luckyColor = "#12E585";
        luckyColorName = "Turquoise";
        break;
      case "cap":
        luckyColor = "grey";
        luckyColorName = "Gray";
        break;
      default:
        break;
    }
    body.style.backgroundColor = luckyColor;
    lc.textContent = 'Your Lucky Colors is !!\t' + luckyColorName;
}
getsign();

