<script lang="ts">
	import Router from 'svelte-spa-router';
	import HomePage from './pages/HomePage.svelte';
	import AboutPage from './pages/AboutPage.svelte';
	import PrivacyPolicyPage from './pages/PrivacyPolicyPage.svelte';
	import RootCausePage from './pages/products/RootCausePage.svelte';
	import ExpatPassPage from './pages/products/ExpatPassPage.svelte';
	import YouversityPage from './pages/products/YouversityPage.svelte';
	import PatentTrailPage from './pages/products/PatentTrailPage.svelte';
	import PainpointViralPage from './pages/products/PainpointViralPage.svelte';

	const routes = {
		'/': HomePage,
		'/about': AboutPage,
		'/privacy': PrivacyPolicyPage,
		'/products/rootcause': RootCausePage,
		'/products/expatpass': ExpatPassPage,
		'/products/youversity': YouversityPage,
		'/products/patenttrail': PatentTrailPage,
		'/products/painpointviral': PainpointViralPage,
	};
</script>

<!-- Router component that will render the appropriate page -->
<Router {routes} />