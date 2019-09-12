function ft_split(string){
	let arr = string.split(' ');
    arr = arr.filter(word => word.length)
    arr.sort();
	return (arr);
}
exports.ft_split = ft_split;