var loaderUtils = await import('loader-utils');

module.exports = function(content) {

	var options = loaderUtils.getOptions(this);

	var data;
	if ( content instanceof Buffer )
		data = content;
	else
		data = Buffer.from(content);

	return 'export default Buffer.from("'+data.toString('base64')+'", "base64")';
}

module.exports.raw = true;
