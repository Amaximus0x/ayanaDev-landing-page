<script lang="ts">
	import { push } from 'svelte-spa-router';
	import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
	
	function handleBackClick() {
		push('/');
	}
</script>

<div class="min-h-screen bg-light-bg-primary">
	<!-- Header component -->
	<Header />
	
	<!-- Privacy Policy Content with Back Button -->
	<div class="relative z-10 w-full px-5 md:px-[97px] pt-[86px] md:pt-[144px]">
		<!-- Back Button -->
		<button
			on:click={handleBackClick}
			class="flex items-center gap-2 text-black hover:text-gray-700 transition-colors mb-6"
			aria-label="Go back to home"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
			Back to Home
		</button>
		
		<div class=" text-gray-800">
			<div class="border-b pb-4">
				<h1 class="text-3xl md:text-4xl font-bold text-black">Privacy Policy</h1>
				<p class="text-sm text-gray-600 mt-2">Effective Date: September 24, 2024</p>
			</div>

			<div class="space-y-6">
				<p>
					Ayana Dev Studio ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications ("Apps") available on the Google Play Store and Apple App Store. By using our Apps, you agree to the terms outlined in this policy. If you do not agree with these terms, please do not use our Apps.
				</p>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">1. Information We Collect</h2>
					<p class="mb-3">We collect information in the following ways:</p>
					<ul class="list-disc list-inside space-y-2 ml-4">
						<li><strong>Personal Information:</strong> When you create an account, contact us, or interact with our Apps, we may collect personal information, including but not limited to your name, email address, and phone number.</li>
						<li><strong>Device Information:</strong> We collect information about your device, including hardware model, operating system, unique device identifiers, and mobile network information.</li>
						<li><strong>Usage Data:</strong> We may collect data about how you interact with our Apps, such as the features you use, your preferences, and app usage patterns.</li>
						<li><strong>Location Information:</strong> With your consent, we may collect precise or approximate location information to provide location-based services.</li>
						<li><strong>Log Data:</strong> When you access our Apps, our servers automatically record information such as your IP address, browser type, operating system, the date and time of your request, and pages viewed.</li>
					</ul>
				</section>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">2. How We Use Your Information</h2>
					<p class="mb-3">We use the information we collect for the following purposes:</p>
					<ul class="list-disc list-inside space-y-2 ml-4">
						<li>To provide, operate, and maintain our Apps</li>
						<li>To improve, personalize, and expand our Apps</li>
						<li>To understand and analyze how you use our Apps</li>
						<li>To develop new features and functionality</li>
						<li>To communicate with you, including for customer service, updates, and promotional purposes</li>
						<li>To process transactions and manage your account</li>
						<li>To detect and prevent fraudulent activity</li>
						<li>To comply with legal obligations</li>
					</ul>
				</section>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">3. How We Share Your Information</h2>
					<p class="mb-3">We may share your information in the following circumstances:</p>
					<ul class="list-disc list-inside space-y-2 ml-4">
						<li><strong>With Service Providers:</strong> We may share your information with third-party service providers that assist us in operating our Apps, conducting business, or providing services to you.</li>
						<li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, regulation, legal process, or governmental request.</li>
						<li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
						<li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction.</li>
					</ul>
				</section>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">4. Security of Your Information</h2>
					<p>
						We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure. We cannot guarantee the absolute security of your information.
					</p>
				</section>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">5. Your Choices</h2>
					<p class="mb-3">You have the right to:</p>
					<ul class="list-disc list-inside space-y-2 ml-4">
						<li>Access, update, or delete your personal information by contacting us at info@ayanadevstudio.com.</li>
						<li>Opt-out of receiving marketing emails by following the unsubscribe instructions in the emails.</li>
						<li>Adjust your device settings to control location and push notification preferences.</li>
					</ul>
				</section>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">6. Third-Party Services</h2>
					<p>
						Our Apps may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you access.
					</p>
				</section>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">7. Children's Privacy</h2>
					<p>
						Our Apps are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information promptly.
					</p>
				</section>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">8. Changes to This Privacy Policy</h2>
					<p>
						We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page with an updated "Effective Date."
					</p>
				</section>

				<section>
					<h2 class="text-2xl font-semibold text-black mb-3">9. Contact Us</h2>
					<p class="mb-3">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
					<div class=" p-4 rounded-lg">
						<p><strong>Ayana Wellness LLC</strong></p>
						<p>Sheridan, WY, 8280</p>
						<p>Email: info@ayanadevstudio.com</p>
					</div>
				</section>

				<p class="text-sm text-gray-600 italic border-t pt-4">
					By using our Apps, you acknowledge that you have read and understood this Privacy Policy.
				</p>
			</div>
		</div>
	</div>
</div>
<!-- Footer -->
<Footer />