<style src="./annotationLayer.css"></style>
<script>

	import componentFactory from './componentFactory.js'

  import pdfjsWrapper from './pdfjsWrapper'
  import PDFJS from 'pdfjs-dist/es5/build/pdf.js'

  let VUE_ENV;
  try {
    VUE_ENV = process.env.VUE_ENV
  } catch (_e) {
    VUE_ENV = import.meta.env.VUE_ENV
  }

  if ( VUE_ENV !== 'server' ) {

		// var pdfjsWrapper = (await import('./pdfjsWrapper.js')).default;
		// var PDFJS = await import('pdfjs-dist/es5/build/pdf.js');
		var component = componentFactory(pdfjsWrapper(PDFJS));
	} else {

		var component = componentFactory({});
	}

	export default component;
</script>