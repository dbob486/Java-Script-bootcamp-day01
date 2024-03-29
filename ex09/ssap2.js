function ft_split(string){
	let arr = string.split(' ');
	arr = arr.filter(word => word.length)
	return (arr);
}

function is_letter(a){
	return a >= 'a' && a <= 'z';
}

function is_number(a){
	return a >= '0' && a <= '9';
}

function get_val(a){
	if (is_letter(a)){
		return (0)
	} else if (is_number(a)) {
		return (1)
	} else 
		return (2)
}

function compare(a, b)
{
	var i = 0;
	a = a.toLowerCase();
	b = b.toLowerCase();

	while (i < a.length && i < b.length)
	{
		if (a[i] === b[i])
		{
			i++;
			continue;
		} else {
			var diff = get_val(a[i]) - get_val(b[i]);
			return (diff == 0) ? a[i].charCodeAt(0) - b[i].charCodeAt(0) : diff;
		}
		i++;
	}
	return (a.length - b.length);
}
var ret = [];
process.argv.forEach( (ele, index) => {
	var temp;
	if (index > 1)
	{
		temp = String(ele);
		temp = ft_split(temp);
		ret = ret.concat(temp);
	}
});

ret.sort(compare);
ret.forEach(ele => {
	console.log(ele);
})