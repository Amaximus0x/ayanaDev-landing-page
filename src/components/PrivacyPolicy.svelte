<script lang="ts">
	export let isVisible = false;

	const closeModal = () => {
		isVisible = false;
	};

	const handleOutsideClick = (event: MouseEvent) => {
		if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
			closeModal();
		}
	};
</script>

{#if isVisible}
	<!-- Modal backdrop -->
	<div
		class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 modal-backdrop"
		on:click={handleOutsideClick}
		on:keydown={(e) => e.key === 'Escape' && closeModal()}
		role="dialog"
		aria-labelledby="privacy-policy-title"
		tabindex="-1"
	>
		<!-- Modal content -->
		<div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
			<!-- Header -->
			<div class="flex-shrink-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-lg">
				<h2 id="privacy-policy-title" class="text-2xl font-bold text-black">Privacy Policy</h2>
				<button
					on:click={closeModal}
					class="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
					aria-label="Close privacy policy"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Scrollable content -->
			<div class="flex-1 overflow-y-auto p-6 space-y-6 text-gray-800">
				<p class="text-sm text-gray-600">Effective Date: September 24, 2024</p>

				<div class="space-y-4">
					<p>
						Ayana Dev Studio ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications ("Apps") available on the Google Play Store and Apple App Store. By using our Apps, you agree to the terms outlined in this policy. If you do not agree with these terms, please do not use our Apps.
					</p>

					<h3 class="text-xl font-semibold text-black">1. Information We Collect</h3>
					<p>We collect information in the following ways:</p>
					<ul class="list-disc list-inside space-y-2 ml-4">
						<li><strong>Personal Information:</strong> When you create an account, contact us, or interact with our Apps, we may collect personal information, including but not limited to your name, email address, and phone number.</li>
						<li><strong>Device Information:</strong> We collect information about your device, including hardware model, operating system, unique device identifiers, and mobile network information.</li>
						<li><strong>Usage Data:</strong> We may collect data about how you interact with our Apps, such as the features you use, your preferences, and app usage patterns.</li>
						<li><strong>Location Information:</strong> With your consent, we may collect precise or approximate location information to provide location-based services.</li>
						<li><strong>Log Data:</strong> When you access our Apps, our servers automatically record information such as your IP address, browser type, operating system, the date and time of your request, and pages viewed.</li>
					</ul>

					<h3 class="text-xl font-semibold text-black">2. How We Use Your Information</h3>
					<p>We use the information we collect for the following purposes:</p>
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

					<h3 class="text-xl font-semibold text-black">3. How We Share Your Information</h3>
					<p>We may share your information in the following circumstances:</p>
					<ul class="list-disc list-inside space-y-2 ml-4">
						<li><strong>With Service Providers:</strong> We may share your information with third-party service providers that assist us in operating our Apps, conducting business, or providing services to you.</li>
						<li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, regulation, legal process, or governmental request.</li>
						<li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
						<li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction.</li>
					</ul>

					<h3 class="text-xl font-semibold text-black">4. Security of Your Information</h3>
					<p>
						We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure. We cannot guarantee the absolute security of your information.
					</p>

					<h3 class="text-xl font-semibold text-black">5. Your Choices</h3>
					<p>You have the right to:</p>
					<ul class="list-disc list-inside space-y-2 ml-4">
						<li>Access, update, or delete your personal information by contacting us at info@ayanadevstudio.com.</li>
						<li>Opt-out of receiving marketing emails by following the unsubscribe instructions in the emails.</li>
						<li>Adjust your device settings to control location and push notification preferences.</li>
					</ul>

					<h3 class="text-xl font-semibold text-black">6. Third-Party Services</h3>
					<p>
						Our Apps may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you access.
					</p>

					<h3 class="text-xl font-semibold text-black">7. Children's Privacy</h3>
					<p>
						Our Apps are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information promptly.
					</p>

					<h3 class="text-xl font-semibold text-black">8. Changes to This Privacy Policy</h3>
					<p>
						We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page with an updated "Effective Date."
					</p>

					<h3 class="text-xl font-semibold text-black">9. Contact Us</h3>
					<p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
					<div class="bg-gray-50 p-4 rounded-lg">
						<p><strong>Ayana Wellness LLC</strong></p>
						<p>Sheridan, WY, 8280</p>
						<p>Email: info@ayanadevstudio.com</p>
					</div>

					<p class="text-sm text-gray-600 italic">
						By using our Apps, you acknowledge that you have read and understood this Privacy Policy.
					</p>
				</div>
			</div>

			<!-- Footer -->
			<div class="flex-shrink-0 bg-white border-t px-6 py-4 flex justify-end rounded-lg">
				<button
					on:click={closeModal}
					class="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}