<style src="./annotationLayer.css"></style>
<script>

	import componentFactory from './componentFactory'
	import pdfjsWrapper from './pdfjsWrapper'

	var PDFJS = require('pdfjs-dist/es5/build/pdf.js');

  let VUE_ENV;
  if (process) {
    VUE_ENV = process.env.VUE_ENV
  } else {
    VUE_ENV = import.meta.env.VUE_ENV
  }

  if ( VUE_ENV !== 'server' ) {

		if ( typeof window !== 'undefined' && 'Worker' in window ) {

			var PdfjsWorker = require('worker-loader!pdfjs-dist/es5/build/pdf.worker.js');
			PDFJS.GlobalWorkerOptions.workerPort = new PdfjsWorker();
		}
	}

	var component = componentFactory(pdfjsWrapper(PDFJS));
	component.PDFJS = PDFJS;

	export default component;

</script>