module.exports = function toReadable (number) {
const arrUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const arrDozens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const hundreds = [,'','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
if(number < 20) {return arrUnits[number]}
if(Number(number.toString().slice(1)) === 0 && number < 100) {return arrDozens[Number(number.toString().slice(-2,-1))]}//20,30,40
if(Number(number.toString().slice(1)) !== 0 && number < 100) {return arrDozens[Number(number.toString().slice(-2,-1))] + ' ' + arrUnits[Number(number.toString().slice(-1))]}//21,32
if(Number(number.toString().slice(1)) === 0o0 && number >= 100){return hundreds[Number(number.toString().slice(0,1)) + 1]}//100,300
if(Number(number.toString().slice(1)) > 0o0 && number >= 100 && Number(number.toString().slice(1)) < 20)
{return hundreds[Number(number.toString().slice(0,1)) + 1] + ' ' + arrUnits[Number(number.toString().slice(1))]}//101 - 119, 201 - 219
if(Number(number.toString().slice(1)) > 19 && Number(number.toString().slice(2,3)) === 0 && number > 100)
{return hundreds[Number(number.toString().slice(0,1)) + 1] + ' ' + arrDozens[Number(number.toString().slice(1,2))]}//150,250
else 
{return hundreds[Number(number.toString().slice(0,1)) + 1] + ' ' + arrDozens[Number(number.toString().slice(1,2))] + ' ' + arrUnits[Number(number.toString().slice(2,3))]}//352,456
}
