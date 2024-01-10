function parser (csv){
//const reg = /^(#?\d\d.\d\d,){0,2}.*,#?\d*,/
    let obj = csv
        .split("/n")
        .filter((info) => !info.startsWith("#"))
        .map((info) => (info = info.split(','), { x: +info[0], y: +info[1], name: info[2], population: +(info[3]) }))
        .sort(function(a,b){return b.population - a.population})
        .slice(0, 9)
        .reduce((accamulator, city, number) => {accamulator[city.name] = {population: city.population, rating: number + 1}; return accamulator}, {})
    return obj;
}

/////////////////////////////////////////////////TESTING////////////////////////////////////////////////////////
let example = `44.38,34.33,Алушта,31440,
/n49.46,30.17,Біла Церква,200131,
/n49.54,28.49,Бердичів,87575,#некоммент
/n
/n#
/n46.49,36.58,#Бердянськ,121692,
/n49.15,28.41,Вінниця,356665,
/n#45.40,34.29,Джанкой,43343,
/n
/n# в этом файле три строки-коммента :)`;

function lambda (){
    let reg = /Місто/gi;
    let text = `Раджу поїхати до міста Місто`;
    let cityName = "Вінниця";
    let func = parser(example);
    let city = func[cityName];
    if(city){
        let replace = text.replace(reg, cityName);
        return replace;
    } else{
        return text.replace(reg, city);
    }
}
console.log(lambda());