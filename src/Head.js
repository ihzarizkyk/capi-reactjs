function Text({margin, color}){

	const style = {
		margin: '$(margin)',
		color: color,
	};

	return(
		<h1 style={style} >Hello Capi 2025</h1>
	);
}

export default function Head({margin, color}){
	return(
		<Text margin={margin} color={color} />
	);
}