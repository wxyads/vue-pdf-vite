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

		var pdfjsWrapper = (await import('./pdfjsWrapper.js')).default;
		var PDFJS = await import('pdfjs-dist/es5/build/pdf.js');

		if ( typeof window !== 'undefined' && 'Worker' in window && navigator.appVersion.indexOf('MSIE 10') === -1 ) {

			var PdfjsWorker = await import('worker-loader!pdfjs-dist/es5/build/pdf.worker.js');
			PDFJS.GlobalWorkerOptions.workerPort = new PdfjsWorker();
		}

		var component = componentFactory(pdfjsWrapper(PDFJS));
	} else {

		var component = componentFactory({});
	}

	export default component;
</script>