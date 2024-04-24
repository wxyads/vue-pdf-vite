<style src="./annotationLayer.css"></style>
<script>

	import componentFactory from './componentFactory.js'

  let VUE_ENV;
  try {
    VUE_ENV = process.env.VUE_ENV
  } catch (_e) {
    VUE_ENV = import.meta.env.VUE_ENV
  }

  if ( VUE_ENV !== 'server' ) {

		var pdfjsWrapper = require('./pdfjsWrapper.js').default;
		var PDFJS = require('pdfjs-dist/es5/build/pdf.js');
		var component = componentFactory(pdfjsWrapper(PDFJS));
	} else {

		var component = componentFactory({});
	}

	export default component;
</script>